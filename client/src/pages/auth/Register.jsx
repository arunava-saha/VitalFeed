import React from "react";
import { CustomForm, Loader } from "../../components";
import { useSelector } from "react-redux";

export const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};
