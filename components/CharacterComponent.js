import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Components
import ImageComponent from "./ImageComponent";
import FavoriteComponent from "./FavoriteComponent";

import StyleContants from "../contants/StyleContants";

export default function CharacterComponent(props) {
  const { character, navigation } = props;

  const params = {
    id: character.id,
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageComponent imageUrl={character.image} />

        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <FavoriteComponent character={character} />

            <Text style={styles.name}>{character.name}</Text>
          </View>

          <Text style={styles.status}>{character.status}</Text>
        </View>

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("DetailCharacter", params)}
        >
          <Text style={styles.textButtonPrimary}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  card: {
    borderWidth: 1,
    borderColor: StyleContants.colors.primary,
    borderRadius: StyleContants.radius.default,
    padding: 15,
  },
  status: {
    color: StyleContants.colors.inverse,
    marginTop: 5,
    fontSize: 20,
  },
  name: {
    fontWeight: "700",
    fontSize: 25,
    marginLeft: 10,
  },
  buttonPrimary: {
    borderRadius: StyleContants.radius.default,
    backgroundColor: StyleContants.colors.primary,
    paddingVertical: 10,
  },
  textButtonPrimary: {
    textAlign: "center",
    color: StyleContants.colors.lightly,
  },
});
