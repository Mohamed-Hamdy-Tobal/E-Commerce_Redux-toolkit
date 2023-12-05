/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    const [authenticated, setAuthenticated] = useState(user.authUser);

    useEffect(() => {
        // Update the authentication status when it changes
        setAuthenticated(user.authUser);
    }, [user.authUser]);

    // If the user is not authenticated, redirect to signin
    if (!authenticated) {
        return <Navigate to='/signin' />;
    }

    // Render the children if the user is authenticated
    return <>{children}</>;
};

