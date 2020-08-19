<template>
  <div class="category-page">
    <NavbarSection />
    <v-container fluid class="container-category-page py-0 mx-0 my-0">
      <template v-if="bookListByKategori.buku_terbaru">
        <v-row>
          <v-col class="category-page-title text-center text-lg-left" :style="cssVars">
            <div class="ml-lg-3 my-12">
              <h1 class="my-0 py-0">Discover books on {{ bookListByKategori.nama_kategori }}</h1>
              <small>
                Everything you need to know about the different forms of goverments, as well as current and historical
                political events- we’ve got you covered.
              </small>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="d-flex flex-row" style="width:80%;">
              <v-btn icon class="icon-search my-4">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-text-field
                v-model="payload.search"
                @keyup="liveFilter"
                tabindex="0"
                clearable
                label="Filter by Title/Author"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="n in bookListByKategori.buku_terbaru.slice(0, booksToShow)"
            :key="n.id_buku"
            lg="4"
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
              :warna_kategori="n.warna_sub"
              :warna_border="n.warna_utama"
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
      <template v-if="searchResponse == 422">
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
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "CategoryPage",
  components: {
    BookCard,
    NavbarSection,
    FooterSection
  },
  data() {
    return {
      loadSkeleton: false,
      booksToShow: 6,
      payload: {
        id_kategori: this.$route.params.idKategori,
        search: ""
      }
    };
  },
  methods: {
    liveFilter() {
      this.$store.dispatch("getBookByKategoriFilter", this.payload);
    }
  },
  computed: mapState({
    bookListByKategori: state => state.bookListByKategori,
    daftarKategoriAuth: state => state.bookListByKategori,
    searchResponse: state => state.searchResponse,
    warnaKategori: state => state.bookListByKategori.warna_kategori,
    cssVars() {
      return {
        backgroundImage: "url(" + this.bookListByKategori.banner_image + ")"
      };
    }
  }),
  mounted() {
    this.$store.dispatch("getBookByKategori", this.$route.params.idKategori);
    this.$store.dispatch("getDaftarKategoriAuth");
  }
};
</script>

<style scoped lang="scss">
.category-page {
  .container-category-page {
    margin-top: -50px;
    padding: 0 6%;
  }
  .category-page-title {
    margin-top: -50px;
    height: 200px;
    padding: 30px 14px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    h1 {
      text-transform: uppercase;
    }
    div {
      position: relative;
    }
    h1 {
      margin: 4% 0;
    }
    @media screen and (max-width: 860px) {
      margin-top: 0;
    }
  }
}
</style>
