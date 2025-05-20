import AppNavigator from './src/navigation/AppNavigator';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { ActivityIndicator, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <AppNavigator />;
}
