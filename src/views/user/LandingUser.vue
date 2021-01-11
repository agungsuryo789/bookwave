<template>
	<div class="landing--user-body">
		<NavbarSection />
		<header>
			<LandingHeader />
		</header>
		<section>
			<v-container v-if="!loadSkeleton" class="second-container">
				<div v-if="bookBerandaAuth.buku_trending.length > 0">
					<router-link
						:to="{
							name: 'LandingBookSection',
							params: { sectionName: sectionLink[0].url }
						}"
						class="font-weight-black book-section-title"
						>{{ sectionLink[0].sectionName }}</router-link
					>
					<v-progress-linear
						v-model="underlineValue"
						color="#E76464"
					></v-progress-linear>
					<v-row class="my-6">
						<v-col
							v-for="n in bookBerandaAuth.buku_trending.slice(
								0,
								4
							)"
							:key="n.id_buku"
							lg="3"
							md="6"
							sm="6"
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
								:isCollected="n.is_collected"
								:isFavorited="n.is_favorite"
							/>
						</v-col>
					</v-row>
				</div>
				<div v-if="bookBerandaAuth.audio_new.length > 0">
					<h1 class="font-weight-black book-section-title">
						{{ sectionLink[1].sectionName }}
					</h1>
					<v-progress-linear
						v-model="underlineValue"
						color="#E76464"
					></v-progress-linear>
					<v-row class="my-6">
						<v-col
							v-for="n in bookBerandaAuth.audio_new.slice(0, 4)"
							:key="n.id_chapter"
							lg="3"
							md="6"
							sm="6"
							cols="12"
							class="my-2"
						>
							<EpisodeCard
								:idBuku="parseInt(n.id_buku)"
								:idChapter="parseInt(n.id_chapter)"
								:episodeTitle="n.judul_chapter"
								:foto_sampul="n.foto_sampul"
								:judul_buku="n.judul_buku"
								:is_premium_chapter="n.is_premium_chapter"
								:premium_member="n.premium_member"
								:warna_kategori="n.warna_sub"
								:warna_border="n.warna_utama"
								:is_new="true"
							/>
						</v-col>
					</v-row>
				</div>
				<div v-if="bookBerandaAuth.buku_terbaru.length > 0">
					<router-link
						:to="{
							name: 'LandingBookSection',
							params: { sectionName: sectionLink[2].url }
						}"
						class="font-weight-black book-section-title"
						>{{ sectionLink[2].sectionName }}</router-link
					>
					<v-progress-linear
						v-model="underlineValue"
						color="#E76464"
					></v-progress-linear>
					<v-row class="my-6">
						<v-col
							v-for="n in bookBerandaAuth.buku_terbaru.slice(
								0,
								4
							)"
							:key="n.id_buku"
							lg="3"
							md="6"
							sm="6"
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
								:isCollected="n.is_collected"
								:isFavorited="n.is_favorite"
							/>
						</v-col>
					</v-row>
				</div>
				<SnackbarToast />
			</v-container>
			<v-container v-else-if="loadSkeleton" class="second-container">
				<v-progress-linear
					v-model="underlineValue"
					color="#E76464"
				></v-progress-linear>
				<v-row class="my-6" v-if="loadSkeleton">
					<v-col
						v-for="n in 4"
						:key="n"
						lg="3"
						md="12"
						sm="12"
						cols="12"
						class="my-2"
					>
						<v-skeleton-loader
							class="mx-auto"
							type="card"
						></v-skeleton-loader>
					</v-col>
				</v-row>
				<v-progress-linear
					v-model="underlineValue"
					color="#E76464"
				></v-progress-linear>
				<v-row class="my-6" v-if="loadSkeleton">
					<v-col
						v-for="n in 4"
						:key="n"
						lg="3"
						md="12"
						sm="12"
						cols="12"
						class="my-2"
					>
						<v-skeleton-loader
							class="mx-auto"
							type="card"
						></v-skeleton-loader>
					</v-col>
				</v-row>
				<v-progress-linear
					v-model="underlineValue"
					color="#E76464"
				></v-progress-linear>
				<v-row class="my-6" v-if="loadSkeleton">
					<v-col
						v-for="n in 4"
						:key="n"
						lg="3"
						md="12"
						sm="12"
						cols="12"
						class="my-2"
					>
						<v-skeleton-loader
							class="mx-auto"
							type="card"
						></v-skeleton-loader>
					</v-col>
				</v-row>
			</v-container>
		</section>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import BookCard from "@/components/BookCard.vue";
import LandingHeader from "@/components/landing/LandingHeader.vue";
import EpisodeCard from "@/components/EpisodeCard.vue";
import FooterSection from "@/components/FooterSection.vue";
import SnackbarToast from "@/components/SnackbarToast.vue";
import { mapState, mapMutations } from "vuex";

export default {
	name: "LandingUser",
	components: {
		NavbarSection,
		BookCard,
		LandingHeader,
		EpisodeCard,
		FooterSection,
		SnackbarToast
	},
	data: () => ({
		loadSkeleton: true,
		underlineValue: 15,
		sectionLink: [
			{
				sectionName: "Buku Trending",
				url: "buku-trending"
			},
			{
				sectionName: "Aha Episodes",
				url: "aha-episodes"
			},
			{
				sectionName: "Buku Terbaru",
				url: "buku-terbaru"
			}
		]
	}),
	methods: {
		bookSectionAction(event) {
			this.underlineValue = 100;
		},
		fetchData() {
			this.$store.dispatch("getBerandaBukuAuth");
			const _this = this;
			setTimeout(function() {
				_this.loadSkeleton = false;
			}, 1200);
		}
	},
	computed: {
		...mapState(["bookBerandaAuth"]),
		...mapMutations(["showSnackbar", "closeSnackbar"])
	},
	mounted() {
		this.fetchData();
	}
};
</script>

<style scoped lang="scss">
.landing--user-body {
	.book-section-title {
		letter-spacing: 1px;
		font-size: 22px;
		color: #e76464;
		text-transform: uppercase;
		font-weight: bold;
		text-decoration: none;
	}
}
</style>
