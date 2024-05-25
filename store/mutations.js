export default {
  setMovies(state, { movies }) {
    state.movies = movies || [];
  },
  setSelectedMovieFullDetails(state, { selectedMovieFullDetails }) {
    state.selectedMovieFullDetails = selectedMovieFullDetails || {};
  },
  setPageCount(state, { pageCount }) {
    state.pageCount = pageCount || 1;
  },
  setLoading(state, { loading }) {
    state.loading = loading || false;
  },
  setSearchtext(state, { searchText }) {
    if (!searchText) {
      return;
    }
    state.searchText = searchText || "";
  },
  setError(state, { error }) {
    state.error = error || "";
  },
  setTotalResults(state, { totalResults }) {
    state.totalResults = totalResults;
  },
};
