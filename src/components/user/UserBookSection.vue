<template>
  <div>
    <NavbarSection />
    <v-container class="mt-12">
      <h2 class="font-weight-black book-section-title">Trending Book</h2>
      <v-progress-linear v-model="underlineValue"></v-progress-linear>
      <v-row>
        <template v-for="n in booksToShow">
          <v-col :key="n" v-if="loadSkeleton" lg="3" md="12" class="my-5" style="max-width:300px;">
            <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
          </v-col>
          <v-col :key="n" v-if="!loadSkeleton" lg="3" md="12" class="my-5" style="max-width:300px;">
            <BookCard />
          </v-col>
        </template>
      </v-row>
      <v-row>
        <v-col class="text-center d-flex flex-column justify-center align-center">
          <v-btn
            class="btnLihat"
            rounded
            color="#39DF8C"
            elevation="2"
            depressed
            @click="booksToShow += 8"
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

export default {
  name: "UserBookSection",
  components: {
    NavbarSection,
    BookCard,
    FooterSection
  },
  data: () => ({
    loadSkeleton: false,
    underlineValue: 15,
    booksToShow: 12
  }),
  methods: {}
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
