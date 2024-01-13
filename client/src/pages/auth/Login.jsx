import React from "react";
import { CustomForm, Loader } from "../../components";
import { useSelector } from "react-redux";

export const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};
