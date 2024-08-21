import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const FontContext = createContext({});

export function FontProvider({ children }){
    const [loaded, error] = useFonts({
        regular: require("../../assets/fonts/NotoSerif_Condensed-Regular.ttf"),
        bold: require("../../assets/fonts/NotoSerif_Condensed-Bold.ttf"),
        black: require("../../assets/fonts/NotoSerif_Condensed-Black.ttf"),
        semibold: require("../../assets/fonts/NotoSerif_Condensed-SemiBold.ttf"),
        light: require("../../assets/fonts/NotoSerif_Condensed-Light.ttf"),
        medium: require("../../assets/fonts/NotoSerif_Condensed-Medium.ttf"),
        thin: require("../../assets/fonts/NotoSerif_Condensed-Thin.ttf"),
        extralight: require("../../assets/fonts/NotoSerif_Condensed-ExtraLight.ttf"),
        italic: require("../../assets/fonts/NotoSerif_Condensed-Italic.ttf"),
        bolditalic: require("../../assets/fonts/NotoSerif_Condensed-BoldItalic.ttf"),
        blackitalic: require("../../assets/fonts/NotoSerif_Condensed-BlackItalic.ttf"),
    });

    if (!loaded && !error) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>
                    Carregando fontes
                </Text>
                <ActivityIndicator/>
            </View>

        );
    }

    return <FontContext.Provider value={{}}>{children}</FontContext.Provider>;
}

export function useFont(){
    const context =useContext(FontContext);
    if (!context) {
        throw new Error ("useFont must be used within a FontProvider")
    }
    return context;
}