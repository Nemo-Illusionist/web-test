import React from 'react';
import classes from './TNavbar.module.css';
import {Link} from "react-router-dom";


const TNavbar = () => {
    return (
        <div className={classes.tNavbar}>
            <div className={classes.tNavbarLinks}>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default TNavbar;