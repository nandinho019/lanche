import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { lanches } from "../assets/mockups/lanches";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(164, 218, 235, 1)",
  },
  list: {
    width: "100%",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 6,
    padding: 20,
    backgroundColor: "rgba(103, 142, 187, 0.62)",
    borderRadius: 8,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "rgba(0, 26, 75, 1)"
  },
  text: {
    fontSize: 16,
  },
});

export default function Index() {

  function irParaDetalhes(id: number) {
    router.push(`/detalhes?id=${id}`);
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={lanches}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => irParaDetalhes(item.id)}
          >
            <Text style={styles.titulo}>{item.nome}</Text>
            <Text style={styles.text}>Preço: R$ {item.preco ? item.preco.toFixed(2) : "N/A"}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  <View>
    <Text style={styles.titulo}>Detalhes do Lanche</Text>
  </View> 

}