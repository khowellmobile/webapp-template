import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthCtx from "../contexts/AuthCtx";

function ProtectedRoute({ children }) {
    const { tokens } = useContext(AuthCtx);

    if (!tokens) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export default ProtectedRoute;