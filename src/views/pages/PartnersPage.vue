<template>
	<div class="about">
		<NavbarSection />
		<AboutHeader title="Bergabunglah dengan Program Mitra AHA" subtitle=""/>
		<v-container>
			<v-row>
				<v-col cols="12" md="12">
					<p class="larger"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p class="larger"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</v-col>
			</v-row>
		</v-container>
		<v-container>
			<v-row>
				<v-col>
					<h1>
						Keuntungan Anda
					</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="text-center" cols="12" md="4">
					<v-img src="@/assets/image/money.png" max-height="50px" contain></v-img>
					<p class="font-weight-bold larger"> Komisi yang Menarik </p>
					<p class="larger">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</v-col>
				<v-col cols="12" md="4" class="text-center">
					<v-img src="@/assets/image/paper.png" max-height="50px" contain></v-img>
					<p class="font-weight-bold larger"> Nilai bagi pembaca Anda melalui iklan pintar </p>
					<p class="larger">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</v-col>
				<v-col cols="12" md="4" class="text-center">
					<v-img src="@/assets/image/filter.png" max-height="50px" contain></v-img>
					<p class="font-weight-bold larger"> Konversi tinggi diantara semua platform </p>
					<p class="larger">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</v-col>
			</v-row>
		</v-container>
		<v-container>
			<v-row>
				<v-col cols="12" md="12">
					<p class="larger"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p class="larger"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p class="larger"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p class="larger"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
				</v-col>
			</v-row>
		</v-container>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import AboutHeader from "@/components/pages/AboutHeader.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "PartnersPage",
  components: {
    NavbarSection,
    AboutHeader,
    FooterSection
  }
};
</script>

<style scoped>
	.larger {
		font-size: larger;
	}
</style>
