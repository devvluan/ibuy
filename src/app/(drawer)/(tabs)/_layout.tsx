import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarLabelPosition: "beside-icon" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <MaterialIcons name="list" size={size} color={color} />
          ),
          tabBarLabel: "Produtos",
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <MaterialIcons name="shopping-bag" size={size} color={color} />
          ),
          tabBarLabel: "Pedido",
        }}
      />
    </Tabs>
  );
}
