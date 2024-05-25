<template>
  <v-dialog v-model="dialog" overlay-color="black" overlay-opacity="0.7">
    <v-card v-if="dialog" raised dark max-height="2000px">
      <v-row justify="space-between" max-height="2000px"  style="width: 100%;">
        <v-col xl="4" lg="4" md="4" sm="12" xs="12">
          <v-img :src="selectedMovieFullDetails.Poster" contain class="fill-width" max-height="520">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" justify="center" height="150" weight="150">
                <v-icon size="120">mdi-image-filter</v-icon>
              </v-row>
            </template>
          </v-img>
        </v-col>
        <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12">
          <div class="justify-space-between">
            <v-card-title style="word-break: break-word">
              <h1>{{ selectedMovieFullDetails.Title }}</h1>
            </v-card-title>
            <span v-for="(key, i) in Object.keys(
    selectedMovieFullDetails
  )" :key="i">
              <div v-if="key === 'Ratings' &&
    selectedMovieFullDetails['Ratings'].length > 0
    " class="ma-2">
                <span class="font-italic font-weight-bold">Ratings: </span>
                <span v-for="(rate, k) in selectedMovieFullDetails[
    'Ratings'
  ]" :key="k">
                  <span class="font-italic">{{ rate.Source }}: </span>
                  {{ rate.Value }} |
                </span>
              </div>
              <div v-else-if="key !== 'Poster' &&
    key !== 'Title' &&
    key !== 'Response' &&
    key !== 'Ratings'
    " class="ma-2">
                <span class="font-italic font-weight-bold">{{ key }}: </span>
                {{ selectedMovieFullDetails[key] }}
              </div>
            </span>
            <v-card-actions>
              <v-btn @click="dialog = false" color="orange"> Close </v-btn>
            </v-card-actions>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      dialog: false,
    };
  },// style="overflow-x: hidden; overflow-y: hidden;"
  created() {
    this.$store.watch(
      (state) => state.selectedMovieFullDetails,
      (newValue, oldValue) => {
        if (Object.keys(newValue).length !== 0) {
          this.dialog = true;
        }
      }
    );
  },
  computed: {
    ...mapState([
      'selectedMovieFullDetails'
    ])
  }

};
</script>