<template>
  <div class="mx-2">
    <MovieFullDetails />
    <div class="d-flex justify-center" v-if="isLoading">
      <v-progress-circular :size="150" :width="8" indeterminate class="mt-12" color="blue-darken-1">
      </v-progress-circular>
    </div>
    <div v-else-if="hasError">
      <v-alert colored-border type="error" elevation="2">
        {{ errorMessage }}
      </v-alert>
    </div>

    <div v-else>
      <v-alert elevation="1" type="info">
        {{ totalResults }} result{{
      totalResults == 1 ? "" : "s"
    }}
        found for the keyword "{{ searchText }}"
      </v-alert>

      <v-row>
        <v-col v-for="(movie, i) in movies" :key="i" cols="12" xl="2" lg="3" md="4" sm="12" xs="12">
          <MovieDetails :movie="movie" />
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination v-if="movieCount !== 0" v-model="page" :length="pageCount" :total-visible="7"
          @input="onPageChange"></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      page: 1,
      error: "",
    };
  },
  created() {
    this.searchMovie(1)
  },

  methods: {
    searchMovie(pageNumber) {
      this.$store.dispatch("fetchSearchedMovieTitleAsync", {
        movieTitle: this.searchText,
        page: pageNumber,
      });
    },
    onPageChange(pageNumber) {
      this.searchMovie(pageNumber)
    },
  },


computed: {
  hasError(){
    return !!this.$store.state.error
  },
  errorMessage(){
    return this.$store.state.error
  },
  isLoading(){
    return this.$store.state.loading
  },
  movieCount() {
    return this.$store.state.movies.length;
  },
    ...mapState([
    'movies', 'pageCount', 'totalResults', 'searchText'
  ])
}
};
</script>
