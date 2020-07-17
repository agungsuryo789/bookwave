<template>
  <v-container>
    <v-row class="align-center row-parent-blog">
      <v-col cols="12" md="6">
        <v-text-field
          solo
          rounded
          v-model="payload.pencarian"
          tabindex="0"
          @keyup.esc="onClose"
          @keyup="liveSearch"
          class="mt-4 mx-2"
          clearable
          autofocus
          label="Temukan yang anda cari"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-col v-if="isResult" cols="12" class="search-result">
        <v-list elevation="2">
          <v-list-item-group>
            <v-list-item
              v-for="item in listSearchBlog"
              :key="item.id_blog_tbl"
              @click="goToBlog(item.id_blog_tbl)"
            >
              <div style="width:100%;">
                {{ item.judul }}
                <v-divider></v-divider>
              </div>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-row justify-space-between"
        style="overflow-x:auto;"
      >
        <v-btn
          v-for="item in blogCategory"
          :key="item.id_blog_category"
          text
          depressed
          @click="searchByCategory(item.id_blog_category)"
          style="text-transform:none;"
        >{{ item.nama_kategori }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchBlog",
  data() {
    return {
      payload: {
        pencarian: ""
      },
      isResult: false
    };
  },
  methods: {
    onClose(event) {
      this.isResult = false;
      this.payload.pencarian = "";
    },
    liveSearch() {
      if (this.payload.pencarian !== "") {
        this.$store.dispatch("blogSearch", this.payload);
        this.isResult = true;
      } else {
        this.payload.pencarian = "";
        this.isResult = false;
        return false;
      }
    },
    goToBlog(idBlog) {
      this.$router.push({
        name: "BlogDetail",
        params: {
          idBlog: idBlog
        }
      });
    },
    searchByCategory(idBlog) {
      this.$emit("clicked", idBlog);
    }
  },
  computed: mapState({
    searchResult: state => state.searchResult,
    blogCategory: state => state.blogCategory,
    listSearchBlog: state => state.listSearchBlog
  }),
  mounted() {
    this.$store.dispatch("getBlogCategory");
  }
};
</script>
<style lang="scss" scoped>
.row-parent-blog {
  position: relative;
}
.search-result {
  position: absolute;
  top: 65px;
  left: 0;
  z-index: 4;
}
</style>