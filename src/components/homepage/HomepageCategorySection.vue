<template>
  <v-container>
    <v-row class="kategori-desc mx-auto" style="max-width:900px;">
      <v-col lg="6" md="12" sm="12" cols="12">
        <h1 style="width:400px;">Kategori yang sering di cari</h1>
        <div class="title-underline d-flex flex-row justify-start" style="margin-left: -4px;">
          <img class="mx-2" src="@/assets/image/underline-1.svg" height="8" />
          <img src="@/assets/image/underline-2.svg" height="8" />
        </div>
      </v-col>
      <v-col lg="6" md="12" sm="12" cols="12">
        <p>
          Dari kategori A-Z kami telah menyortirnya untuk
          Anda. Manfaatkan akses tak terbatas ke seluruh
          kategori yang ada.
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center align-center my-10">
      <v-col class="col-kategori-chip d-flex flex-row justify-center align-center">
        <v-btn text height="100px">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-card class="chip-card py-7 px-10" flat outlined>
          <v-chip
            class="btn-chip-main mx-1 my-1"
            v-for="n in daftarKategoriNoAuth"
            :key="n.id_daftar_kategori"
            @click="gotoKategori(n.id_daftar_kategori)"
            filter
            outlined
            link
            :color="n.warna_kategori"
          >{{ n.nama_kategori }}</v-chip>
        </v-card>
        <v-btn text height="100px">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="loadSkeleton">
      <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" cols="12" class="my-2">
        <v-skeleton-loader class="mx-auto" width="250" type="card"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row style="margin:0 auto;max-width:900px;">
      <v-col>
        <h1 style="color:#6c3f72;">Terpopuler di Kategori Semua</h1>
        <div class="title-underline d-flex flex-row justify-start" style="margin-left: -4px;">
          <img class="mx-2" src="@/assets/image/underline-1.svg" height="8" />
          <img src="@/assets/image/underline-2.svg" height="8" />
        </div>
      </v-col>
    </v-row>
    <v-row v-if="!loadSkeleton" style="margin:0 auto;max-width:800px;">
      <v-col
        v-for="n in bookListTrendingNoAuth.slice(0, booksToShow)"
        :key="n.id_buku"
        lg="4"
        md="12"
        sm="12"
        cols="12"
        class="my-2"
      >
        <BookCard
          :idBuku="parseInt(n.id_buku)"
          :title="n.judul"
          :foto_sampul="n.foto_sampul"
          :deskripsi="n.deskripsi"
          :penulis="n.penulis"
          :warna_kategori="n.warna_kategori"
          :kategori_buku="n.nama_kategori"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center d-flex flex-column justify-center align-center">
        <v-btn
          class="btnLihat"
          rounded
          color="#39DF8C"
          elevation="2"
          depressed
          v-if="booksToShow < parseInt(bookListTrendingNoAuth.length)"
          @click="booksToShow += 4"
        >Lihat lebih banyak</v-btn>
        <v-btn
          class="btnLihat"
          rounded
          color="#39DF8C"
          elevation="2"
          depressed
          v-else
          @click="booksToShow = 6"
        >Lihat lebih sedikit</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import { mapState } from "vuex";

export default {
  name: "HomepageCategorySection",
  components: {
    BookCard
  },
  data: () => ({
    loadSkeleton: false,
    booksToShow: 6
  }),
  computed: mapState({
    daftarKategoriNoAuth: state => state.daftarKategoriNoAuth,
    bookListTrendingNoAuth: state => state.bookListTrendingNoAuth
  }),
  methods: {
    gotoKategori(idKategori) {
      this.$router.push({
        name: "CategoryPage",
        params: { idKategori: idKategori }
      });
    }
  },
  created() {
    this.$store.dispatch("getKategoriNoAuth");
    this.$store.dispatch("getListBookTrendingNoAuth");
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";
.kategori-desc {
  h1 {
    font-size: 38px;
    color: #d84b5b;
    font-weight: 700;
  }
  p {
    letter-spacing: 1px;
  }
}
.col-kategori-chip {
  max-width: 500px;
  .chip-card {
    border-top: none;
    border-bottom: none;
  }
}
.btnLihat {
  @include btn-main-green();
  width: 20%;
}
.btn-chip-main {
  @include btn-chip-main();
}
</style>
