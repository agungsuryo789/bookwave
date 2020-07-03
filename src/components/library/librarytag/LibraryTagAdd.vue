<template>
  <v-row>
    <v-col class="my-4" lg="12">
      <p style="font-weight:bold;">
        <v-btn to="/library/tag" icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn> Tag Baru
      </p>
      <hr />
      <v-text-field label="Buat Tag baru" v-on:keyup.enter="addTag" v-model="tagPayload.tag"></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LibraryTagAdd",
  data() {
    return {
      tagPayload: {
        id_buku: this.$route.params.idBuku,
        tag: ""
      }
    };
  },
  methods: {
    addTag() {
      this.$store.dispatch("addTag", this.tagPayload);
    }
  }
};
</script>

<style>
</style>