<template>
  <v-row>
    <template v-if="loadSkeleton">
      <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" xs="12" class="my-2">
        <v-skeleton-loader class="mx-auto" width="350" type="list-item-avatar-three-line" tile></v-skeleton-loader>
      </v-col>
    </template>
    <template v-else>
      <template v-if="koleksiTag.data">
        <template v-if="!showTagDetail">
          <v-col v-for="n in koleksiTag.data" :key="n.id_tag" lg="3" md="3" sm="3" xs="6" class="my-5">
            <v-btn depressed text @click="toTagDetail(n.tag)">{{n.tag}}</v-btn>
          </v-col>
        </template>
        <template v-if="showTagDetail">
          <LibraryTagDetail :tagName="tagName" />
        </template>
      </template>
      <template v-else>
        <v-col lg="12" class="align-center justify-center text-center">
          <v-img
            src="@/assets/image/bookNotFound.svg"
            aspect-ratio="1"
            width="100px"
            height="100px"
            style="margin: 0 auto;"
          ></v-img>
          <p class="my-3" style="color:#DDDDDD;">Buku tidak ditemukan</p>
        </v-col>
      </template>
    </template>
  </v-row>
</template>

<script>
import LibraryTagDetail from "@/components/library/librarytag/LibraryTagDetail.vue";
import { mapState } from "vuex";
export default {
  name: "LibraryTagList",
  components: {
    LibraryTagDetail
  },
  data() {
    return {
      loadSkeleton: true,
      showTagDetail: false,
      tagName: ""
    };
  },
  computed: mapState({
    koleksiTag: state => state.koleksiTag
  }),
  methods: {
    callFunction: function() {
      this.$store.dispatch("koleksiTag");
      var load = this.$store.state.loaderStatus;
      var v = this;
      setTimeout(function() {
        if (load) {
          v.loadSkeleton = false;
        } else {
          v.loadSkeleton = true;
        }
      }, 800);
    },
    toTagDetail(tagName) {
      this.showTagDetail = true;
      this.tagName = tagName;
    }
  },
  created() {
    this.callFunction();
  }
};
</script>