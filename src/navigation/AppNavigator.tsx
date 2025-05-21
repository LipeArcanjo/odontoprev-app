import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Home from '../screens/Home';
import DataVision from '../screens/DataVision';
import Members from '../screens/Members';
import Beneficiarios from '@/screens/Beneficiarios';
import BeneficiariosData from '@/screens/Beneficiarios/BeneficiariosData';
import BeneficiariosCadastro from '@/screens/Beneficiarios/BeneficiariosCadastro';
import Tratamentos from '@/screens/Tratamentos';
import TratamentosData from '@/screens/Tratamentos/TratamentosData';
import TratamentosCadastro from '@/screens/Tratamentos/TratamentosCadastro';

import BottomNav from '../components/BottomNav';

const Stack = createNativeStackNavigator();

// HOC para injetar o BottomNav apenas nas telas após login
  function ScreenWithNav(Component: React.ComponentType<any>) {
    return function WrappedComponent(props: any) {
      return (
        <>
          <Component {...props} />
          <BottomNav />
        </>
      );
    };
  }

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        {/* Splash page e a página de login */}
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />

        {/* Páginas com bottom nav menu */}
        <Stack.Screen name="Home" component={ScreenWithNav(Home)} />
        <Stack.Screen name="DataVision" component={ScreenWithNav(DataVision)} />
        <Stack.Screen name="Members" component={ScreenWithNav(Members)} />
        <Stack.Screen name="Beneficiarios" component={ScreenWithNav(Beneficiarios)} />
        <Stack.Screen name="BeneficiariosData" component={ScreenWithNav(BeneficiariosData)} />
        <Stack.Screen name="BeneficiariosCadastro" component={ScreenWithNav(BeneficiariosCadastro)} />
        <Stack.Screen name="Tratamentos" component={ScreenWithNav(Tratamentos)} />
        <Stack.Screen name="TratamentosData" component={ScreenWithNav(TratamentosData)} />
        <Stack.Screen name="TratamentosCadastro" component={ScreenWithNav(TratamentosCadastro)} />
        {/* Ir adicionado aqui o resto, conforme a implementação de novas telas */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
