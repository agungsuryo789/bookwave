<template>
  <div>
    <v-snackbar v-model="showPopAlert">
      You now can highlight the text!
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="showPopAlert = false">Close</v-btn>
      </template>
    </v-snackbar>
    <div id="chapterBody" :style="styleObject">
      <div id="tooltip" style="z-index:3;position:relative;">
        <v-btn class="button-tooltip py-2 px-2" depressed @click="setHighlight">
          <v-icon class="mx-1" small>mdi-pencil</v-icon>Warnai
        </v-btn>
      </div>
      <p
        id="chapterText"
        class="text-left"
        v-if="toggleHighlight"
        @mouseup="showHighlightTool"
      >{{chapterText}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ChapterpageText",
  props: {
    fontSize: {
      type: Number
    },
    bookId: {
      type: Number
    },
    chapterText: {
      type: String
    },
    toggleHg: {
      type: Boolean
    }
  },
  data() {
    return {
      highlightPayload: {
        kalimat: "",
        warna: "#FEFE05",
        id_chapter: this.$route.params.chapterId,
        start_char: "",
        end_char: ""
      },
      delHgPayload: {
        id_highlight: ""
      },
      dispatchPayload: {
        bookId: this.$route.params.bookId,
        chapterId: this.$route.params.chapterId
      },
      toggleHighlight: true,
      showPopAlert: false,
      styleTooltipDelete: `font-size: 8px;
		top: -35px;
		left: 0px;
		letter-spacing: 1.3px;
		position: absolute;
		padding: 2px 2px;
		background-color: rgb(243, 243, 243);
        border-radius: 0;
        box-shadow: 0 -2px 3px #c0c0c0;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
		color: #e76464;
		display: none;
		width:70px;`
    };
  },
  watch: {
    toggleHg: function(newValue, oldValue) {
      const hgClass = document.getElementsByClassName("highlight-data");
      if (!newValue) {
        for (var i = 0; i < hgClass.length; i += 1) {
          hgClass[i].style.display = "none";
        }
        this.showPopAlert = true;
      } else {
        for (var j = 0; j < hgClass.length; j += 1) {
          hgClass[j].style.display = "block";
        }
        this.showPopAlert = false;
      }
    }
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
      // Show the highlight tool button on selection
      const selection = this.getSelected();
      const anchorSelection = selection.extentOffset - selection.anchorOffset;
      const tooltipSpan = document.getElementById("tooltip");

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
      span.style.backgroundColor = "#FEFE05";
      span.style.zIndex = "2";
      const charLength = selectionText.length;

      // Set & Save Highlight Node Data
      if (charLength > 1) {
        range.deleteContents();
        range.insertNode(span);
        this.highlightPayload.kalimat = selectionText;
        this.highlightPayload.start_char = range.startOffset;
        this.highlightPayload.end_char = range.startOffset + charLength;
        this.$store.dispatch("setChapterHighlight", this.highlightPayload);
        tooltipSpan.style.display = "none";
      } else {
        tooltipSpan.style.display = "none";
      }
    },
    getHighlight() {
      const chapterBody = document.getElementById("chapterBody");
      const store = this.$store;
      var deletePayload = this.delHgPayload;
      const x = this.dataHighlight.data[0].data_highlight;
      if (x.length > 0) {
        // Every iteration will create the text body and it's highlighted span
        for (let i = 0; i < x.length; i++) {
          const hgText = document.createElement("p");
          const span = document.createElement("span");

          // Create Highlighted text text body
          hgText.textContent = this.chapterText;
          hgText.style.color = "transparent";
          hgText.style.position = "absolute";
          hgText.style.top = 0;
          hgText.style.left = 0;
          hgText.style.whiteSpace = "pre-line";
          hgText.style.zIndex = 2 + i;
          hgText.id = "highlight-" + i;
          hgText.classList.add("highlight-data", "text-left", "mx-3", "my-3");
          hgText.onmouseup = function() {
            const btHg = document.getElementById("btEnableHg");
            btHg.classList.add("glowing-animation");
            window.getSelection().removeAllRanges();
            window.scrollTo(0, 0);
            alert("Click the Pencil Icon(Top Right) to enable Highlight Text");
          };

          chapterBody.appendChild(hgText);

          // Create Highlight span color
          span.classList.add("span-hg-color");
          const spanClass = document.getElementsByClassName("span-hg-color");
          span.style.backgroundColor = "#FEFE05";
          span.style.color = "black";
          span.style.position = "relative";
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

          for (var j = 0; j < spanClass.length; j++) {
            // Create Tooltip delete highlight

            const tooltip2 = document.createElement("button");
            tooltip2.classList.add("button-del-hg");

            tooltip2.textContent = "Hapus Highlight";
            tooltip2.setAttribute("style", this.styleTooltipDelete);
            tooltip2.style.zIndex = 3 + i + j;
            tooltip2.onclick = function() {
              deletePayload.id_highlight = parseInt(x[i].id_buku_highlight);
              store.dispatch("setDelChapterHighlight", deletePayload);
            };

            spanClass[i].appendChild(tooltip2);
          }
        }
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
  #chapterText {
    white-space: pre-line;
    color: black;
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

</style>