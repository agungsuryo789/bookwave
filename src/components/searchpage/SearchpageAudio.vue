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
        <EpisodeCard
          :idBuku="parseInt(n.id_buku)"
          :idChapter="n.id_chapter"
          :episodeTitle="n.judul_chapter"
          :foto_sampul="n.foto_sampul"
          :judul_buku="n.judul_buku"
          :warna_episode="n.warna_kategori"
          :is_premium_chapter="n.is_premium_chapter"
          :premium_member="n.premium_member"
        />
      </v-col>
    </template>
  </v-row>
</template>

<script>
import EpisodeCard from "@/components/EpisodeCard.vue";
import { mapState } from "vuex";

export default {
  name: "SearchpageAudio",
  components: {
    EpisodeCard
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