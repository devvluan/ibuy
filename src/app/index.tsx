import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <DrawerToggleButton />
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => router.navigate("/sign-up")}
      >
        <Text style={styles.label}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 32,
    padding: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
});
