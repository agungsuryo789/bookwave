<template>
	<div>
		<NavbarSection />
		<SupportHeader title="Contact Us"/>
		<div class="container">
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="6">
				<v-text-field solo rounded="4" w-75 label="Your email address"></v-text-field>
				<v-text-field solo rounded="4" label="Subject"></v-text-field>
				<v-text-area rounded="4" label="Description"></v-text-area>
			</v-col>
			<v-col sm="12" md="6">
				<h2> Lorem Ipsum </h2>
				<p> Lorem ipsum dolor sit amet? </p>
				<p> Lorem ipsum dolor sit amet? </p>
				<p> Lorem ipsum dolor sit amet? </p>
			</v-col>
		</v-row>
		</div>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import SupportHeader from "@/components/pages/SupportHeader.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "ContactUs",
  components: {
    NavbarSection,
    SupportHeader,
    FooterSection
  }
};
</script>
