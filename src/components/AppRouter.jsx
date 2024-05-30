import {Navigate, Route, Routes} from "react-router-dom";

import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/posts" replace/>}/>
            {
                publicRoutes
                    .concat(privateRoutes)
                    .map(route => <Route path={route.path} element={route.element}/>)
            }

            {/* Дефолтный редирект для необработанных маршрутов */}
            <Route path="*" element={<Navigate to="/erroe" replace/>}/>
        </Routes>
    );
};

export default AppRouter;