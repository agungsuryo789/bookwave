<template>
	<div class="book-page">
		<NavbarSection />
		<template v-if="!loadSkeleton">
			<v-container
				class="my-1 justify-center align-center container"
				v-for="book in bookDetail.data"
				:key="book.id_buku"
			>
				<v-row style="margin:0 auto;">
					<v-col lg="3" md="6" sm="12" cols="12" class="pb-0">
						<v-card
							class="card--book-image"
							flat
							:style="{ backgroundColor: book.warna_sub }"
						>
							<div class="d-flex flex-column justify-end py-10">
								<div
									class="top-border"
									:style="{
										backgroundColor: book.warna_utama
									}"
								></div>
								<v-img
									class="book-card-img mx-auto"
									:src="book.foto_sampul"
									style="z-index:0;"
								></v-img>
								<div
									class="bottom-border"
									:style="{
										backgroundColor: book.warna_utama
									}"
								></div>
								<ButtonBookmark
									:idBuku="parseInt(book.id_buku)"
									:isCollected="book.is_collected"
									style="position:absolute;right:0;bottom:0;"
								/>
							</div>
						</v-card>
					</v-col>
					<v-col
						class="card--book-detail pb-0 mb-0"
						lg="5"
						md="12"
						sm="12"
						cols="12"
					>
						<h1 class="book-title">{{ book.judul }}</h1>
						<p>By: {{ book.penulis }}</p>
						<div class="d-flex" >
							<p>
								<v-icon class="mr-2 pb-1" small
									>mdi-clock-outline</v-icon
								>
								{{ book.durasi }}
							</p>
							<p class="mx-5">|</p>
							<p>
								<v-icon class="mr-2" small
									>mdi-format-list-bulleted</v-icon
								>
								{{ book.data_chapter.length }} Chapter
							</p>
						</div>
						<div class="book-sinopsis my-5 my-lg-10">
							{{ book.deskripsi }}
						</div>
					</v-col>
					<v-col
						class="card--book-detail py-0 my-0 px-lg-3 mt-8"
						lg="4"
						md="12"
						sm="12"
						cols="12"
					>
						<div class="div-btn">
							<template v-if="book.data_chapter.length < 1">
								<div class="d-flex flex-column justify-end">
									<v-btn
										depressed
										block
										color="#27AE60"
										:to="{ name: 'MembershipPage' }"
										style="text-transform:uppercase;color:white;letter-spacing:0.3px;font-weight:700;font-size:15px;height:46px"
										>Chapter/Episode tidak ditemukan</v-btn
									>
								</div>
							</template>
							<template
								v-else-if="
									book.data_chapter.length > 0 &&
										book.is_premium == 0
								"
							>
								<div class="d-flex flex-column justify-end">
									<v-btn
										:to="{
											name: 'BookChapter',
											params: {
												bookId: book.id_buku,
												chapterId:
													book.data_chapter[0]
														.id_chapter
											}
										}"
										depressed
										block
										color="#27AE60"
										style="text-transform:uppercase;color:white;letter-spacing:0.3px;font-weight:700;font-size:15px;height:46px"
										>Mulai Baca atau Dengarkan Audio</v-btn
									>
								</div>
							</template>
							<template
								v-if="
									book.data_chapter.length > 0 &&
										book.is_premium == 1 &&
										premiumMemberStatus
								"
							>
								<div class="d-flex flex-column justify-end">
									<v-btn
										:to="{
											name: 'BookChapter',
											params: {
												bookId: book.id_buku,
												chapterId:
													book.data_chapter[0]
														.id_chapter
											}
										}"
										depressed
										block
										color="#27AE60"
										style="text-transform:uppercase;color:white;letter-spacing:0.3px;font-weight:700;font-size:15px;height:46px"
										>Mulai Baca atau Dengarkan Audio</v-btn
									>
								</div>
							</template>
							<template
								v-else-if="
									book.data_chapter.length > 0 &&
										book.is_premium == 1 &&
										!premiumMemberStatus
								"
							>
								<div class="d-flex flex-column justify-end">
									<v-btn
										depressed
										block
										color="#27AE60"
										:to="{ name: 'MembershipPage' }"
										style="text-transform:uppercase;color:white;letter-spacing:0.3px;font-weight:700;font-size:15px;height:46px"
										>Upgrade now to read.</v-btn
									>
								</div>
							</template>
						</div>
					</v-col>
				</v-row>
				<v-row style="margin:0 auto;margin-top:100px">
					<v-col>
						<BookpageTabs
							:sinopsis="book.deskripsi"
							:tujuan="book.tujuan"
							:author="book.tentang_penulis"
						/>
					</v-col>
				</v-row>
			</v-container>
		</template>
		<template v-else>
			<v-container>
				<v-row style="max-width:850px;margin:0 auto;">
					<v-col lg="4" md="4" sm="12" cols="12">
						<v-skeleton-loader
							class="mx-auto"
							max-width="250"
							type="card"
						></v-skeleton-loader>
					</v-col>
					<v-col lg="4" md="4" sm="12" cols="12">
						<v-skeleton-loader
							class="mx-auto"
							max-width="600"
							type="list-item-three-line"
						></v-skeleton-loader>
						<v-skeleton-loader
							class="mx-auto"
							max-width="600"
							type="list-item-two-line"
						></v-skeleton-loader>
					</v-col>
					<v-col lg="4" md="4" sm="12" cols="12">
						<v-skeleton-loader
							class="mx-auto"
							max-width="600"
							type="list-item-three-line"
						></v-skeleton-loader>
						<v-skeleton-loader
							class="mx-auto"
							max-width="600"
							type="list-item-two-line"
						></v-skeleton-loader>
					</v-col>
				</v-row>
				<v-row style="max-width:850px;margin:0 auto;">
					<v-col>
						<v-skeleton-loader
							class="mx-auto"
							type="list-item-three-line"
						></v-skeleton-loader>
						<v-skeleton-loader
							class="mx-auto"
							type="list-item-three-line"
						></v-skeleton-loader>
					</v-col>
				</v-row>
			</v-container>
		</template>
		<FooterSection />
	</div>
</template>

<script>
import BookpageTabs from "@/components/bookpage/BookpageTabs.vue";
import NavbarSection from "@/components/NavbarSection.vue";
import ButtonBookmark from "@/components/ButtonBookmark.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
	components: {
		NavbarSection,
		BookpageTabs,
		ButtonBookmark,
		FooterSection
	},
	data() {
		return {
			premiumMemberStatus: this.$store.getters.premiumStatus,
			loadSkeleton: true
		};
	},
	methods: {
		gotoChapter() {
			this.$router.push({
				name: "BookChapter",
				params: {
					bookId: this.$props.idBuku,
					bookName: this.$props.title.toLowerCase()
				}
			});
		},
		callFunction: function() {
			this.$store.dispatch(
				"getBookDetailByID",
				this.$route.params.bookId
			);
			var _this = this;
			setTimeout(function() {
				_this.loadSkeleton = false;
			}, 1000);
		}
	},
	computed: mapState({
		bookDetail: state => state.bookDetail
	}),
	mounted() {
		this.callFunction();
		// const pageTitle = this.$route.params.bookName;
		// window.document.title =
		// 	"Read " +
		// 	this.$route.params.bookName
		// 		.replace(/^./, pageTitle[0].toUpperCase())
		// 		.replace(/-/g, " ") +
		// 	" | Ahabaca";
	},
	metaInfo() {
			const book = this.bookDetail;
			return {
				title: `Read ${book.data[0].judul} | Ahabaca`,
				meta: [
					{
					name: 'description',
					content: `${book.data[0].deskripsi}`
					},
					{
					property: 'og:description',
					content: `${book.data[0].deskripsi}`
					},
					{
					property: 'og:title',
					content: `Read ${book.data[0].judul}`
					},
					{
					property: 'og:site_name',
					content: 'Ahabaca'
					},
					{
					property: 'og:type',
					content: 'website'
					},
					{
					property: 'og:image:secure',
					content: `${book.data[0].foto_sampul}`
					},
					{
					property: 'twitter:title',
					content: `${book.data[0].judul}`
					},
					{
					property: 'twitter:description',
					content: `${book.data[0].deskripsi}`
					}
				]
			}
		}
};
</script>

<style scoped lang="scss">
.v-card > :first-child:not(.v-btn):not(.v-chip){
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
}
.card--book-image {
	z-index: 0;
	position: relative;
	border-radius: 16px;
	padding-bottom: 87%;
	height: 0;
	.book-card-img{
		position: absolute;
		left: 50%;
		right: auto;
		top: 50%;
		bottom: auto;
		transform: translate(-50%,-50%);
		position: absolute;
		width: 58%;
		height: 77%;
	}
	.top-border {
		position: absolute;
		top: 8%;
		left: 16%;
		width: 45px;
		height: 40px;
		z-index: 0;
		border-top-left-radius: 15px;
	}
	.bottom-border {
		position: absolute;
		bottom: 8%;
		right: 16%;
		width: 50px;
		height: 40px;
		z-index: -1;
		border-bottom-right-radius: 15px;
	}
}
.card--book-detail {
	position: relative;
	.div-btn {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	.book-sinopsis {
		max-height: 50px;
		text-overflow: ellipsis;
		overflow: hidden;
	}
}
@media only screen and (max-width: 900px) {
	.card--book-image {
		margin: 0 auto;
	}
	.card--book-detail {
		margin: 0 auto;
	}
}
@media only screen and (max-width: 500px) {
	.card--book-image {
		margin: 0 auto;
	}
	.card--book-detail {
		margin: 0 auto;
	}
}

@media only screen and (max-width: 375px) {
	.card--book-image {
		margin: 0 auto;
	}
	.card--book-detail {
		margin: 0 auto;
	}
}
</style>
