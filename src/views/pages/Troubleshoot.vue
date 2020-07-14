<template>
	<div>
		<NavbarSection />
		<CareerHeader title="Step By Step & Troubleshooting"/>
		<div class="container">
		<v-row class="mt-2 my-2">
			<v-expansion-panels multiple>
				<v-expansion-panel>
					<v-expansion-panel-header>
						<h2>IOS</h2>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<p>Some content</p>
						<hr />
					</v-expansion-panel-content>
					<v-expansion-panel-content>
						<p>Some content</p>
						<hr />
					</v-expansion-panel-content>
					<v-expansion-panel-content>
						<p>Some content</p>
						<hr />
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel>
					<v-expansion-panel-header>
						<h2>Web</h2>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<p>Some content</p>
						<hr />
					</v-expansion-panel-content>
					<v-expansion-panel-content>
						<p>Some content</p>
						<hr />
					</v-expansion-panel-content>
					<v-expansion-panel-content>
						<p>Some content</p>
						<hr />
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel>
					<v-expansion-panel-header>
						<h2>Voucher dan Discount</h2>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<p>Some content</p>
						<hr />
					</v-expansion-panel-content>
					<v-expansion-panel-content>
						<p>Some content</p>
						<hr />
					</v-expansion-panel-content>
					<v-expansion-panel-content>
						<p>Some content</p>
						<hr />
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel>
					<v-expansion-panel-header>
						<h2>Layanan Langganan</h2>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<p>Some content</p>
						<hr />
					</v-expansion-panel-content>
					<v-expansion-panel-content>
						<p>Some content</p>
						<hr />
					</v-expansion-panel-content>
					<v-expansion-panel-content>
						<p>Some content</p>
						<hr />
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-row>
		</div>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import CareerHeader from "@/components/pages/CareerHeader.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "Troubleshoot",
  components: {
    NavbarSection,
    CareerHeader,
    FooterSection
  }
};
</script>

<style scoped>
	.larger {
		font-size: larger;
	}
</style>