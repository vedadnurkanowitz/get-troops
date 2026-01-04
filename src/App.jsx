import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithCustomToken,
  signInAnonymously,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";
import AdminDashboard from "./components/AdminDashboard";
import UserAuth from "./components/UserAuth";
import CandidateDashboard from "./components/CandidateDashboard";

import About from "./components/About";
import Contact from "./components/Contact";

// --- Firebase INIT ---
const defaultFirebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "00000000000",
  appId: "1:00000000000:web:00000000000000",
};

const firebaseConfig =
  typeof __firebase_config !== "undefined"
    ? JSON.parse(__firebase_config)
    : defaultFirebaseConfig;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== "undefined" ? __app_id : "default-app-id";

export default function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null); // Firebase User (Technical)
  const [currentUser, setCurrentUser] = useState(null); // Registered User (Application User)

  // Detect if we are using the placeholder config
  const isDemo = firebaseConfig.apiKey === "your-api-key";

  useEffect(() => {
    const initAuth = async () => {
      if (typeof __initial_auth_token !== "undefined" && __initial_auth_token) {
        await signInWithCustomToken(auth, __initial_auth_token);
      } else {
        await signInAnonymously(auth);
      }
    };
    initAuth();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Check for logged in registered user (Demo Persistence)
    if (isDemo) {
      const storedUser = JSON.parse(
        localStorage.getItem("current_user") || "null"
      );
      if (storedUser) {
        setCurrentUser(storedUser);
      }
    }

    return () => unsubscribe();
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-slate-50 min-h-screen flex flex-col">
      {/* Navbar always visible except on Login */}
      {page !== "login" && page !== "admin" && page !== "auth" && (
        <Navbar
          setPage={setPage}
          currentPage={page}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}

      {/* Page Content */}
      <div className="flex-grow">
        {page === "home" && (
          <>
            <Hero setPage={setPage} />
            <Services />
          </>
        )}

        {/* Login Component Removed */}

        {page === "admin" &&
          currentUser &&
          (currentUser.role === "master" || currentUser.role === "staff") && (
            <AdminDashboard
              user={user}
              setPage={setPage}
              adminUser={currentUser} // Use currentUser as adminUser
              setAdminUser={setCurrentUser} // Allow updating currentUser
              db={db}
              appId={appId}
              isDemo={isDemo}
            />
          )}

        {page === "auth" && (
          <UserAuth
            setCurrentUser={(user) => {
              setCurrentUser(user);
            }}
            setPage={setPage}
            isDemo={isDemo}
          />
        )}

        {page === "dashboard" && currentUser && (
          <CandidateDashboard
            user={currentUser}
            firebaseUser={user}
            setPage={setPage}
            isDemo={isDemo}
            db={db}
            appId={appId}
          />
        )}

        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      </div>

      {/* Footer always visible except on Admin/Login */}
      {page !== "admin" && page !== "login" && page !== "auth" && (
        <Footer setPage={setPage} />
      )}
    </div>
  );
}
