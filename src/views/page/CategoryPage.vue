<template>
  <div class="category-page">
    <NavbarSection />
    <v-container fluid class="px-0 py-0 mx-0 my-0">
      <v-row>
        <v-col class="category-page-title">
          <h1>{{ bookListByKategori.nama_kategori }}</h1>
        </v-col>
      </v-row>
      <div class="d-flex flex-row justify-start align-center" v-if="loadSkeleton">
        <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
      </div>
      <div class="d-flex flex-column flex-lg-row justify-start align-center" v-if="!loadSkeleton">
        <BookCard
          v-for="n in bookListByKategori.buku_populer.slice(0, 4)"
          :key="n.id_buku"
          :idBuku="n.id_buku"
          :title="n.judul"
          :deskripsi="n.deskripsi"
          :warna_kategori="n.border_buku"
          :kategori_buku="n.nama_kategori"
        />
      </div>
      <div class="d-flex flex-column flex-lg-row justify-start align-center" v-if="!loadSkeleton">
        <BookCardSmall
          v-for="n in bookListByKategori.buku_terbaru.slice(0, booksToShow)"
          :key="n.id_buku"
          :idBuku="n.id_buku"
          :title="n.judul"
          :deskripsi="n.deskripsi"
          :warna_kategori="n.border_buku"
          :kategori_buku="n.nama_kategori"
        />
      </div>
      <v-row>
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
      booksToShow: 9,
      kategoriId: this.$store.state.kategoriId
    };
  },
  computed: mapState({
    bookListByKategori: state => state.bookListByKategori
  }),
  mounted() {
    this.$store.dispatch("getBookByKategori", this.kategoriId);
  }
};
</script>

<style scoped lang="scss">
.category-page {
  .category-page-title {
    height: 150px;
    padding: 4px 14px;
    background-color: #8edf00;
    color: white;
    text-transform: uppercase;
    h1 {
      margin: 4% 0;
    }
  }
}
</style>
