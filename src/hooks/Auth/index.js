import { createContext, useContext, useEffect, useState } from "react";
import { authUser } from "../../database/useUsersDatabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({});

export const Role = {
    SUPER: "SUPER",
    ADM: "ADM",
    USER: "USER",
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        autenticated: null,
        user: null,
        role: null,
    });

    const signIn = async ( {email, password} ) => {
        const response = await authUser({ email, password });

        if (!response) {
            setUser({
                autenticated: false,
                user: null,
                role: null,
            });
        }

        setUser ({
        autenticated: true,
        user: response,
        role: response.role,
        });
    };

    const signOut = async () => {
        await AsyncStorage.deleteItem("@payment:user");
        setUser({});
    };

    useEffect(() => {
        console.log("AuthProvider: ", user);
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAutth must be used within an AuthProvider");
    }
    return context;
}