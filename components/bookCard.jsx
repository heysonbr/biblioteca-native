import { View, Text, Image, StyleSheet, Animated, Pressable } from "react-native";
import { useRef, useEffect } from "react";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function BookCard({ book, index }) {
  return (
    <Link href={`/${book.id}`} asChild>
      <StyledPressable className="active:opacity-50 active:border-y-2 ctive:border-black">
        <View key={book.id} style={styles.stepContainer} className="bg-white/60">
          {index % 2 === 0 ? (
            <>
              <Image
                source={{ uri: book.caratula }}
                style={styles.caratula}
                resizeMode="cover"
              />
              <View style={[styles.datos, { justifyContent: 'flex-start' }]}>
                <Text style={styles.titulo}>{book.titulo}</Text>
                <Text>{book.escritor}</Text>
                <Text>{book.genero}</Text>
                <Text>ISBN: {book.ISBN}</Text>
              </View>
            </>
          ) : (
            <>
              <View style={[styles.datos, { justifyContent: 'flex-end' }]}>
                <Text style={styles.titulo}>{book.titulo}</Text>
                <Text>{book.escritor}</Text>
                <Text>{book.genero}</Text>
                <Text>ISBN: {book.ISBN}</Text>
              </View>
              <Image
                source={{ uri: book.caratula }}
                style={styles.caratula}
                resizeMode="cover"
              />
            </>
          )}
        </View>
      </StyledPressable>
    </Link>
  );
}


export function AnimatedBookCard({ book, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <BookCard book={book} index={index} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,

    borderRadius: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  datos: {
    width: "70%",
    paddingLeft: 30,
    paddingRight: 30,
  },
  caratula: {
    width: "30%",
    height: 180,
    borderRadius: 20,
    overflow: "hidden",
  },
});
