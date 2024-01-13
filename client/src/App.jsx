import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, Login, Register } from "./pages";
import { Protected, Public } from "./components";
import { Profile } from "./pages/profile/Profile";
import { useSelector } from "react-redux";
const App = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <HomePage />
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile user={user} />
            </Protected>
          }
        />
        <Route
          path="/login"
          element={
            <Public>
              <Login />
            </Public>
          }
        />
        <Route
          path="/register"
          element={
            <Public>
              <Register />
            </Public>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
