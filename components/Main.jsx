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
import { BookCard } from "./bookCard";

export function Main() {
  const [books, setBooks] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    fetchBooks(setBooks);
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {books.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={books}
          keyExtractor={(book) => book.id}
          renderItem={({ item }) => <BookCard book={item} />}
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
});
