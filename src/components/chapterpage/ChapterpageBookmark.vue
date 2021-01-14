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
      <v-dialog v-model="dialog" max-width="300">
        <v-card>
          <div class="py-3 review--title">
            <p class="text-center py-0 my-0">Seberapa kesan kamu bersama AHA!</p>
          </div>
          <v-card-text class="my-5">
            <div class="d-flex flex-row justify-center">
              <v-btn-toggle v-model="payloadKomen.id_score" borderless>
                <v-btn @click="reactAction1" text icon large>
                  <v-icon :style="{ color: reactColor1 }">mdi-emoticon-frown-outline</v-icon>
                </v-btn>
                <v-btn @click="reactAction2" text icon large>
                  <v-icon :style="{ color: reactColor2 }">mdi-emoticon-sad-outline</v-icon>
                </v-btn>
                <v-btn @click="reactAction3" text icon large>
                  <v-icon :style="{ color: reactColor3 }">mdi-emoticon-neutral-outline</v-icon>
                </v-btn>
                <v-btn @click="reactAction4" text icon large>
                  <v-icon :style="{ color: reactColor4 }">mdi-emoticon-happy-outline</v-icon>
                </v-btn>
                <v-btn @click="reactAction5" text icon large>
                  <v-icon :style="{ color: reactColor5 }">mdi-emoticon-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </div>
          </v-card-text>
          <div class="mx-2">
            <v-text-field
              label="ketik komentar kalian.."
              v-model="payloadKomen.komentar"
              single-line
              solo-inverted
              flat
            ></v-text-field>
          </div>
          <v-card-actions class="mx-3">
            <v-btn color="btn-second--review p-5" @click="dialog = false" large width="120px">Batal</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="btn-main--review p-5" @click="sendSurveyAction" large width="120px">Kirim</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <SnackbarToast />
  </v-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import SnackbarToast from "@/components/SnackbarToast.vue";

export default {
  name: "ChapterpageBookmark",
  props: ["bookId", "chapterId"],
  components: {
    SnackbarToast
  },
  data() {
    return {
      payloadDone: {
        id_buku: this.$props.bookId,
        id_chapter: this.$props.chapterId
      },
      dialog: false,
      payloadFav: {
        id_buku: this.$props.bookId
      },
      payloadKomen: {
        id_buku: this.$props.bookId,
        komentar: "",
        id_score: null
      },
      surveyReact: undefined,
      surveyText: "",
      reactColor1: "#929292",
      reactColor2: "#929292",
      reactColor3: "#929292",
      reactColor4: "#929292",
      reactColor5: "#929292"
    };
  },
  methods: {
    ...mapMutations(["showSnackbar", "closeSnackbar"]),
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
    },
    reactAction1() {
      this.reactColor1 = "#E76464";
      this.reactColor2 = "#929292";
      this.reactColor3 = "#929292";
      this.reactColor4 = "#929292";
      this.reactColor5 = "#929292";
    },
    reactAction2() {
      this.reactColor1 = "#929292";
      this.reactColor2 = "#E76464";
      this.reactColor3 = "#929292";
      this.reactColor4 = "#929292";
      this.reactColor5 = "#929292";
    },
    reactAction3() {
      this.reactColor1 = "#929292";
      this.reactColor2 = "#929292";
      this.reactColor3 = "#E76464";
      this.reactColor4 = "#929292";
      this.reactColor5 = "#929292";
    },
    reactAction4() {
      this.reactColor1 = "#929292";
      this.reactColor2 = "#929292";
      this.reactColor3 = "#929292";
      this.reactColor4 = "#E76464";
      this.reactColor5 = "#929292";
    },
    reactAction5() {
      this.reactColor1 = "#929292";
      this.reactColor2 = "#929292";
      this.reactColor3 = "#929292";
      this.reactColor4 = "#929292";
      this.reactColor5 = "#E76464";
    },
    sendSurveyAction() {
      if (this.payloadKomen.id_score !== null && this.payloadKomen.komentar.length > 0) {
        const x = this.payloadKomen.id_score + 1;
        this.payloadKomen.id_score = x;
        this.$store.dispatch("sendBookComment", this.payloadKomen);
        this.dialog = false;
      }
      this.showSnackbar()
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

<style lang="scss">
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
.review--title {
  border-bottom: 2px solid rgb(201, 201, 201);
  p {
    color: $mainColor;
    font-size: 12px;
  }
}
.btn-second--review {
  border: 2px solid gray;
  border-bottom: 4px solid gray;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
}
.btn-main--review {
  border: 2px solid $mainColor;
  border-bottom: 4px solid $mainColor;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
}
</style>