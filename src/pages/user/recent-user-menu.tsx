import React, { useEffect, useState } from "react";
import { AvatarDeitals, CardUser, RecentUserItem, TitleList, UserDetails, UserDetailsText } from "../../style/style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

export default function RecentUsersMenu({ navigation, userData, closeModal }) {
    const [recentUsers, setRecentUsers] = useState([]);

    useEffect(() => {
        const fetchStoredRecentUsers = async () => {
            try {
                const recentUsersJSON = await AsyncStorage.getItem('recentUsers');
                const parsedRecentUsers = recentUsersJSON ? JSON.parse(recentUsersJSON) : [];
                setRecentUsers(parsedRecentUsers);
            } catch (error) {
                console.log('Error fetching recent users:', error);
            }
        };

        if (userData) {
            const updatedRecentUsers = [userData, ...recentUsers];
            setRecentUsers(updatedRecentUsers);

            AsyncStorage.setItem('recentUsers', JSON.stringify(updatedRecentUsers));
        }

        fetchStoredRecentUsers();
    }, [userData]);


    const allRecentUsers = recentUsers.filter(user => user !== null);

    return (
        <CardUser>
            <TitleList>Pesquisas recentes</TitleList>
            <ScrollView>
                <UserDetails>
                    {allRecentUsers.map((user, index) => (
                        <RecentUserItem
                            key={index}
                            onPress={() => {
                                closeModal();
                                navigation.navigate('UserPage', { user });
                            }}
                        >
                            <AvatarDeitals source={{ uri: user.avatar }} />
                            <UserDetailsText>Nome: {user.name}</UserDetailsText>
                            <UserDetailsText>Login: {user.login}</UserDetailsText>
                            <UserDetailsText>Localização: {user.location}</UserDetailsText>
                        </RecentUserItem>
                    ))}
                </UserDetails>
            </ScrollView>
        </CardUser>
    );
}