import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#CECECE",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Sign in",
          tabBarIcon: ({ color }: { color: any }) => (
            <MaterialIcons name="login" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="sign-up"
        options={{
          tabBarLabel: "Sign Up",
          tabBarIcon: ({ color }: { color: any }) => (
            <MaterialIcons name="person-add" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
