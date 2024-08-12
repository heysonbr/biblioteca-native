import { Link } from "expo-router";
import { Image, Pressable, Text, View, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import { useEffect, useState, useCallback } from "react";
import { DevSettings } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { fetchBookInfo } from "../lib/libreria";
import { deleteBook } from "../lib/libreria";

import { ActivityIndicator } from "react-native";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [bookInfo, setBookInfo] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchBookInfo(id, setBookInfo);
  }, [id]);

  useFocusEffect(
    useCallback(() => {
      fetchBookInfo(id, setBookInfo);
      return () => {};
    }, [fetchBookInfo])
  );

  return (
    <View className="flex-1 pt-3 px-16  items-center bg-blue-950">
      <Stack.Screen
        options={{
          headerTitle: bookInfo?.titulo,
          headerLeft: () => null,
        }}
      />

      {bookInfo === null ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <View className="pt-4 flex-1 items-center">
          <View className="flex-row pb-4 h-80 w-64 items-center ">
            <Image
              source={{ uri: bookInfo.caratula }}
              resizeMode="contain"
              className="rounded-lg h-full w-full border-2 border-white/70 bg-white/30"
            />
          </View>
          <View className="gap-2">
            <Text className="text-white font-bold">
              Autor:{bookInfo?.escritor}
            </Text>
            <Text className="text-white font-bold">
              Paginas:{bookInfo?.paginas}
            </Text>
            <Text className="text-white font-bold">
              Genero:{bookInfo?.genero}
            </Text>
            <Text className="text-white font-bold">ISBN:{bookInfo?.ISBN}</Text>
            <Text className="text-white font-bold">
              Sinopsis: {bookInfo?.sinopsis}
            </Text>
          </View>
          <View className="flex-row gap-6 items-center justify-center pt-8">
            <Pressable className="bg-blue-500 rounded-lg p-2 mt-4">
              <Link href={`/edit/${bookInfo.id}`} className="text-white">
                Editar
              </Link>
            </Pressable>
            <Pressable
              className="bg-red-500 rounded-lg p-2 mt-4"
              onPress={() => {
                // deleteBook(id);

                Alert.alert(
                  "Borrar libro",
                  "¿Estás seguro de que quieres borrar este libro?",
                  [
                    {
                      text: "No",
                      style: "cancel",
                    },
                    {
                      text: "Sí",
                      onPress: () => {
                        deleteBook(id)
                          .then(() => {
                            navigation.goBack();
                          })
                          .catch((error) => console.error(error));
                      },
                    },
                  ]
                );
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
