<template>
  <div v-if="this.$store.getters.isLoggedIn">
    <template v-if="isCollected == false">
      <v-btn class="book-bookmark-button" icon @click="setBookmark">
        <v-icon>mdi-bookmark-outline</v-icon>
      </v-btn>
    </template>
    <template v-else-if="isCollected == true">
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
    },
    isCollected: {
      type: Boolean
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
      this.$store.dispatch("setBookmark", this.payloadBookmark);
      this.isBookmarked = true;
    },
    delBookmark() {
      this.$store.dispatch("setDeleteKoleksi", this.payloadBookmark);
      this.isBookmarked = false;
    }
  },
  created() {
    if (this.isCollected) {
      this.isBookmarked = true;
    }
  }
};
</script>