import axios from "axios";
import { useState } from "react";
import UserEntity from "../../entities/user-entity";
import {Text} from 'react-native';
import { Container, ResultContainer, Avatar, Name, Login, Location, Input, ButtonText, Button } from "../../style/style";

export default function HomePage() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);

    const handleSearch = async () => {
        const accessToken = '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';

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`, {
                headers: {
                    Authorization: `token ${accessToken}`,
                },
            });

            const user = response.data;
            console.log(user);
            if (user.message) {
                setUserData(null);
            } else {
                const userData = new UserEntity();
                userData.avatar = user.avatar_url;
                userData.name = user.name;
                userData.login = user.login;
                userData.location = user.location;

                setUserData(userData);
            }
        } catch (error) {
            console.log('error', error);
            setUserData(null);
        }
    };

    return (
            <Container>
                <Input
                    placeholder="Digite o nome de usuário do GitHub"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <Button onPress={handleSearch}>
                    <ButtonText>Buscar</ButtonText>
                </Button>
                {userData && (
                    <ResultContainer>
                        <Avatar source={{ uri: userData.avatar }} />
                        <Name>{userData.name}</Name>
                        <Login>{userData.login}</Login>
                        <Location>{userData.location}</Location>
                    </ResultContainer>
                )}
            </Container>
       
    )
}