import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const MovieListItem = ({ movie }: any) => {
  return (
    <Link href={`/${movie.id}`} asChild>
      <TouchableOpacity style={styles.itemContainer}>
        <Image
          style={styles.itemImage}
          source={{
            uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
          }}
        />
      </TouchableOpacity>
    </Link>
  );
};

export default MovieListItem;
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    // padding: 10,
  },
  itemImage: {
    width: "100%",
    aspectRatio: 3 / 5,
    borderRadius: 20,
  },
});
