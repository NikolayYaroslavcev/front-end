import {Navigate, Outlet} from "react-router-dom";

export const PrivateRoute = () => {

    const auth = true

    return (
        auth ? <Outlet/> : <Navigate to='login'/>
    );
};

