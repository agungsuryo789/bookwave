<template>
  <v-container>
    <div v-for="item in bookTrending.slice(0, 1)" :key="item.id_buku">
      <v-row justify="center" align="center">
        <v-col
          lg="6"
          md="6"
          sm="12"
          cols="12"
          class="d-flex justify-center align-center"
          style="margin:0 auto;"
        >
          <h1>{{ item.judul }}</h1>
        </v-col>
        <v-col lg="6" md="6" sm="12" cols="12" style="margin:0 auto;">
          <BookCard
            :idBuku="parseInt(item.id_buku)"
            :foto_sampul="item.foto_sampul"
            :warna_kategori="item.warna_kategori"
          />
        </v-col>
      </v-row>
    </div>
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
    bookTrending: state => state.bookTrending
  }),
  created() {
    this.$store.dispatch("getBookTrending");
  }
};
</script>

<style>
</style>