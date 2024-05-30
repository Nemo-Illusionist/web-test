import React, {useContext} from 'react';
import classes from './TNavbar.module.css';
import {Link} from "react-router-dom";
import TButton from "../button/TButton";
import {AuthContext} from "../../../context";


const TNavbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={classes.tNavbar}>
            {isAuth && <TButton onClick={logout}> Выйти </TButton>}
            <div className={classes.tNavbarLinks}>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default TNavbar;