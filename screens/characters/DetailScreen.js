import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import ImageComponent from "../../components/ImageComponent";

// Contants
import StyleContants from "../../contants/StyleContants";
import EpisodeComponent from "../../components/EpisodeComponent";

const baseURL = "https://rickandmortyapi.com/api/character";

export default function DetailCharacterScreen({ route }) {
  const { id } = route.params;

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/${id}`).then((response) => {
      setCharacter(response.data);
    });
  }, []);

  if (!character) return null;

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <ImageComponent imageUrl={character.image} />
          <Text style={styles.title}>{character.name}</Text>

          <View style={styles.itemDetail}>
            <Text>Status</Text>
            <Text>{character.status}</Text>
          </View>

          <View style={styles.itemDetail}>
            <Text>Gender</Text>
            <Text>{character.gender}</Text>
          </View>

          <View style={styles.itemDetail}>
            <Text>Species</Text>
            <Text>{character.species}</Text>
          </View>

          <View style={styles.itemDetail}>
            <Text>Episodes</Text>
            <Text>{character.episode.length}</Text>
          </View>

          <View style={{marginTop: 25}}>
            {character.episode.map((urlEpisode, index) => (
              <View key={index}>
                <EpisodeComponent urlEpisode={urlEpisode} />
              </View>
            ))}
          </View>
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
  },
  itemDetail: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
