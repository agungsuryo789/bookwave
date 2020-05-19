<template>
  <v-card class="py-2 px-4">
    <v-btn
      v-for="n in daftarKategori"
      :key="n.id_daftar_kategori"
      @click="gotoKategori(n.id_daftar_kategori, n.nama_kategori)"
      class="my-2 mx-3 btn-category"
      depressed
    >{{ n.nama_kategori }}</v-btn>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NavbarCategoryChip",
  computed: mapState({
    daftarKategori: state => state.daftarKategori
  }),
  methods: {
    gotoKategori(idKategori, namaKategori) {
      this.$store.state.kategoriId = idKategori;
      this.$router.push({
        name: "CategoryPage",
        params: { idKategori: namaKategori.toLowerCase() }
      });
    }
  },
  mounted() {
    this.$store.dispatch("getKategori");
  }
};
</script>

<style scoped lang="scss">
.btn-category {
  text-decoration: none;
  font-size: 12px;
}
</style>
