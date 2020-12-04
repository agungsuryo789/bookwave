<template>
  <div>
    <NavbarSection />
    <SearchBlog @clicked="searchByCategory" />
    <template v-if="isDefaultList">
      <v-container v-for="item in blog" :key="item.id_blog_tbl">
        <v-row class="mt-2 my-2">
          <v-col cols="12" md="4">
            <a @click="goDetail(item.id_blog_tbl)">
              <h1 class="ungu">{{ item.judul }}</h1>
              <p class="blog-link">{{ item.lokasi }}</p>
            </a>
          </v-col>
          <v-col cols="12" md="4"></v-col>
          <v-col cols="12" md="4">
            <v-img :src="item.img_flie" gradient="to right, rgba(255, 255, 255), transparent"></v-img>
          </v-col>
        </v-row>
        <div class="blog-divider"></div>
      </v-container>
    </template>
    <template v-else>
      <template v-if="blog.length > 0">
        <v-container v-for="item in blog" :key="item.id_blog_tbl">
          <v-row class="mt-2 my-2">
            <v-col cols="12" md="4">
              <a @click="goDetail(item.id_blog_tbl)">
                <h1 class="ungu">{{ item.judul }}</h1>
                <p class="blog-link">{{ item.lokasi }}</p>
              </a>
            </v-col>
            <v-col cols="12" md="4"></v-col>
            <v-col cols="12" md="4">
              <v-img :src="item.img_flie" gradient="to right, rgba(255, 255, 255), transparent"></v-img>
            </v-col>
          </v-row>
          <div class="blog-divider"></div>
        </v-container>
      </template>
      <template v-else>
        <h1 class="ungu">Blog is not found</h1>
      </template>
    </template>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import SearchBlog from "@/components/pages/SearchBlog.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "BlogList",
  data() {
    return {
      isDefaultList: true
    };
  },
  components: {
    NavbarSection,
    SearchBlog,
    FooterSection
  },
  created() {
    this.$store.dispatch("getBlog");
  },
  computed: mapState({
    blog: state => state.listBlog.data
  }),
  methods: {
    goDetail(idBlog) {
      this.$router.push({
        name: "BlogDetail",
        params: { idBlog: idBlog }
      });
    },
    searchByCategory(e) {
      this.isDefaultList = false;
      this.$store.dispatch("searchBlogByCategory", e);
    }
  }
};
</script>
<style>
.ungu {
  color: rgb(46, 0, 78);
}
.blog-link {
  color: black;
}
.blog-divider{
  height: 2px;
  background: #def1ef;
}
</style>
