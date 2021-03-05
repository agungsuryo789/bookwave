<template>
  <div :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }">
    <v-container fluid>
      <v-row>
        <v-col class="d-flex flex-row justify-space-between">
          <div>
            <v-btn
              depressed
              :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }"
              @click="gotoBook"
            >
              <v-icon>mdi-less-than</v-icon>
            </v-btn>
          </div>
          <div>
            <template v-if="chapterDetail.data[0].is_collected == true">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mx-1"
                    v-bind="attrs"
                    v-on="on"
                    icon
                    depressed
                  >
                    <v-icon color="red">mdi-bookmark-plus</v-icon>
                  </v-btn>
                </template>
                <span>Chapter saved</span>
              </v-tooltip>
            </template>
            <template v-if="chapterDetail.data[0].is_collected == false">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mx-1"
                    v-bind="attrs"
                    v-on="on"
                    @click="saveChapterSingle"
                    icon
                    depressed
                  >
                    <v-icon>mdi-bookmark-plus</v-icon>
                  </v-btn>
                </template>
                <span>Save this Chapter to Collection</span>
              </v-tooltip>
            </template>
            <template v-if="enableDelToggle">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="mx-1"
                    depressed
                    v-bind="attrs"
                    v-on="on"
                    @click="showDelTooltip"
                  >
                    <v-icon>mdi-pencil-remove</v-icon>
                  </v-btn>
                </template>
                <span>Enable Delete Highlight</span>
              </v-tooltip>
            </template>
            <template v-if="!enableDelToggle">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="mx-1"
                    depressed
                    v-bind="attrs"
                    v-on="on"
                    @click="hideDelTooltip"
                  >
                    <v-icon>mdi-pencil-remove</v-icon>
                  </v-btn>
                </template>
                <span>Enable Delete Highlight</span>
              </v-tooltip>
            </template>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon class="mx-1" depressed v-bind="attrs" v-on="on" @click="toggleHgAction">
                  <v-icon id="btEnableHg">mdi-grease-pencil</v-icon>
                </v-btn>
              </template>
              <span>Enable Highlight Text Feature</span>
            </v-tooltip>
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
      <v-container class="container-text" v-for="chapter in chapterDetail.data" :key="chapter.id_chapter">
        <v-carousel height="150" hide-delimiters touchless :show-arrows="false">
          <v-carousel-item>
              <v-row class="fill-height" align="center" justify="center">
                <div class="title-chapter font-weight-bold px-5" v-bind:style="{fontSize: (parseInt(slider)+36) + 'px' }">{{ chapter.judul_chapter }}</div>
              </v-row>
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
              <ChapterpageIntisari :bookId="parseInt(chapter.id_buku)" :fontSize="parseInt(slider)" />
            </v-row>
            <div
              v-if="parseInt(chapter.prev_chapter_id) > 0 && parseInt(chapter.next_chapter_id) <= 0 "
            >
              <ChapterpageBookmark :bookId="chapter.id_buku" :chapterId="chapter.id_chapter" />
            </div>
          </v-col>
        </v-row>
        <div class="audioplayer-section">
          <div class="d-flex flex-row justify-space-between" style="z-index: 9999;position: relative;background: #fff;padding-top: 5px; padding-bottom: 5px;">
              <v-btn
                :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }"
                v-if="parseInt(chapter.prev_chapter_id) > 0"
                depressed
                rounded
                :to="{ name: 'BookChapter', params: {bookId: chapter.id_buku, chapterId: chapter.id_chapter - 1}}"
                style="text-transform:none;"
              >
                <v-icon>mdi-chevron-double-left</v-icon>Prev
              </v-btn>
              <v-btn v-else :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }" style="visibility: hidden;">
                 <v-icon>mdi-chevron-double-left</v-icon>Prev
              </v-btn>
              <v-btn
                :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }"
                depressed
                style="font-weight:bold;"
                v-if="chapter.page_number != 1"
              >{{ chapter.page_number - 1}}</v-btn>
              <v-btn
                :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }"
                v-if="parseInt(chapter.next_chapter_id) > 0"
                depressed
                rounded
                :to="{ name: 'BookChapter', params: {bookId: chapter.id_buku, chapterId: chapter.next_chapter_id}}"
                style="text-transform:none;"
              >
                Next
                <v-icon>mdi-chevron-double-right</v-icon>
              </v-btn>
              <v-btn v-else :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }" style="visibility: hidden;">
                 Next
                <v-icon>mdi-chevron-double-right</v-icon>
              </v-btn>
            </div>
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
      enableDelToggle: true,
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
    gotoBook() {
      const urlName = this.bookDetail.data[0].judul;
      this.$router.push({
        name: "BookPage",
        params: {
          bookId: this.$route.params.bookId,
          bookName: urlName.replace(/ /g, "-")
        }
      });
    },
    goBack() {
      history.back();
    },
    urlDownload(url) {
      window.open(url, "_blank");
    },
    currentUrl() {
      return window.location.href;
    },
    toggleHgAction() {
      if (this.toggleHighlight) {
        this.toggleHighlight = false;
      } else {
        this.toggleHighlight = true;
      }
      var element = document.getElementById("btEnableHg");
      element.classList.remove("glowing-animation");
    },
    saveChapterSingle() {
      const payload = {
        id_chapter: this.$route.params.chapterId
      };
      this.$store.dispatch("saveChapterSingle", payload);
    },
    showDelTooltip() {
      this.enableDelToggle = false;
      const tooltipClass = document.getElementsByClassName("button-del-hg");
      for (var i = 0; i < tooltipClass.length; i += 1) {
        tooltipClass[i].style.display = "block";
      }
    },
    hideDelTooltip() {
      this.enableDelToggle = true;
      const tooltipClass = document.getElementsByClassName("button-del-hg");
      for (var i = 0; i < tooltipClass.length; i += 1) {
        tooltipClass[i].style.display = "none";
      }
    }
  },
  created() {
    this.$store.dispatch("getBookChapter", this.dispatchPayload);
    this.$store.dispatch("getBookDetailByID", this.$route.params.bookId);
  },
  mounted() {
    const bookDetail = this.bookDetail;
    setTimeout(function() {
      window.document.title = "Read " + bookDetail.data[0].judul + "| Ahabaca";
    }, 500);
  }
  // metaInfo() {
	// 	const book = this.bookDetail;
  //   return {
  //     title: `Read ${book.data[0].judul} | Ahabaca`,
  //     meta: [
  //       {
  //       name: 'description',
  //       content: `${book.data[0].deskripsi}`
  //       },
  //       {
  //       property: 'og:description',
  //       content: `${book.data[0].deskripsi}`
  //       },
  //       {
  //       property: 'og:title',
  //       content: `Read ${book.data[0].judul}`
  //       },
  //       {
  //       property: 'og:site_name',
  //       content: 'Ahabaca'
  //       },
  //       {
  //       property: 'og:type',
  //       content: 'website'
  //       },
  //       {
  //       property: 'og:image:secure',
  //       content: `${book.data[0].foto_sampul}`
  //       },
  //       {
  //       property: 'twitter:title',
  //       content: `${book.data[0].judul}`
  //       },
  //       {
  //       property: 'twitter:description',
  //       content: `${book.data[0].deskripsi}`
  //       }
  //     ]
  //   }
	// }
};
</script>

<style lang="scss">
@import "@/assets/css/global_variables.scss";
.container-text{
  padding-bottom: 198px;
  @media (min-width:1264px){
    max-width: 1100px;
  }
  @media (min-width:1904px){
    max-width: 1620px;
  }
}

.title-chapter {
  font-size: 60px;
  color: #000;
}
.bgBlack .title-chapter {
  color: #fff;
}
.social-links {
  color: white;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 50px;
  padding: 0 4px;
  background-color: rgb(75, 159, 255);
}
.glowing-animation {
  animation: glowing 1500ms infinite;
  border-radius: 50%;
  z-index: 999;
}
.mdi-heart::before {
    color: #e76464;
}
.audioplayer-section {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    z-index: 99;
    @media (min-width: 960px) {
        max-width: 877px;
    }
    @media (min-width: 1264px) {
        max-width: 1079px;
    }
    @media (min-width:1904px){
        max-width: 1599px;
    }
}
@keyframes glowing {
  0% {
    background-color: transparent;
    box-shadow: 0 0 3px #e27024;
  }
  50% {
    background-color: transparent;
    box-shadow: 0 0 40px #e27024;
  }
  100% {
    background-color: transparent;
    box-shadow: 0 0 3px #e27024;
  }
}
</style>