<template>
  <div>
    <router-link to="/home">
      <v-img
        alt="Vuetify Logo"
        class="shrink ml-5 mr-2"
        contain
        transition="scale-transition"
        width="100"
      />
    </router-link>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-text-field class="mt-4 mx-2" label="Temukan yang anda cari disini"></v-text-field>
    <v-btn icon @click="showSearchBar = false">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "NavbarSearch",
  props: ["showState"],
  data() {
    return {
      showSearchBar: false
    };
  }
};
</script>

<style>
</style>