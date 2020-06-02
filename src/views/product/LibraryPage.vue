<template>
  <div class="library-page">
    <NavbarSection />
		<v-container>
			<v-tabs v-model="tab" slider-color="#E76464" class="mt-12" grow>
				<v-tab>Buku</v-tab>
				<v-tab>Episode</v-tab>
				<v-spacer></v-spacer>
				<v-tab><v-icon left>mdi-pencil</v-icon>Warnai</v-tab>
				<v-tab><v-icon left>mdi-heart-outline</v-icon>Favorit</v-tab>
				<v-tab><v-icon left>mdi-tag-outline</v-icon>Tag</v-tab>
				<v-tabs-items v-model="tab">
					<v-tab-item>
						<BookList />
					</v-tab-item>
					<v-tab-item>
						<v-row>
							<EpisodeList />
						</v-row>
					</v-tab-item>
					<v-tab-item>
						<v-row>
							<ColouredList />
						</v-row>
					</v-tab-item>
					<v-tab-item>
						<v-row>
							<FavoriteList />
						</v-row>
					</v-tab-item>
					<v-tab-item>
						<v-row>
							<TagList />
						</v-row>
					</v-tab-item>
				</v-tabs-items>
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
  },
  data: () => ({
	tab: null
  })
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";
.btn-chip-main {
  @include btn-chip-main();
}
</style>
