import React from 'react'

//Styles
import './Checkbox.css';


export default function Checkbox(props) {
    return (
        <div className='form_checkbox'>
            <input className='checkbox' type='checkbox'></input>
            <label className='checkbox_label'>{props.label}</label>
        </div>
    )
}
