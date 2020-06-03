<template>
  <div>
    <div id="chapterBody" :style="styleObject" @mouseup="showHighlightTool">
      <span id="tooltip">
        <v-btn class="button-tooltip py-2 px-2" depressed @click="setHighlight">
          <v-icon class="mx-1" small>mdi-pencil</v-icon>Warnai
        </v-btn>
      </span>
      <!-- <p id="chapterText">{{ chapterText }}</p> -->
    </div>
    <editor-menu-bubble
      :editor="editor"
      :keep-in-bounds="keepInBounds"
      v-slot="{ commands, isActive, menu }"
    >
      <div
        class="menububble"
        :class="{ 'is-active': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >
        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <icon name="bold" />
        </button>
      </div>
    </editor-menu-bubble>
    <editor-content @click="showMenuBar" :editor="editor" class="chapterContent" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Editor, EditorContent, EditorMenuBubble } from "tiptap";
import { Bold } from "tiptap-extensions";
export default {
  name: "ChapterpageText",
  components: {
    EditorContent,
    EditorMenuBubble
  },
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
      dispatchPayload: {
        bookId: this.$route.params.bookId,
        chapterId: this.$route.params.chapterId
      },
      editor: new Editor({
        extensions: [new Bold()],
        content: `
          <h1>Yay Headlines!</h1>
          <p>All these <strong>cool tags</strong> are working now.</p>
        `
      })
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
    showMenuBar() {
      const menubar = document.getElementById("menuBarTool");
      menubar.style.display = "inline";
      alert("this is working");
    },
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
    setHighlight() {
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
      this.highlightPayload.kalimat = selectionText.toLowerCase();
      this.highlightPayload.start_char = range.startOffset;
      this.highlightPayload.end_char = range.endOffset;
      this.$store.dispatch("setChapterHighlight", this.highlightPayload);
      tooltipSpan.style.display = "none";
    },
    createNode() {
      const chapterText = document.getElementById("chapterText");
      const x = this.dataHighlight.data[0].data_highlight;

      for (let i = 0; i < x.length; i++) {
        const range = document.createRange();
        range.setStart(chapterText.firstChild, 0);
        range.setEnd(chapterText.firstChild, 10);

        const newSpan = document.createElement("span");
        newSpan.setAttribute(
          "style",
          "background-color: #F1E4E4; display: inline;"
        );
        newSpan.textContent = "asdasdasd";
        range.deleteContents();
        range.insertNode(newSpan);
      }
    }
  },
  mounted() {
    this.$store.dispatch("getBookChapter", this.dispatchPayload);
    // this.createNode();
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";

#chapterBody #tooltip {
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
.menubar {
  display: none;
  border: 1px solid gray;
  border-radius: 4px;
  width: 70px;
}
.chapterContent {
  border: none;
  &:focus {
    border: 1px solid transparent;
  }
}
.menububble {
  position: absolute;
  display: flex;
  z-index: 20;
  background: black;
  border-radius: 5px;
  padding: 0.3rem;
  margin-bottom: 0.5rem;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;

  &.is-active {
    opacity: 1;
    visibility: visible;
  }

  &__button {
    display: inline-flex;
    background: transparent;
    border: 0;
    color: white;
    padding: 0.2rem 0.5rem;
    margin-right: 0.2rem;
    border-radius: 3px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: rgba(white, 0.1);
    }

    &.is-active {
      background-color: rgba(white, 0.2);
    }
  }

  &__form {
    display: flex;
    align-items: center;
  }

  &__input {
    font: inherit;
    border: none;
    background: transparent;
    color: white;
  }
}
</style>