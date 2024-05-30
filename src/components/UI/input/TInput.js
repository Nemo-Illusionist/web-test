import React from 'react';
import classes from './TInput.module.css'

const TInput = (props) => {
    return (
        <input {...props} className={classes.tInput}>
        </input>
    );
};

export default TInput;