<template>
  <div>
    <NavbarSection />
    <v-container class="mt-12">
      <a href="#" class="font-weight-black book-section-title" @click="bookSectionAction">AHA Episodes</a>
      <v-progress-linear v-model="underlineValue"></v-progress-linear>
      <v-row>
        <template v-for="n in 16">
          <v-col :key="n" v-if="loadSkeleton" lg="3" md="12" class="my-5" style="max-width:300px;">
            <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
          </v-col>
          <v-col :key="n" v-if="!loadSkeleton" lg="3" md="12" class="my-5" style="max-width:300px;">
            <BookCard />
          </v-col>
        </template>
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
    underlineValue: 15
  }),
  methods: {
    bookSectionAction (event) {
      this.underlineValue = 100;
    }
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
