<template>
	<div>
		<NavbarSection />
		<v-container class="mt-12">
			<h2 class="font-weight-black book-section-title">
				{{ this.$route.params.sectionName.replace(/-/g, " ") }}
			</h2>
			<v-progress-linear
				v-model="underlineValue"
				color="#E76464"
			></v-progress-linear>
			<v-row v-if="loadSkeleton">
				<v-col
					v-for="n in 4"
					:key="n"
					lg="3"
					md="6"
					sm="12"
					xs="12"
					class="my-2"
				>
					<v-skeleton-loader
						class="mx-auto"
						width="250"
						type="card"
					></v-skeleton-loader>
				</v-col>
			</v-row>
			<v-row v-else>
				<v-col
					v-for="n in bookSectionList.data.slice(0, booksToShow)"
					:key="n.id_buku"
					lg="3"
					md="6"
					sm="12"
					xs="12"
					class="my-2"
				>
					<BookCard
						:key="parseInt(n.id_buku)"
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
						:isCollected="n.is_collected"
						:isFavorited="n.is_favorite"
					/>
				</v-col>
			</v-row>
			<v-row v-if="booksToShow < bookSectionList.data.length">
				<v-col
					class="text-center d-flex flex-column justify-center align-center"
				>
					<v-btn
						class="btnLihat"
						rounded
						color="#39DF8C"
						elevation="2"
						depressed
						@click="booksToShow += 12"
						>Lihat lebih banyak</v-btn
					>
				</v-col>
			</v-row>
		</v-container>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import BookCard from "@/components/BookCard.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
	name: "LandingBookSection",
	components: {
		NavbarSection,
		BookCard,
		FooterSection
	},
	data() {
		return {
			loadSkeleton: true,
			underlineValue: 15,
			booksToShow: 12
		};
	},
	computed: mapState({
		bookSectionList: state => state.bookSectionList
	}),
	methods: {
		matchUrl() {
			const param = this.$route.params.sectionName;
			const match1 = param.match(/buku-trending/gi);
			//   const match2 = param.match(/aha-episodes/gi);
			const match3 = param.match(/buku-terbaru/gi);
			if (match1) {
				return this.$store.dispatch("getBookTrending");
			} else if (match3) {
				return this.$store.dispatch("getBookNew");
			}
		},
		fetchData: function() {
			var _this = this;
			setTimeout(function() {
				_this.loadSkeleton = false;
			}, 1000);
		}
	},
	created() {
		this.matchUrl();
	},
	mounted() {
		this.fetchData();
	}
};
</script>

<style scoped lang="scss">
.book-section-title {
	letter-spacing: 1px;
	font-size: 24px;
	font-weight: bold;
	color: #e76464;
	text-decoration: none;
	text-transform: uppercase;
}
</style>
