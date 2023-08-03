import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Linking, TouchableOpacity } from "react-native";
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

  const openGitHubRepo = (fullName) => {
    const url = `https://github.com/${fullName}`;
    Linking.openURL(url).catch((err) =>
      console.error(`Erro ao abrir a URL: ${url}`, err)
    );
  };

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
            <TouchableOpacity onPress={() => openGitHubRepo(item.fullName)}>
              <RepositoryItem>
                <RepositoryName>Nome: {item.name}</RepositoryName>
                <RepositoryName>Linguagem: {item.language}</RepositoryName>
                <RepositoryName>Descrição: {item.description}</RepositoryName>
                <RepositoryName>Criado em: {item.createdAt}</RepositoryName>
                <RepositoryName>Último push: {item.lastPush}</RepositoryName>
              </RepositoryItem>
            </TouchableOpacity>
          )}
        />
      </RepositoriesList>
    </Container>
  );
}