<template>
  <div class="category-page">
    <NavbarSection />
    <v-container fluid class="container-category-page px-0 py-0 mx-0 my-0">
      <template v-if="bookListByKategori.buku_populer && bookListByKategori.status == 1">
        <v-row>
          <v-col
            class="category-page-title text-center text-lg-left"
            :style="{'background-color': warnaKategori}"
          >
            <h1 class="my-12">{{ bookListByKategori.nama_kategori }}</h1>
          </v-col>
        </v-row>
        <v-row>
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
              :idBuku="parseInt(n.id_buku)"
              :title="n.judul"
              :foto_sampul="n.foto_sampul"
              :deskripsi="n.deskripsi"
              :penulis="n.penulis"
              :warna_kategori="n.border_buku"
              :kategori_buku="n.nama_kategori"
              :is_premium="n.is_premium"
              :isCollected="n.is_collected"
              :isFavorited="n.is_favorite"
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
              :idBuku="parseInt(n.id_buku)"
              :title="n.judul"
              :foto_sampul="n.foto_sampul"
              :deskripsi="n.deskripsi"
              :penulis="n.penulis"
              :warna_kategori="n.border_buku"
              :kategori_buku="n.nama_kategori"
              :is_premium="n.is_premium"
              :isCollected="n.is_collected"
              :isFavorited="n.is_favorite"
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
              style="text-transform:none;color:white;"
              @click="booksToShow += 3"
            >Lihat lebih banyak</v-btn>
          </v-col>
        </v-row>
        <v-row v-if="booksToShow == bookListByKategori.buku_terbaru.length">
          <v-col class="text-center d-flex flex-column justify-center align-center">
            <v-btn
              class="btnLihat"
              rounded
              color="#39DF8C"
              elevation="2"
              depressed
              style="text-transform:none;color:white;"
              @click="booksToShow -= 3"
            >Lihat lebih Sedikit</v-btn>
          </v-col>
        </v-row>
      </template>
      <template v-if="bookListByKategori && typeof bookListByKategori == 'string'">
        <v-row>
          <v-col lg="12" class="align-center justify-center text-center" style="margin: 100px 0;">
            <v-img
              src="@/assets/image/bookNotFound.svg"
              aspect-ratio="1"
              width="100px"
              height="100px"
              style="margin: auto auto;"
            ></v-img>
            <p class="my-3" style="color:#DDDDDD;">Buku tidak ditemukan</p>
          </v-col>
        </v-row>
      </template>
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
  mounted() {
    this.$store.dispatch("getBookByKategori", this.$route.params.idKategori);
  }
};
</script>

<style scoped lang="scss">
.category-page {
  .container-category-page {
    margin-top: -50px;
  }
  .category-page-title {
    margin-top: -50px;
    height: 150px;
    padding: 4px 14px;
    color: white;
    text-transform: uppercase;
    h1 {
      margin: 4% 0;
    }
    @media screen and (max-width: 860px) {
      margin-top: 0;
    }
  }
}
</style>
