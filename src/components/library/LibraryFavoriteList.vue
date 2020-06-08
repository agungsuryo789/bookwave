<template>
  <v-row>
    <template v-if="loadSkeleton">
      <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" xs="12" class="my-2">
        <v-skeleton-loader class="mx-auto" width="350" type="list-item-avatar-three-line" tile></v-skeleton-loader>
      </v-col>
    </template>
    <template v-else>
      <template v-if="koleksiBukuFav.status !== 0">
        <v-col
          v-for="n in koleksiBukuFav"
          :key="n.id_buku"
          lg="4"
          md="6"
          sm="12"
          xs="12"
          class="my-5"
        >
          <BookCardSmall
            :idBuku="n.id_buku"
            :title="n.judul"
            :penulis="n.penulis"
            :foto_sampul="n.foto_sampul"
            :deskripsi="n.deskripsi"
            :warna_kategori="n.warna_kategori"
            :kategori_buku="n.nama_kategori"
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
  name: "LibraryFavoriteList",
  data() {
    return {
      loadSkeleton: true
    };
  },
  components: {
    BookCardSmall
  },
  computed: mapState({
    koleksiBukuFav: state => state.koleksiBukuFav
  }),
  methods: {
    callFunction: function() {
      this.$store.dispatch("koleksiBukuFav");
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