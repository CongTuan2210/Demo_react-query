
export const fetchWatchListMovies = async() => {
    const url =
      "https://api.themoviedb.org/3/account/21225072/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGU5NDhlOTMzNTViM2MwODVhOWIyNWIwMmJlMjEyNyIsInN1YiI6IjY2MjQxNmRhY2I2ZGI1MDE4NmFlMWMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NfO14oR7RLVC7-xYtHHf3148pO21jRy5XLPMW2brTRg",
      },
    };
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }
    const json = await res.json();
    return json.results
}

export const addMovieToWatchList = async (movieId: number) => {
    const url = "https://api.themoviedb.org/3/account/21225072/watchlist";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGU5NDhlOTMzNTViM2MwODVhOWIyNWIwMmJlMjEyNyIsInN1YiI6IjY2MjQxNmRhY2I2ZGI1MDE4NmFlMWMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NfO14oR7RLVC7-xYtHHf3148pO21jRy5XLPMW2brTRg",
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: movieId,
        watchlist: true,
      }),
    };
    const res = await fetch(url, options)
    if (!res.ok) {
        throw new Error("Failed to fetch movies")
    }
    const json = await res.json()
    return json
}