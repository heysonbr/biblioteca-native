import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  Image,
} from "react-native";
import { modifyBook, fetchBookInfo } from "../../lib/libreria";
import { useLocalSearchParams, Stack, useNavigation } from "expo-router";

export default function Edit() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const [bookInfo, setBookInfo] = useState({});

  useEffect(() => {
    fetchBookInfo(id, setBookInfo);
  }, []);

  const handleChange = (name, value) => {
    setBookInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    Alert.alert(
      "Guardar cambios",
      "¿Estás seguro de que quieres guardar los cambios?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Sí",
          onPress: () => {
            modifyBook(id, bookInfo)
              .then((updatedBook) => {
                console.log(updatedBook);
                navigation.goBack();
              })
              .catch((error) => {
                console.error(error);
              });
          },
        },
      ]
    );
  };

  if (!bookInfo) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View className="flex-1 items-center pt-10  bg-blue-950">
      <Stack.Screen
        options={{
          headerTitle: () => <Text></Text>,
          headerLeft: () => null,
        }}
      />
      <Text className="font-bold text-2xl pb-2 text-white">Editar libro</Text>

      <Text className="text-white text-xl font-semibold">Titulo</Text>
      <TextInput
        className="border border-gray-400 bg-white rounded-lg p-2 w-80 mb-2"
        value={bookInfo.titulo}
        onChangeText={(value) => handleChange("titulo", value)}
        placeholder="Introduce el título"
      />
      <Text className="text-white text-xl font-semibold">Páginas</Text>
      <TextInput
        className="border border-gray-400  bg-white rounded-lg p-2 w-80 mb-2"
        value={(bookInfo.paginas ?? "").toString()}
        onChangeText={(value) => handleChange("paginas", value)}
        placeholder="Introduce el número de páginas"
        keyboardType="numeric"
      />
      <Text className="text-white text-xl font-semibold">ISBN</Text>
      <TextInput
        className="border border-gray-400  bg-white rounded-lg p-2 w-80 mb-2"
        value={(bookInfo.ISBN ?? "").toString()}
        onChangeText={(value) => handleChange("ISBN", value)}
        placeholder="Introduce el ISBN"
        keyboardType="numeric"
      />
      <Text className="text-white text-xl font-semibold">Géneros</Text>
      <TextInput
        className="border border-gray-400  bg-white rounded-lg p-2 w-80 mb-2"
        value={bookInfo.genero}
        onChangeText={(value) => handleChange("genero", value)}
        placeholder="Introduce el géneros separados por comas ,"
      />
      <Text className="text-white text-xl font-semibold">
        Sinopsis: {(bookInfo.sinopsis ?? "").length} letras{" "}
      </Text>
      <TextInput
        className="border border-gray-400  bg-white rounded-lg p-2 w-80 mb-2"
        value={bookInfo.sinopsis}
        onChangeText={(value) => handleChange("sinopsis", value)}
        placeholder="Introduce la sinopsis"
      />

      {/* <Text>Portada</Text>
      <TextInput
        className="border border-gray-400 rounded-lg p-2 w-80 mb-2"
        value={bookInfo.caratula}
        onChangeText={(value) => handleChange("caratula", value)}
        placeholder="Introduce la URL de la portada"
      /> */}
      <Button title="Guardar cambios" onPress={handleSubmit} />
    </View>
  );
}
