import React, { useState } from "react";
import { InputDiv as InputType } from "./InputDiv";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../services/auth";

export const CustomForm = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformpassword, setConformPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(e, name, role, email, password, phone);
        }}
      >
        <h1 className="text-center text-danger">{formTitle}</h1>
        <hr />
        <div className="d-flex text-warning mb-3">
          <div className="form-check ">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="customer"
              value={"customer"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="customer" className="form-check-label">
              Customer
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="advisor"
              value={"advisor"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="advisor" className="form-check-label">
              Advisor
            </label>
          </div>
        </div>
        {/* switch statement */}
        {(() => {
          //eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"Email"}
                    labelFor={"Email"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"Password"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  <InputType
                    labelText={"Name"}
                    labelFor={"forName"}
                    inputType={"text"}
                    name={"name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {role === "organisation" && (
                    <InputType
                      labelText={"Organisation Name"}
                      labelFor={"fororganisationName"}
                      inputType={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}
                  {role !== "customer" && (
                    <InputType
                      labelText={"Phone"}
                      labelFor={"forPhone"}
                      inputType={"text"}
                      name={"phone"}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  )}

                  <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputType
                    labelText={"Conform Password"}
                    labelFor={"forConformPassword"}
                    inputType={"password"}
                    name={"Conformpassword"}
                    value={conformpassword}
                    onChange={(e) => setConformPassword(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex flex-column justify-content-between">
          {formType === "login" ? (
            <p>
              Not registerd yet ? Please
              <br />
              <Link to="/register">Register Here</Link>
            </p>
          ) : (
            <p>
              ALready a Registered User Please
              <br />
              <Link to="/login"> Login Here</Link>
            </p>
          )}
          <button className="btn btn-lg btn-primary p-2" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};
