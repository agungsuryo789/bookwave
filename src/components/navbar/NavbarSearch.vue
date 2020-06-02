<template>
  <div class="d-flex flex-row justify-space-between px-4" style="width:100%;">
    <v-btn icon class="my-2" @click="goSearch">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-text-field
      v-model="payload.pencarian"
      @keyup.enter="goSearch"
      class="mt-4 mx-2"
      label="Temukan yang anda cari disini"
    ></v-text-field>
    <v-btn icon class="my-2" @click="onClose">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "NavbarSearch",
  data() {
    return {
      payload: {
        pencarian: "",
        type_filter: ""
      }
    };
  },
  methods: {
    onClose(event) {
      this.payload.inputSearch = "";
      this.$emit("clicked", false);
    },
    goSearch() {
      if (this.payload.pencarian !== "") {
        this.$store.dispatch("getSearch", this.payload);
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
</style>