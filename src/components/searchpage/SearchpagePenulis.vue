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
			<template
				v-if="searchResultByPenulis && searchResultByPenulis.length > 0"
			>
				<v-col
					v-for="n in searchResultByPenulis"
					:key="n.id_buku"
					lg="4"
					md="6"
					sm="12"
					xs="12"
					class="my-5"
				>
					<BookCardSmall
						:idBuku="parseInt(n.id_buku)"
						:title="n.judul"
						:penulis="n.penulis"
						:foto_sampul="n.foto_sampul"
						:deskripsi="n.deskripsi"
						:warna_kategori="n.warna_sub"
						:warna_border="n.warna_utama"
						:kategori_buku="n.nama_kategori"
						:is_premium="n.is_premium"
						:isCollected="n.is_collected"
						:isFavorited="n.is_favorite"
					/>
				</v-col>
			</template>
			<template
				v-else-if="
					!searchResultByPenulis || searchResultByPenulis.length < 1
				"
			>
				<v-col lg="12" class="align-center justify-center text-center">
					<v-img
						src="@/assets/image/bookNotFound.svg"
						class="my-3"
						aspect-ratio="1"
						width="100px"
						height="100px"
						style="margin: 0 auto;"
					></v-img>
					<p class="my-3" style="color:#DDDDDD;">
						Buku tidak ditemukan
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
import BookCardSmall from "@/components/BookCardSmall.vue";
import { mapGetters } from "vuex";

export default {
	name: "SearchpagePenulis",
	components: {
		BookCardSmall
	},
	data() {
		return {
			loadSkeleton: true,
			payload: {
				pencarian: this.$route.params.searchParams.replace(/-/g, " "),
				type_filter: "2"
			}
		};
	},
	created() {
		this.callFunction();
	},
	methods: {
		callFunction: function() {
			this.$store.dispatch("BookSearch/getSearchByPenulis", this.payload);
			var v = this;
			setTimeout(function() {
				v.loadSkeleton = false;
			}, 800);
		}
	},
	computed: {
		...mapGetters("BookSearch", ["searchResultByPenulis"])
	},
	destroyed() {
		this.$store.commit("BookSearch/resetState_mutation");
	}
};
</script>
