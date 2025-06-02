import { AuthProvider } from "./AuthContext";
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

  // If already logged in, redirect to profile
  if (user) {
    return <Navigate to="/profile" replace />;
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
        <Routes>
          {/* Wrap all routes with the Layout component */}
          <Route element={<Layout />}>
            {/* Auth routes - redirect to profile if already logged in */}
            <Route element={<AuthRoute />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/" element={<MainPage />} />
            </Route>

            {/* Protected routes - require authentication */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/main" element={<MainPage />} />

              {/* Add more protected routes here */}
            </Route>

            {/* Default redirect */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
