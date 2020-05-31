<template>
  <v-card class="d-flex flex-row justify-space-between py-2 px-2">
    <div>
      <v-btn tile text depressed>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
      <v-btn tile text depressed @click="setBookFavorit">
        <v-icon v-if="bookFavorit.data = {}">mdi-heart-outline</v-icon>
        <v-icon v-else style="color:#E76464;">mdi-heart</v-icon>
      </v-btn>
    </div>
    <v-btn class="btn-main" @click="setBookDone">Selesai</v-btn>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ChapterpageBookmark",
  props: ["bookId", "chapterId"],
  data() {
    return {
      payload: {
        bookId: this.$props.bookId,
        chapterId: this.$props.chapterId
      }
    };
  },
  mounted() {
	// this.$store.dispatch("setBookFavorit", this.$props.bookId);
  },
  methods: {
    setBookDone() {
      this.$store.dispatch("setBookDone", this.payload);
    },
    setBookFavorit() {
      this.$store.dispatch("setBookFavorit", this.$props.bookId);
    }
  },
  computed: mapState({
    bookFavorit: state => state.bookFavorit
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