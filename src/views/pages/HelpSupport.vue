<template>
	<div>
		<NavbarSection />
		<v-container fluid>
			<v-row>
				<v-col class="d-flex align-center justify-center mx-0 px-0">
				<v-img src="@/assets/image/banner-sub.png" aspect-ratio="5.5">
					<!--<h1 style="position:absolute;top:45%;left:50%;color:white;">AHA</h1>-->
						<v-col cols="12" md="8">
							<v-text-field solo rounded="4" label="Temukan yang anda cari disini" prepend-inner-icon="mdi-magnify" style="position:absolute;top:40%;left:15%;right:15%"></v-text-field>
						</v-col>
				</v-img>
				</v-col>
			</v-row>
		</v-container>
		<div class="container">
		<v-row class="mt-2 my-2">
			<v-col cols="12" md="4">
				<v-btn large block outlined color="deep-purple accent-4" to="/about">About</v-btn>
			</v-col>
			<v-col cols="12" md="4">
				<v-btn large block outlined color="deep-purple accent-4" to="/plans">Subscription</v-btn>
			</v-col>
			<v-col cols="12" md="4">
				<v-btn large block outlined color="deep-purple accent-4" to="/home">My Account</v-btn>
			</v-col>
		</v-row>
		<v-row class="mt-2 my-2">
			<v-col cols="12" md="4">
				<v-btn large block outlined color="deep-purple accent-4" to="/">Our Apps & Our Site</v-btn>
			</v-col>
			<v-col cols="12" md="8">
				<v-btn large block outlined color="deep-purple accent-4" to="/">Step-by-Step Guides & Troubleshooting</v-btn>
			</v-col>
		</v-row>
		</div>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "HelpSupport",
  components: {
    NavbarSection,
    FooterSection
  }
};
</script>

<style scoped>
	.larger{
		font-size: larger;
	}
</style>