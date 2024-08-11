import { Tabs } from "expo-router";
import { View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs
      className="bg-blue-950"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "rgb(25, 31, 72)" },
        tabBarActiveTintColor: "yellow",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="addBook"
        options={{
          title: "Agregar libro",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="plus" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
