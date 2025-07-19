import { createContext, useContext, useState } from "react";
import Toast from "./Components/Toast";

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = ({
    type = "info",
    title = "",
    message,
    duration = 4000,
  }) => {
    const id = Date.now() + Math.random();
    const newToast = {
      id,
      type,
      title,
      message,
      duration,
    };

    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Convenience methods for different toast types
  const toast = {
    success: (message, title = "Success") =>
      showToast({ type: "success", title, message }),
    error: (message, title = "Error") =>
      showToast({ type: "error", title, message }),
    info: (message, title = "Info") =>
      showToast({ type: "info", title, message }),
    warning: (message, title = "Warning") =>
      showToast({ type: "warning", title, message }),
    xp: (amount, title = "XP Gained!") =>
      showToast({
        type: "xp",
        title,
        message: `You earned ${amount} XP!`,
        duration: 3000,
      }),
    welcome: (userName) =>
      showToast({
        type: "info",
        title: "Welcome!",
        message: `Welcome to Cosmic Learning, ${userName}! Start your space adventure!`,
        duration: 5000,
      }),
    login: (userName) =>
      showToast({
        type: "success",
        title: "Login Successful",
        message: `Welcome back, ${userName}!`,
        duration: 3000,
      }),
    logout: () =>
      showToast({
        type: "info",
        title: "Logged Out",
        message: "See you next time, space explorer!",
        duration: 3000,
      }),
    correctAnswer: (xp) =>
      showToast({
        type: "xp",
        title: "🎉 Correct!",
        message: `Amazing! You earned ${xp} XP!`,
        duration: 3000,
      }),
    wrongAnswer: () =>
      showToast({
        type: "error",
        title: "Not quite right",
        message: "Keep trying! Every mistake is a learning opportunity.",
        duration: 3000,
      }),
  };

  return (
    <ToastContext.Provider value={{ toast, showToast, removeToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-0 right-0 z-50 p-6 space-y-6 w-80 pointer-events-none">
        {toasts.map((toastItem) => (
          <div
            key={toastItem.id}
            className="transform transition-all duration-300 ease-in-out pointer-events-auto"
            style={{
              animation: "slideInRight 0.3s ease-out",
            }}
          >
            <Toast toast={toastItem} onClose={removeToast} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </ToastContext.Provider>
  );
};
