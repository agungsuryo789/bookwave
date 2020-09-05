<template>
	<div>
		<NavbarSection />
		<v-container class="mt-10">
			<v-row align="center" justify="between">
				<v-col md="6">
					<h1> My Account </h1>
					<v-row>
						<v-img lazy-src="@/assets/image/underline-1.svg" class="ml-3 mr-4" max-width="80px"></v-img>
						<v-img lazy-src="@/assets/image/underline-1.svg" max-width="20px"></v-img>
					</v-row>
				</v-col>
			</v-row>
			<hr class="mt-5">

		</v-container>
		<div class="container">

		</div>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "HelpAccount",
  components: {
    NavbarSection,
    FooterSection
  }
};
</script>