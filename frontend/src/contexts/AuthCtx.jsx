import { createContext, useState, useEffect } from "react";

import { BASE_URL } from "../constants";

const AuthCtx = createContext({
    user: null,
    tokens: null,
    setUser: () => {},
    setTokens: () => {},
});

export const AuthCtxProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [tokens, setTokens] = useState(null);
    const [loading, setLoading] = useState(true);

    const contextData = {
        user,
        tokens,
        setUser,
        setTokens,
    };

    return <AuthCtx.Provider value={contextData}>{children}</AuthCtx.Provider>;
};

export default AuthCtx;
