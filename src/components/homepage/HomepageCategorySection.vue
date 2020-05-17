<template>
  <v-container>
    <v-row class="kategori-desc">
      <v-col lg="6" md="12" sm="12" cols="12">
        <h1>Kategori yang sering di cari</h1>
      </v-col>
      <v-col lg="6" md="12" sm="12" cols="12">
        <p>
          Dari kategori A-Z kami telah menyortirnya untuk
          Anda. Manfaatkan akses tak terbatas ke seluruh
          kategori yang ada.
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center align-center my-10">
      <v-col class="col-kategori-chip">
        <v-chip-group v-model="chipKategori" column>
          <v-chip filter outlined>Semua</v-chip>
          <v-chip filter outlined>Agama</v-chip>
          <v-chip filter outlined>Politik</v-chip>
          <v-chip filter outlined>Budaya</v-chip>
          <v-chip filter outlined>Kesehatan</v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <v-row class="my-9 justify-center align-center" no-gutters>
      <template v-for="n in booksToShow">
        <v-col
          :key="n"
          v-if="loadSkeleton"
          lg="4"
          md="12"
          sm="12"
          cols="12"
          class="my-5"
          style="max-width:300px;"
        >
          <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
        </v-col>
        <v-col
          :key="n"
          v-if="!loadSkeleton"
          lg="4"
          md="12"
          sm="12"
          cols="12"
          class="my-5 mx-1"
          style="max-width:300px;"
        >
          <BookCard />
        </v-col>
      </template>
    </v-row>
    <v-row>
      <v-col class="text-center d-flex flex-column justify-center align-center">
        <v-btn class="btnLihat" rounded color="#39DF8C" elevation="2" depressed @click="booksToShow += 3">Lihat lebih banyak</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
export default {
  name: "HomepageCategorySection",
  components: {
    BookCard
  },
  data: () => ({
    loadSkeleton: false,
    booksToShow: 3
  })
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";
.kategori-desc {
  h1 {
    font-size: 38px;
    color: #d84b5b;
    font-weight: 700;
  }
  p {
    letter-spacing: 1px;
  }
}
.col-kategori-chip {
  max-width: 400px;
}
.btnLihat {
  @include btn-main-green();
  width: 20%;
}
</style>
