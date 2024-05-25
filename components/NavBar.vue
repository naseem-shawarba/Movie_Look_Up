<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title>
        <a href="/" class="title">{{ title }}</a>
      </v-toolbar-title>
      <v-spacer />

      <span v-if="$route.path === '/'">
        <v-text-field v-model="search" @keyup.enter="searchMovie" single-line label="Lookup Movies"
          :loading="$store.state.loading" clearable append-icon="mdi-magnify" @click:append="searchMovie"
          class="mt-4 mr-4"></v-text-field>
      </span>
    </v-app-bar>
    {{ searchText }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Movie Look Up",
      search: ""
    };
  },
  methods: {
    searchMovie() {
      this.$store.commit("setSearchtext", { searchText: this.search });
      this.$store.dispatch("fetchSearchedMovieTitleAsync", {
        movieTitle: this.search,
        page: 1,
      });
    },
  },
  mounted() {
    this.search = this.searchText
  },
  computed: {
    searchText() {
      return this.$store.state.searchText;
    }
  },
};
</script>

<style scoped>
.title {
  text-decoration: none;
  color: inherit;
  font-size: inherit;
}
</style>
