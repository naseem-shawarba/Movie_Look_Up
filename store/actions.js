// TO-DO move the apikey to a .env file
const apikey = process.env.API_KEY; // process.env.API_KEY
import axios from "axios";
export default {
  async fetchMovieFullDetailsAsync({ commit }, { IMDbID }) {
    commit("setLoading", { loading: true });
    commit("setError", { error: "" });
    commit("setSelectedMovieFullDetails", { selectedMovieFullDetails: {} });
    let route = `https://www.omdbapi.com/?i=${IMDbID}&plot=full&apikey=${apikey}`;
    try {
      let {data} = await axios.get(route);

      if (data.Response === "True") {
        commit("setSelectedMovieFullDetails", {
          selectedMovieFullDetails: data,
        });
      } else {
        throw new Error("Couldn't fetch full movie Details")
      }
    } catch (err) {
      commit("setError", { error: err });
    }

    commit("setLoading", { loading: false });
  },
  async fetchSearchedMovieTitleAsync({ commit }, { movieTitle, page }) {
    if (!movieTitle) {
      return;
    }
    commit("setLoading", { loading: true });
    commit("setError", { error: "" });
    commit("setMovies", { movies: [] });
    commit("setPageCount", { pageCount: 1 });
    commit("setTotalResults", { totalResults: 0 });

    const route = `https://www.omdbapi.com/?s=${movieTitle}&page=${page}&apikey=${apikey}`;
    try {
      let {data} = await axios.get(route);

      if (data.Response === "True") {
        commit("setMovies", { movies: data.Search });
        commit("setTotalResults", { totalResults: data.totalResults });
        commit("setPageCount", {
          pageCount: Math.ceil(parseInt(data.totalResults) / 10),
        }); // each request returns 10 movies
        
      } else {
        throw new Error("couldn't find movies :(");
      }
    } catch (err) {
      commit("setError", { error: err });
    }
    commit("setLoading", { loading: false });
  },
};
