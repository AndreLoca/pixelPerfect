import React from 'react'

//Styles
import './Switch.css';

export default function Switch(props) {

    function handleChange(e) {
        props.callback(e.target.checked);
    }

    return (

        <div className="switch">
            <input id="languageToggle" className="check-toggle check-toggle-round-flat" type="checkbox" onChange={handleChange} />
            <label for="languageToggle"></label>
            <span className="off">{props.translateToLang}</span>
            <span className="on">{props.defaultLang}</span>
        </div>

    )
}
