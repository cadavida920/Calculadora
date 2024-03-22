import React from "react";
import PropTypes from 'prop-types';
import './Button.css'

//Componenete funcional 
//  type = button-long-text 
const Button = ({type, text, clickHandler}) => {
    return (
        <button className={type} onClick={() => clickHandler(text) }>
            <span>{text}</span>
        </button>

    )
}

Button.protTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,

}

export default Button;