import { Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ej1 from './Screens/Ej1';

export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ej1" component={Ej1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
