import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: "#000",
          drawerInactiveTintColor: "#CECECE",
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Entrar",
            title: "Entrar",
            drawerIcon: ({ color }: { color: string }) => (
              <MaterialIcons name="login" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="sign-up"
          options={{
            title: "Criar Conta",
            drawerLabel: "Criar Conta",
            drawerIcon: ({ color }: { color: string }) => (
              <MaterialIcons name="person-add" size={24} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
