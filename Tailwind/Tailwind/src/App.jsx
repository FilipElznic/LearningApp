import { AuthProvider } from "./AuthContext";
import { ToastProvider } from "./ToastContext";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupForm from "./Components/SignupForm";
import Profile from "./Components/Profile";
import { useAuth } from "./AuthContext";
import MainPage from "./pages/MainPage";
import SpacecraftPage from "./pages/SpacecraftPage";
import AstronautsPage from "./pages/AstronautsPage";
import MoonPage from "./pages/MoonPage";
import EarthPage from "./pages/EarthPage";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";

import Footer from "./Components/Footer";
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
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
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
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
