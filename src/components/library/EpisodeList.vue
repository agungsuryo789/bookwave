<template>
	<div>
	<v-col cols="3" md="4" v-for="n in koleksiAudio" :key="n.id_chapter">
		<v-card flat>
			<v-row>
				<v-col cols="2" md="4">
					<v-img :src="n.foto_sampul" aspect-ratio="2.75"></v-img>
				</v-col>
				<v-col cols="2" md="8">
					<h3 class="font-weight-black">{{n.judul_chapter}}</h3>
					<span class="mb-3">{{n.judul_buku}}</span>

					<v-row>
						<v-icon class="pl-2">mdi-play-circle-outline</v-icon>
						<v-spacer></v-spacer>
						<v-icon>mdi-download</v-icon>
						<v-icon>mdi-bookmark</v-icon>
					</v-row>
				</v-col>
			</v-row>
		</v-card>
	</v-col>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "EpisodeList",
  computed: mapState({
    koleksiAudio: state => state.koleksiAudio
  })
}
</script>