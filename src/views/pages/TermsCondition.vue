<template>
	<div>
		<NavbarSection />
		<PageHeader title="Terms & Condition"/>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import PageHeader from "@/components/pages/PageHeader.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "TermsCondition",
  components: {
    NavbarSection,
    PageHeader,
    FooterSection
  }
};
</script>
