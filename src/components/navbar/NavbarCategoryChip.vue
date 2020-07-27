<template>
  <v-container class="container-navbar-category">
    <v-row class="mx-auto" style="max-width:800px;">
      <v-col>
        <h1 class="navbar-category-title" style="color:#E76464;">Temukan berdasar Kategori</h1>
      </v-col>
    </v-row>
    <v-row class="my-5 mx-auto" style="max-width:800px;">
      <v-col
        v-for="n in daftarKategori"
        :key="n.id_daftar_kategori"
        class="px-2"
        cols="6"
        lg="4"
        md="4"
        sm="4"
      >
        <v-btn class="mx-0 mx-lg-1 my-1" @click="gotoKategori(n.id_daftar_kategori)" text deppresed>
          <v-img :src="n.icon_file" class="mr-2"></v-img>
          <p
            class="my-2"
            style="color:black;font-weight:bold;text-transform:none;"
          >{{ n.nama_kategori }}</p>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
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
.container-navbar-category {
  background-color: white;
  border: 2px solid rgb(184, 184, 184);
  border-bottom: 6px solid rgb(184, 184, 184);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 999;
  .navbar-category-title {
    @media screen and (max-width: 450px) {
      font-size: 16px;
    }
  }
}
.btn-chip-category {
  p {
    text-transform: none;
  }
  @media screen and (min-width: 760px) {
    min-width: 130px;
  }
}
</style>
