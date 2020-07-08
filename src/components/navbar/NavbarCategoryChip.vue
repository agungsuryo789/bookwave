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
    daftarKategori: state => state.daftarKategoriAuth
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
    this.$store.dispatch("getDaftarKategoriAuth");
  }
};
</script>

<style scoped lang="scss">
.btn-chip-main {
  background-color: white;
  border-radius: 5px;
  border: 2px solid rgb(165, 165, 165);
  border-bottom: 4px solid rgb(165, 165, 165);
}
</style>
