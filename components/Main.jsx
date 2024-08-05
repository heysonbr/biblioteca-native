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
  const [displayedBooks, setDisplayedBooks] = useState([]);


  useEffect(() => {
    fetchBooks(setBooks);
  }, []);

  useEffect(() => {
    const shuffledBooks = books.sort(() => 0.5 - Math.random());
    setDisplayedBooks(shuffledBooks.slice(0, 8));
  }, [books]);

  return (
    <Screen className="bg-white" >

      {displayedBooks.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={displayedBooks}
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
