import { Image, StyleSheet } from "react-native";

import StyleContants from "../contants/StyleContants";

export default function ImageComponent(props) {
  const { imageUrl } = props;

  return (
    <Image
      style={styles.image}
      source={{
        uri: imageUrl,
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    height: 250,
    borderRadius: StyleContants.radius.default,
    marginBottom: 15,
    borderColor: StyleContants.colors.primary,
    borderWidth: 1,
  },
});
