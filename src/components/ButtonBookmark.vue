<template>
  <div>
    <v-btn class="book-bookmark-button" icon @click="setBookmark">
      <v-icon>mdi-bookmark-outline</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ButtonBookmark",
  props: ["idBuku"],
  data() {
    return {
      payloadBookmark: {
        id_buku: this.idBuku
      }
    };
  },
  methods: {
    setBookmark() {
      this.$store.dispatch("setBookmark", this.payloadBookmark);
    }
  }
};
</script>

<style>
</style>