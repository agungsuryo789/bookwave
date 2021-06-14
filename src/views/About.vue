<template>
	<div class="about">
		<NavbarSection />
		<div v-for="item in about" :key="item.id_about_us">
			<AboutHeader v-bind:title="item.judul" v-bind:subtitle="item.deskripsi_judul"/>
		</div>

		<v-container style="margin-top:50px">
			<v-row v-for="item in about" :key="item.id_about_us">
				<v-col cols="12" md="2">
					<v-img src="@/assets/image/annie-spratt-mppDYKjJ7II-unsplash.png"></v-img>
				</v-col>
				<v-col cols="12" md="10">
					<p class="larger"> {{ item.deskripsi }}</p>
				</v-col>
			</v-row>
		</v-container>
		<v-container fluid>
			<v-row v-for="item in about" :key="item.id_about_us">
				<v-img :src="item.img_file" max-height="300px" class="img-fluid my-4"></v-img>
			</v-row>
		</v-container>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import AboutHeader from "@/components/pages/AboutHeader.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "AppPrivacy",
  components: {
    NavbarSection,
    AboutHeader,
    FooterSection
  },
  created() {
    this.$store.dispatch("getAbout");
  },
  computed: mapState({
	about: state => state.aboutUs.data
  })
};
</script>

<style>
	.larger{
		font-size: larger;
	}
	p {
		line-height: 1.6;
	}
</style>