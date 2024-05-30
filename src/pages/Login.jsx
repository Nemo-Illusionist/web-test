import React, {useContext} from 'react';
import TInput from "../components/UI/input/TInput";
import TButton from "../components/UI/button/TButton";
import {AuthContext} from "../context";

const Login = () => {
    // const [userAuth, setUserAuth] = React.useState({login: '', pass: ''});
    const {_, setIsAuth} = useContext(AuthContext)

    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <TInput
                type="text"
                placeholder="Логин"
                // value={userAuth.login}
                // onChange={(e) => setUserAuth({...userAuth, login: e.target.value})}
            />
            <TInput
                type="password"
                placeholder="Пароль"
                // value={userAuth.pass}
                // onChange={(e) => setUserAuth({...userAuth, pass: e.target.value})}
            />
            <TButton
                onClick={login}>
                Войти
            </TButton>
        </div>
    );
};

export default Login;