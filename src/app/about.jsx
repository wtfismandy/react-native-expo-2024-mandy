import { StyleSheet, View, Text, Button, Image } from "react-native";
import { router } from "expo-router";

export default function About() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/img1.png')} style={styles.imagem} />
      <Text style={styles.title}>Sobre o Dark Paradise</Text>
      <Text style={styles.description}>
        Este é um aplicativo sobre a artista Lana del Rey, sua biografia e discos.
      </Text>
      <Text style={styles.description}>
        Agradecemos por usar nosso aplicativo. 
      </Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
    imagem: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 50,
      },
});
