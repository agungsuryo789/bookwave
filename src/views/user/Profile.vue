<template>
	<div>
		<NavbarSection />
		<v-container class="mt-10">
			<v-row align="center" justify="between">
				<v-col md="6">
					<h1> Akun Saya </h1>
					<v-row>
						<v-img lazy-src="@/assets/image/underline-1.svg" class="ml-3 mr-4" max-width="80px"></v-img>
						<v-img lazy-src="@/assets/image/underline-1.svg" max-width="20px"></v-img>
					</v-row>
				</v-col>
			</v-row>
			<hr class="mt-5">
			<v-row v-for="item in account" :key="item.id_member">
				<v-col md="3" class="my-10">
					<h3>Email</h3>
					<h4>Status Langganan</h4>
				</v-col>
				<v-col md="1" class="my-10">
					<h3>:</h3>
					<h4>:</h4>
				</v-col>
				<v-col md="3" class="my-10">
					<h3> {{ item.email }}</h3>
					<h4> {{ item.nama_langganan }}</h4>
				</v-col>
			</v-row>
			<hr />
		</v-container>
		<div class="container">

		</div>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
// import PageHeader from "@/components/pages/PageHeader.vue";
import FooterSection from "@/components/FooterSection.vue";
 import { mapState } from "vuex";

export default {
  name: "Profile",
  components: {
    NavbarSection,
    FooterSection
  },
  created() {
    this.$store.dispatch("getAccountDetail");
  },
  computed: mapState({
	account: state => state.accountDetail.data
  })
};
</script>

<style scoped>
	.larger {
		font-size: larger;
	}
</style>