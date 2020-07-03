<template>
	<div>
		<NavbarSection />
		<PageHeader title="Blog"/>
		<div class="container">
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="4" v-for="item in blog" :key="item.id_blog">
				<h4> {{ item.judul }} </h4>
				<p> {{ item.isi_blog.substring(0,100)+"..." }} </p>
			</v-col>
		</v-row>
		</div>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import PageHeader from "@/components/pages/PageHeader.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "AppPrivacy",
  components: {
    NavbarSection,
    PageHeader,
    FooterSection
  },
  created() {
    this.$store.dispatch("getBlog");
  },
  computed: mapState({
	blog: state => state.listBlog.data
  })
};
</script>
