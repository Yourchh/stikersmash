import { Image } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
  imgSource: any; // ImageSourcePropType a veces da problemas con require(), any es más seguro para assets locales
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320, // Valor numérico fijo
    height: 440, // Valor numérico fijo
    borderRadius: 18,
  },
});
