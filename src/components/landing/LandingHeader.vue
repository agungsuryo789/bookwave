<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col
        lg="6"
        md="6"
        sm="12"
        cols="12"
        class="d-flex justify-center align-center"
        style="margin:0 auto;"
      >
        <h1>{{ bookTrending.judul }}</h1>
      </v-col>
      <v-col lg="6" md="6" sm="12" cols="12" style="margin:0 auto;">
        <BookCard
          :idBuku="parseInt(bookTrending.id_buku)"
          :foto_sampul="bookTrending.foto_sampul"
          :warna_kategori="bookTrending.warna_kategori"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import { mapState } from "vuex";
export default {
  name: "LandingHeader",
  components: {
    BookCard
  },
  computed: mapState({
    bookTrending: state => state.bookTrending[0]
  }),
  created() {
    this.$store.dispatch("getBookTrending");
  }
};
</script>

<style>
</style>