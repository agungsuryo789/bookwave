<template>
  <div class="landing--user-body">
    <NavbarSection />
    <header>
      <LandingHeader />
    </header>
    <section>
      <v-container>
        <router-link
          :to="{ name: 'LandingBookSection', params: { sectionName: sectionLink[0].url }}"
          class="font-weight-black book-section-title"
        >{{ sectionLink[0].sectionName }}</router-link>
        <v-progress-linear v-model="underlineValue"></v-progress-linear>
        <v-row v-if="loadSkeleton">
          <v-col v-for="n in 4" :key="n" lg="3" md="12" sm="12" cols="12" class="my-2">
            <v-skeleton-loader class="mx-auto" width="250" type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col
            v-for="n in bookTrending.slice(0, 4)"
            :key="n.id_buku"
            lg="3"
            md="6"
            sm="6"
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
        <router-link
          :to="{ name: 'LandingBookSection', params: { sectionName: sectionLink[1].url }}"
          class="font-weight-black book-section-title"
        >{{ sectionLink[1].sectionName }}</router-link>
        <v-progress-linear v-model="underlineValue"></v-progress-linear>
        <v-row v-if="loadSkeleton">
          <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" cols="12" class="my-2">
            <v-skeleton-loader class="mx-auto" width="350" type="list-item-avatar-three-line" tile></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col
            v-for="n in episodeNew.slice(0, 4)"
            :key="n.id_chapter"
            lg="3"
            md="6"
            sm="6"
            cols="12"
            class="my-2"
          >
            <EpisodeCard
              :idBuku="parseInt(n.id_buku)"
              :idChapter="parseInt(n.id_chapter)"
              :episodeTitle="n.judul_chapter"
              :foto_sampul="n.foto_sampul"
              :warna_episode="n.warna_kategori"
            />
          </v-col>
        </v-row>
        <router-link
          :to="{ name: 'LandingBookSection', params: { sectionName: sectionLink[2].url }}"
          class="font-weight-black book-section-title"
        >{{ sectionLink[2].sectionName }}</router-link>
        <v-progress-linear v-model="underlineValue"></v-progress-linear>
        <v-row v-if="loadSkeleton">
          <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" cols="12" class="my-2">
            <v-skeleton-loader class="mx-auto" width="250" type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col
            v-for="n in bukuNew.slice(0, 4)"
            :key="n.id_buku"
            lg="3"
            md="6"
            sm="6"
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
		<v-snackbar v-model="snackbar" :timeout="timeout">Berhasil Masuk. Happy Reading! ^_^
        <v-btn color="blue" text @click="snackbar=false">Close</v-btn>
      </v-snackbar>
      </v-container>
    </section>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import BookCard from "@/components/BookCard.vue";
import LandingHeader from "@/components/landing/LandingHeader.vue";
import EpisodeCard from "@/components/EpisodeCard.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "LandingUser",
  components: {
    NavbarSection,
    BookCard,
    LandingHeader,
    EpisodeCard,
    FooterSection
  },
  data: () => ({
    loadSkeleton: true,
	underlineValue: 15,
	snackbar: false,
	timeout: 2000,
    sectionLink: [
      {
        sectionName: "Buku Trending",
        url: "buku-trending"
      },
      {
        sectionName: "Aha Episodes",
        url: "aha-episodes"
      },
      {
        sectionName: "Buku Terbaru",
        url: "buku-terbaru"
      }
    ]
  }),
  methods: {
    bookSectionAction(event) {
      this.underlineValue = 100;
    }
  },
  computed: mapState({
    bookTrending: state => state.bookTrending,
    bukuNew: state => state.bookListNew,
    episodeNew: state => state.episodeListNew
  }),
  mounted() {
    this.$store.dispatch("getBookTrending");
    this.$store.dispatch("getListBookNew");
    this.$store.dispatch("getListEpisodeNew");
	this.loadSkeleton = false;
	window.document.title = "Home";
  }
};
</script>

<style scoped lang="scss">
.landing--user-body {
  .book-section-title {
    letter-spacing: 1px;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
  }
}
</style>
