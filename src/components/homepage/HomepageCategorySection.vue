<template>
  <v-container>
    <v-row class="kategori-desc mx-auto" style="max-width:900px;">
      <v-col lg="6" md="12" sm="12" cols="12">
        <h1 style="max-width:400px;">Kategori yang sering di cari</h1>
        <div class="title-underline d-flex flex-row justify-start my-2" style="margin-left: -4px;">
          <img class="mx-2" src="@/assets/image/underline-1.svg" height="8" />
          <img src="@/assets/image/underline-2.svg" height="8" />
        </div>
      </v-col>
      <v-col class="my-3" lg="6" md="12" sm="12" cols="12">
        <p>
          Dari kategori A-Z kami telah menyortirnya untuk Anda.
          Manfaatkan akses tak terbatas ke seluruh kategori yang ada.
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center align-center my-10">
      <v-col class="col-kategori-chip d-flex flex-row justify-center align-center">
        <v-card class="chip-card py-7 px-5" flat outlined>
          <v-btn
            class="mx-1 my-1"
            v-for="n in daftarKategoriNoAuth"
            :key="n.id_daftar_kategori"
            @click="filterCategory(n.id_daftar_kategori)"
            text
            depressed
          >
            <v-img :src="n.icon_file" class="mr-2"></v-img>
            <p
              class="my-2"
              style="color:black;font-weight:bold;text-transform:none;"
            >{{ n.nama_kategori }}</p>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="loadSkeleton">
      <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" cols="12" class="my-2">
        <v-skeleton-loader class="mx-auto" width="250" type="card"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row style="margin:0 auto;max-width:900px;">
      <v-col>
        <h1 style="color:#6c3f72;">Terpopuler di Kategori Semua</h1>
        <div class="title-underline d-flex flex-row justify-start my-3" style="margin-left: -4px;">
          <img class="mx-2" src="@/assets/image/underline-1.svg" height="8" />
          <img src="@/assets/image/underline-2.svg" height="8" />
        </div>
      </v-col>
    </v-row>
    <v-row v-if="!loadSkeleton && !filterByCategory" style="margin:0 auto;max-width:800px;">
      <v-col
        v-for="n in bookListTrendingNoAuth.slice(0, booksToShow)"
        :key="n.id_buku"
        lg="4"
        md="12"
        sm="12"
        cols="12"
        class="my-2"
      >
        <BookCard
          :idBuku="parseInt(n.id_buku)"
          :title="n.judul"
          :foto_sampul="n.foto_sampul"
          :deskripsi="n.deskripsi"
          :penulis="n.penulis"
          :warna_kategori="n.warna_sub"
          :warna_border="n.warna_utama"
          :kategori_buku="n.nama_kategori"
        />
      </v-col>
    </v-row>
    <v-row
      v-if="
				!loadSkeleton &&
					filterByCategory &&
					bookListByKategoriNoAuth.buku_populer
			"
      style="margin:0 auto;max-width:800px;"
    >
      <v-col
        v-for="n in bookListByKategoriNoAuth.buku_populer"
        :key="n.id_buku"
        lg="4"
        md="12"
        sm="12"
        cols="12"
        class="my-2"
      >
        <BookCard
          :idBuku="parseInt(n.id_buku)"
          :title="n.judul"
          :foto_sampul="n.foto_sampul"
          :deskripsi="n.deskripsi"
          :penulis="n.penulis"
          :is_premium="n.is_premium"
          :warna_kategori="n.warna_sub"
          :warna_border="n.warna_utama"
          :kategori_buku="n.nama_kategori"
          :durasi="n.durasi"
        />
      </v-col>
    </v-row>
    <v-row
      v-if="
				!loadSkeleton &&
					filterByCategory &&
					!bookListByKategoriNoAuth.buku_populer
			"
      style="margin:0 auto;max-width:800px;"
    >
      <v-col lg="4" md="12" sm="12" cols="12" class="my-2 text-center mx-auto">
        <v-img
          src="@/assets/image/bookNotFound.svg"
          aspect-ratio="1"
          width="100px"
          height="100px"
          style="margin: 0 auto;"
        ></v-img>
        <p class="my-3" style="color:#DDDDDD;">Buku tidak ditemukan</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import { mapState } from "vuex";

export default {
	name: "HomepageCategorySection",
	components: {
		BookCard
	},
	data() {
		return {
			loadSkeleton: false,
			filterByCategory: false,
			booksToShow: 6
		};
	},
	computed: mapState({
		daftarKategoriNoAuth: state => state.daftarKategoriNoAuth,
		bookListTrendingNoAuth: state => state.bookListTrendingNoAuth,
		bookListByKategoriNoAuth: state => state.bookListByKategoriNoAuth
	}),
	methods: {
		filterCategory(idKategori) {
			this.$store.dispatch("getBookByKategoriNoAuth", idKategori);
			this.filterByCategory = true;
		}
	},
	created() {
		this.$store.dispatch("getKategoriNoAuth");
		this.$store.dispatch("getListBookTrendingNoAuth");
	}
};
</script>

<style scoped lang="scss">
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
  padding: 50px 0;
  .chip-card {
    border-top: none;
    border-bottom: none;
    width: 700px;
  }
  .category-slide-group {
    border-top: none;
    border-bottom: none;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
  }
}
.btnLihat {
  text-transform: none;
  padding: 6px 10px;
  width: 150px;
  color: white;
  background-color: #39df8c;
  width: 20%;
  @media screen and (max-width: 450px) {
    width: 50%;
  }
}
.btn-chip-main {
  background-color: white;
  border-radius: 5px;
  border: 2px solid rgb(165, 165, 165);
  border-bottom: 4px solid rgb(165, 165, 165);
  height: 40px;
}
</style>
