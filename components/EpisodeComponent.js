import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

import axios from "axios";

export default function EpisodeComponent(props) {
  const [episode, setEpisode] = useState(null);
  const { urlEpisode } = props;

  useEffect(() => {
    axios.get(urlEpisode).then((response) => {
      setEpisode(response.data);
    });
  }, []);

  if (!episode) return null;

  return (
    <View style={styles.card}>
      <Text style={{ marginBottom: 5, fontWeight: "700" }}>{episode.name}</Text>
      <Text style={{ marginBottom: 5 }}>{episode.episode}</Text>
      <Text>{episode.air_date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
