import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Chat from "./pages/Chat/Chat";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18px", right: "0" }} />
      <div className="blur" style={{ top: "36%", left: "-8rem" }} />
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Navigate to="/auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="/home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="/auth" />}
        />
        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="/auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;
