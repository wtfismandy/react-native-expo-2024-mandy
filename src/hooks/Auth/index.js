import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const Role = {
    SUPER: 'SUPER',
    ADM: 'ADM',
    USER: 'USER',
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        autenticated: null,
        user: null,
        role: null,
    });

    const signIn = async (email, password) => {
        if (email === "super@email.com" && password === "Super123") {
            setUser({autenticated: true, user: { email }, role: Role.SUPER });
    } else if (email === "adm@email.com" && password === "Adm123") {
        setUser({ autenticated: true, user: { email }, role: Role.ADM });
    } else if (email === "user@email.com" && password === "User123") {
        setUser({ autenticated: true, user: { email }, role: Role.USER });
    }
    else {
        setUser({ autenticated: false, user: null, role: null });
    }
    };

    const signOut = () => {
        setUser({});
    };

    useEffect(() => {
        console.log('AuthProvider: ', user);
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}