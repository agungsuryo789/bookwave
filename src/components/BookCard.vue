<template>
  <v-card class="book-card mx-auto" max-width="260" max-height="300" flat>
    <div class="book-card-color py-7" :style="cssVars">
      <v-img
        class="book-card-img mx-auto"
        width="120"
        height="120"
        src="https://www.tibs.org.tw/images/default.jpg"
      ></v-img>
      <v-btn class="book-bookmark-button" icon>
        <v-icon>mdi-bookmark-outline</v-icon>
      </v-btn>
    </div>
    <a @click="gotoBook"  class="book-card-title">
      <v-card-title class="text-right">{{ title }}</v-card-title>
      <v-card-subtitle class="text--primary text-right">{{ deskripsi }}</v-card-subtitle>
    </a>
  </v-card>
</template>

<script>
/* eslint-disable */
export default {
  name: "BookCard",
  props: ["idBuku", "title", "deskripsi", "warna_kategori", "kategori_buku"],
  methods: {
    gotoBook() {
      this.$router.push({
        name: "BookPage",
        params: { bookId: this.$props.idBuku, bookName: this.$props.title.toLowerCase() }
      });
    }
  },
  computed: {
    cssVars() {
      return {
        "--color": this.$props.warna_kategori
      };
    }
  }
};
</script>

<style lang="scss">
.book-card {
  .book-card-color {
    height: 180px;
    position: relative;
    border-radius: 8px;
    background-color: var(--color);
    box-shadow: 2px 4px 4px 2px rgb(160, 83, 83);
    .book-bookmark-button {
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
  }
  .book-card-title {
    text-decoration: none;
    color: black;
  }
}
</style>
