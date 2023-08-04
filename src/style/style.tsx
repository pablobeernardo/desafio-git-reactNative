import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0; 
  margin-top: 16px;
`;

export const ViewInputButton = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: #dcdcdc;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 8px;
  width: 60px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  elevation: 2;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 5px;

`;

export const ButtonIcon = styled(Icon).attrs({
  name: 'list',
  size: 16,
  color: '#fff',
 
})``;

export const ResultContainer = styled.View`
  align-items: center;
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  elevation: 5;
`;

export const RecentList = styled.View`
  align-items: center;
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  elevation: 5;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: 10px;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  
`;

export const Login = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
  color: #555;
`;

export const Location = styled.Text`
  font-size: 16px;
  color: #555;
    
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #007bff;
  padding: 8px 15px;
  border-radius: 8px;
  elevation: 2;
  
`;

export const ButtonStyle = styled.TouchableOpacity`
  align-items:center;
  background-color: #007bff;
  padding: 8px 15px;
  border-radius: 8px;
  elevation: 2;
  
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const CardUser = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  elevation: 5;
  margin-top: 45px;
  
  
`;

export const UserDetails = styled.View`
  font-size: 16px;
  margin-vertical: 5px;
  align-items: center;
  
 
`;

export const AvatarDeitals = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 50px;
  margin-bottom: 10px;
`;

export const UserDetailsText = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  flex-wrap: wrap;       
  max-width: 100%;     
     
`;

export const TitleList = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;


`;

export const RepositoriesList = styled.View`
  margin-top: 10px;
  flex:1;
`;

export const RepositoryItem = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const RepositoryName = styled.Text`
  font-size: 18px;
  font-style: italic;
`;

export const RepositoryDescription = styled.Text`
  font-size: 16px;
  font-style: italic;
`;

export const ModalContent = styled.View`
  flex: 1;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const RecentUserItem = styled.TouchableOpacity`
  flex-direction: collunm;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

