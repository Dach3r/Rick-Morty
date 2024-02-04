import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import EpisodeComponent from "../../components/EpisodeComponent";

// Contants
import StyleContants from "../../contants/StyleContants";

const baseURL = "https://rickandmortyapi.com/api/episode";

export default function ListScreen({ navigation }) {
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setEpisodes(response.data["results"]);
    });
  }, []);

  if (!episodes) return null;

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Episodes</Text>
          {episodes.map((episode, index) => (
            <View key={index}>
              <EpisodeComponent urlEpisode={episode.url} />
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
