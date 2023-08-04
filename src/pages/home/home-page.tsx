import axios from "axios";
import { useState } from "react";
import UserEntity from "../../entities/user-entity";
import { Container, ResultContainer, ViewInputButton, Avatar, Name, Login, Location, Input, Button, ButtonIcon, ButtonBack, ButtonText, ButtonStyle, ModalContent } from "../../style/style";
import { Modal, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RecentUsersMenu from "../user/recent-user-menu";


export default function HomePage({ navigation }) {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [showRecentUsers, setShowRecentUsers] = useState(false);

    const handleSearch = async () => {
        const accessToken = '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';

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`, {
                headers: {
                    Authorization: `token ${accessToken}`,
                },
            });

            const user = response.data;
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
                userData.publicRepos = user.public_repos;

                setUserData(userData);
            }

            try {
                const recentUsers = await AsyncStorage.getItem('recentUsers');
                const parsedRecentUsers = recentUsers ? JSON.parse(recentUsers) : [];
                parsedRecentUsers.unshift(userData);
                await AsyncStorage.setItem('recentUsers', JSON.stringify(parsedRecentUsers));
            } catch (error) {
                console.log('Error storing recent user:', error);
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
                <Button onPress={() => setShowRecentUsers(!showRecentUsers)}>
                    <ButtonIcon />
                </Button>
            </ViewInputButton>
            <ButtonStyle onPress={handleSearch}>
                <ButtonText>Pesquisar usuário</ButtonText>
            </ButtonStyle>
            {userData && (
                <ResultContainer>
                    <TouchableOpacity onPress={() => navigation.navigate('UserPage', { user: userData })}>
                        <Avatar source={{ uri: userData.avatar }} />
                    </TouchableOpacity>
                    <Name>{userData.name}</Name>
                    <Login>{userData.login}</Login>
                    <Location>{userData.location}</Location>
                </ResultContainer>
            )}
            <Modal
                visible={showRecentUsers}
                animationType="slide"
            >
                <ModalContent>
                    <RecentUsersMenu navigation={navigation} userData={null} closeModal={() => setShowRecentUsers(false)} />
                    <ButtonBack onPress={() => setShowRecentUsers(false)}>
                        <ButtonText>Voltar</ButtonText>
                    </ButtonBack>
                </ModalContent>
            </Modal>
        </Container>
    )
}