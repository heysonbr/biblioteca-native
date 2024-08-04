import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useState, useEffect } from "react";
import { fetchBooks } from "../lib/libreria";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedBookCard, BookCard } from "./bookCard";

export function Main() {
  const [books, setBooks] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    fetchBooks(setBooks);
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text style={styles.titulo}>Biblioteca</Text>
      {books.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={books}
          keyExtractor={(book) => book.id}
          renderItem={({ item, index }) => <AnimatedBookCard book={item} index={index} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerBooks: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
});
