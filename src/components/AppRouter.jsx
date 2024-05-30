import {Navigate, Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import Post from "../pages/Post";
import Login from "../pages/Login";
import {useContext} from "react";
import {AuthContext} from "../context";
import TLoader from "./UI/loader/TLoader";

const AppRouter = () => {
    const {isAuth, _, isLoading} = useContext(AuthContext)

    if (isLoading)
    {
        return <TLoader/>
    }

    return (
        !isAuth
            ? <Routes>
                <Route path="/login" element={<Login/>}/>

                {/* Дефолтный редирект для необработанных маршрутов */}
                <Route path="*" element={<Navigate to="/login" replace/>}/>
            </Routes>
            : <Routes>
                <Route path="/" element={<Navigate to="/posts" replace/>}/>

                <Route path="/posts" element={<Posts/>}/>
                <Route path="/posts/:id" element={<Post/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/erroe" element={<Error/>}/>

                {/* Дефолтный редирект для необработанных маршрутов */}
                <Route path="*" element={<Navigate to="/posts" replace/>}/>
            </Routes>

    )
};

export default AppRouter;