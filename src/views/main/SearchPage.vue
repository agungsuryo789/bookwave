<template>
  <div class="book-search">
    <NavbarSection />
    <v-container class="mt-10">
      <v-tabs fixed-tabs v-model="tab">
        <v-tab>Hasil Pencarian</v-tab>
        <v-tab>Chapter Audio</v-tab>
        <v-tab>Book</v-tab>
        <v-tab>Penulis</v-tab>
        <v-tab>Kategori</v-tab>
        <v-tabs-items v-model="tab">
          <v-tab-item transition="slide-x-transition">
            <SearchpageHasil />
          </v-tab-item>
          <v-tab-item transition="slide-x-transition">
            <SearchpageAudio />
          </v-tab-item>
          <v-tab-item transition="slide-x-transition">
            <SearchpageBook />
          </v-tab-item>
          <v-tab-item transition="slide-x-transition">
            <SearchpagePenulis />
          </v-tab-item>
          <v-tab-item transition="slide-x-transition">
            <SearchpageKategori />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-container>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import SearchpageHasil from "@/components/searchpage/SearchpageHasil.vue";
import SearchpageAudio from "@/components/searchpage/SearchpageAudio.vue";
import SearchpageBook from "@/components/searchpage/SearchpageBook.vue";
import SearchpagePenulis from "@/components/searchpage/SearchpagePenulis.vue";
import SearchpageKategori from "@/components/searchpage/SearchpageKategori.vue";

export default {
  name: "BookSearch",
  components: {
    NavbarSection,
	SearchpageHasil,
	SearchpageAudio,
	SearchpageBook,
	SearchpagePenulis,
	SearchpageKategori,
    FooterSection
  },
  data() {
    return {
      tab: null
    };
  }
};
</script>
