import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => router.navigate("/(drawer)")}
      >
        <Text style={styles.label}>Entrar</Text>
      </TouchableOpacity>
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
    justifyContent: "center",
    gap: 32,
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
});
