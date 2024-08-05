import { Stack } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

export default function Layout() {
  return (
    <View className="flex-1 ">
      <Stack
        screenOptions={{
          headerTitle: "",
          headerLeft: () => (
            <Text className="text-2xl font-bold">Biblioteca </Text>
          ),
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable className="pl-5">
                <Entypo name="info-with-circle" size={24} color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
