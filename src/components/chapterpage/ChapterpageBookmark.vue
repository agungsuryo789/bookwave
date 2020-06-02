<template>
  <v-card>
    <div
      v-for="n in bookDetail.data"
      :key="n.id_buku"
      class="d-flex flex-row justify-space-between py-2 px-2"
    >
      <div>
        <v-btn tile text depressed>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
        <template></template>
        <v-btn tile text depressed @click="setBookFavorit">
          <v-icon v-if="n.is_favorite = true">mdi-heart</v-icon>
          <v-icon v-if="n.is_favorite = false" style="color:#E76464;">mdi-heart-outline</v-icon>
        </v-btn>
      </div>
      <v-btn v-if="n.is_collected = false" class="btn-main" @click="setBookDone">Selesai</v-btn>
      <v-btn v-if="n.is_collected = true" class="btn-main" @click="setDeleteKoleksi">Hapus dari koleksi</v-btn>
    </div>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ChapterpageBookmark",
  props: ["bookId", "chapterId"],
  data() {
    return {
      payloadDone: {
        id_buku: this.$props.bookId,
        id_chapter: this.$props.chapterId
      },
      payloadFav: {
        id_buku: this.$props.bookId
      }
    };
  },
  created() {
    this.$store.dispatch("getBookDetailByID", this.$route.params.bookId);
  },
  methods: {
    setBookDone() {
      this.$store.dispatch("setBookDone", this.payloadDone);
    },
    setDeleteKoleksi() {
      this.$store.dispatch("setDeleteKoleksi", this.payloadFav);
    },
    setBookFavorit() {
      this.$store.dispatch("setBookFavorit", this.payloadFav);
    }
  },
  computed: mapState({
    bookFavorit: state => state.bookFavorit,
    bookDetail: state => state.bookDetail
  })
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";
.btn-main {
  @include btn-chip-main();
  text-transform: none;
  border-color: $mainColor;
  font-size: 14px;
  font-weight: bold;
  color: $mainColor;
}
</style>