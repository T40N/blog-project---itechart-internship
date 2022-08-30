import { Navigate } from "react-router-dom";

const GuardedRoute = ({ auth, children }) => {
  if (!auth) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default GuardedRoute;
