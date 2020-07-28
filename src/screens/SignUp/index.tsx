import React from 'react';
import { ScrollView } from 'react-native';

import { Container } from './styles';

const SingUp: React.FC = () => (
  <ScrollView
    contentContainerStyle={{ flex: 1 }}
    keyboardShouldPersistTaps="handled"
  >
    <Container />
  </ScrollView>
);

export default SingUp;
