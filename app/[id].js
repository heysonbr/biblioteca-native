import { Link } from "expo-router";
import { Image, Pressable, Text, View, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

import { fetchBookInfo } from "../lib/libreria";
import { deleteBook } from "../lib/libreria";

import { ActivityIndicator } from "react-native";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [bookInfo, setBookInfo] = useState(null);

  useEffect(() => {
    fetchBookInfo(id, setBookInfo);
  }, [id]);

  return (
    <View className="flex-1 pt-3 px-16  items-center ">
      <Stack.Screen
        options={{
          headerTitle: bookInfo?.titulo,
          headerLeft: () => null,
        }}
      />

      {bookInfo === null ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <View className="pt-4">
          <View className="flex-row">
            <Image
              source={{ uri: bookInfo.caratula }}
              resizeMode="cover"
              className="rounded-lg h-80 w-64"
            />
          </View>
          <View>
            <Text className="text-black font-bold">
              Autor:{bookInfo?.escritor}
            </Text>
            <Text className="text-black font-bold">
              Genero:{bookInfo?.genero}
            </Text>
            <Text className="text-black font-bold">ISBN:{bookInfo?.ISBN}</Text>
            <Text className="text-black font-bold">
              Sinopsis: {bookInfo?.sinopsis}
            </Text>
          </View>
          <View className="flex-row gap-6 items-center justify-center pt-8">
            <Pressable className="bg-blue-500 rounded-lg p-2 mt-4">
              <Text className="text-white">Editar</Text>
            </Pressable>

            <Pressable
              className="bg-red-500 rounded-lg p-2 mt-4"
              onPress={() => {
                deleteBook(id)
                  .then((books) => {
                    // Aquí puedes manejar la respuesta
                    console.log(books);
                  })
                  .catch((error) => console.error(error));
              }}
            >
              <Text className="text-white">Borrar</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}
