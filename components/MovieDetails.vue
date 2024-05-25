<template>
  <div>
    <v-card class="pa-6 text--primary" raised>
      <div>
        <v-img :src="movie.Poster" aspect-ratio="1" contain max-height="300">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" justify="center">
              <v-icon size="120">mdi-image-filter</v-icon>
            </v-row>
          </template>
        </v-img>
        <v-card-title class="title">{{ movie.Title }}</v-card-title>
        <v-card-subtitle class="mb-0 pb-0">
          Type: {{ movie.Type }}<br />
          Year: {{ movie.Year }}
        </v-card-subtitle>
        <v-card-text class="mt-1 pt-0">
          IMDB ID: {{ movie.imdbID }}
        </v-card-text>
        <v-card-actions>
          <v-btn @click="showMoreDetails" color="green"> Details </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: { movie: { type: Object, required: true } },
  methods: {
    showMoreDetails() {
      this.$store.dispatch("fetchMovieFullDetailsAsync", {
        IMDbID: this.movie.imdbID,
      });
    },
  },
};
</script>

<style scoped>
.title {
  word-break: break-word;
}
</style>
