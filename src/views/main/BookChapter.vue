<template>
  <div :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }">
    <v-container fluid>
      <v-row>
        <v-col class="d-flex flex-row justify-space-between">
          <div>
            <v-btn
              depressed
              :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }"
              @click="hasHistory() ? $router.go(-1) : $router.push('/')"
            >
              <v-icon>mdi-less-than</v-icon>
            </v-btn>
          </div>
          <div>
            <v-btn icon depressed @click="toggleHighlight = !toggleHighlight">
              <v-icon>mdi-grease-pencil</v-icon>
            </v-btn>
            <v-btn
              @click="showMenuTop = !showMenuTop, showTools = false, outlineMenu = false, shareMenu = false"
              depressed
              :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row v-if="showMenuTop">
        <v-col style="max-width:800px;margin:0 auto;">
          <div class="d-flex flex-row justify-center align-center">
            <div class="d-flex flex-column justify-center align-center mx-4">
              <v-btn
                @click="showTools = true, showMenuTop = false, outlineMenu = false"
                depressed
                outlined
              >
                <v-icon>mdi-format-color-text</v-icon>
              </v-btn>
              <p>Teks</p>
            </div>
            <div class="d-flex flex-column justify-center align-center mx-4">
              <v-btn @click="urlDownload(bookDetail.data[0].buku_file)" depressed text>
                <v-icon>mdi-download</v-icon>
              </v-btn>
              <p>Download</p>
            </div>
            <div class="d-flex flex-column justify-center align-center mx-4">
              <v-btn @click="outlineMenu = !outlineMenu" depressed text>
                <v-icon>mdi-format-list-bulleted</v-icon>
              </v-btn>
              <p>Outlined</p>
            </div>
            <div class="d-flex flex-column justify-center align-center mx-4">
              <v-btn @click="shareMenu = true, showMenuTop = false" depressed text>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
              <p>Share</p>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row v-if="showTools">
        <v-col style="max-width:800px;margin:0 auto;">
          <div class="d-flex flex-row justify-center align-center">
            <v-btn
              class="font-weight-bold"
              tile
              depressed
              outlined
              ripple
              @click="bgWhite = !bgWhite, bgBlack = false, bgGrey = false"
              width="150"
              style="border:2px solid #ededed;text-transform:none;background-color:white;"
            >Aa</v-btn>
            <v-btn
              class="font-weight-bold"
              tile
              depressed
              outlined
              ripple
              @click="bgGrey = !bgGrey, bgWhite = false, bgBlack = false"
              width="150"
              style="border:2px solid #ededed;text-transform:none;background-color:#E5E5E5;"
            >Aa</v-btn>
            <v-btn
              class="font-weight-bold"
              tile
              depressed
              outlined
              ripple
              @click="bgBlack = !bgBlack, bgWhite = false, bgGrey = false"
              width="150"
              color="white"
              style="border:2px solid #ededed;text-transform:none;background-color:black;"
            >Aa</v-btn>
          </div>
          <div class="d-flex flex-row my-3" style="width:450px;margin:0 auto;">
            <span>Aa</span>
            <v-slider v-model="slider" class="align-center" :max="max" :min="min" thumb-label></v-slider>
            <span class="font-weight-bold headline">Aa</span>
          </div>
        </v-col>
      </v-row>
      <v-row v-if="shareMenu">
        <v-col class="d-flex flex-row justify-center align-center mx-4">
          <ShareNetwork
            class="social-links mx-2"
            network="facebook"
            :url="currentUrl()"
            :title="bookDetail.data[0].judul"
            :description="bookDetail.data[0].deskripsi"
            :quote="bookDetail.data[0].judul"
            hashtags="Ahabaca"
          >
            <v-icon style="color:white;">mdi-facebook</v-icon>Facebook
          </ShareNetwork>
          <ShareNetwork
            class="social-links mx-2"
            network="twitter"
            :url="currentUrl()"
            :title="bookDetail.data[0].judul"
            hashtags="Ahabaca"
          >
            <v-icon style="color:white;">mdi-twitter</v-icon>Twitter
          </ShareNetwork>
        </v-col>
      </v-row>
    </v-container>
    <template v-if="!outlineMenu">
      <v-container v-for="chapter in chapterDetail.data" :key="chapter.id_chapter">
        <v-carousel height="150" hide-delimiters touchless :show-arrows="false">
          <v-carousel-item>
            <v-sheet
              :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }"
              color="white"
              height="100%"
              style="color:black;"
            >
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3 font-weight-bold px-5">{{ chapter.judul_chapter }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <v-row>
          <v-col style="position:relative;">
            <ChapterpageText
              :fontSize="parseInt(slider)"
              :bookId="parseInt(chapter.id_buku)"
              :chapterText="chapter.isi_chapter"
              :toggleHg="toggleHighlight"
            />
            <v-row v-if="!parseInt(chapter.prev_chapter_id) > 0">
              <ChapterpageIntisari :bookId="parseInt(chapter.id_buku)" />
            </v-row>
            <div
              v-if="parseInt(chapter.prev_chapter_id) > 0 && parseInt(chapter.next_chapter_id) <= 0 "
            >
              <ChapterpageBookmark :bookId="chapter.id_buku" :chapterId="chapter.id_chapter" />
            </div>
            <div class="d-flex flex-row justify-space-between mt-12 mb-2">
              <v-btn
                :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }"
                v-if="parseInt(chapter.prev_chapter_id) > 0"
                depressed
                rounded
                :to="{ name: 'BookChapter', params: {bookId: chapter.id_buku, chapterId: chapter.prev_chapter_id}}"
                style="position:absolute;bottom:0;left:0;margin:0 10px;"
              >
                <v-icon x-small>mdi-less-than</v-icon>
                <v-icon x-small>mdi-less-than</v-icon>
              </v-btn>
              <v-btn
                :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }"
                depressed
                style="position:absolute;bottom:0;left:45%;font-weight:bold;"
              >{{ chapter.page_number }}</v-btn>
              <v-btn
                :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }"
                v-if="parseInt(chapter.next_chapter_id) > 0"
                depressed
                rounded
                :to="{ name: 'BookChapter', params: {bookId: chapter.id_buku, chapterId: chapter.next_chapter_id}}"
                style="position:absolute;bottom:0;right:0;margin:0 10px;"
              >
                <v-icon x-small>mdi-greater-than</v-icon>
                <v-icon x-small>mdi-greater-than</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <div class="audioplayer-section mt-10" style="position:sticky;bottom:0;left:0;width:100%;">
          <div class="d-flex flex-column">
            <vuetify-audio :file="chapter.audio_chapter" :autoPlay="false" color="#FF8A80"></vuetify-audio>
          </div>
        </div>
        <template v-if="!chapter.audio_chapter">
          <v-snackbar v-model="showPopAlert">
            There are no audio file
            <template v-slot:action="{ attrs }">
              <v-btn color="pink" text v-bind="attrs" @click="showPopAlert = false">Close</v-btn>
            </template>
          </v-snackbar>
        </template>
      </v-container>
    </template>
    <template v-if="outlineMenu">
      <ChapterpageOutline />
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChapterpageOutline from "@/components/chapterpage/ChapterpageOutline.vue";
import ChapterpageBookmark from "@/components/chapterpage/ChapterpageBookmark.vue";
import ChapterpageIntisari from "@/components/chapterpage/ChapterpageIntisari.vue";
import ChapterpageText from "@/components/chapterpage/ChapterpageText.vue";

export default {
  name: "BookChapter",
  components: {
    ChapterpageOutline,
    ChapterpageBookmark,
    ChapterpageIntisari,
    ChapterpageText,
    VuetifyAudio: () => import("vuetify-audio")
  },
  data() {
    return {
      showTools: false,
      showMenuTop: false,
      outlineMenu: false,
      shareMenu: false,
      showPopAlert: true,
      toggleHighlight: true,
      min: 8,
      max: 72,
      slider: 24,
      bgWhite: true,
      bgGrey: false,
      bgBlack: false,
      dispatchPayload: {
        bookId: this.$route.params.bookId,
        chapterId: this.$route.params.chapterId
      }
    };
  },
  computed: mapState({
    chapterDetail: state => state.chapterDetail,
    bookDetail: state => state.bookDetail
  }),
  methods: {
    hasHistory() {
      return window.history?.length > 2;
    },
    urlDownload(url) {
      window.open(url, "_blank");
    },
    currentUrl() {
      return window.location.href;
    }
  },
  mounted() {
    this.$store.dispatch("getBookChapter", this.dispatchPayload);
    this.$store.dispatch("getBookDetailByID", this.$route.params.bookId);
    window.document.title =
      "Read " + this.bookDetail.data[0].judul + "| Ahabaca";
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";

.social-links {
  color: white;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 50px;
  padding: 0 4px;
  background-color: rgb(75, 159, 255);
}
</style>