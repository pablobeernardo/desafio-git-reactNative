import axios from "axios";
import { useState } from "react";
import UserEntity from "../../entities/user-entity";
import { Container, ResultContainer, ViewInputButton, Avatar, Name, Login, Location, Input, Button, ButtonIcon } from "../../style/style";
import { TouchableOpacity } from "react-native";

export default function HomePage({navigation, route}) {
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
                userData.id = user.id;
                userData.followers = user.followers;
                userData.publicRepos= user.public_repos;


                setUserData(userData);
            }
        } catch (error) {
            console.log('error', error);
            setUserData(null);
        }
    };

    return (
            <Container>
                <ViewInputButton>
                    <Input
                        placeholder="Digite o nome de usuário do GitHub"
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                    />
                    <Button onPress={handleSearch}>
                        <ButtonIcon/>
                    </Button>
                </ViewInputButton>
                {userData && (
                    <ResultContainer>
                        <TouchableOpacity onPress={() => navigation.navigate('UserPage', {user: userData}) }>
                        <Avatar source={{ uri: userData.avatar }} />
                        </TouchableOpacity>
                        <Name>{userData.name}</Name>
                        <Login>{userData.login}</Login>
                        <Location>{userData.location}</Location>
                    </ResultContainer>
                )}
            </Container>
       
    )
}