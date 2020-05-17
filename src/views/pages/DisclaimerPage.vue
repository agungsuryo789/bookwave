<template>
	<div>
		<NavbarSection />
		<PageHeader title="Disclaimer"/>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import PageHeader from "@/components/pages/PageHeader.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "DisclaimerPage",
  components: {
    NavbarSection,
    PageHeader,
    FooterSection
  }
};
</script>
