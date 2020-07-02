<template>
  <div v-if="this.$store.getters.isLoggedIn">
    <template v-if="!isBookmarked">
      <v-btn class="book-bookmark-button" icon @click="setBookmark">
        <v-icon>mdi-bookmark-outline</v-icon>
      </v-btn>
    </template>
    <template v-if="isBookmarked">
      <v-btn class="book-bookmark-button" icon @click="delBookmark">
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
    </template>
  </div>
</template>

<script>
export default {
  name: "ButtonBookmark",
  props: {
    idBuku: {
      type: Number
    }
  },
  data() {
    return {
      payloadBookmark: {
        id_buku: this.idBuku
      },
      isBookmarked: false
    };
  },
  methods: {
    setBookmark() {
      this.isBookmarked = true;
      this.$store.dispatch("setBookmark", this.payloadBookmark);
    },
    delBookmark() {
      this.isBookmarked = false;
      this.$store.dispatch("setDeleteKoleksi", this.payloadBookmark);
    }
  }
};
</script>

<style>
</style>