<template>
	<div>
		<NavbarSection />
		<SupportHeader title="FAQ"/>
		<div class="container">
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="6">
				<h2> Lorem Ipsum </h2>
				<p> Lorem ipsum dolor sit amet? </p>
				<p> Lorem ipsum dolor sit amet? </p>
				<p> Lorem ipsum dolor sit amet? </p>
			</v-col>
			<v-col sm="12" md="6">
				<h2> Lorem Ipsum </h2>
				<p> Lorem ipsum dolor sit amet? </p>
				<p> Lorem ipsum dolor sit amet? </p>
				<p> Lorem ipsum dolor sit amet? </p>
			</v-col>
		</v-row>
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="6">
				<h2> Lorem Ipsum </h2>
				<p> Lorem ipsum dolor sit amet? </p>
				<p> Lorem ipsum dolor sit amet? </p>
				<p> Lorem ipsum dolor sit amet? </p>
			</v-col>
			<v-col sm="12" md="6">
				<h2> Lorem Ipsum </h2>
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
  name: "Faq",
  components: {
    NavbarSection,
    SupportHeader,
    FooterSection
  }
};
</script>
