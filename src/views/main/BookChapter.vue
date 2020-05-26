<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col class="d-flex flex-row justify-end">
          <v-btn @click="showTools = !showTools" depressed>v</v-btn>
        </v-col>
      </v-row>
      <v-row v-if="showTools">
        <v-col>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus magnam nostrum ea! Quos voluptates ratione quisquam quod, eum et exercitationem dolores quaerat consequuntur repellendus accusantium doloremque similique officiis accusamus.</v-col>
      </v-row>
    </v-container>
    <v-container v-for="book in bookDetail.data" :key="book.id_buku">
      <v-carousel height="300" hide-delimiters touchless :show-arrows="false">
        <v-carousel-item>
          <v-sheet color="white" height="100%" style="color:black;">
            <v-row class="fill-height" align="center" justify="center">
              <div
                class="display-3 font-weight-bold px-5"
              >{{ book.data_chapter[chapterArray].judul_chapter }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-row>
        <v-col style="position:relative;">
          <p class="headline">{{ book.data_chapter[chapterArray].isi_chapter }}</p>
          <div class="d-flex flex-row justify-space-between mt-12 mb-2">
            <v-btn
              v-if="chapterArray > 0"
              @click="chapterArray -= 1"
              depressed
              rounded
              style="position:absolute;bottom:0;left:0;margin:0 10px;"
            >prev</v-btn>
            <v-btn depressed style="position:absolute;bottom:0;left:45%;">{{ chapterArray + 1 }}</v-btn>
            <v-btn
              v-if="chapterArray < parseInt(book.data_chapter.length) - 1"
              @click="chapterArray += 1"
              depressed
              rounded
              style="position:absolute;bottom:0;right:0;margin:0 10px;"
            >next</v-btn>
          </div>
        </v-col>
      </v-row>
      <div class="mt-5" style="position:sticky;bottom:0;left:0;width:100%;">
        <div class="d-flex flex-column">
          <vuetify-audio
            :file="book.data_chapter[chapterArray].audio_chapter"
            :autoPlay="false"
            color="success"
          ></vuetify-audio>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BookChapter",
  components: {
    VuetifyAudio: () => import("vuetify-audio")
  },
  data() {
    return {
      chapterArray: 0,
      showTools: false
    };
  },
  computed: mapState({
    bookDetail: state => state.bookDetail
  }),
  created() {
    this.$store.dispatch("getBookDetailByID", this.$route.params.bookId);
  }
};
</script>

<style>
</style>