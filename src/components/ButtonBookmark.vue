<template>
  <div v-if="this.$store.getters.isLoggedIn">
    <template v-if="!bookDetail[0].is_collected">
      <v-btn class="book-bookmark-button" icon @click="setBookmark">
        <v-icon>mdi-bookmark-outline</v-icon>
      </v-btn>
    </template>
    <template v-if="bookDetail[0].is_collected">
      <v-btn class="book-bookmark-button" icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
      }
    };
  },
  methods: {
    setBookmark() {
      this.$store.dispatch("setBookmark", this.payloadBookmark);
    }
  },
  computed: mapState({
    bookDetail: state => state.bookDetail.data
  }),
  mounted() {
    this.$store.dispatch("getBookDetailByID", this.idBuku);
  }
};
</script>

<style>
</style>