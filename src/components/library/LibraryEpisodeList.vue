<template>
  <v-row>
    <template v-if="loadSkeleton">
      <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" xs="12" class="my-2">
        <v-skeleton-loader class="mx-auto" width="350" type="list-item-avatar-three-line" tile></v-skeleton-loader>
      </v-col>
    </template>
    <template v-else>
      <template v-if="koleksiAudio.data">
        <v-col
          v-for="n in koleksiAudio.data"
          :key="n.id_chapter"
          lg="4"
          md="6"
          sm="12"
          xs="12"
          class="my-5"
        >
          <EpisodeCard
            :idBuku="n.id_buku"
            :idChapter="n.id_chapter"
            :episodeTitle="n.judul_chapter"
            :foto_sampul="n.foto_sampul"
            :warna_episode="n.warna_kategori"
          />
        </v-col>
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
import EpisodeCard from "@/components/EpisodeCard.vue";
import { mapState } from "vuex";
export default {
  name: "LibraryEpisodeList",
  data() {
    return {
      loadSkeleton: true
    };
  },
  components: {
    EpisodeCard
  },
  computed: mapState({
    koleksiAudio: state => state.koleksiAudio
  }),
  methods: {
    callFunction: function() {
      this.$store.dispatch("koleksiAudio");
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
  created() {
    this.callFunction();
  }
};
</script>