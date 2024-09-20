import { Button, View } from'react-native';
import { useAuth } from '../../hooks/Auth';

export default function Home() {
    const { signOut } = useAuth();

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            
            <Button title="sair" onPress={()=> signOut()} />
        </View>
    );
}