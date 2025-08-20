import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  faixa: {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  texto: {
    color: "rgba(16, 58, 0, 1)",
  },
});

export default function Layout() {
  return <Stack
    screenOptions={{
      headerStyle: styles.faixa,
      headerTitleStyle: styles.texto,
    }}
  >
    <Stack.Screen name="index" options={{ title: "Lista de Lanches" }} />
    <Stack.Screen name="detalhes" options={{ title: "Detalhes do Lanche" }} />

  </Stack>;
}