import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import API from "../../services/Api";
import { getCurrentUser } from "../../redux/auth/authAction";
import { Navigate } from "react-router-dom";
export const Protected = ({ children }) => {
  const dispatch = useDispatch();

  //get user current
  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/current-user");
      if (data.message) {
        dispatch(getCurrentUser(data));
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  });

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
