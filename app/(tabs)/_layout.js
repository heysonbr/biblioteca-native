import { Tabs } from "expo-router";
import { View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  const homeIcon = <FontAwesome name="home" size={24} color="white" />;
  const addIcon = <FontAwesome name="plus" size={24} color="white" />;
  return (
    <Tabs
      className="bg-blue-950"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "rgb(25, 31, 72)" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: () => homeIcon,
        }}
      />

      <Tabs.Screen
        name="addBook"
        options={{
          title: "Agregar libro",
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: () => addIcon,
        }}
      />
    </Tabs>
  );
}
