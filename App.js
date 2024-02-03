import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailCharacterScreen from "./screens/characters/DetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="DetailCharacter"
          component={DetailCharacterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
