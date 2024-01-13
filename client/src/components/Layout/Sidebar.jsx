import React from "react";
// import { userMenu } from "./Menus/userMenu";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CSS/Layout.css";

export const Sidebar = () => {
  //GET USER STATE
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {user?.role === "admin" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/">All List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/all-user" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/all-users">User List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/feed-list" && "active"
                }`}
              >
                <i className="fa-solid fa-newspaper"></i>
                <Link to="/feed-list">Feed List</Link>
              </div>
            </>
          )}
          {(user?.role === "customer" || user?.role === "adviser") && (
            <div
              className={`menu-item ${location.pathname === "/" && "active"}`}
            >
              <i className="fa-solid fa-newspaper"></i>
              <Link to="/">All Feeds</Link>
            </div>
          )}
          {user?.role === "advisor" && (
            <div
              className={`menu-item ${
                location.pathname === "/add" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-plus"></i>
              <Link to="/add">Add new Feed</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
