import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { createBook } from "../../lib/libreria";
import { UploadImage } from "../../components/uploadImage";

export default function AddBook() {
  const [book, setBook] = useState({});

  const handleChange = (name, value) => {
    setBook((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    const { escritor, paginas, ISBN, genero, titulo, sinopsis, caratula } =
      book;

    if (
      !escritor ||
      !paginas ||
      !ISBN ||
      !genero ||
      !titulo ||
      !sinopsis ||
      !caratula
    ) {
      Alert.alert("Todos los campos son requeridos");
      return;
    }

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
    <View className="flex-1 justify-center items-center">
      <TextInput
        placeholder="Escritor"
        value={book.escritor}
        onChangeText={(value) => handleChange("escritor", value)}
      />
      <TextInput
        placeholder="Páginas"
        value={book.paginas}
        onChangeText={(value) => handleChange("paginas", value)}
      />
      <TextInput
        placeholder="ISBN"
        value={book.ISBN}
        onChangeText={(value) => handleChange("ISBN", value)}
      />
      <TextInput
        placeholder="Género"
        value={book.genero}
        onChangeText={(value) => handleChange("genero", value)}
      />
      <TextInput
        placeholder="Título"
        value={book.titulo}
        onChangeText={(value) => handleChange("titulo", value)}
      />
      <TextInput
        placeholder="Sinopsis"
        value={book.sinopsis}
        onChangeText={(value) => handleChange("sinopsis", value)}
      />
      <TextInput
        placeholder="Carátula (URL que termina en .jpg)"
        value={book.caratula}
        onChangeText={(value) => handleChange("caratula", value)}
      />
      <UploadImage
        onImageUpload={(url) => {
          handleChange("caratula", url);
        }}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
