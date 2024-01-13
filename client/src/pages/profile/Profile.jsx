import React from "react";
import { Header } from "../../components";
import moment from "moment";
import "./Profile.css";

export const Profile = ({ user }) => {
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                <img
                  src="/Images/user.png"
                  width={100}
                  className="rounded-circle"
                />
              </div>
              <div className="text-center mt-3">
                <span className="bg-secondary p-1 px-4 rounded text-white">
                  Member since {moment(user?.createdAt).format("DD/MM/YYYY")}
                </span>
                <h5 className="mt-2 mb-0">{user?.name}</h5>
                <span>{user?.role}</span>
                <div className="px-4 mt-1">
                  <p className="fonts"> </p>
                </div>
                {/* <ul className="social-list">
                  <li>
                    <i className="fa fa-facebook" />
                  </li>
                  <li>
                    <i className="fa fa-dribbble" />
                  </li>
                  <li>
                    <i className="fa fa-instagram" />
                  </li>
                  <li>
                    <i className="fa fa-linkedin" />
                  </li>
                  <li>
                    <i className="fa fa-google" />
                  </li>
                </ul> */}
                <div className="buttons">
                  <button className="btn btn-outline-primary px-4">
                    {user?.phone && user.phone === "na"
                      ? "Message"
                      : user.phone}
                  </button>
                  <button className="btn btn-primary px-4 ms-3">
                    {user?.email}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
