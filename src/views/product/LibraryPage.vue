<template>
  <div class="library-page">
    <NavbarSection />
		<v-container>
			<v-tabs v-model="active" slider-color="#E76464" class="mt-12" grow>
				<v-tab href="#tab-1">Buku</v-tab>
				<v-tab href="#tab-2">Episode</v-tab>
				<v-spacer></v-spacer>
				<v-tab href="#tab-3"><v-icon left>mdi-pencil</v-icon>Warnai</v-tab>
				<v-tab href="#tab-4"><v-icon left>mdi-heart-outline</v-icon>Favorit</v-tab>
				<v-tab href="#tab-5"><v-icon left>mdi-tag-outline</v-icon>Tag</v-tab>

				<v-tab-item :value="'tab-1'">
					<v-row>
						<BookList />
					</v-row>
				</v-tab-item>
				<v-tab-item :value="'tab-2'">
					<v-row>
						<EpisodeList />
					</v-row>
				</v-tab-item>
				<v-tab-item :value="'tab-3'">
					<v-row>
						<ColouredList />
					</v-row>
				</v-tab-item>
				<v-tab-item :value="'tab-4'">
					<v-row>
						<FavoriteList />
					</v-row>
				</v-tab-item>
				<v-tab-item :value="'tab-5'">
					<v-row>
						<TagList />
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
import BookList from "@/components/library/BookList.vue";
import EpisodeList from "@/components/library/EpisodeList.vue";
import ColouredList from "@/components/library/ColouredList.vue";
import FavoriteList from "@/components/library/FavoriteList.vue";
import TagList from "@/components/library/TagList.vue";

export default {
  name: "LibraryPage",
  components: {
    NavbarSection,
	FooterSection,
	BookList,
	EpisodeList,
	ColouredList,
	FavoriteList,
	TagList
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";
.btn-chip-main {
  @include btn-chip-main();
}
</style>
