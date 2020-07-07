<template>
  <v-card class="book-card mx-auto" max-width="250" max-height="300" flat>
    <div class="book-card-color py-7" :style="cssVars">
      <v-img class="book-card-img mx-auto" width="120px" height="120px" :src="foto_sampul"></v-img>
      <template v-if="premiumStatus == '1' && !premiumMemberStatus">
        <v-icon class="icon-book-locked">mdi-lock-outline</v-icon>
      </template>
      <ButtonBookmark :idBuku="parseInt(idBuku)" :isCollected="isCollected" />
    </div>
    <a @click="gotoBook" class="book-card-title">
      <v-card-title class="book-title">{{ title }}</v-card-title>
      <v-card-subtitle>{{ penulis }}</v-card-subtitle>
    </a>
  </v-card>
</template>

<script>
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
    },
    isCollected: {
      type: Boolean
    },
    isFavorited: {
      type: Boolean
    },
    is_premium: {
      type: String
    }
  },
  components: {
    ButtonBookmark
  },
  data() {
    return {
      premiumMemberStatus: this.$store.getters.premiumStatus,
      premiumStatus: this.$props.is_premium
    };
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
    .book-title {
      font-size: 15px;
      font-weight: bold;
      width: 250px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .icon-book-locked {
    margin-top: -14%;
  }
}
</style>
