import React from "react";
import PropTypes from "prop-types";

// styles
import "./UiInput.css";

const UiInput = (props) => {

  const returnFocus = (e) => {
    //props.callbackFocus(e);
  };

  const callbackInput =
    (value = null) =>
    (e) => {
      if (value === null) {
        return props.callback([props.name, e.target.value]);
      }
      return props.callback([props.name, value]);
    };

  const renderInput = (input) => {
    const renderOptionsRadio = (opt, index) => {
      return (
        <div key={`radio-${input.name}-${index}`}>
          <input
            type={input}
            name={props.name}
            value={opt.replaceAll(" ", "-").toLowerCase()}
            onClick={callbackInput(opt.replaceAll(" ", "-").toLowerCase())}
          />
          <label htmlFor={opt.replaceAll(" ", "-").toLowerCase()}>{opt}</label>
        </div>
      );
    };

    const renderOptionsSelect = (opt, index) => {
      return (
        <option
          key={`option-${input.name}-${index}`}
          value={opt.replaceAll(" ", "-").toLowerCase()}
        >
          {opt}
        </option>
      );
    };

    switch (input) {
      case "radio":
        return (
          <div className={`inputContainer radioRow`}>
            <span className="materialIcon">{props.icon}</span>
            <div className="radioContainer">
              {props.options.map(renderOptionsRadio)}
            </div>
          </div>
        );
      case "option":
        return (
          <div className="inputContainer">
            <span className="materialIcon">{props.icon}</span>
            <select onChange={callbackInput()} className="selectGroup">
              <option className="optionDisabled" disabled>
                {props.placeholder}
              </option>
              {props.options.map(renderOptionsSelect)}
            </select>
          </div>
        );
      default:
        return (
          <div data-validate={props.errorString} className={`inputContainer ${props.css[0]} ${props.css[1]}`}>
            <input
              className={"box"}
              type={props.type}
              placeholder={props.placeholder}
              onChange={callbackInput()}
              tabIndex={props.tabIndex}
              minLength={props.min}
              maxLength={props.max}
              required={props.required}
              checked={props.check}
              name={props.name}
              onFocus={returnFocus}
            />
            <span data-placeholder={props.icon} className="inputSpan" />
          </div>
        );
    }
  };

  return renderInput(props.type);
};

UiInput.propTypes = {
  callback: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.number,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  label: PropTypes.string,
};

export default UiInput;
