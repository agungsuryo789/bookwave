<template>
  <div class="category-page">
    <NavbarSection />
    <v-container fluid class="px-0 py-0 mx-0 my-0">
      <v-row>
        <v-col class="category-page-title" :style="{'background-color': warnaKategori}">
          <h1>{{ bookListByKategori.nama_kategori }}</h1>
        </v-col>
      </v-row>
      <v-row v-if="loadSkeleton">
        <v-col v-for="n in 4" :key="n" lg="3" md="12" sm="12" xs="12" class="my-2">
          <v-skeleton-loader class="mx-auto" width="250" type="card"></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col
          v-for="n in bookListByKategori.buku_populer.slice(0, 4)"
          :key="n.id_buku"
          lg="3"
          md="6"
          sm="6"
          xs="12"
          class="my-2"
        >
          <BookCard
            :key="n.id_buku"
            :idBuku="n.id_buku"
            :title="n.judul"
            :foto_sampul="n.foto_sampul"
            :deskripsi="n.deskripsi"
            :penulis="n.penulis"
            :warna_kategori="n.border_buku"
            :kategori_buku="n.nama_kategori"
          />
        </v-col>
      </v-row>
      <v-row v-if="loadSkeleton">
        <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" xs="12" class="my-2">
          <v-skeleton-loader class="mx-auto" width="250" type="card"></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row class="px-3" v-else>
        <v-col
          v-for="n in bookListByKategori.buku_terbaru.slice(0, booksToShow)"
          :key="n.id_buku"
          lg="4"
          md="6"
          sm="6"
          xs="12"
          class="my-2"
        >
          <BookCardSmall
            :key="n.id_buku"
            :idBuku="n.id_buku"
            :title="n.judul"
            :foto_sampul="n.foto_sampul"
            :deskripsi="n.deskripsi"
            :penulis="n.penulis"
            :warna_kategori="n.border_buku"
            :kategori_buku="n.nama_kategori"
          />
        </v-col>
      </v-row>
      <v-row v-if="bookListByKategori.buku_terbaru.length > booksToShow">
        <v-col class="text-center d-flex flex-column justify-center align-center">
          <v-btn
            class="btnLihat"
            rounded
            color="#39DF8C"
            elevation="2"
            depressed
            @click="booksToShow += 3"
          >Lihat lebih banyak</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import BookCard from "@/components/BookCard.vue";
import BookCardSmall from "@/components/BookCardSmall.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "CategoryPage",
  components: {
    BookCard,
    BookCardSmall,
    NavbarSection,
    FooterSection
  },
  data() {
    return {
      loadSkeleton: false,
      booksToShow: 9
    };
  },
  computed: mapState({
    bookListByKategori: state => state.bookListByKategori,
    warnaKategori: state => state.bookListByKategori.warna_kategori
  }),
  created() {
    this.$store.dispatch("getBookByKategori", this.$route.params.idKategori);
  }
};
</script>

<style scoped lang="scss">
.category-page {
  .category-page-title {
    height: 150px;
    padding: 4px 14px;
    color: white;
    text-transform: uppercase;
    h1 {
      margin: 4% 0;
    }
  }
}
</style>
