<template>
<v-row>
	<v-col cols="3" md="4"  v-for="n in koleksiBuku" :key="n.id_buku">
		<v-card flat>
			<v-row>
				<v-col cols="2" md="4">
					<v-img :src="n.foto_sampul"></v-img>
				</v-col>
				<v-col cols="2" md="8">
					<h3 class="font-weight-black">{{n.judul_buku}}</h3>
					<span>{{n.penulis}}</span>
					<p class="mt-3">{{n.deskripsi}}</p>
					<v-row>
						<v-chip class="ma-2 btn-chip-main" label>{{n.nama_kategori}}</v-chip>
						<v-spacer></v-spacer>
						<v-icon>mdi-bookmark</v-icon>
						<v-icon>mdi-dots-vertical</v-icon>
					</v-row>
				</v-col>
			</v-row>
		</v-card>
	</v-col>
</v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BookList",
  computed: mapState({
    koleksiBuku: state => state.koleksiBuku
  }),
  created() {
	this.$store.dispatch("koleksiBuku");
  }
}
</script>