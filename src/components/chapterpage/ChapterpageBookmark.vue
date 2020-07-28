<template>
  <v-card>
    <div
      v-for="n in bookDetail.data"
      :key="n.id_buku"
      class="d-flex flex-row justify-space-between py-2 px-2"
    >
      <div>
        <v-menu top offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn tile text depressed v-bind="attrs" v-on="on">
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                <ShareNetwork
                  class="social-links mx-2"
                  network="facebook"
                  :url="currentUrl()"
                  :title="n.judul"
                  :description="n.deskripsi"
                  :quote="n.judul"
                  hashtags="Ahabaca"
                >
                  <v-icon class="mx-1" small style="color:white;">mdi-facebook</v-icon>Facebook
                </ShareNetwork>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <ShareNetwork
                  class="social-links mx-2"
                  network="twitter"
                  :url="currentUrl()"
                  :title="n.judul"
                  hashtags="Ahabaca"
                >
                  <v-icon class="mx-1" small style="color:white;">mdi-twitter</v-icon>Twitter
                </ShareNetwork>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn v-if="!n.is_favorite" tile text depressed @click="setBookFavorit">
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn v-if="n.is_favorite" tile text depressed @click="delBookFavorit">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </div>
      <v-btn class="btn-main" @click="dialog = true">Nilai Buku ini</v-btn>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">Use Google's location service?</v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      dialog: false,
      payloadFav: {
        id_buku: this.$props.bookId
      }
    };
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
    },
    delBookFavorit() {
      this.$store.dispatch("delBookFavorit", this.payloadFav);
    },
    currentUrl() {
      return window.location.href;
    }
  },
  computed: mapState({
    bookFavorit: state => state.bookFavorit,
    bookDetail: state => state.bookDetail
  }),
  mounted() {
    this.$store.dispatch("getBookDetailByID", this.$route.params.bookId);
  }
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
.social-links {
  color: white;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 50px;
  padding: 0 4px;
  background-color: rgb(75, 159, 255);
}
</style>