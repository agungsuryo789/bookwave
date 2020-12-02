<template>
	<v-container>
		<div v-if="!isFetching">
			<v-row
				class="landing-header-row mx-auto mt-10"
				justify="center"
				align="center"
			>
				<v-col
					lg="6"
					md="6"
					sm="6"
					cols="12"
					class="d-flex justify-center align-center"
					style="margin:0 auto;"
				>
					<a
						@click="
							gotoBook(
								(bookId = bookTrending.data[0].id_buku),
								(bookName = bookTrending.data[0].judul)
							)
						"
						style="text-decoration:none;color:#4C4C4C;"
					>
						<h1>{{ bookTrending.data[0].judul }}</h1>
					</a>
				</v-col>
				<v-col lg="6" md="6" sm="6" cols="12" style="margin:0 auto;">
					<BookCard
						:idBuku="parseInt(bookTrending.data[0].id_buku)"
						:title="bookTrending.data[0].judul"
						:penulis="bookTrending.data[0].penulis"
						:deskripsi="bookTrending.data[0].deskripsi"
						:foto_sampul="bookTrending.data[0].foto_sampul"
						:warna_kategori="bookTrending.data[0].warna_sub"
						:warna_border="bookTrending.data[0].warna_utama"
						:durasi="bookTrending.data[0].durasi"
						:is_premium="bookTrending.data[0].is_premium"
						:isCollected="bookTrending.data[0].is_collected"
						:isFavorited="bookTrending.data[0].is_favorite"
					/>
				</v-col>
			</v-row>
		</div>
		<div v-else-if="isFetching">
			<v-row
				class="landing-header-row mx-auto mt-10"
				justify="center"
				align="center"
			>
				<v-col
					lg="6"
					md="6"
					sm="6"
					cols="12"
					style="margin:0 auto;"
				>
					<v-skeleton-loader
						class="mx-auto"
						max-width="300"
						type="card"
					></v-skeleton-loader>
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import { mapState } from "vuex";
export default {
	name: "LandingHeader",
	components: {
		BookCard
	},
	data() {
		return {
			isFetching: true
		};
	},
	computed: mapState({
		bookTrending: state => state.bookTrending
	}),
	methods: {
		gotoBook(bookId, bookName) {
			const urlName = bookName.toLowerCase();
			this.$router.push({
				name: "BookPage",
				params: {
					bookId: bookId,
					bookName: urlName.replace(/ /g, "-")
				}
			});
		},
		fetchData() {
			const _this = this;
			this.$store.dispatch("getBookTrending");
			setTimeout(function() {
				_this.isFetching = false;
			}, 1200);
		}
	},
	created() {
		this.fetchData();
	}
};
</script>

<style scoped lang="scss">
.landing-header-row {
	@media screen and (min-width: 1024px) {
		max-width: 50%;
	}
}
</style>
