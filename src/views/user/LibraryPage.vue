<template>
  <div class="library-page">
    <NavbarSection />
    <v-container>
      <v-tabs class="mt-12" slider-color="#E76464" color="#E76464" grow>
        <v-tab to="/library/book" style="border-bottom:2px solid #DDDDDD;">Buku</v-tab>
        <v-tab to="/library/episode" style="border-bottom:2px solid #DDDDDD;">Episode</v-tab>
        <v-spacer></v-spacer>
        <v-tab to="/library/highlighted" style="border-bottom:2px solid #DDDDDD;">
          <v-icon left>mdi-pencil</v-icon>Warnai
        </v-tab>
        <v-tab to="/library/favorite" style="border-bottom:2px solid #DDDDDD;">
          <v-icon left>mdi-heart-outline</v-icon>Favorit
        </v-tab>
        <v-tab to="/library/tag" style="border-bottom:2px solid #DDDDDD;">
          <v-icon left>mdi-tag-outline</v-icon>Tag
        </v-tab>
        <v-tabs-items>
          <router-view></router-view>
        </v-tabs-items>
      </v-tabs>
    </v-container>
    <FooterSection class="mt-12" />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "LibraryPage",
  components: {
    NavbarSection,
    FooterSection
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
