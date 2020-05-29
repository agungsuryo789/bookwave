<template>
  <div :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }">
    <v-container fluid>
      <v-row>
        <v-col class="d-flex flex-row justify-space-between">
          <v-btn
            depressed
            :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }"
            @click="hasHistory() ? $router.go(-1) : $router.push('/')"
          >
            <v-icon>mdi-less-than</v-icon>
          </v-btn>
          <v-btn
            @click="showMenuTop = !showMenuTop, showTools = false"
            depressed
            :class="{ bgWhite: bgWhite, bgGrey: bgGrey, bgBlack: bgBlack }"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-if="showMenuTop">
        <v-col style="max-width:800px;margin:0 auto;">
          <div class="d-flex flex-row justify-center align-center">
            <div class="d-flex flex-column justify-center align-center mx-4">
              <v-btn @click="showTools = true, showMenuTop = false" depressed outlined>
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
              <v-btn @click="showMenuTop = false" depressed text>
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
              @click="bgWhite = !bgWhite"
              width="150"
              style="border:2px solid #ededed;text-transform:none;background-color:white;"
            >Aa</v-btn>
            <v-btn
              class="font-weight-bold"
              tile
              depressed
              outlined
              ripple
              @click="bgGrey = !bgGrey"
              width="150"
              style="border:2px solid #ededed;text-transform:none;background-color:#E5E5E5;"
            >Aa</v-btn>
            <v-btn
              class="font-weight-bold"
              tile
              depressed
              outlined
              ripple
              @click="bgBlack = !bgBlack"
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
            <p id="chapterText" :style="styleObject" @mouseup="showHighlightTool">
              <span id="tooltip">
                <v-btn class="button-tooltip py-2 px-2" depressed @click="setColor">
                  <v-icon class="mx-1" small>mdi-pencil</v-icon>Warnai
                </v-btn>
              </span>
              {{ chapter.isi_chapter }}
            </p>
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
                :loading="loading"
                @click="loader = 'loading'"
                :to="{ name: 'BookChapter', params: {bookId: chapter.id_buku, chapterId: chapter.id_chapter - 1}}"
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
                :loading="loading"
                @click="loader = 'loading'"
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
      </v-container>
    </template>
    <template v-else>
      <ChapterpageOutline />
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChapterpageOutline from "@/components/chapterpage/ChapterpageOutline.vue";
import ChapterpageBookmark from "@/components/chapterpage/ChapterpageBookmark.vue";

export default {
  name: "BookChapter",
  components: {
	ChapterpageOutline,
	ChapterpageBookmark,
    VuetifyAudio: () => import("vuetify-audio")
  },
  data() {
    return {
      chapterArray: 0,
      showTools: false,
      showMenuTop: false,
      outlineMenu: false,
      loader: null,
      loading: false,
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
    styleObject() {
      return {
        fontSize: this.slider + "px"
      };
    }
  }),
  methods: {
    hasHistory() {
      return window.history?.length > 2;
    },
    getSelected() {
      if (window.getSelection) {
        return window.getSelection();
      } else if (document.getSelection) {
        return document.getSelection();
      } else {
        const selection =
          document.selection && document.selection.createRange();
        if (selection.text) {
          return selection.text;
        }
        return false;
      }
    },
    showHighlightTool(e) {
      const selection = this.getSelected();
      const anchorSelection = selection.extentOffset - selection.anchorOffset;
      const tooltipSpan = document.getElementById("tooltip");
      if (selection && anchorSelection > 0) {
        const x = e.clientX;
        const y = e.clientY;
        tooltipSpan.style.display = "flex";
        tooltipSpan.style.position = "fixed";
        tooltipSpan.style.overflow = "hidden";
        tooltipSpan.style.top = y - 60 + "px";
        tooltipSpan.style.left = x + -100 + "px";
      } else {
        tooltipSpan.display = "none";
      }
    },
    highlightRange(range) {
      const newNode = document.createElement("span");
      newNode.setAttribute(
        "style",
        "background-color: yellow; display: inline;"
      );
      range.surroundContents(newNode);
    },
    setColor() {
      const userSelection = this.getSelected();
      //   for (let i = 0; i < userSelection.rangeCount; i++) {
      //     this.highlightRange(userSelection.getRangeAt(i));
      //   }
      //   let tooltipSpan = document.getElementById("tooltip");
      //   tooltipSpan.style.display = "none";
      const selectionText = userSelection.toString();
      const span = document.createElement("span");
      const range = userSelection.getRangeAt(0);
      const tooltipSpan = document.getElementById("tooltip");
      span.setAttribute("style", "background-color: yellow; display: inline;");
      span.textContent = selectionText;
      range.deleteContents();
      range.insertNode(span);
      tooltipSpan.style.display = "none";
    }
  },
  created() {
    this.$store.dispatch("getBookChapter", this.dispatchPayload);
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";

#chapterText #tooltip {
  display: none;
  .button-tooltip {
    font-size: 12px;
    text-transform: none;
    margin: 0 1px;
    color: $mainColor;
    background-color: rgb(243, 243, 243);
    border-radius: 0;
    border-top: 4px solid rgb(173, 173, 173);
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
}
.showTooltip {
  display: block;
  position: fixed;
  overflow: hidden;
}
</style>