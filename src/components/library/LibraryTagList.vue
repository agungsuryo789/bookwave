<template>
  <v-row>
    <template v-if="loadSkeleton">
      <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" xs="12" class="my-2">
        <v-skeleton-loader class="mx-auto" width="350" type="list-item-avatar-three-line" tile></v-skeleton-loader>
      </v-col>
    </template>
    <template v-else>
      <template v-if="!tagDetail">
        <v-col v-for="n in koleksiTag" :key="n" lg="3" md="3" sm="3" xs="6" class="my-5">
          <v-btn depressed text @click="toTagDetail(n.tag)">{{n.tag}}</v-btn>
        </v-col>
      </template>
      <template v-if="tagDetail">
        <LibraryTagDetail :tagName="tagName" />
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
      tagDetail: false,
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
      this.tagDetail = true;
      this.tagName = tagName;
    }
  },
  created() {
    this.callFunction();
  }
};
</script>