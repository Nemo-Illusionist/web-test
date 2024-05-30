import React from 'react';
import classes from './TNavbar.module.css';


const TNavbar = () => {
    return (
        <div className={classes.tNavbar}>
            <div className={classes.tNavbarLinks}>
                <a href="/about">О сайте</a>
                <a href="/posts">Посты</a>
            </div>
        </div>
    );
};

export default TNavbar;