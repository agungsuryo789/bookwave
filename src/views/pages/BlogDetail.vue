<template>
	<div>
		<NavbarSection />
		<!--<div class="container">
			<v-row class="mt-2 my-2">
				<v-col sm="12" md="4">
					<a>
						<h2 class="ungu"> {{ item.judul }} </h2>
						<p class="blog-link"> {{ item.lokasi }} </p>
					</a>
				</v-col>
				<v-col sm="12" md="4">
				</v-col>
				<v-col sm="12" md="4">
					<v-img :src="item.img_flie"></v-img>
				</v-col>
			</v-row>
			<hr/>
		</div>-->
		<v-container>
			<v-img src="@/assets/image/blog.png" max-height="250px"></v-img>
		</v-container>
		<v-container v-for="item in blog" :key="item.id_blog">
			<h2 class="ungu mt-12">{{ item.judul }}</h2>
			<span class="mb-10"> {{ item.created_at }} </span>
			<p class="my-12"> {{ item.isi_blog }} </p>
		</v-container>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "BlogDetail",
  components: {
    NavbarSection,
    FooterSection
  },
  computed: mapState({
	blog: state => state.detailBlog.data
  }),
  mounted() {
    this.$store.dispatch("getBlogDetail", this.$route.params.idBlog);
  }
};
</script>
<style>
	.ungu {
		color: rgb(46, 0, 78);
	}
	.blog-link {
		color: black;
	}
	div .container{
		font-size: larger;
	}
</style>
