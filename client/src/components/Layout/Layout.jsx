import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import "./CSS/Layout.css";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="row g-0">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 layout">{children}</div>
      </div>
    </>
  );
};
