import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;

`;

export const ViewInputButton = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 40px;
  margin-horizontal: 10px;

`;

export const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: #dcdcdc;
  text-align: center;
  margin-right: 10px;
  
`;

export const Button = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 8px;
  width: 60px;
  height: 40px;
  align-items: center;
  
  
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