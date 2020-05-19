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
          to="/home/book-page"
          class="font-weight-black book-section-title"
          @click="bookSectionAction"
        >Trending Books</router-link>
        <v-progress-linear v-model="underlineValue"></v-progress-linear>
        <!-- <v-row class="my-9 justify-start align-center" no-gutters>
          <template>
            <v-col
              :key="n.id_buku"
              v-if="loadSkeleton"
              lg="3"
              md="6"
              sm="12"
              xs="12"
              class="my-5"
              style="max-width:300px;"
            >
              <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
            </v-col>
          </template>
        </v-row>-->
        <div class="d-flex flex-row justify-start align-center" v-if="loadSkeleton">
          <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
        </div>
        <div class="d-flex flex-column flex-lg-row justify-start align-center" v-if="!loadSkeleton">
          <BookCard
            v-for="n in bukuTrending.slice(0, 4)"
            :key="n.id_buku"
            :idBuku="n.id_buku"
            :title="n.judul"
            :deskripsi="n.deskripsi"
            :warna_kategori="n.border_buku"
            :kategori_buku="n.nama_kategori"
          />
        </div>
        <router-link
          to="/home/book-page"
          class="font-weight-black book-section-title"
          @click="bookSectionAction"
        >AHA Episodes</router-link>
        <v-progress-linear v-model="underlineValue"></v-progress-linear>
        <div class="d-flex flex-row justify-start align-center" v-if="loadSkeleton">
          <div class="skeleton-episode-card d-flex flex-row justify-space-between">
            <v-skeleton-loader class="mx-auto" max-width="100" type="card-heading"></v-skeleton-loader>
            <v-skeleton-loader class="mx-auto" max-width="40" type="avatar"></v-skeleton-loader>
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
          to="/home/book-page"
          class="font-weight-black book-section-title"
          @click="bookSectionAction"
        >Newest Books</router-link>
        <v-progress-linear v-model="underlineValue"></v-progress-linear>
        <div class="d-flex flex-row justify-start align-center" v-if="loadSkeleton">
          <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
        </div>
        <div class="d-flex flex-column flex-lg-row justify-start align-center" v-if="!loadSkeleton">
          <BookCard
            v-for="n in bukuNew.slice(0, 4)"
            :key="n.id_buku"
            :idBuku="n.id_buku"
            :title="n.judul"
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
    loadSkeleton: false,
    underlineValue: 15
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
  mounted() {
    this.$store.dispatch("getListBookTrending");
    this.$store.dispatch("getListBookNew");
    this.$store.dispatch("getListEpisodeNew");
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
