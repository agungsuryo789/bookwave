<template>
	<div class="category-page">
		<NavbarSection />
		<v-container fluid class="py-0 mx-0 my-0">
			<template
				v-if="
					bookListByKategori.buku_terbaru &&
						bookListByKategori.buku_terbaru.length > 0
				"
			>
				<v-row>
					<v-col class="category-page-title d-flex align-center" :style="cssVars">
						<div class="container">
							<h1>
								{{ bookListByKategori.sub_judul }}
							</h1>
							<small>{{
								bookListByKategori.deskripsi_kategori
							}}</small>
						</div>
					</v-col>
				</v-row>
				<v-container>
					<v-row class="second-container">
					<v-col class="mt-5">
						<v-text-field
								v-model="payload.search"
								@keyup="liveFilter"
								class="form-rounded"
								tabindex="0"
								solo
								rounded
								label="Cari berdasarkan judul atau lainnya"
								prepend-inner-icon="mdi-magnify"
							></v-text-field>
						<!-- <div class="d-flex flex-row" style="width:80%;">
							<v-btn icon class="icon-search my-4">
								<v-icon>mdi-magnify</v-icon>
							</v-btn>
							<v-text-field
								v-model="payload.search"
								@keyup="liveFilter"
								tabindex="0"
								clearable
								label="Filter by Title/Author"
							></v-text-field>
						</div> -->
					</v-col>
				</v-row>
					<v-row class="second-container">
					<v-col
						v-for="n in bookListByKategori.buku_terbaru.slice(
							0,
							booksToShow
						)"
						:key="n.id_buku"
						lg="3"
						md="4"
						sm="6"
						xs="12"
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
							:durasi="n.durasi"
							:is_premium="n.is_premium"
							:isCollected="n.is_collected"
							:isFavorited="n.is_favorite"
						/>
					</v-col>
				</v-row>
				<v-row
					v-if="bookListByKategori.buku_terbaru.length > booksToShow"
				>
					<v-col
						class="text-center d-flex flex-column justify-center align-center"
					>
						<v-btn
							class="btnLihat"
							rounded
							color="#39DF8C"
							elevation="2"
							depressed
							style="text-transform:none;color:white;"
							@click="booksToShow += 4"
							>Lihat lebih banyak</v-btn
						>
					</v-col>
				</v-row>
				<v-row
					v-if="booksToShow == bookListByKategori.buku_terbaru.length"
				>
					<v-col
						class="text-center d-flex flex-column justify-center align-center"
					>
						<v-btn
							class="btnLihat"
							rounded
							color="#39DF8C"
							elevation="2"
							depressed
							style="text-transform:none;color:white;"
							@click="booksToShow -= 4"
							>Lihat lebih Sedikit</v-btn
						>
					</v-col>
				</v-row>
				</v-container>
			</template>
			<template
				v-if="
					!bookListByKategori.buku_terbaru ||
						bookListByKategori.buku_terbaru.length < 1
				"
			>
				<v-row>
					<v-col
						lg="12"
						class="align-center justify-center text-center"
						style="margin: 100px 0;"
					>
						<v-img
							src="@/assets/image/bookNotFound.svg"
							aspect-ratio="1"
							width="100px"
							height="100px"
							style="margin: auto auto;"
						></v-img>
						<p class="my-3" style="color:#DDDDDD;">
							Buku dengan kategori ini tidak ditemukan
						</p>
					</v-col>
				</v-row>
			</template>
		</v-container>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import BookCard from "@/components/BookCard.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapGetters } from "vuex";

export default {
	name: "CategoryPage",
	components: {
		BookCard,
		NavbarSection,
		FooterSection
	},
	data() {
		return {
			loadSkeleton: false,
			booksToShow: 8,
			payload: {
				id_kategori: this.$route.params.idKategori,
				search: ""
			}
		};
	},
	methods: {
		liveFilter() {
			this.$store.dispatch(
				"BookSearch/getBookByKategoriFilter",
				this.payload
			);
		}
	},
	computed: {
		...mapGetters("BookSearch", ["bookListByKategori"]),
		cssVars() {
			return {
				backgroundImage:
					"url(" + this.bookListByKategori.banner_image + ")"
			};
		}
	},
	mounted() {
		this.$store.dispatch(
			"BookSearch/getBookByKategori",
			this.$route.params.idKategori
		);
	},
	destroyed() {
		this.$store.commit("BookSearch/resetState_mutation");
	}
};
</script>

<style lang="scss">
.category-content {
    padding-left: 69px;
}
.category-page {
	.container-category-page {
		margin-top: -50px;
	}
	.category-page-title {
		margin-top: -50px;
		height: 250px;
		padding: 30px 14px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		h1 {
			text-transform: uppercase;
		}
		div {
			position: relative;
		}
		@media screen and (max-width: 860px) {
			margin-top: 0;
			h1 {
				font-size: 20px;
			}
		}
	}
}
.form-rounded.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
	box-shadow: none !important;
	padding-left: 0;
	.v-label{
		font-weight: 700;
	}
	.v-input__prepend-inner {
		padding-right: 21px;
	}
}
</style>
