import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import StyleContants from "./contants/StyleContants";

import HomeScreen from "./screens/HomeScreen";
import DetailCharacterScreen from "./screens/characters/DetailScreen";
import FavoritesListScreen from "./screens/favorites/ListScreen";
import EpisodesListScreen from "./screens/episodes/ListScreen";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailCharacter" component={DetailCharacterScreen} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: StyleContants.colors.inverse,
        tabBarInactiveTintColor: StyleContants.colors.lightly,
        headerShown: false,
        tabBarStyle: { backgroundColor: StyleContants.colors.primary },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesListScreen}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Episodes"
        component={EpisodesListScreen}
        options={{
          tabBarLabel: "Episodes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-checkbox"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
