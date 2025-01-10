import {useAuth} from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom";

const RestrictRoute = ({children}) => {
    const {authStatus} = useAuth();

    if (authStatus === "checking") {
        return <>LOADING...</>
    }

    return authStatus === 'authenticated' ? (
        <Navigate to="/home" />
      ) : (
        children || <Outlet />
      );
};

export default RestrictRoute;