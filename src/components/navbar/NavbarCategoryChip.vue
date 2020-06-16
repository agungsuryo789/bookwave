<template>
  <v-card class="py-2 px-4" flat>
    <v-chip
      class="btn-chip-main mx-1 my-1"
      v-for="n in daftarKategori"
      :key="n.id_daftar_kategori"
      @click="gotoKategori(n.id_daftar_kategori)"
      filter
      outlined
      link
      :color="n.warna_kategori"
    >{{ n.nama_kategori }}</v-chip>
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
    gotoKategori(idKategori) {
      this.$router.push({
        name: "CategoryPage",
        params: { idKategori: idKategori }
      });
    }
  },
  beforeMount() {
    this.$store.dispatch("getKategori");
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";
.btn-chip-main {
  @include btn-chip-main();
}
</style>
