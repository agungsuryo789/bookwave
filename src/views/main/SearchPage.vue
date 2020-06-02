<template>
  <div class="book-search">
    <NavbarSection />
    <v-container class="mt-10">
      <v-row>
        <h2 class="font-weight-black book-section-title">Buku</h2>
        <v-progress-linear v-model="underlineValue"></v-progress-linear>
        <!-- <v-col v-if="loadSkeleton" lg="4" md="12" class="my-5"></v-col> -->
        <template v-if="loadSkeleton">
          <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" xs="12" class="my-2">
            <v-skeleton-loader class="mx-auto" width="150" type="card-heading"></v-skeleton-loader>
            <v-skeleton-loader class="mx-auto" width="50" type="avatar"></v-skeleton-loader>
          </v-col>
        </template>
        <template v-else>
          <v-col
            v-for="n in searchResult"
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
      </v-row>
    </v-container>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import BookCardSmall from "@/components/BookCardSmall.vue";
import { mapState } from "vuex";

export default {
  name: "BookSearch",
  components: {
    NavbarSection,
    FooterSection,
    BookCardSmall
  },
  data() {
    return {
      loadSkeleton: true,
      underlineValue: 15,
      payload: {
        pencarian: this.$route.query.s,
        type_filter: ""
      }
    };
  },
  computed: mapState({
    searchResult: state => state.searchResult
  }),
  beforeMount() {
    this.$store.dispatch("getSearch", this.payload);
    if (this.searchResult) {
      this.loadSkeleton = false;
    }
  }
};
</script>

<style>
</style>
