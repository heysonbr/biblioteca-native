import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { useRef, useEffect } from "react";



export function BookCard({ book }) {
  return (
    <View key={book.id} style={styles.stepContainer}>
      <Image
        source={{ uri: book.caratula }}
        style={styles.caratula}
        resizeMode="cover"
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


export function AnimatedBookCard({ book, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <BookCard book={book} />
    </Animated.View>
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
    borderRadius: 20,
    overflow: "hidden",
  },
});
