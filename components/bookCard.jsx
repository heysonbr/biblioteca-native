import { View, Text, Image, StyleSheet } from "react-native";



export function BookCard({ book }) {
  return (
    <View key={book.id} style={styles.stepContainer}>
      <Image
        source={{ uri: book.caratula }}
        style={styles.caratula}
        resizeMode="contain"
      />
      <View style={styles.datos}>
        <Text style={styles.titulo}>{book.titulo}</Text>
        <Text>{book.escritor}</Text>
        <Text>{book.genero}</Text>
        <Text>ISBN: {book.ISBN}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  datos: {
    width: "70%",
    paddingLeft: 30,
  },
  caratula: {
    width: "30%",
    height: 200,
  },
});
