import React from "react";
import PropTypes from 'prop-types'
import Button from "./Button/index.js";


const MathOperations = ({onClickOperation, onCllickEqual}) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperation}/>
        <Button text="-" clickHandler={onClickOperation}/>
        <Button text="*" clickHandler={onClickOperation}/>
        <Button text="/" clickHandler={onClickOperation}/>
        <Button text="=" clickHandler={onCllickEqual}/>    
    </section>

)
    
    
    MathOperations.prototype = {
        onClickOperation: PropTypes.func.isRequired,
        onCllickEqual: PropTypes.func.isRequired,
    }


export default MathOperations;