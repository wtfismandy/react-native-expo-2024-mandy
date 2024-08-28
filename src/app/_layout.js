import { Stack, useSegments } from "expo-router";
import { AppProvider } from "../hooks";
import { useAuth } from "../hooks/Auth";
import { useEffect } from "react";

const StackLayout = () => {
    const { user } = useAuth();
    const segments = useSegments();

    useEffect(()=>{
       const inAuthGroup = segments[0] === "(projected)";
   
       if (!user?.autenticated && inAuthGroup) {
           router.replace("/")
       } else {
           if (user?.autenticated) {
               router.replace("/(projected)");
           }
       }
    }, [user]);

    return (
        <Stack>
            <Stack.Screen name="index" opitions={{ headerShown: false}} />
            <Stack.Screen name="(projected)" opitions={{ headerShown: false}}/>
        </Stack>
    );
};

export default function Layout() {
    return (
    <AppProvider>
        <StackLayout />
     </AppProvider>
    );
};