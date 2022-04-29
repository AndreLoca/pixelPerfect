import React, { useState } from "react";

import LandscapeIcon from "@material-ui/icons/Landscape";
import UiInput from "../../components/funcComponents/ui/UiInput/UiInput";
import UiButton from "../../components/funcComponents/ui/uiButton/ButtonForm";

import { checkIsRegular, storageForSend } from "../../utils/utils";

import "./SignUp.css";

const SignUp = () => {
  const [state, setState] = useState({
    email: { value: "", error: false },
    password: { value: "", error: false },
    password2: { value: "", error: false },
    firstName: { value: "" },
    lastName: { value: "" },
    dateOfBirth: { value: "" },
    gender: { value: "" },
    jobTitle: { value: "" },
  });

  const getInputValue = ([objKey, objValue]) => {
    let suppState = Object.assign(state);
    suppState[objKey].value = objValue;
    setState({
      ...state,
      [objKey]: suppState[objKey],
    });
  };

  const handleSignUp = () => {
    let suppState = Object.assign(state);

    if (!checkIsRegular("email", suppState.email.value)) {
      suppState.email.error = true;
    }
    if (!checkIsRegular("password", suppState.password.value)) {
      suppState.password.error = true;
      if (suppState.password.value !== suppState.password2.value) {
        suppState.password2.error = true;
      }
    }

    if (
      !(
        suppState.email.error &&
        suppState.password.error &&
        suppState.password2.error
      )
    ) {
      storageForSend(suppState);
    }

    setState({
      ...state,
      email: suppState.email,
      password: suppState.password,
      password2: suppState.password2,
    });
  };

  return (
    <div className="dimension">
      <div className="background">
        <div className="content">
          <div className="formContainer">
            <span className="imgContainer">
              <LandscapeIcon style={{ fontSize: 60 }} className="imgMountain" />
            </span>
            <span className="pageTitle">Sign Up</span>
            <UiInput
              name={"email"}
              css={[
                `${state.email.value.length > 0 ? "hasVal" : ""}`,
                `${state.email.error ? "errorMessage" : ""}`,
              ]}
              type={"email"}
              placeholder={"Email"}
              icon={""}
              callback={getInputValue}
              errorString = {'mail no'}
            />
            <UiInput
              name={"password"}
              css={[`${state.password.value.length > 0 ? "hasVal" : ""}`,
              `${state.password.error ? "errorMessage" : ""}`,]}
              type={"password"}
              placeholder={"Password"}
              icon={""}
              callback={getInputValue}
              errorString = {'psw no'}
            />
            <UiInput
              name={"password2"}
              css={[`${state.password2.value.length > 0 ? "hasVal" : ""}`,
              `${state.password2.error ? "errorMessage" : ""}`,]}
              type={"password"}
              placeholder={"Retype password"}
              icon={""}
              callback={getInputValue}
              errorString = {'psw2 no'}
            />
            <UiInput
              name={"firstName"}
              css={[`${state.firstName.value.length > 0 ? "hasVal" : ""}`]}
              type={"text"}
              placeholder={"First name"}
              icon={""}
              callback={getInputValue}
            />
            <UiInput
              name={"lastName"}
              css={[`${state.lastName.value.length > 0 ? "hasVal" : ""}`]}
              type={"text"}
              placeholder={"Last name"}
              icon={""}
              callback={getInputValue}
            />
            <UiInput
              name={"dateOfBirth"}
              css={[`${state.dateOfBirth.value.length > 0 ? "hasVal" : ""}`]}
              type={"date"}
              placeholder={"mm-dd-yyyy"}
              icon={""}
              callback={getInputValue}
            />
            <UiInput
              name={"gender"}
              type={"radio"}
              options={["Male", "Female", "Prefer not to disclose"]}
              icon={""}
              callback={getInputValue}
            />
            <UiInput
              name={"jobTitle"}
              type={"option"}
              options={[
                "Frontend developer",
                "Backend developer",
                "Data analyst",
                "Plumber",
              ]}
              icon={""}
              placeholder={"Select your job title"}
              callback={getInputValue}
            />
          </div>
          <UiButton callback={handleSignUp} label={"Sign Up"} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
