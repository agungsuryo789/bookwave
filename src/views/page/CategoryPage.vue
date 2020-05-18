<template>
  <div class="category-page">
    <NavbarSection />
    <v-container fluid class="px-0 py-0 mx-0 my-0">
      <v-row>
        <v-col class="category-page-title">
          <h1>{{$route.params.categoryID}}</h1>
        </v-col>
      </v-row>
      <v-row>
        <template v-for="n in 4">
          <v-col :key="n" v-if="loadSkeleton" lg="3" md="6" sm="12" xs="12">
            <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
          </v-col>
          <v-col :key="n" v-if="!loadSkeleton" lg="3" md="6" sm="12" xs="12">
            <BookCard />
          </v-col>
        </template>
      </v-row>
      <v-row>
        <template v-for="n in booksToShow">
          <v-col :key="n" v-if="loadSkeleton" lg="4" md="6" class="my-5"></v-col>
          <v-col :key="n" v-if="!loadSkeleton" lg="4" md="6" sm="6" xs="12" class="my-5">
            <BookCardSmall />
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
            @click="booksToShow += 3"
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
import BookCardSmall from "@/components/BookCardSmall.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "CategoryPage",
  components: {
    BookCard,
    BookCardSmall,
    NavbarSection,
    FooterSection
  },
  data: () => ({
    loadSkeleton: false,
    booksToShow: 12
  })
};
</script>

<style scoped lang="scss">
.category-page {
  .category-page-title {
    height: 150px;
    padding: 4px 14px;
    background-color: #8edf00;
    color: white;
    text-transform: uppercase;
    h1 {
      margin: 4% 0;
    }
  }
}
</style>
