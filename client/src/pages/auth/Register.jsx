import React from "react";
import { CustomForm } from "../../components";

export const Register = () => {
  return (
    <div className="auth-register">
      <div className="row g-0">
        <div className="col-md-4 form-container">
          <CustomForm
            formTitle={"Register Page"}
            submitBtn={"Register"}
            formType={"register"}
          />
        </div>
        <div className="col-md-8 auth-form-banner ">
          <img src="/Images/r2.png" alt="registerImage" />
        </div>
      </div>
    </div>
  );
};
