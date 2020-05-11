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
        <v-row class="my-9 justify-start align-center" no-gutters>
          <template v-for="n in 4">
            <v-col
              :key="n"
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
            <v-col
              :key="n"
              v-if="!loadSkeleton"
              lg="3"
              md="6"
              sm="12"
              xs="12"
              class="my-5"
              style="max-width:300px;"
            >
              <BookCard />
            </v-col>
          </template>
        </v-row>
        <router-link
          to="/home/book-page"
          class="font-weight-black book-section-title"
          @click="bookSectionAction"
        >AHA Episodes</router-link>
        <v-progress-linear v-model="underlineValue"></v-progress-linear>
        <v-row class="my-9 justify-start align-center" no-gutters>
          <template v-for="n in 5">
            <v-col
              :key="n"
              v-if="loadSkeleton"
              lg="3"
              md="6"
              sm="12"
              xs="12"
              class="my-3 mx-1 justify-start"
            >
              <div class="skeleton-episode-card d-flex flex-row justify-space-between">
                <v-skeleton-loader class="mx-auto" max-width="100" type="card-heading"></v-skeleton-loader>
                <v-skeleton-loader class="mx-auto" max-width="40" type="avatar"></v-skeleton-loader>
              </div>
            </v-col>
            <v-col :key="n" v-if="!loadSkeleton" lg="3" md="6" sm="12" xs="12" class="my-3 mx-1">
              <a href="#" style="text-decoration:none;">
                <EpisodeCard />
              </a>
            </v-col>
          </template>
        </v-row>
        <router-link
          to="/home/book-page"
          class="font-weight-black book-section-title"
          @click="bookSectionAction"
        >Newest Books</router-link>
        <v-progress-linear v-model="underlineValue"></v-progress-linear>
        <v-row class="my-9 justify-start align-center" no-gutters>
          <template v-for="n in 4">
            <v-col
              :key="n"
              v-if="loadSkeleton"
              lg="3"
              md="12"
              class="my-5"
              style="max-width:300px;"
            >
              <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
            </v-col>
            <v-col
              :key="n"
              v-if="!loadSkeleton"
              lg="3"
              md="12"
              class="my-5"
              style="max-width:300px;"
            >
              <BookCard />
            </v-col>
          </template>
        </v-row>
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
