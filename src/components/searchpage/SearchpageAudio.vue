<template>
  <v-row>
    <template v-if="loadSkeleton">
      <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" xs="12" class="my-2">
        <v-skeleton-loader class="mx-auto" width="350" type="list-item-avatar-three-line" tile></v-skeleton-loader>
      </v-col>
    </template>
    <template v-else>
      <v-col
        v-for="n in searchResult.data_chapter"
        :key="n.id_chapter"
        lg="4"
        md="6"
        sm="12"
        xs="12"
        class="my-5"
      >
        <EpisodeCardSmall
          :idBuku="parseInt(n.id_buku)"
          :idChapter="parseInt(n.id_chapter)"
          :judul_buku="n.judul_buku"
          :episodeTitle="n.judul_chapter"
          :foto_sampul="n.foto_sampul"
          :warna_kategori="n.warna_kategori"
          :warna_border="n.border_buku"
          :is_premium_chapter="n.is_premium_chapter"
          :premium_member="n.premium_member"
        />
      </v-col>
    </template>
  </v-row>
</template>

<script>
import EpisodeCardSmall from "@/components/EpisodeCardSmall.vue";
import { mapState } from "vuex";

export default {
  name: "SearchpageAudio",
  components: {
    EpisodeCardSmall
  },
  data() {
    return {
      loadSkeleton: true,
      payload: {
        pencarian: this.$route.params.searchParams.replace(/-/g, " "),
        type_filter: ""
      }
    };
  },
  methods: {
    callFunction: function() {
      this.$store.dispatch("getSearchByDefault", this.payload);
      var load = this.$store.state.loaderStatus;
      var v = this;
      setTimeout(function() {
        if (load) {
          v.loadSkeleton = false;
        } else {
          v.loadSkeleton = true;
        }
      }, 800);
    }
  },
  computed: mapState({
    searchResult: state => state.searchResult
  }),
  created() {
    this.callFunction();
  }
};
</script>