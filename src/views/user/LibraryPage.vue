<template>
  <div class="library-page">
    <NavbarSection />
    <v-container>
      <v-tabs slider-color="#E76464" class="mt-12" grow>
        <v-tab to="/library/book">Buku</v-tab>
        <v-tab to="/library/episode">Episode</v-tab>
        <v-spacer></v-spacer>
        <v-tab to="/library/highlighted">
          <v-icon left>mdi-pencil</v-icon>Warnai
        </v-tab>
        <v-tab to="/library/favorite">
          <v-icon left>mdi-heart-outline</v-icon>Favorit
        </v-tab>
        <v-tab to="/library/tag">
          <v-icon left>mdi-tag-outline</v-icon>Tag
        </v-tab>
        <v-tabs-items>
          <router-view></router-view>
        </v-tabs-items>
      </v-tabs>
    </v-container>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";
// import LibraryBookList from "@/components/library/LibraryBookList.vue";
// import LibraryEpisodeList from "@/components/library/LibraryEpisodeList.vue";
// import LibraryColouredList from "@/components/library/LibraryColouredList.vue";
// import LibraryFavoriteList from "@/components/library/LibraryFavoriteList.vue";
// import LibraryTagList from "@/components/library/LibraryTagList.vue";

export default {
  name: "LibraryPage",
  components: {
    NavbarSection,
    FooterSection
    // LibraryBookList,
    // LibraryEpisodeList,
    // LibraryColouredList,
    // LibraryFavoriteList,
    // LibraryTagList
  },
  data: () => ({
    tab: null,
    componentKey: 0
  })
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";
.btn-chip-main {
  @include btn-chip-main();
}
</style>
