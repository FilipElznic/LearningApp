import Spline from "@splinetool/react-spline";
import React, { useState, useRef, useEffect } from "react";

// Enhanced WebGL context manager with cleanup
class WebGLContextManager {
  constructor() {
    this.activeContexts = 0;
    this.maxContexts = 8;
    this.contexts = new Map();
    this.mainContextId = 'main-model';
  }

  canCreateContext(id) {
    if (id === this.mainContextId) return true;
    return this.activeContexts < (this.maxContexts - 1);
  }

  addContext(id) {
    if (!this.contexts.has(id)) {
      this.activeContexts++;
      this.contexts.set(id, true);
    }
  }

  removeContext(id) {
    if (this.contexts.has(id)) {
      this.contexts.delete(id);
      this.activeContexts--;
    }
  }

  getActiveContexts() {
    return this.activeContexts;
  }

  forceCleanup(keepLast = 2) {
    // Keep the main context and the specified number of most recent contexts
    const contextsToKeep = Array.from(this.contexts.keys())
      .filter(id => id === this.mainContextId)
      .concat(Array.from(this.contexts.keys())
        .filter(id => id !== this.mainContextId)
        .slice(-keepLast));

    // Remove other contexts
    Array.from(this.contexts.keys())
      .filter(id => !contextsToKeep.includes(id))
      .forEach(id => this.removeContext(id));
  }
}

const webGLManager = new WebGLContextManager();

// Export the webGLManager
export { webGLManager };

// Loading spinner component
const LoadingSpinner = ({ message = "Loading 3D model..." }) => (
  <div className="flex items-center justify-center w-full h-full">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-orange-300/30 border-t-orange-300 rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-orange-300/20 rounded-full animate-pulse"></div>
      </div>
      <p className="mt-4 text-sm text-orange-300/80">{message}</p>
    </div>
  </div>
);

// Enhanced intersection observer with viewport exit detection
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const [hasExited, setHasExited] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyIntersecting = entry.isIntersecting;
        setIsIntersecting(isCurrentlyIntersecting);

        if (isCurrentlyIntersecting && !hasIntersected) {
          setHasIntersected(true);
          setHasExited(false);
        } else if (!isCurrentlyIntersecting && hasIntersected) {
          setHasExited(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasIntersected]);

  return [ref, isIntersecting, hasIntersected, hasExited];
};

// Enhanced Lazy Spline component with proper cleanup
const LazySpline = ({
  scene,
  className,
  contextId,
  onContextCreated,
  onContextDestroyed,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [canRender, setCanRender] = useState(false);
  const splineRef = useRef(null);
  const contextCreatedRef = useRef(false);

  useEffect(() => {
    let timeoutId;

    const tryCreateContext = () => {
      if (webGLManager.canCreateContext() && !contextCreatedRef.current) {
        setCanRender(true);
        webGLManager.addContext(contextId);
        contextCreatedRef.current = true;
        onContextCreated?.();
      } else if (!webGLManager.canCreateContext()) {
        // Force cleanup of old contexts and retry
        webGLManager.forceCleanup(2);
        timeoutId = setTimeout(tryCreateContext, 1000);
      }
    };

    tryCreateContext();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (contextCreatedRef.current) {
        webGLManager.removeContext(contextId);
        contextCreatedRef.current = false;
        onContextDestroyed?.();
      }
    };
  }, [contextId]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (error) => {
    console.warn("Spline model failed to load:", error);
    setHasError(true);
    if (contextCreatedRef.current) {
      webGLManager.removeContext(contextId);
      contextCreatedRef.current = false;
      onContextDestroyed?.();
    }
  };

  if (!canRender) {
    return (
      <LoadingSpinner
        message={`Waiting for WebGL context... (${webGLManager.getActiveContexts()} / ${
          webGLManager.maxContexts
        })`}
      />
    );
  }

  if (hasError) {
    return (
      <div className="flex items-center justify-center w-full h-full text-orange-300">
        <div className="text-center">
          <div className="text-2xl mb-2">⚠️</div>
          <p>Failed to load 3D model</p>
          <p className="text-xs mt-1">
            WebGL contexts: {webGLManager.getActiveContexts()}
          </p>
          <button
            onClick={() => {
              setHasError(false);
              setIsLoaded(false);
              setCanRender(false);
            }}
            className="mt-2 px-4 py-1 bg-orange-300/20 rounded text-sm hover:bg-orange-300/30 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {!isLoaded && <LoadingSpinner />}
      <Spline
        ref={splineRef}
        scene={scene}
        className={`${className} ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

// Smart Spline wrapper that unloads when not visible
const SmartSpline = ({
  scene,
  className,
  contextId,
  onContextCreated,
  onContextDestroyed,
}) => {
  const [containerRef, isVisible, hasIntersected, hasExited] =
    useIntersectionObserver();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible && hasIntersected && webGLManager.canCreateContext(contextId)) {
      setShouldRender(true);
    } else if (!isVisible && hasExited) {
      setShouldRender(false);
      webGLManager.removeContext(contextId);
    }
  }, [isVisible, hasIntersected, hasExited, contextId]);

  return (
    <div ref={containerRef} className="w-full h-full">
      {shouldRender ? (
        <LazySpline
          scene={scene}
          className={className}
          contextId={contextId}
          onContextCreated={onContextCreated}
          onContextDestroyed={onContextDestroyed}
        />
      ) : (
        <LoadingSpinner message={
          !webGLManager.canCreateContext(contextId) 
            ? "Too many 3D models loaded. Scroll away from other models first."
            : "Scroll to load..."
        } />
      )}
    </div>
  );
};

// Regular component - planet on left, message on right
const PlanetMessage = ({ planetModel, heading, text }) => {
  const contextId = `planet-${heading.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="imgbg w-full h-screen flex flex-col md:flex-row items-center relative overflow-hidden">
      {/* Planet Image - Left Side on desktop, top on mobile */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <SmartSpline
          scene={planetModel}
          className="w-full h-full"
          contextId={contextId}
          onContextCreated={() =>
            console.log(`✅ Context created for ${heading}`)
          }
          onContextDestroyed={() =>
            console.log(`❌ Context destroyed for ${heading}`)
          }
        />
      </div>

      {/* Message Box - Right Side on desktop, bottom on mobile */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:p-8">
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-lg animate-fade-in">
          <h2 className="text-orange-300 text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {heading}
          </h2>
          <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

// Mirrored component - message on left, planet on right
const PlanetMessageMirrored = ({ planetModel, heading, text }) => {
  const contextId = `planet-mirrored-${heading
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  return (
    <div className="imgbg w-full h-screen flex flex-col md:flex-row items-center relative overflow-hidden">
      {/* Message Box - Left Side on desktop, top on mobile */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:p-8 order-2 md:order-1">
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-lg animate-fade-in">
          <h2 className="text-orange-300 text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {heading}
          </h2>
          <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
            {text}
          </p>
        </div>
      </div>

      {/* Planet Image - Right Side on desktop, bottom on mobile */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center order-1 md:order-2">
        <SmartSpline
          scene={planetModel}
          className="w-full h-full"
          contextId={contextId}
          onContextCreated={() =>
            console.log(`✅ Context created for ${heading}`)
          }
          onContextDestroyed={() =>
            console.log(`❌ Context destroyed for ${heading}`)
          }
        />
      </div>
    </div>
  );
};

export { PlanetMessage, PlanetMessageMirrored };
