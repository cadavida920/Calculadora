import React from "react";
import PropTypes from 'prop-types';



const Result = ({value}) => (
        <div className="result">
            {value}
        </div>
    )
 Result.prototype = {
     value: PropTypes.string.isRequired
 }

 Result.defaulProps = {
     value: "0"
 }


export default Result;