import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { createBook } from "../../lib/libreria";

export default function AddBook() {
  const [book, setBook] = useState({});

  const handleChange = (name, value) => {
    setBook((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    createBook(book)
      .then((response) => {
        console.log("Libro creado con éxito:", response);
        Alert.alert("Libro creado con éxito");
        setBook({});
      })
      .catch((error) => {
        console.error("Error al crear el libro:", error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Escritor"
        value={book.escritor}
        onChangeText={(value) => handleChange("escritor", value)}
        required
      />
      <TextInput
        placeholder="Páginas"
        value={book.paginas}
        onChangeText={(value) => handleChange("paginas", value)}
        required
      />
      <TextInput
        placeholder="ISBN"
        value={book.ISBN}
        onChangeText={(value) => handleChange("ISBN", value)}
        required
      />
      <TextInput
        placeholder="Género"
        value={book.genero}
        onChangeText={(value) => handleChange("genero", value)}
        required
      />
      <TextInput
        placeholder="Título"
        value={book.titulo}
        onChangeText={(value) => handleChange("titulo", value)}
        required
      />
      <TextInput
        placeholder="Sinopsis"
        value={book.sinopsis}
        onChangeText={(value) => handleChange("sinopsis", value)}
        required
      />
      <TextInput
        placeholder="Carátula (URL que termina en .jpg)"
        value={book.caratula}
        onChangeText={(value) => handleChange("caratula", value)}
        required
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
