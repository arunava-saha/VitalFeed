import React from "react";
import { CustomForm } from "../../components";

export const Login = () => {
  return (
    <div className="row auth-login">
      <div className="col-sm auth-form-banner ">
        <img src="/Images/b2.jpg" alt="banner" />
      </div>
      <div className="col-md-4 form-container">
        <CustomForm
          formTitle={"Login Page"}
          submitBtn={"Login"}
          formType={"login"}
        />
      </div>
    </div>
  );
};
