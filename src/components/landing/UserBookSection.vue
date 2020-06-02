<template>
  <div>
    <NavbarSection />
    <v-container class="mt-12">
      <h2 class="font-weight-black book-section-title">{{this.$route.params.sectionName}}</h2>
      <v-progress-linear v-model="underlineValue"></v-progress-linear>
      <v-row>
        <div class="d-flex flex-column flex-lg-row justify-start align-center" v-if="loadSkeleton">
          <v-skeleton-loader v-for="n in 12" :key="n" type="card" width="250"></v-skeleton-loader>
        </div>
        <div class="d-flex flex-column flex-lg-row justify-start align-center" v-if="!loadSkeleton">
          <BookCard
            v-for="n in bookList.data.slice(0, booksToShow)"
            :key="n.id_buku"
            :idBuku="n.id_buku"
            :title="n.judul"
            :foto_sampul="n.foto_sampul"
            :deskripsi="n.deskripsi"
            :warna_kategori="n.warna_kategori"
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
            @click="booksToShow += 12"
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
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "UserBookSection",
  components: {
    NavbarSection,
    BookCard,
    FooterSection
  },
  data: () => ({
    loadSkeleton: true,
    underlineValue: 15,
    booksToShow: 12
  }),
  methods: {
    matchUrl() {
      const param = this.$route.params.sectionName;
      const match1 = param.match(/buku-trending/gi);
      //   const match2 = param.match(/aha-episodes/gi);
      const match3 = param.match(/buku-terbaru/gi);
      if (match1) {
        return this.$store.dispatch("getBookTrending");
      } else if (match3) {
        return this.$store.dispatch("getBookNew");
      }
    }
  },
  computed: mapState({
    bookList: state => state.bookList
  }),
  beforeMount() {
    this.matchUrl();
  },
  mounted() {
    this.loadSkeleton = false;
  }
};
</script>

<style scoped lang="scss">
.book-section-title {
  letter-spacing: 1px;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
}
</style>
