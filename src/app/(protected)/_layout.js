import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Drawer } from 'expo-router/drawer';
import { View, TouchableOpacity, Text, Image } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAuth } from "../../hooks/Auth";





function CustomDrawerContent(props) {
    const { user, signOut } = useAuth();

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                marginTop: 0, 
                justifyContent: "center", 
                alignItems:"center",
                backgroundColor: "#cad5e3"}}>
                <Image source={{
          uri: 'http://www.github.com/wtfismandy.png',
        }}
        style={{width: 100, height: 100, borderRadius: 50, marginBottom: 10}}
        />
                <Text 
                style={{ textAlign: "center", fontSize: 16, fontFamily: "regular", color: "black"}}>
                    Nome do usuário
                </Text>
            </View>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <TouchableOpacity onPress={() => signOut()} 
          style={{
            justifyContent: "center", 
            alignItems: "center",
            height: 50,
            margin: 10,
            backgroundColor: "#2d6085"
            }}>
            <Text style={{color: "white", fontFamily: "bold"}}> Deslogar </Text>
        </TouchableOpacity>
        </View>
      
    );
  }

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>    
            <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen 
                name="index"
                options={{ 
                    drawerLabel: "Principal", 
                    headerTitle:"Principal",
                    drawerIcon: () => (<Ionicons name="home" size={20} color="Black"/>),}}  
                    //drawerIcon: ()=> <Text> 🏠 </Text> }}
                 
            />
                <Drawer.Screen 
                name="list"
                //biografia lana del rey
                options={{ 
                    drawerLabel: "Biografia", 
                    headerTitle:"Biografia", 
                    drawerIcon: () => (<Ionicons name="star-sharp" size={20} color="Black"/>),}}
            />
                <Drawer.Screen 
                name="payment"
                //albuns lana del rey
                options={{ drawerLabel: "Discografia", headerTitle:"Discografia",
                drawerIcon: () => (<Ionicons name="musical-notes" size={20} color="Black"/>
                ),
            }}
            />
            </Drawer>
        </GestureHandlerRootView>
    );
};

export default function Layout() {
    return DrawerLayout();
}