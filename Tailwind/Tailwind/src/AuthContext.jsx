import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    // Check active sessions and set the user
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error);
        setLoading(false);
        return;
      }

      setUser(data?.session?.user || null);
      setLoading(false);
    };

    checkSession();

    // Listen for changes on auth state
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    return () => {
      if (subscription && typeof subscription.unsubscribe === "function") {
        subscription.unsubscribe();
      }
    };
  }, []);

  // Sign up function
  const signUp = async (credentials) => {
    setAuthError(null);

    const { error } = await supabase.auth.signUp(credentials);

    if (error) {
      setAuthError(error.message);
      return { error };
    }

    return { success: true };
  };

  // Sign in function with redirect
  const signIn = async (credentials) => {
    setAuthError(null);

    const { data, error } = await supabase.auth.signInWithPassword(credentials);

    if (error) {
      setAuthError(error.message);
      return { error };
    }

    // No need to manually redirect - the AuthRoute component will handle this
    // when the user state changes
    return { data, success: true };
  };

  // Sign out function
  const signOut = async () => {
    setAuthError(null);

    const { error } = await supabase.auth.signOut();

    if (error) {
      setAuthError(error.message);
      return { error };
    }

    // After sign out, the onAuthStateChange listener will update the user state
    // which will trigger the routing in AuthRoute/ProtectedRoute components
    return { success: true };
  };

  // Password reset request
  const resetPassword = async (email) => {
    setAuthError(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setAuthError(error.message);
      return { error };
    }

    return { success: true };
  };

  // Update password
  const updatePassword = async (newPassword) => {
    setAuthError(null);

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setAuthError(error.message);
      return { error };
    }

    return { success: true };
  };

  // OAuth sign in
  const signInWithOAuth = async (provider) => {
    setAuthError(null);

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/profile`,
      },
    });

    if (error) {
      setAuthError(error.message);
      return { error };
    }

    return { success: true };
  };

  // Magic link sign in
  const signInWithMagicLink = async (email) => {
    setAuthError(null);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/profile`,
      },
    });

    if (error) {
      setAuthError(error.message);
      return { error };
    }

    return { success: true };
  };

  // Expose the context values
  const value = {
    user,
    loading,
    authError,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    signInWithOAuth,
    signInWithMagicLink,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}
