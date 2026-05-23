import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children, role }) => {

  const { user } = useAuth();

  // User not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Role check
  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;