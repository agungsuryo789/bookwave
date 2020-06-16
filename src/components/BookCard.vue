<template>
  <v-card class="book-card mx-auto" max-width="250" max-height="300" flat>
    <div class="book-card-color py-7" :style="cssVars">
      <v-img class="book-card-img mx-auto" width="120" height="120" :src="foto_sampul"></v-img>
      <ButtonBookmark :idBuku="idBuku" />
    </div>
    <a @click="gotoBook" class="book-card-title">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>{{ penulis }}</v-card-subtitle>
    </a>
  </v-card>
</template>

<script>
/* eslint-disable */
import ButtonBookmark from "@/components/ButtonBookmark.vue";
export default {
  name: "BookCard",
  props: {
    idBuku: {
      type: Number
    },
    title: {
      type: String
    },
    foto_sampul: {
      type: String
    },
    deskripsi: {
      type: String
    },
    penulis: {
      type: String
    },
    warna_kategori: {
      type: String
    },
    kategori_buku: {
      type: String
    }
  },
  components: {
    ButtonBookmark
  },
  methods: {
    gotoBook() {
      const urlName = this.$props.title.toLowerCase();
      this.$router.push({
        name: "BookPage",
        params: {
          bookId: this.$props.idBuku,
          bookName: urlName.replace(/ /g, "-")
        }
      });
      // alert(urlName.replace(/ /g, "-"));
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
