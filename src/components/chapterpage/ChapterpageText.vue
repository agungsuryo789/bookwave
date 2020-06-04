<template>
  <div>
    <div id="chapterBody" :style="styleObject" @mouseup="showHighlightTool">
      <div id="tooltip" style="z-index:3;position:relative;">
        <v-btn class="button-tooltip py-2 px-2" depressed @click="setHighlight">
          <v-icon class="mx-1" small>mdi-pencil</v-icon>Warnai
        </v-btn>
      </div>
      <p id="chapterText">{{chapterText}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ChapterpageText",
  props: ["fontSize", "bookId", "chapterText"],
  data() {
    return {
      highlightPayload: {
        kalimat: "",
        warna: "#E76464",
        id_chapter: this.$route.params.chapterId,
        start_char: "",
        end_char: ""
      },
      delHighlightPayload: {
        kalimat: "",
        id_chapter: this.$route.params.chapterId
      },
      dispatchPayload: {
        bookId: this.$route.params.bookId,
        chapterId: this.$route.params.chapterId
      },
      varTop: 248,
      varLeft: 0,
      styleTooltipDelete: `font-size: 10px;
		top: -35px;
		left: 0px;
		letter-spacing: 1.3px;
		position: absolute;
		z-index: 4;
		padding: 0 4px;
		background-color: rgb(243, 243, 243);
        border-radius: 0;
        border-top: 4px solid rgb(173, 173, 173);
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
		color: #e76464;
		display: none;
		width:100px;`
    };
  },
  computed: mapState({
    dataHighlight: state => state.chapterDetail,
    styleObject() {
      return {
        fontSize: this.$props.fontSize + "px"
      };
    }
  }),
  methods: {
    getSelected() {
      // Get Mouse Selection Data
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

      // Show the highlight tool button on selection
      if (selection && anchorSelection > 0) {
        const x = e.clientX;
        const y = e.clientY;
        tooltipSpan.style.display = "flex";
        tooltipSpan.style.position = "fixed";
        tooltipSpan.style.overflow = "hidden";
        tooltipSpan.style.zIndex = "3";
        tooltipSpan.style.top = y - 60 + "px";
        tooltipSpan.style.left = x + -100 + "px";
      } else {
        tooltipSpan.display = "none";
      }
    },
    setHighlight() {
      this.setHighlight = function() {};
      const userSelection = this.getSelected();
      const selectionText = userSelection.toString();
      const chapterText = document.getElementById("chapterText");
      const range = userSelection.getRangeAt(0).cloneRange();
      const rect = range.getBoundingClientRect();

      // Create Highlight Color Span
      const span = document.createElement("span");
      const tooltipSpan = document.getElementById("tooltip");
      span.textContent = selectionText;
      span.style.backgroundColor = "#E76464";
      span.style.position = "absolute";
      span.style.top = rect.top - this.varTop + "px";
      span.style.left = rect.left + "px";
      span.style.zIndex = "2";
      chapterText.appendChild(span);
      tooltipSpan.style.display = "none";

      // Set & Save Highlight Node Data
      this.highlightPayload.kalimat = selectionText;
      this.highlightPayload.start_char = rect.top;
      this.highlightPayload.end_char = rect.left;
      this.$store.dispatch("setChapterHighlight", this.highlightPayload);
    },
    getHighlight() {
      const chapterText = document.getElementById("chapterText");
      var deletePayload = this.delHighlightPayload;
      const store = this.$store;
      const x = this.dataHighlight.data[0].data_highlight;
      for (let i = 0; i < x.length; i++) {
        // Create Highlight text Span
        const span = document.createElement("span");
        span.textContent = x[i].kalimat;
        span.style.backgroundColor = x[i].warna;
        span.style.position = "absolute";
        span.style.top = x[i].start_char - this.varTop + "px";
        span.style.left = x[i].end_char - this.varLeft + "px";
        span.style.zIndex = "2";
        chapterText.appendChild(span);
        // Create Tooltip Delete Highlight
        const tooltip2 = document.createElement("button");
        tooltip2.textContent = "Hapus Highlight";
        tooltip2.setAttribute("style", this.styleTooltipDelete);
        tooltip2.onclick = function() {
          deletePayload.kalimat = x[i].kalimat;
          console.log(deletePayload.kalimat);
          store.dispatch("setDelChapterHighlight", deletePayload);
        };
        span.appendChild(tooltip2);
        span.onmouseover = function() {
          tooltip2.style.display = "block";
        };
        span.onmouseout = function() {
          setTimeout(() => {
            tooltip2.style.display = "none";
          }, 3000);
        };
      }
    }
  },
  mounted() {
    this.$store.dispatch("getBookChapter", this.dispatchPayload);
    this.getHighlight();
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";

#chapterBody {
  box-sizing: border-box;
  #tooltip {
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
  .chapterContent {
    border: none;
    &:focus {
      border: 1px solid transparent;
    }
  }
}
.tooltipDelete {
}
</style>