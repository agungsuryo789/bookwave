<template>
  <v-card class="navbar-category-panel py-2 px-4" flat color="#F7F7F7">
    <v-container>
      <v-row class="mx-auto" style="max-width:900px;">
        <v-col>
          <h1 style="color:#E76464;">Temukan berdasar Kategori</h1>
        </v-col>
      </v-row>
      <v-row class="my-5 mx-auto" style="max-width:900px;">
        <v-col v-for="n in daftarKategori" :key="n.id_daftar_kategori" cols="4">
          <v-chip
            class="btn-chip-main mx-1 my-1"
            @click="gotoKategori(n.id_daftar_kategori)"
            filter
            outlined
            link
            :color="n.warna_kategori"
          >{{ n.nama_kategori }}</v-chip>
        </v-col>
      </v-row>
    </v-container>
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
.navbar-category-panel {
  height: 600px;
  .btn-chip-main {
    background-color: white;
    border-radius: 5px;
    border: 2px solid rgb(165, 165, 165);
    border-bottom: 4px solid rgb(165, 165, 165);
    min-width: 130px;
  }
}
</style>
