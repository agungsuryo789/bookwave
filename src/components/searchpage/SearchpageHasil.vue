<template>
  <v-row>
    <template v-if="loadSkeleton">
      <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" xs="12" class="my-2">
        <v-skeleton-loader class="mx-auto" width="350" type="list-item-avatar-three-line" tile></v-skeleton-loader>
      </v-col>
    </template>
    <template v-else>
      <template v-if="searchResult.status !== 0">
        <v-col
          v-for="n in searchResult.data_buku"
          :key="n.id_buku"
          lg="4"
          md="6"
          sm="12"
          xs="12"
          class="my-5"
        >
          <BookCardSmall
            :idBuku="parseInt(n.id_buku)"
            :title="n.judul"
            :penulis="n.penulis"
            :foto_sampul="n.foto_sampul"
            :deskripsi="n.deskripsi"
            :warna_kategori="n.warna_sub"
            :warna_border="n.warna_utama"
            :kategori_buku="n.nama_kategori"
			:is_premium="n.is_premium"
			:isCollected="n.is_collected"
            :isFavorited="n.is_favorite"
          />
        </v-col>
      </template>
    </template>
  </v-row>
</template>

<script>
import BookCardSmall from "@/components/BookCardSmall.vue";
import { mapState } from "vuex";

export default {
  name: "SearchpageHasil",
  components: {
    BookCardSmall
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
  mounted() {
    this.callFunction();
  }
};
</script>