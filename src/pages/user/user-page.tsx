import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { AvatarDeitals, BackButton, BackText, CardUser, Container, RepositoriesList, RepositoryItem, RepositoryName, TitleList, UserDetails, UserDetailsText } from "../../style/style";
import RepositoryEntity from "../../entities/repository-entity";

export default function UserPage({ navigation, route }) {
  const [userRepositories, setUserRepositories] = useState([]);
  const userData = route.params.user;

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    // Aqui você pode fazer a requisição dos repositórios do usuário
    const fetchUserRepositories = async () => {
      try {
        const accessToken = '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';
        const response = await axios.get(`https://api.github.com/users/${userData.login}/repos`, {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        });

        const repositories = response.data.map((repo) => {
          const repository = new RepositoryEntity();
          repository.name = repo.name;
          repository.fullName = repo.full_name;
          repository.language = repo.language;
          repository.description = repo.description;
          repository.createdAt = repo.created_at;
          repository.lastPush = repo.pushed_at;
          return repository;
        });

        setUserRepositories(repositories);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchUserRepositories();
  }, []);

  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <BackText>Voltar</BackText>
      </BackButton>
      <CardUser>
        <UserDetails>
        <AvatarDeitals source={{ uri: userData.avatar }} />
        <UserDetailsText>Nome: {userData.name}</UserDetailsText>
        <UserDetailsText>Login: {userData.login}</UserDetailsText>
        <UserDetailsText>Localização: {userData.location}</UserDetailsText>
        <UserDetailsText>ID: {userData.id}</UserDetailsText>
        <UserDetailsText>Seguidores: {userData.followers}</UserDetailsText>
        <UserDetailsText>Repositórios Públicos: {userData.publicRepos}</UserDetailsText>
        </UserDetails>
      </CardUser>
      <TitleList>Lista de Repositórios:</TitleList>
      <RepositoriesList>
        <FlatList
          data={userRepositories}
          keyExtractor={(item) => item.fullName}
          renderItem={({ item }) => (
            <RepositoryItem>
              <RepositoryName>{item.name}</RepositoryName>
              <RepositoryName>{item.description}</RepositoryName>
              {/* Mostrar outras informações do repositório, se necessário */}
            </RepositoryItem>
          )}
        />
      </RepositoriesList>
    </Container>
  );
}