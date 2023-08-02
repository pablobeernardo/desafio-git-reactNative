import { View, Text, TouchableOpacity } from "react-native";
import { Container } from "../../style/style";

export default function UserPage({navigation}) {

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <View>
                <TouchableOpacity onPress={handleGoBack}>
                    <Text>Voltar</Text>
                </TouchableOpacity>
                <Text>
                    Olá Teste
                </Text>
            </View>
        </Container>

    )
};