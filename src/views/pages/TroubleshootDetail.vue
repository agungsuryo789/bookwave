<template>
	<div>
		<NavbarSection :isTroubleshoot="true" />
		<HeaderNoimage title="Bagaimana cara menyimpan kalimat terakhir yang saya baca pada AHA!"/>
		<div class="container">
		<v-row class="mt-2 my-2">

		</v-row>
		</div>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import HeaderNoimage from "@/components/pages/HeaderNoimage.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "TroubleshootDetail",
  components: {
    NavbarSection,
    HeaderNoimage,
    FooterSection
  }
};
</script>

<style scoped>
	.larger {
		font-size: larger;
	}
</style>