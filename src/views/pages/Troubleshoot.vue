<template>
	<div>
		<NavbarSection />
		<HeaderNoimage title="Step By Step & Troubleshooting"/>
		<div class="container">
		<v-row class="mt-2 my-2">
			<v-expansion-panels multiple>
				<v-expansion-panel>
					<v-expansion-panel-header>
						<h2 class="ungu">IOS</h2>
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
						<h2 class="ungu">Android</h2>
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
						<h2 class="ungu">Web</h2>
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
						<h2 class="ungu">Voucher dan Discount</h2>
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
						<h2 class="ungu">Layanan Langganan</h2>
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
import HeaderNoimage from "@/components/pages/HeaderNoimage.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "Troubleshoot",
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