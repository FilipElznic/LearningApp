import { AuthProvider } from "./AuthContext";
import { ToastProvider } from "./ToastContext";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Suspense, lazy } from "react";

// Lazy load all pages for better performance
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupForm = lazy(() => import("./Components/SignupForm"));
const Profile = lazy(() => import("./Components/Profile"));
const MainPage = lazy(() => import("./pages/MainPage"));
const SpacecraftPage = lazy(() => import("./pages/SpacecraftPage"));
const AstronautsPage = lazy(() => import("./pages/AstronautsPage"));
const MoonPage = lazy(() => import("./pages/MoonPage"));
const EarthPage = lazy(() => import("./pages/EarthPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const TasksPage = lazy(() => import("./pages/TasksPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const Docs = lazy(() => import("./pages/Docs"));
const Footer = lazy(() => import("./Components/Footer"));
const PageTransition = lazy(() => import("./Components/PageTransition"));
// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-300/30 border-t-blue-300 rounded-full animate-spin mx-auto"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-300/20 rounded-full animate-pulse"></div>
        </div>
      </div>
      <p className="mt-4 text-blue-300/80 text-lg font-medium">
        Loading cosmic content...
      </p>
    </div>
  </div>
);

// Correct implementation of ProtectedRoute for React Router v6
const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  // If not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the child routes
  return <Outlet />;
};

// For redirecting away from login/signup pages when already authenticated
const AuthRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  // If already logged in, redirect to /main (not /profile)
  if (user) {
    return <Navigate to="/main" replace />;
  }

  // If not logged in, render the login/signup page
  return <Outlet />;
};

// Layout component to wrap all pages with Navbar and Footer
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </Suspense>
      </main>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Wrap all routes with the Layout component */}
              <Route element={<Layout />}>
                {/* Auth routes - redirect to profile if already logged in */}
                <Route element={<AuthRoute />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupForm />} />
                  <Route path="/" element={<MainPage />} />
                </Route>

                <Route path="/moon" element={<MoonPage />} />
                <Route path="/earth" element={<EarthPage />} />
                <Route path="/spacecraft" element={<SpacecraftPage />} />
                <Route path="/astronaut" element={<AstronautsPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/docs" element={<Docs />} />
                {/* Protected routes - require authentication */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/main" element={<HomePage />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/tasks" element={<TasksPage />} />

                  {/* Add more protected routes here */}
                </Route>

                {/* Default redirect */}
                <Route path="*" element={<Navigate to="/login" replace />} />
              </Route>
            </Routes>
          </Suspense>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
