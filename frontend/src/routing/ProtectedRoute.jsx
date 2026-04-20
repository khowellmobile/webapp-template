import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthCtx from "../contexts/AuthCtx";

function ProtectedRoute({ children }) {
    const { ctxAccessToken, isLoading } = useContext(AuthCtx);

    console.log(ctxAccessToken);

    if (isLoading) {
        return null;
    }

    if (!ctxAccessToken) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export default ProtectedRoute;
