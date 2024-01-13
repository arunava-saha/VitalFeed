import { userLogin, userRegister } from "../redux/auth/authAction";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Privde All Feilds");
    }
    console.log("login", email, password, role);
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};
export const handleRegister = (e, name, role, email, password, phone) => {
  e.preventDefault();
  try {
    if (
      !role ||
      !email ||
      !password ||
      !name ||
      (role !== "customer" && !phone)
    ) {
      return alert("Please Privde All Feilds");
    }
    console.log("Register", email, name, password, phone, role);
    store.dispatch(
      userRegister({
        name,
        role,
        email,
        password,
        phone,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
