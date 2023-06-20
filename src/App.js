import "./App.css";
import "./style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LandingPage from "./Pages/landingpage";
import "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Dashboard from "./Pages/dashboard";
import PreLoad from "./components/Preload";
import DetailMovie from "./components/detailmovie";

function App(props) {
  //session
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (result) => {
      if (result) {
        setIsLogin(true);
        setLoading(false);
        return;
      }

      setIsLogin(false);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <PreLoad />;
  }

  return (
    <>
      <PreLoad />
      {isLogin ? (
        <Router>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            {/* <Route path="/detailmovie" element={<DetailMovie />} /> */}
            <Route path="/detailmovie/:id" element={<DetailMovie />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
