<template>
	<div>
		<NavbarSection />
		<SupportHeader title="Contact Us"/>
			<div class="container">
				<v-row class="mt-2 my-2 d-flex flex-row-reverse">
					<v-col cols="12" sm="12" md="5" class="my-5">
						<v-img src="@/assets/image/aha-hero.svg" alt="AHA Description Section" aspect-ratio="2"	contain	style="margin: 0 auto;"></v-img>
						<v-spacer></v-spacer>
						<h2 class="mt-10">PT AHA CERAH BANGSA</h2>
						<h4>Menara Kuningan Lt.9.G-9.H, Jl. Rasuna V Blok X-7,</h4>
						<h4>Kel. Karet Kuningan, Kec. Setiabudi,</h4>
						<h4>Kab. Jakarta Selatan, Prov. DKI Jakarta</h4>
						<h4>Telp. (021) 2941 0380</h4>
						<h4>support@ahabaca.com</h4>
					</v-col>
					<v-spacer></v-spacer>
					<v-col cols="12" sm="12" md="6">
						<v-form>
						<p class="red--text text--lighten-1">Alamat Email *</p>
						<v-text-field solo w-75 v-model="email" label="Your email address"></v-text-field>
						<p class="red--text text--lighten-1">Subject Pesan *</p>
						<v-text-field solo v-model="judul" label="Subject"></v-text-field>
						<p class="red--text text--lighten-1">Masukan pesan Anda</p>
						<v-textarea solo v-model="deskripsi" label="Description"></v-textarea>
						<v-spacer></v-spacer>
						<v-btn :elevation="8" color="red darken-1" block x-large class="white--text"  v-on:click="submit">Kirim</v-btn>
						</v-form>
					</v-col>
				</v-row>
				<SnackbarToast />
			</div>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import SupportHeader from "@/components/pages/SupportHeader.vue";
import FooterSection from "@/components/FooterSection.vue";
import SnackbarToast from "@/components/SnackbarToast.vue";
import { mapMutations } from "vuex";
/* eslint-disable */
export default {
  name: "ContactUs",
  data() {
	return {
		email: "",
		judul: "",
		deskripsi: ""
	}
  },
  components: {
    NavbarSection,
	SupportHeader,
	SnackbarToast,
    FooterSection
  },
  methods: {
	  ...mapMutations(["showSnackbar", "closeSnackbar"]),
	  submit() {
		  var data = {
			email: this.email,
			judul: this.judul,
			deskripsi: this.deskripsi
		  };
		  this.$store.dispatch("postPesan", data);
		  this.email = this.judul = this.deskripsi = ''
		  event.target.reset();
		}
  }
};
</script>

<style scoped>
	.larger{
		font-size: larger;
	}
</style>