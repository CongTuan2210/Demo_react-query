import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { fetchTopRatedMovies } from "@/api/movie";
import { useQuery } from "@tanstack/react-query";
import MovieListItem from "@/components/MovieListItem";

export default function TabOneScreen() {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchTopRatedMovies,
  });

  console.log("query data:", data);

  if (isLoading) {
    return <ActivityIndicator size={"large"} />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        contentContainerStyle={{gap: 5}}
        columnWrapperStyle={{gap: 5, paddingHorizontal: 5}}
        renderItem={({ item }) => <MovieListItem movie={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
 
});
