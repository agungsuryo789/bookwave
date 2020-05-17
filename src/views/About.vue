<template>
	<div class="about">
		<NavbarSection />
		<AboutHeader title="About AHA" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import AboutHeader from "@/components/pages/AboutHeader.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "AppPrivacy",
  components: {
    NavbarSection,
    AboutHeader,
    FooterSection
  }
};
</script>
