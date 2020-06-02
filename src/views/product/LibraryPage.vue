<template>
  <div class="library-page">
    <NavbarSection />
		<v-container>
			<v-tabs v-model="active" slider-color="#E76464" class="mt-12" grow>
				<v-tab href="#tab-1">Buku</v-tab>
				<v-tab>Episode</v-tab>
				<v-spacer></v-spacer>
				<v-tab><v-icon left>mdi-pencil</v-icon>Warnai</v-tab>
				<v-tab><v-icon left>mdi-heart-outline</v-icon>Favorit</v-tab>
				<v-tab><v-icon left>mdi-tag-outline</v-icon>Tag</v-tab>

				<v-tab-item :value="'tab-1'">
					<v-row>
						<v-col cols="3" md="4">
							<v-card flat>
								<v-row>
									<v-col cols="2" md="4">
										<v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
									</v-col>
									<v-col cols="2" md="8">
										<h3 class="font-weight-black"> Judul Buku</h3>
										<span>Nama Penulis</span>
										<p class="mt-3">Maecenas interdum lorem at massa aliquam, vel sollicitudin lacus fermentum.</p>
										<v-row>
										</v-row>
									</v-col>
								</v-row>
							</v-card>
						</v-col>
					</v-row>
				</v-tab-item>
			</v-tabs>
		</v-container>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "LibraryPage",
  components: {
    NavbarSection,
	FooterSection
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";
.btn-chip-main {
  @include btn-chip-main();
}
</style>
