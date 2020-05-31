<template>
  <div>
    <p id="chapterText" :style="styleObject" @mouseup="showHighlightTool">
      <span id="tooltip">
        <v-btn class="button-tooltip py-2 px-2" depressed @click="setColor">
          <v-icon class="mx-1" small>mdi-pencil</v-icon>Warnai
        </v-btn>
      </span>
      {{ chapterText }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ChapterpageText",
  props: ["fontSize", "chapterText"],
  data() {
    return {
      highlightPayload: {
        kalimat: "",
        warna: "#E76464",
        id_chapter: this.$route.params.chapterId,
        start_char: "",
        end_char: ""
      }
    };
  },
  computed: {
    styleObject() {
      return {
        fontSize: this.$props.fontSize + "px"
      };
    }
  },
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
        tooltipSpan.style.top = y - 60 + "px";
        tooltipSpan.style.left = x + -100 + "px";
      } else {
        tooltipSpan.display = "none";
      }
    },
    setColor() {
      const userSelection = this.getSelected();
      const selectionText = userSelection.toString();
      const span = document.createElement("span");
      const range = userSelection.getRangeAt(0);
      const tooltipSpan = document.getElementById("tooltip");

      // Create Highlight Color Span
      span.setAttribute("style", "background-color: #F1E4E4; display: inline;");
      span.textContent = selectionText;
      range.deleteContents();
      range.insertNode(span);

      // Set & Save Highlight Node Data
      this.highlightPayload.kalimat = selectionText;
      this.highlightPayload.start_char = range.startOffset;
      this.highlightPayload.end_char = range.endOffset;
      this.$store.dispatch("setChapterHighlight", this.highlightPayload);
      tooltipSpan.style.display = "none";
    },
    createNode() {
    //   const chapterText = document.getElementById("chapterText");
    //   const range = chapterText.createRange();
    //   const span = document.createElement("span");

    //   span.setAttribute("style", "background-color: #F1E4E4; display: inline;");
    //   span.textContent = selectionText;
    //   range.deleteContents();
    //   range.insertNode(span);

    //   range.setStart(startNode, startOffset);
    //   range.setEnd(endNode, endOffset);
    //   return range;
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