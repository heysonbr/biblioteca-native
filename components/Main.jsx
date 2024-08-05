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
import { Link } from "expo-router";
import { Screen } from "./Screen";



import { useState, useEffect } from "react";
import { fetchBooks } from "../lib/libreria";

import { AnimatedBookCard, BookCard } from "./bookCard";

export function Main() {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    fetchBooks(setBooks);
  }, []);

  return (
    <Screen className="bg-white" >

      {books.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={books}
          keyExtractor={(book) => book.id}
          renderItem={({ item, index }) => <AnimatedBookCard book={item} index={index} />}
        />
      )}
    </Screen>
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
