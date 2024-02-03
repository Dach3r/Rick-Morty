import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import CharacterComponent from "../components/CharacterComponent";

// Contants
import StyleContants from "../contants/StyleContants";

const baseURL = "https://rickandmortyapi.com/api/character";

export default function HomeScreen({ navigation }) {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCharacters(response.data["results"]);
    });
  }, []);

  if (!characters) return null;

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Rick & Morty</Text>
          {characters.map((character, index) => (
            <View key={index}>
              <CharacterComponent character={character} navigation={navigation} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: StyleContants.colors.lightly,
  },
  container: {
    padding: StyleContants.screens.container,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 20,
  },
});
