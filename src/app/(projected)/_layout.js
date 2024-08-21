import { Drawer } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>    
            <Drawer />
        </GestureHandlerRootView>
    );
};

export default function Layout() {
    return DrawerLayout ();
}