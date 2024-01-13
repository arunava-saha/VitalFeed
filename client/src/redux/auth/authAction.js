import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/Api";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      //store token
      if (data.message) {
        alert(data.message);
        localStorage.setItem("token", data.token);
        window.location.replace("/");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.Error) {
        alert(error.response.data.Error);
        return rejectWithValue(error.response.data.Error);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//register
export const userRegister = createAsyncThunk(
  "auth/signup",
  async ({ name, role, email, password, phone }, { rejectWithValue }) => {
    try {
      if (role === "customer") phone = "na";
      const { data } = await API.post("/auth/signup", {
        name,
        role,
        email,
        password,
        phone,
      });
      if (data.message) {
        alert(data.message);
        localStorage.setItem("token", data.token);
        window.location.replace("/");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.Error) {
        alert(error.response.data.Error);
        return rejectWithValue(error.response.data.Error);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//current user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      if (res.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.Error) {
        alert(error.response.data.Error);
        return rejectWithValue(error.response.data.Error);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
