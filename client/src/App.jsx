import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, Login, Register } from "./pages";
import { Protected, Public } from "./components";
const App = () => {
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
