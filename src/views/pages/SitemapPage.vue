<template>
	<div>
		<NavbarSection />
		<PageHeader title="Sitemap"/>
		<div class="container">
			<v-row>
				<v-col md="6">
					<h1> Umum </h1>
				</v-col>
			</v-row>
			<v-row class="mt-2 my-2">
				<v-col xs="4" md="3">
					<div v-for="item in topKategoriNoAuth.slice(0, 3)" :key="item.id_daftar_kategori">
						<router-link :to="{ name: 'CategoryPage', params: { idKategori: item.id_daftar_kategori }}"><p> {{ item.nama_kategori }} </p></router-link>
					</div>
				</v-col>
				<v-col xs="4" md="3">
					<router-link to="/promo">
						<p> Promosi </p>
					</router-link>
					<router-link to="/blog">
						<p> Blog </p>
					</router-link>
					<router-link to="/contact">
						<p> Kontak & Bantuan </p>
					</router-link>
					<router-link to="/troubleshoot">
						<p>Pertanyaan</p>
					</router-link>
				</v-col>
				<v-col xs="4" md="3">
					<router-link to="/about">
						<p> Tentang </p>
					</router-link>
					<router-link to="/career">
						<p> Karir </p>
					</router-link>
					<router-link to="/partnership">
						<p> Rekan </p>
					</router-link>
				</v-col>
			</v-row>

			<hr>
			<v-row class="mt-6">
				<v-col md="6">
					<h1> Top Artikel </h1>
				</v-col>
			</v-row>
			<v-row class="mt-2 my-2">
				<v-col cols="12" md="4" v-for="item in blog" :key="item.id_blog_tbl">
					<router-link :to="{ name: 'BlogDetail', params: { idBlog: item.id_blog_tbl }}">
						<p>{{ item.judul }} </p>
					</router-link>
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
  name: "SitemapPage",
  components: {
    NavbarSection,
    PageHeader,
    FooterSection
  },
  computed: mapState({
	blog: state => state.listBlog.data,
	topKategoriNoAuth: state => state.topKategoriNoAuth
  }),
  mounted() {
	this.$store.dispatch("getBlog");
	this.$store.dispatch("getTopKategoriNoAuth");
  }
};
</script>

<style scoped>
	.larger {
		font-size: larger;
	}
	a {
      text-decoration: none;
      color: black;
    }
</style>