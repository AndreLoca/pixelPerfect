import React, { useState, useRef } from "react";

//Styles
import "./InputForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InputForm(props) {
  const [state, setState] = useState({
    goDown: "",
    input: "",
  });
  return (
    <div
      className={`input_all ${state.goDown}`}
      onBlur={() => {
        if (state.input == "") {
          setState({
            ...state,
            goDown: "icon_go_down",
          });
        } else {
          setState({
            ...state,
            goDown: "stay_up_na",
          });
        }
      }}
    >
      <input
        onChange={(e) => {
          setState({
            ...state,
            input: e.target.value,
          });
          props.callback(e.target.value, props.id);
        }}
        className={`inputBox`}
        onClick={() => {
          let pswBorder = true;

          if (props.id == 0) {
            props.setstate({
              ...props.state,
              alertUsername: false,
            });
          } else {
            if (props.state.pswConfirm == true) {
              pswBorder = false;
            }
            props.setstate({
              ...props.state,
              alertPassword: false,
            });
          }
          props.setstate({
            ...props.state,
            pswConfirm: pswBorder,
          });
        }}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        tabIndex={props.tabIndex}
      ></input>
      {/*   {props.id == 1 && props.state.pswConfirm == true &&
                <span className='incorrect_psw'>Password inserita non corretta: Lunghezza inferiore a 8 caratteri/carattere speciale non inserito</span>
            } */}

      <div className={state.input == "" ? "icon_go_up" : "stay_up"}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className={`alert ${props.alert ? "" : "dp_none"}`}>
        <p>Enter {props.placeholder}</p>
        <span>!</span>
      </div>
    </div>
  );
}
