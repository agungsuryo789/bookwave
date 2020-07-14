<template>
  <v-card class="book-card mx-auto" width="220" height="300" flat>
    <div class="book-card-color py-7" :style="cssVars">
      <v-img
        lazy-src="https://www.tibs.org.tw/images/default.jpg"
        class="book-card-img mx-auto"
        width="120px"
        height="120px"
        @click="gotoBook"
        :src="foto_sampul"
      ></v-img>
    </div>
    <div class="d-flex flex-row">
      <div>
        <a @click="gotoBook" class="book-card-title m-0 p-0">
          <v-card-title class="book-title">{{ title }}</v-card-title>
          <v-card-subtitle>{{ penulis }}</v-card-subtitle>
        </a>
        <template v-if="premiumStatus == '1' && !premiumMemberStatus">
          <span class="mx-4 my-0 p-0" style="color:red;">Premium</span>
        </template>
      </div>
      <div class="my-4">
        <ButtonBookmark :idBuku="parseInt(idBuku)" :isCollected="isCollected" />
      </div>
    </div>
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
	background-color: var(--color);
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
      width: 195px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .book-card-img {
    &:hover {
      cursor: pointer;
    }
  }
  .icon-book-locked {
    margin-top: -4px;
  }
}
</style>
