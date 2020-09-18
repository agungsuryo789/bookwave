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
			<template v-if="koleksiBukuHighlight.data">
				<v-col
					v-for="n in koleksiBukuHighlight.data"
					:key="n.id_buku_highlight"
					lg="4"
					md="6"
					sm="6"
					cols="12"
					class="my-5"
					style="text-align:center;"
				>
					<v-card
						@click="
							toChapter(
								(idBuku = n.id_buku),
								(idChapter = n.id_chapter),
								(isPremium = n.is_premium_chapter)
							)
						"
						flat
						link
					>
						<p style="font-weight:bold;">{{ n.kalimat }}</p>
						<small style="color:gray;">{{ n.judul_buku }}</small>
						<hr />
					</v-card>
				</v-col>
			</template>
			<template v-else>
				<v-col lg="12" class="align-center justify-center text-center">
					<v-img
						src="@/assets/image/bookNotFound.svg"
						aspect-ratio="1"
						width="100px"
						height="100px"
						style="margin: 0 auto;"
					></v-img>
					<p class="my-3" style="color:#DDDDDD;">
						Chapter Tidak Ditemukan
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
import { mapState } from "vuex";
export default {
	name: "LibraryColouredList",
	data() {
		return {
			loadSkeleton: true
		};
	},
	computed: mapState({
		koleksiBukuHighlight: state => state.koleksiBukuHighlight
	}),
	methods: {
		callFunction: function() {
			this.$store.dispatch("koleksiBukuHighlight");
			var _this = this;
			setTimeout(function() {
				_this.loadSkeleton = false;
			}, 1000);
		},
		toChapter(idBuku, idChapter, isPremium) {
			if (!isPremium) {
				this.$router.push({
					name: "BookChapter",
					params: { bookId: idBuku, chapterId: idChapter }
				});
			} else if (isPremium && this.$store.getters.premiumStatus) {
				this.$router.push({
					name: "BookChapter",
					params: { bookId: idBuku, chapterId: idChapter }
				});
			} else if (isPremium && !this.$store.getters.premiumStatus) {
				return false;
			}
		}
	},
	created() {
		this.callFunction();
	},
	destroyed() {
		this.$store.state.koleksiBukuHighlight = [];
	}
};
</script>
