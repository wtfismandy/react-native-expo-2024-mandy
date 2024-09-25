import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, BackHandler} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';
export default function App() {
  const { signIn, signOut } = useAuth();


  // const togglePasswordVisibility = () => { setPasswordVisibility(!passwordVisibility); };

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email: "super@email.com", password: "A123456a!" });
      //router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo Pronto Para Usar</Text>
      
      <Button title="Signin Super" onPress={handleEntrarSuper} />

      
      <Button title="Sobre" onPress={() =>router.push("/about")} />
        <Button title="Sair do aplicativo" onPress={()=>BackHandler.exitApp()} />
        <StatusBar style="auto" />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "italic",
  },
  //button: {
    //backgroundColor: 'blue',
   // padding: 10,
    //borderRadius: 5,
   // marginBottom: 10,
   // width: '30%',
    //alignItems: 'center',
   // flex: 1,
  //},
  //buttonText: {
  //  color: '#fff',
   // fontSize: 16,
  //},
 // inputbox: {
    //flexDirection: "row",
    //gap: 10,
   // margin: 10,
   // alignItems: "center",
  //},
  //emailinput: {
  //  flex: 1,
   // fontFamily: "Helvetica",
  //  fontSize: 16,
 // },
});


// 03:46 aula 8
