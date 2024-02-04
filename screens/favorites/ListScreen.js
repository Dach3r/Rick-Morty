import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

// Contants
import StyleContants from "../../contants/StyleContants";

export default function ListScreen({ navigation }) {
  const obtainCharacters = async () => {
    const storedFavorites = await AsyncStorage.getItem("favorites");

    console.log(storedFavorites)
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Favorites</Text>

          { obtainCharacters() }
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
