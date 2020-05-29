<template>
  <div class="landing--user-body">
    <NavbarSection />
    <header>
      <v-container>
        <v-row>
          <v-col lg="6" md="12" sm="12" xs="12" class="d-flex justify-center align-center">
            <h1>Judul buku Lorem Ipsum</h1>
          </v-col>
          <v-col lg="6" md="12" sm="12" xs="12">
            <v-card class="book-card mx-auto" max-width="250" max-height="300" flat>
              <div class="book-card-color py-7">
                <v-img
                  class="book-card-img mx-auto"
                  width="120"
                  height="120"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </header>
    <section>
      <v-container>
        <router-link
          :to="{ name: 'UserBookSection', params: { sectionName: sectionLink[0].url }}"
          class="font-weight-black book-section-title"
        >{{ sectionLink[0].sectionName }}</router-link>
        <v-progress-linear v-model="underlineValue"></v-progress-linear>
        <div class="d-flex flex-row justify-start align-center" v-if="loadSkeleton">
          <v-skeleton-loader v-for="n in 4" :key="n" class="mx-auto" width="250" type="card"></v-skeleton-loader>
        </div>
        <div class="d-flex flex-column flex-lg-row justify-start align-center" v-if="!loadSkeleton">
          <BookCard
            v-for="n in bukuTrending.slice(0, 4)"
            :key="n.id_buku"
            :idBuku="n.id_buku"
            :title="n.judul"
            :foto_sampul="n.foto_sampul"
            :deskripsi="n.deskripsi"
            :warna_kategori="n.border_buku"
            :kategori_buku="n.nama_kategori"
          />
        </div>
        <router-link
          :to="{ name: 'UserBookSection', params: { sectionName: sectionLink[1].url }}"
          class="font-weight-black book-section-title"
        >{{ sectionLink[1].sectionName }}</router-link>
        <v-progress-linear v-model="underlineValue"></v-progress-linear>
        <div class="d-flex flex-row justify-start align-center" v-if="loadSkeleton">
          <div
            v-for="n in 4"
            :key="n"
            class="skeleton-episode-card d-flex flex-row justify-center mx-3 my-2"
          >
            <v-skeleton-loader class="mx-auto" width="150" type="card-heading"></v-skeleton-loader>
            <v-skeleton-loader class="mx-auto" width="50" type="avatar"></v-skeleton-loader>
          </div>
        </div>
        <div class="d-flex flex-column flex-lg-row justify-start align-center" v-if="!loadSkeleton">
          <EpisodeCard
            v-for="n in episodeNew.slice(0, 4)"
            :key="n.id_chapter"
            :episodeTitle="n.judul_chapter"
            :warna_episode="n.warna_kategori"
          />
        </div>
        <router-link
          :to="{ name: 'UserBookSection', params: { sectionName: sectionLink[2].url }}"
          class="font-weight-black book-section-title"
        >{{ sectionLink[2].sectionName }}</router-link>
        <v-progress-linear v-model="underlineValue"></v-progress-linear>
        <div class="d-flex flex-row justify-start align-center" v-if="loadSkeleton">
          <v-skeleton-loader v-for="n in 4" :key="n" class="mx-auto" width="250" type="card"></v-skeleton-loader>
        </div>
        <div class="d-flex flex-column flex-lg-row justify-start align-center" v-if="!loadSkeleton">
          <BookCard
            v-for="n in bukuNew.slice(0, 4)"
            :key="n.id_buku"
            :idBuku="n.id_buku"
            :title="n.judul"
            :foto_sampul="n.foto_sampul"
            :deskripsi="n.deskripsi"
            :warna_kategori="n.border_buku"
            :kategori_buku="n.nama_kategori"
          />
        </div>
      </v-container>
    </section>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import BookCard from "@/components/BookCard.vue";
import EpisodeCard from "@/components/EpisodeCard.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "LandingUser",
  components: {
    NavbarSection,
    BookCard,
    EpisodeCard,
    FooterSection
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
    bookSectionAction(event) {
      this.underlineValue = 100;
    }
  },
  computed: mapState({
    bukuTrending: state => state.bookListTrending,
    bukuNew: state => state.bookListNew,
    episodeNew: state => state.episodeListNew
  }),
  beforeMount() {
    this.$store.dispatch("getListBookTrending");
    this.$store.dispatch("getListBookNew");
	this.$store.dispatch("getListEpisodeNew");
	this.loadSkeleton = false;
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
