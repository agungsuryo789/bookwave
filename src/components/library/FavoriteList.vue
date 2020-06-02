<template>
	<div>
	<v-col cols="3" md="4" v-for="n in koleksiBukuFav" :key="n.id_buku">
		<v-card flat>
			<v-row>
				<v-col cols="2" md="4">
					<v-img :src="n.foto_sampul" aspect-ratio="2.75"></v-img>
				</v-col>
				<v-col cols="2" md="8">
					<h3 class="font-weight-black">{{n.judul_buku}}</h3>
					<span>{{n.penulis}}</span>

					<v-row>
						<v-chip class="ma-2 btn-chip-main" label>{{n.nama_kategori}}</v-chip>
						<v-spacer></v-spacer>
						<v-icon>mdi-heart-outline</v-icon>
					</v-row>
				</v-col>
			</v-row>
		</v-card>
		<hr />
	</v-col>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FavoriteList",
  computed: mapState({
    koleksiBukuFav: state => state.koleksiBukuFav
  })
}
</script>