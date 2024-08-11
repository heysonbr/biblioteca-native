import { Stack } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <View className="flex-1 ">
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerTitle: "",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "rgb(25, 31, 72)",
          },
          headerLeft: () => (
            <Text className="text-2xl font-extrabold text-white">
              Biblioteca{" "}
            </Text>
          ),
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable className="pl-5">
                <Entypo name="info-with-circle" size={24} color="white" />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
