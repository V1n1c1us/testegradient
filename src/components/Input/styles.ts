import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 8px;
  opacity: 0.8;

  flex-direction: row;
  align-items: center;

  elevation: 3;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #28233e;
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
