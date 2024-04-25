import {
  View,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchMovie } from "@/api/movie";
import { Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { addMovieToWatchList } from "@/api/watchlist";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const client = useQueryClient()
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", id],
    queryFn: () => fetchMovie(id),
  });

  const { mutate } = useMutation({
    mutationFn: () => addMovieToWatchList(id),
    onSuccess: () => {
      client.invalidateQueries(['watchlist'])
    }
  });

  if (isLoading) {
    return <ActivityIndicator size={"large"} />;  
  }
  if (error) {
    return <Text style={{ color: "#fff" }}>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: movie.title }} />
      <Image
        style={styles.image}
        source={{ uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.watchListContainer}>
          <Pressable onPress={() => mutate()} style={styles.addWatchListBtn}>
            <FontAwesome name="bookmark-o" size={24} color="black" />
            <Text>Add to watchlist</Text>
          </Pressable>
        </View>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
  },
  titleContainer: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  overview: {
    fontSize: 16,
  },
  watchListContainer: {
    marginVertical: 10,
  },
  addWatchListBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
