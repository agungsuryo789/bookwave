<template>
  <v-container>
    <v-row class="kategori-desc">
      <v-col lg="6" md="12" sm="12" cols="12">
        <h1>Kategori yang sering di cari</h1>
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
      <v-col class="col-kategori-chip">
        <v-card class="py-2 px-2" flat hover outlined>
          <v-chip
            class="btn-chip-main mx-1 my-1"
            v-for="n in daftarKategori"
            :key="n.id_daftar_kategori"
            @click="gotoKategori(n.id_daftar_kategori)"
            filter
            outlined
            link
            :color="n.warna_kategori"
          >{{ n.nama_kategori }}</v-chip>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="my-9 justify-center align-center" no-gutters>
      <div class="d-flex flex-column flex-lg-row justify-start align-center" v-if="!loadSkeleton">
        <BookCard
          v-for="n in bookListTrending.slice(0, booksToShow)"
          :key="n.id_buku"
          :idBuku="n.id_buku"
          :title="n.judul"
          :foto_sampul="n.foto_sampul"
          :deskripsi="n.deskripsi"
          :warna_kategori="n.border_buku"
          :kategori_buku="n.nama_kategori"
        />
      </div>
    </v-row>
    <v-row>
      <v-col class="text-center d-flex flex-column justify-center align-center">
        <v-btn
          class="btnLihat"
          rounded
          color="#39DF8C"
          elevation="2"
          depressed
          v-if="booksToShow < parseInt(bookListTrending.length)"
          @click="booksToShow += 3"
        >Lihat lebih banyak</v-btn>
        <v-btn
          class="btnLihat"
          rounded
          color="#39DF8C"
          elevation="2"
          depressed
          v-else
          @click="booksToShow -= 3"
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
    booksToShow: 3
  }),
  computed: mapState({
    daftarKategori: state => state.daftarKategori,
    bookListTrending: state => state.bookListTrending
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
    this.$store.dispatch("getKategori");
    this.$store.dispatch("getListBookTrending");
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
  max-width: 400px;
}
.btnLihat {
  @include btn-main-green();
  width: 20%;
}
.btn-chip-main {
  @include btn-chip-main();
}
</style>
