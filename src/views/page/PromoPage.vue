<template>
  <div class="promo-page">
    <NavbarSection />
    <header>
      <v-container>
        <v-row>
          <v-col lg="6" md="12" sm="12" xs="12" class="d-flex justify-center align-center">
            <h1>Promo Buku Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
          </v-col>
          <v-col lg="6" md="12" sm="12" xs="12">
            <v-img
              class="book-card-img mx-auto"
              width="350"
              height="300"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </header>
    <section>
      <v-container class="mt-10">
        <h2 class="mx-10">Promo 50%</h2>
        <v-row class="justify-center align-center">
          <template v-for="n in booksToShow">
            <v-col
              :key="n"
              v-if="loadSkeleton"
              lg="4"
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
              lg="4"
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
    </section>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import BookCard from "@/components/BookCard.vue";

export default {
  name: "PromoPage",
  components: {
    NavbarSection,
    FooterSection,
    BookCard
  },
  data: () => ({
    loadSkeleton: false,
    booksToShow: 6
  })
};
</script>

<style>
</style>
