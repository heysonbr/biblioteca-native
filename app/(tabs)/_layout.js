import { Tabs } from "expo-router";
import { View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  const homeIcon = <FontAwesome name="home" size={24} color="black" />;
  const addIcon = <FontAwesome name="plus" size={24} color="black" />;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: () => homeIcon,
        }}
      />
      <Tabs.Screen
        name="addBook"
        options={{
          title: "Agregar libro",
          tabBarIcon: () => addIcon,
        }}
      />
    </Tabs>
  );
}
