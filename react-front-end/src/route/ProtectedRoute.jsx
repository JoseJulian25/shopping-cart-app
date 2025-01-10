import { Navigate, Outlet } from "react-router-dom"
import {useAuth} from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
    const { authStatus } = useAuth();
  
    if (authStatus === "checking") {
      return <>LOADING...</>;
    }
  
    return authStatus === "authenticated" ? (
      children || <Outlet />
    ) : (
      <Navigate to="/auth/login" />
    );
  };
  
  export default ProtectedRoute;