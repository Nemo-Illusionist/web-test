import About from "../pages/About";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import Error from "../pages/Error";

export const privateRoutes = [
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <Post/>},
    {path: '/about', element: <About/>},
]

export const publicRoutes = [
    // {path: '/login', component: Login},
    {path: '/error', element: <Error/>},
]