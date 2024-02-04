import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function FavoriteComponent(props) {
  const { character } = props;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Al montar el componente, verifica si el personaje ya está marcado como favorito
    checkFavoriteStatus();
  }, []);

  const checkFavoriteStatus = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      
      setIsFavorite(
        !!(storedFavorites && storedFavorites.includes(character.id.toString()))
      );
    } catch (error) {
      console.error("Error al obtener datos de favoritos:", error);
    }
  };

  const toggleFavorite = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

      if (isFavorite) {
        const index = favorites.indexOf(character.id.toString());
        favorites.splice(index, 1);
      } else {
        favorites.push(character.id.toString());
      }

      await AsyncStorage.setItem("favorites", JSON.stringify(favorites));

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error al actualizar datos de favoritos:", error);
    }
  };

  return (
    <TouchableOpacity onPress={toggleFavorite} style={styles.button}>
      <MaterialCommunityIcons
        name={isFavorite ? "heart" : "heart-outline"}
        size={24}
        color={isFavorite ? "red" : "black"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
  },
});
