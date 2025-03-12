import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// Components Import
import Navbar from "./components/Header";
import Footer from "./components/Footer";
// Page Imports
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/CategoryPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import MentorsPage from "./pages/MentorsPage";
import ThemeProvider from "./context/ThemeContext";
import { JsonPlaceholderProvider } from "../src/context/JsonPlaceholderContext";
import { ModalProvider } from "./context/ModalContext";
import { AuthProvider } from "./context/AuthContext";
import Dashboardpage from "./pages/Dashboard";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";

// Layout component that conditionally renders Navbar
const AppLayout = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Auth Pages */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* only Auth User's can view the following Pages */}
        <Route
          path="/category-page"
          element={
            <ProtectedRoutes>
              <CategoryPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/course-details"
          element={
            <ProtectedRoutes>
              <CourseDetailsPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/shopping-cart"
          element={
            <ProtectedRoutes>
              <ShoppingCartPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/mentors-page"
          element={
            <ProtectedRoutes>
              <MentorsPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/dashboardpage"
          element={
            <ProtectedRoutes>
              <Dashboardpage />
            </ProtectedRoutes>
          }
        />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden font-inter text-base dark:bg-gray-900 text-gray-900 dark:text-white">
      <AuthProvider>
        <ModalProvider>
          <JsonPlaceholderProvider>
            <ThemeProvider>
              <Router>
                <AppLayout />
              </Router>
            </ThemeProvider>
          </JsonPlaceholderProvider>
        </ModalProvider>
      </AuthProvider>
    </div>
  );
};

export default App;