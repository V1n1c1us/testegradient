import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingIn from '../screens/SignIn';
import SingUp from '../screens/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#28233e' },
    }}
  >
    <Auth.Screen name="SingIn" component={SingIn} />
    <Auth.Screen name="SingUp" component={SingUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
