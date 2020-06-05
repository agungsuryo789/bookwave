<template>
  <v-card class="book-card mx-auto" max-width="250" max-height="300" flat>
    <div class="book-card-color py-7" :style="cssVars">
      <v-img class="book-card-img mx-auto" width="120" height="120" :src="foto_sampul"></v-img>
      <ButtonBookmark :idBuku="idBuku" />
    </div>
    <a @click="gotoBook" class="book-card-title">
      <v-card-title class="text-right">{{ title }}</v-card-title>
      <v-card-subtitle class="text--primary text-right">
        <p>{{ penulis }}</p>
      </v-card-subtitle>
    </a>
  </v-card>
</template>

<script>
/* eslint-disable */
import ButtonBookmark from "@/components/ButtonBookmark.vue";
export default {
  name: "BookCard",
  props: [
    "idBuku",
    "title",
    "foto_sampul",
    "deskripsi",
    "penulis",
    "warna_kategori",
    "kategori_buku"
  ],
  components: {
    ButtonBookmark
  },
  methods: {
    gotoBook() {
      this.$router.push({
        name: "BookPage",
        params: {
          bookId: this.$props.idBuku,
          bookName: this.$props.title.toLowerCase()
        }
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
    // background-color: var(--color);
    border: 5px solid var(--color);
    border-bottom: 10px solid var(--color);
    .book-bookmark-button {
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
  }
  .book-card-title {
    text-decoration: none;
    color: black;
    p {
      width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
