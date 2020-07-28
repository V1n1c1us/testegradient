import React from 'react';
import { ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const SignIn: React.FC = () => (
  <LinearGradient colors={['#f6d365', '#fda085']} style={{ flex: 1 }}>
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <Container>
        <Image source={logoImg} style={{ marginBottom: 100 }} />

        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="password" icon="lock" placeholder="Senha" />

        <Button
          onPress={() => {
            console.log('touch');
          }}
        >
          Entrar
        </Button>
      </Container>
    </ScrollView>
  </LinearGradient>
);

export default SignIn;
