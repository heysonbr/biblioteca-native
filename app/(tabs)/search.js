import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { fetchBooks } from "../../lib/libreria";
import { AnimatedBookCard } from "../../components/bookCard";

export default function Search() {
  const [books, setBooks] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchBooks(setBooks);
  }, []);

  useEffect(() => {
    console.log(books);
  }, [books]);

  const filteredBooks = books
    ? books.filter((book) =>
        book.titulo
          ? book.titulo.toLowerCase().includes(search.toLowerCase())
          : false
      )
    : [];

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1, padding: 10 }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              padding: 5,
              marginBottom: 10,
            }}
            placeholder="Buscar libro"
            value={search}
            onChangeText={(value) => setSearch(value)}
          />

          {error && <Text>Error: {error.message}</Text>}
          {filteredBooks.length === 0 && <Text>No se encontraron libros</Text>}
          {filteredBooks.map((book, index) => (
            <AnimatedBookCard key={book.id} book={book} index={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
