<template>
  <v-container fluid class="container-navbar-category">
    <v-row class="mx-auto" style="max-width:800px;">
      <v-col>
        <h3 class="navbar-category-title px-5" style="color:#4285F4;">Temukan Berdasarkan Kategori</h3>
		<v-divider class="mt-8"></v-divider>
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
            <v-img :src="n.icon_file" class="mr-2 icon-category"></v-img>
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
.icon-category{
  width: 23px;
  height: 23px;
}
.container-navbar-category {
  background-color: #F5F5F5;
  z-index: 999;
  padding-top: 40px;
  padding-bottom: 40px;
  &::after{
    position: fixed;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba($color: #000000, $alpha: .3);
    z-index: -1;
  }
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

.btn-asd {
    align-items: center;
    color: inherit;
    display: flex;
    flex: 1 0 auto;
    justify-content: inherit;
    line-height: normal;
    position: relative;
    text-align: left;
}
</style>
