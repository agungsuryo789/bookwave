<template>
	<div>
	<v-col cols="3" md="4" class="mt-8" v-for="n in koleksiTag" :key="n.id_buku">
		<p class="font-weight-bold">
			{{n.tag}}
		</p>
		<hr/>
	</v-col>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TagList",
  computed: mapState({
    koleksiTag: state => state.koleksiTag
  }),
  created() {
	this.$store.dispatch("koleksiTag");
  }
}
</script>