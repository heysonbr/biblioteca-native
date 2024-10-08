import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { Link } from "expo-router";
import { Screen } from "./Screen";

import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { fetchBooks } from "../lib/libreria";

import { AnimatedBookCard } from "./bookCard";

export function Main() {
  const [books, setBooks] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [search, setSearch] = useState("");

  const fetchBooksData = useCallback(() => {
    fetchBooks(setBooks);
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchBooksData();
      return () => { };
    }, [fetchBooksData])
  );

  useEffect(() => {
    const shuffledBooks = books.sort(() => 0.5 - Math.random());
    setDisplayedBooks(shuffledBooks);
  }, [books]);

  const filteredBooks = displayedBooks.filter((book) =>
    book.titulo
      ? book.titulo.toLowerCase().includes(search.toLowerCase())
      : false
  );

  return (
    <Screen className="bg-blue-950 items-center justify-center ">
      <View className="bg-blue-950 h-screen  pb-44 ">
        <TextInput
          className="border bg-white border-gray-400 active:border-blue-400 active:border-2  rounded-lg p-2  m-2 "
          style={styles.input}
          placeholder="Buscar libro"
          value={search}
          onChangeText={(value) => setSearch(value)}
        />

        {filteredBooks.length === 0 ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <FlatList
            data={filteredBooks}
            keyExtractor={(book) => book.id}
            initialNumToRender={10} // Reduce initial render amount
            maxToRenderPerBatch={10} // Increase render amount per batch
            renderItem={({ item, index }) => (
              <AnimatedBookCard book={item} index={index} />
            )}
          />
        )}
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
  },
});