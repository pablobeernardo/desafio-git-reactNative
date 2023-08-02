import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export const Container = styled.View`
  flex: 1;
  padding: 20px;
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
`;

export const ButtonIcon = styled(Icon).attrs({
    name: 'search', 
    size: 16,
    color: '#fff',
  })``;

export const ResultContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
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
`;

export const Location = styled.Text`
  font-size: 16px;
    
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  left: 20px;
  
`;

export const BackText = styled.Text`
  color: black;
  font-size: 16px;
`;

export const CardUser = styled.View`
  flex-direction: row;
  margin-top: 25px;
  justify-content: center;
  max-width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  
`;

export const UserDetails = styled.View`
  margin-left: 20px;
  align-items: center;
  margin-bottom: 10px;
 
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
  margin-top: 30px;

`;

export const RepositoriesList = styled.View`
  margin-top: 20px;
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