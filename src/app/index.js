import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hooks/Auth";

export default function App() {
  const { signIn, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo pronto para uso</Text>
      <Button
        title="Signin Adm"
        onPress={() =>
          signIn({ email: "adm@email.com", password: "Adm123!" })
        }
      />
      <Button
        title="Signin User"
        onPress={() =>
          signIn({ email: "user@email.com", password: "User123!" })
        }
      />
      <Button title="Signout" onPress={() => signOut()} />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "regular",
    fontSize: 29
  },
});