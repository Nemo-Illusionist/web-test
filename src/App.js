import './styles/App.css'
import TNavbar from "./components/UI/navbar/TNavbar";
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import {useEffect, useState} from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }

        setIsLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <Router>
                <TNavbar/>
                <AppRouter/>
            </Router>
        </AuthContext.Provider>
    )
}

export default App;
