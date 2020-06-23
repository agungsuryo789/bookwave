<template>
  <div>
    <div id="chapterBody" :style="styleObject" @mouseup="showHighlightTool">
      <div id="tooltip" style="z-index:3;position:relative;">
        <v-btn class="button-tooltip py-2 px-2" depressed @click="setHighlight">
          <v-icon class="mx-1" small>mdi-pencil</v-icon>Warnai
        </v-btn>
      </div>
      <p id="chapterText" class="text-center text-lg-left">{{chapterText}}</p>
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
        x_web: "",
        y_web: ""
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
      // const chapterText = document.getElementById("chapterText");
      const userSelection = window.getSelection();
      const selectionText = userSelection.toString();
      const range = userSelection.getRangeAt(0);

      // Create Highlight Color Span
      const span = document.createElement("span");
      const tooltipSpan = document.getElementById("tooltip");
      span.textContent = selectionText;
      span.style.backgroundColor = "#E76464";
      span.style.zIndex = "2";
      const charLength = selectionText.length;
      console.log(charLength);
      console.log(range.startOffset);
      console.log(range.startOffset + charLength);

      // Set & Save Highlight Node Data
      if (charLength > 1) {
        range.deleteContents();
        range.insertNode(span);
        this.highlightPayload.kalimat = selectionText;
        // this.$store.dispatch("setChapterHighlight", this.highlightPayload);
        tooltipSpan.style.display = "none";
      } else {
        tooltipSpan.style.display = "none";
      }
    },
    getHighlight() {
      const chapterText = document.getElementById("chapterText");
      const chapterBody = document.getElementById("chapterBody");
      //   var deletePayload = this.delHighlightPayload;
      //   const store = this.$store;
      const x = this.dataHighlight.data[0].data_highlight;

      // Every iteration will create the text body and it's highlighted span
      for (let i = 0; i < x.length; i++) {
        // Create Highlight text Span
        const hgText = document.createElement("p");
        const span = document.createElement("span");

        hgText.textContent = this.chapterText;
        hgText.style.color = "transparent";
        hgText.style.position = "absolute";
        hgText.style.top = 0;
        hgText.style.left = 0;
        hgText.style.zIndex = 2 + i;
        hgText.id = "highlight-" + i;
        hgText.classList.add("text-center", "text-lg-left", "mx-3", "my-3");
        hgText.onmouseover = function() {
          hgText.style.display = "none";
        };
        chapterText.onmouseout = function() {
          hgText.style.display = "block";
        };
        chapterBody.appendChild(hgText);

        span.style.backgroundColor = x[i].warna;
        span.style.color = "black";
        span.style.zIndex = 2 + i;
        var range = new Range();
        range.setStart(
          document.getElementById("highlight-" + i).childNodes[0],
          x[i].start_char
        );
        range.setEnd(
          document.getElementById("highlight-" + i).childNodes[0],
          x[i].end_char
        );
        range.surroundContents(span);

        // Create Tooltip Delete Highlight
        // const tooltip2 = document.createElement("button");
        // tooltip2.textContent = "Hapus Highlight";
        // tooltip2.setAttribute("style", this.styleTooltipDelete);
        // tooltip2.onclick = function() {
        //   deletePayload.kalimat = x[i].kalimat;
        //   console.log(deletePayload.kalimat);
        //   store.dispatch("setDelChapterHighlight", deletePayload);
        // };
        // span.appendChild(tooltip2);
        // span.onmouseover = function() {
        //   tooltip2.style.display = "block";
        // };
        // span.onmouseout = function() {
        //   setTimeout(() => {
        //     tooltip2.style.display = "none";
        //   }, 3000);
        // };
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