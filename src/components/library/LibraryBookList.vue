<template>
  <v-row>
    <template v-if="loadSkeleton">
      <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" xs="12" class="my-2">
        <v-skeleton-loader class="mx-auto" width="350" type="list-item-avatar-three-line" tile></v-skeleton-loader>
      </v-col>
    </template>
    <template v-else>
      <template v-if="koleksiBuku.data">
        <v-col
          v-for="n in koleksiBuku.data"
          :key="n.id_buku"
          lg="4"
          md="6"
          sm="12"
          xs="12"
          class="my-5"
        >
          <BookCardSmall
            :idBuku="parseInt(n.id_buku)"
            :title="n.judul_buku"
            :penulis="n.penulis"
            :foto_sampul="n.foto_sampul"
            :deskripsi="n.deskripsi"
            :warna_kategori="n.warna_kategori"
            :kategori_buku="n.nama_kategori"
            :isCollected="n.is_collected"
            :isFavorited="n.is_favorite"
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
          <router-link
            to="/home"
            style="text-decoration:none;color:#E76464;font-weight:bold;"
          >Jelajahi AHA</router-link>
        </v-col>
      </template>
    </template>
  </v-row>
</template>

<script>
import BookCardSmall from "@/components/BookCardSmall.vue";
import { mapState } from "vuex";
export default {
  name: "LibraryBookList",
  data() {
    return {
      loadSkeleton: true
    };
  },
  components: {
    BookCardSmall
  },
  computed: mapState({
    koleksiBuku: state => state.koleksiBuku
  }),
  methods: {
    callFunction: function() {
      this.$store.dispatch("koleksiBuku");
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