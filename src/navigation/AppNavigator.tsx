import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        {/* Ir adicionado aqui o resto, conforme a implementação de novas telas */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
