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
        <v-progress-linear v-model="underlineValue" color="#E76464"></v-progress-linear>
        <v-row class="my-6" v-if="loadSkeleton">
          <v-col v-for="n in 4" :key="n" lg="3" md="12" sm="12" cols="12" class="my-2">
            <v-skeleton-loader class="mx-auto" width="250" type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row class="my-6" v-else>
          <v-col
            v-for="n in bookBerandaAuth.buku_trending.slice(0, 4)"
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
        <h1 class="font-weight-black book-section-title">{{ sectionLink[1].sectionName }}</h1>
        <v-progress-linear v-model="underlineValue" color="#E76464"></v-progress-linear>
        <v-row class="my-6" v-if="loadSkeleton">
          <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" cols="12" class="my-2">
            <v-skeleton-loader class="mx-auto" width="350" type="list-item-avatar-three-line" tile></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row class="my-6" v-else>
          <v-col
            v-for="n in bookBerandaAuth.audio_new.slice(0, 4)"
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
        <v-progress-linear v-model="underlineValue" color="#E76464"></v-progress-linear>
        <v-row class="my-6" v-if="loadSkeleton">
          <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" cols="12" class="my-2">
            <v-skeleton-loader class="mx-auto" width="250" type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row class="my-6" v-else>
          <v-col
            v-for="n in bookBerandaAuth.buku_terbaru.slice(0, 4)"
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
		<SnackbarToast />
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
import SnackbarToast from "@/components/SnackbarToast.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "LandingUser",
  components: {
    NavbarSection,
    BookCard,
    LandingHeader,
    EpisodeCard,
	FooterSection,
	SnackbarToast
  },
  data: () => ({
    loadSkeleton: true,
	underlineValue: 15,
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
	...mapMutations(["showSnackbar", "closeSnackbar"]),
    bookSectionAction(event) {
      this.underlineValue = 100;
    }
  },
  computed: mapState({
    bookBerandaAuth: state => state.bookBerandaAuth
  }),
  created() {
    this.$store.dispatch("getBerandaBukuAuth");
    this.loadSkeleton = false;
  }
};
</script>

<style scoped lang="scss">
.landing--user-body {
  .book-section-title {
    letter-spacing: 1px;
    font-size: 22px;
	color: #E76464;
	text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
  }
}
</style>
