import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;

`;

export const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 150px;
  background-color: #dcdcdc;
  text-align: center;
  
`;

export const Button = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

export const ResultContainer = styled.View`
  align-items: center;
      
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