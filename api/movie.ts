const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGU5NDhlOTMzNTViM2MwODVhOWIyNWIwMmJlMjEyNyIsInN1YiI6IjY2MjQxNmRhY2I2ZGI1MDE4NmFlMWMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NfO14oR7RLVC7-xYtHHf3148pO21jRy5XLPMW2brTRg";

export const fetchTopRatedMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + apiKey,
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Failed to fetching movies");
  }
  const json = await response.json();
  return json.results;
};

export const fetchMovie = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + apiKey,
    },
  };
  const response = await fetch(url, options);
  if(!response.ok) {
    throw new Error('Failed to fetch movie!')
  }
  const json = await response.json();
  return json
};


