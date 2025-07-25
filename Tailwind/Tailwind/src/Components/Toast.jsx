import { useEffect } from "react";
import PropTypes from "prop-types";

const Toast = ({ toast, onClose }) => {
  useEffect(() => {
    if (toast.duration) {
      const timer = setTimeout(() => {
        onClose(toast.id);
      }, toast.duration);

      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  const getToastIcon = (type) => {
    switch (type) {
      case "success":
        return (
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        );
      case "error":
        return (
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5 text-red-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        );
      case "info":
        return (
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        );
      case "warning":
        return (
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        );
      case "xp":
        return (
          <div className="flex-shrink-0">
            <div className="text-yellow-400 text-lg">⭐</div>
          </div>
        );
      default:
        return null;
    }
  };

  const getToastColors = (type) => {
    switch (type) {
      case "success":
        return "bg-green-900/90 border-green-600 text-green-100";
      case "error":
        return "bg-red-900/90 border-red-600 text-red-100";
      case "info":
        return "bg-blue-900/90 border-blue-600 text-blue-100";
      case "warning":
        return "bg-yellow-900/90 border-yellow-600 text-yellow-100";
      case "xp":
        return "bg-gradient-to-r from-yellow-900/90 to-orange-900/90 border-yellow-500 text-yellow-100";
      default:
        return "bg-zinc-900/90 border-zinc-600 text-zinc-100";
    }
  };

  return (
    <div
      className={`
      max-w-sm w-full shadow-lg rounded-lg pointer-events-auto border backdrop-blur-sm
      transform transition-all duration-300 ease-in-out
      ${getToastColors(toast.type)}
    `}
    >
      <div className="p-4">
        <div className="flex items-start">
          {getToastIcon(toast.type)}
          <div className="ml-3 w-0 flex-1">
            {toast.title && (
              <p className="text-sm font-medium">{toast.title}</p>
            )}
            <p className={`text-sm ${toast.title ? "mt-1" : ""}`}>
              {toast.message}
            </p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className="inline-flex text-current hover:text-white focus:outline-none focus:text-white transition ease-in-out duration-150"
              onClick={() => onClose(toast.id)}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
