import React from 'react';
import classes from './TSelect.module.css'


const TSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            className={classes.tSelect}
            onChange={e => onChange(e.target.value)}
        >
            <option
                key=''
                value=''
            >
                {defaultValue}
            </option>
            {options.map(option =>
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default TSelect;