<template>
	<div>
	<v-col cols="3" md="4" class="mt-8" v-for="n in koleksiBukuHighlight" :key="n.id_buku">
		<p class="text-center font-weight-bold">
			{{n.kalimat}}
		</p>
		<p class="text-center">{{n.judul_buku}}</p>
		<hr/>
	</v-col>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ColouredList",
  computed: mapState({
    koleksiBukuHighlight: state => state.koleksiBukuHighlight
  }),
  created() {
	this.$store.dispatch("koleksiBukuHighlight");
  }
}
</script>