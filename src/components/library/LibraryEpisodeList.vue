<template>
	<v-row>
		<template v-if="loadSkeleton">
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
					width="350"
					type="list-item-avatar-three-line"
					tile
				></v-skeleton-loader>
			</v-col>
		</template>
		<template v-else>
			<template v-if="koleksiAudio.data">
				<v-col
					v-for="n in koleksiAudio.data"
					:key="n.id_chapter"
					lg="4"
					md="6"
					sm="12"
					xs="12"
					class="my-5"
				>
					<EpisodeCardSmall
						:idBuku="parseInt(n.id_buku)"
						:idChapter="parseInt(n.id_chapter)"
						:judul_buku="n.judul_buku"
						:episodeTitle="n.judul_chapter"
						:foto_sampul="n.foto_sampul"
						:warna_kategori="n.warna_kategori"
						:warna_border="n.border_buku"
						:is_premium_chapter="n.is_premium_chapter"
						:premium_member="n.premium_member"
					/>
				</v-col>
			</template>
			<template v-else>
				<v-col lg="12" class="align-center justify-center text-center">
					<v-img
						src="@/assets/image/aha-radio-icon.svg"
						aspect-ratio="1"
						width="100px"
						height="100px"
						style="margin: 0 auto;"
					></v-img>
					<p class="my-3" style="color:#DDDDDD;">
						AHA Episode Tidak Ditemukan
					</p>
					<router-link
						to="/home"
						style="text-decoration:none;color:#E76464;font-weight:bold;"
						>Jelajahi AHA</router-link
					>
				</v-col>
			</template>
		</template>
	</v-row>
</template>

<script>
import EpisodeCardSmall from "@/components/EpisodeCardSmall.vue";
import { mapState } from "vuex";
export default {
	name: "LibraryEpisodeList",
	data() {
		return {
			loadSkeleton: true
		};
	},
	components: {
		EpisodeCardSmall
	},
	computed: mapState({
		koleksiAudio: state => state.koleksiAudio
	}),
	methods: {
		callFunction: function() {
			this.$store.dispatch("koleksiAudio");
			var load = this.$store.state.loaderStatus;
			var v = this;
			setTimeout(function() {
				if (load) {
					v.loadSkeleton = false;
				} else {
					v.loadSkeleton = true;
				}
			}, 800);
		}
	},
	created() {
		this.callFunction();
	},
	destroyed() {
		this.$store.state.koleksiAudio = [];
	}
};
</script>
