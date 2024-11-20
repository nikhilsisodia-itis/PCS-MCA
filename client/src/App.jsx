import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import UserDashboard from "./pages/UserDashboard";
import AboutUsPage from "./pages/AboutUsPage";
import CheckTaxPolicyPage from "./pages/CheckTaxPolicyPage";
import bgMainVideo from "./assets/bg-main.mp4"; // Corrected import path
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={bgMainVideo}
          autoPlay
          loop
          muted
        />
        {/* Content Overlay */}
        <div className="relative z-10 grid grid-rows-[12vh_76vh_12vh] h-full">
          {/* Navbar Section */}
          <Navbar />
          {/* Middle Section */}
          <Middle>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user" element={<UserDashboard />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/tax-policy" element={<CheckTaxPolicyPage />} />
              <Route path="/sign-in" element={<SignIn />}></Route>
              <Route path="/sign-up" element={<SignUp />}></Route>
              {/* Add other routes here */}
            </Routes>
          </Middle>
          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
