import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Detail() {
  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <Text className="text-black font-bold mb-8 text-2xl">
          Detalles del Libro
        </Text>
        <Link href="/" className="text-blue-500">
          Volver
        </Link>
      </View>
    </View>
  );
}
