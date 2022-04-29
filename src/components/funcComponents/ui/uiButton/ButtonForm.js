import React from 'react'

//Styles
import './ButtonForm.css';

export default function ButtonForm(props) {
    function returnClick(e) {
        props.callback(e);
    }

    return (
        <button onClick={returnClick} className='button_action' type={props.type}>{props.label}</button>
    )
}
