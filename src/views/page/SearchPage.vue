<template>
  <div class="book-search">
    <NavbarSection />
    <v-container class="mt-10">
      <v-row>
        <p class="font-weight-black book-section-title">Hasil Pencarian:</p>
        <v-progress-linear v-model="underlineValue"></v-progress-linear>
        <template v-for="n in 16">
          <v-col :key="n" v-if="loadSkeleton" lg="4" md="12" class="my-5"></v-col>
          <v-col :key="n" v-if="!loadSkeleton" lg="4" md="12" class="my-5">
            <BookCardSmall />
          </v-col>
        </template>
      </v-row>
    </v-container>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import BookCardSmall from "@/components/BookCardSmall.vue";

export default {
  name: "BookSearch",
  components: {
    NavbarSection,
    FooterSection,
    BookCardSmall
  },
  data: () => ({
    loadSkeleton: false,
    underlineValue: 15
  }),
  methods: {}
};
</script>

<style>
</style>
