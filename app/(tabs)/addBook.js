import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  TextInput,
  Button,
  Text,
  Alert,
  Image,
} from "react-native";
import { createBook } from "../../lib/libreria";
import { UploadImage } from "../../components/uploadImage";
import { useNavigation } from "@react-navigation/native";

export default function AddBook() {
  const [book, setBook] = useState({});
  const [key, setKey] = useState(0);
  const navigation = useNavigation();

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
        handleChange("caratula", "");
        setKey((prevKey) => prevKey + 1); // Nueva línea
        navigation.goBack();
      })
      .catch((error) => {
        console.error("Error al crear el libro:", error);
      });
  };

  return (
    <ScrollView>
      <View className="flex-1 items-center mb-6 bg-blue-950 h-screen">
        <Text className="text-2xl mb-4 text-white font-bold mt-2">
          Añadir libro
        </Text>
        <TextInput
          className="border border-gray-400 bg-white active:border-blue-400 active:border-2  rounded-lg p-2 w-80 mb-2"
          placeholder="Escritor"
          value={book.escritor}
          onChangeText={(value) => handleChange("escritor", value)}
        />
        <TextInput
          className="border border-gray-400 bg-white rounded-lg p-2 w-80 mb-2 active:border-blue-400 active:border-2"
          placeholder="Páginas"
          value={book.paginas}
          onChangeText={(value) => handleChange("paginas", value)}
        />
        <TextInput
          className="border border-gray-400 bg-white rounded-lg p-2 w-80 mb-2 active:border-blue-400 active:border-2"
          placeholder="ISBN"
          value={book.ISBN}
          onChangeText={(value) => handleChange("ISBN", value)}
        />
        <TextInput
          className="border border-gray-400 bg-white rounded-lg p-2 w-80 mb-2 active:border-blue-400 active:border-2"
          placeholder="Género"
          value={book.genero}
          onChangeText={(value) => handleChange("genero", value)}
        />
        <TextInput
          className="border border-gray-400 bg-white rounded-lg p-2 w-80 mb-2 active:border-blue-400 active:border-2"
          placeholder="Título"
          value={book.titulo}
          onChangeText={(value) => handleChange("titulo", value)}
        />
        <TextInput
          className="border border-gray-400 bg-white rounded-lg p-2 w-80 mb-2 active:border-blue-400 active:border-2"
          placeholder="Sinopsis"
          value={book.sinopsis}
          onChangeText={(value) => handleChange("sinopsis", value)}
        />
        <TextInput
          className="border border-gray-400 bg-white rounded-lg p-2 w-80 mb-2 active:border-blue-400 active:border-2"
          placeholder="Carátula (URL que termina en .jpg)"
          value={book.caratula}
          onChangeText={(value) => handleChange("caratula", value)}
        />
        <UploadImage
          key={key}
          onImageUpload={(url) => {
            handleChange("caratula", url);
          }}
          onImageUploaded={() => {
            handleChange("caratula", "");
          }}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}
