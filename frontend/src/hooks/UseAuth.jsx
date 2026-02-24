import { useContext } from "react";

import AuthCtx from "../contexts/AuthCtx";
import { BASE_URL } from "../constants";

export const useAuth = () => {
    const { setUser, setTokens, user, tokens } = useContext(AuthCtx);

    const loginUser = async (email, password) => {
        const response = await fetch(`${BASE_URL}/api/auth/jwt/create/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: email, password: password }),
        });

        const data = await response.json();

        if (response.ok) {
            setTokens(data);
            setUser({ email });
            return { success: true };
        } else {
            return { success: false, error: data };
        }
    };

    const logoutUser = () => {
        setTokens(null);
        setUser(null);
    };

    return { loginUser, logoutUser, user, tokens };
};
