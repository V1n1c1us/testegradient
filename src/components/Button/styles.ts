import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff6d59;
  border-radius: 10px;

  justify-content: center;
  align-items: center;

  elevation: 3;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
