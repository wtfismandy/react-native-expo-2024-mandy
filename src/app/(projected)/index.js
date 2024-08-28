import { Button, View } from'react-native';

export default function Home() {
    const { signOut } = useAuth();

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Página Inicial</Text>
            <Button title="sair" onPress={()=> signOut()} />
        </View>
    );
}