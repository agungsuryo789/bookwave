<template>
	<v-card class="book-card mx-auto" flat>
		<div class="book-card-color " :style="cssVars">
			<div class="book-tag-new px-2">Baru</div>
			<div class="top-border"></div>
			<v-img
				lazy-src="https://www.tibs.org.tw/images/default.jpg"
				class="book-card-img mx-auto"
				@click="toChapter"
				:src="foto_sampul"
				style="z-index:0;"
			></v-img>
			<div class="bottom-border"></div>
			<div class="book-card-playbtn px-2">
				<v-btn @click="toChapter" text icon small>
					<v-icon>mdi-play-circle-outline</v-icon>
				</v-btn>
			</div>
		</div>
		<div class="d-flex flex-row">
			<div class="book-desc">
				<a @click="toChapter" class="book-card-title m-0 p-0">
					<v-card-title class="book-title px-0">{{
						judul_buku
					}}</v-card-title>
					<v-card-subtitle class="px-0">{{ episodeTitle }}</v-card-subtitle>
				</a>
				<template v-if="is_premium_chapter && !premiumMemberStatus">
					<span class="my-0 p-0" style="color:red;">
						<v-icon>mdi-lock-outline</v-icon>
					</span>
				</template>
			</div>
		</div>
	</v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "EpisodeCard",
	props: {
		idBuku: {
			type: Number
		},
		idChapter: {
			type: Number
		},
		episodeTitle: {
			type: String
		},
		foto_sampul: {
			type: String
		},
		judul_buku: {
			type: String
		},
		is_premium_chapter: {
			type: Boolean
		},
		premium_member: {
			type: Boolean
		},
		warna_kategori: {
			type: String
		},
		warna_border: {
			type: String
		},
		is_new: {
			type: Boolean
		}
	},
	data() {
		return {
			premiumMemberStatus: ""
		};
	},
	computed: {
		cssVars() {
			return {
				"--color": this.$props.warna_kategori,
				"--colorBorder": this.$props.warna_border
			};
		},
		...mapGetters(["premiumStatus"])
	},
	methods: {
		toChapter() {
			if (!this.is_premium_chapter) {
				this.$router.push({
					name: "BookChapter",
					params: { bookId: this.idBuku, chapterId: this.idChapter }
				});
			} else if (this.is_premium_chapter && this.premiumMemberStatus) {
				this.$router.push({
					name: "BookChapter",
					params: { bookId: this.idBuku, chapterId: this.idChapter }
				});
			} else if (this.is_premium_chapter && !this.premiumMemberStatus) {
				// return false;
				this.$router.push({
					name: "MembershipPage"
				})
			}
		},
		fetchData() {
			this.premiumMemberStatus = this.premiumStatus;
		}
	},
	mounted() {
		this.fetchData();
	}
};
</script>

<style scoped lang="scss">
.v-card > :first-child:not(.v-btn):not(.v-chip){
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
}
.book-card {
	.book-card-color {
		position: relative;
		z-index: 0;
		background-color: var(--color);
		border: 3px solid var(--colorBorder);
		border-bottom: 6px solid var(--colorBorder);
		border-radius: 16px;
		padding-bottom: 87%;
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
		.book-tag-new {
			position: absolute;
			top: 2%;
			left: 50%;
			transform: translateX(-50%);
			font-size: 14px;
			color: white;
			background-color: var(--colorBorder);
		}
		.book-card-playbtn {
			position: absolute;
			bottom: 1%;
			left: 50%;
			transform: translateX(-50%);
			color: var(--colorBorder);
		}
		.top-border {
			position: absolute;
			top: 6%;
			left: 16%;
			width: 40px;
			height: 35px;
			z-index: 0;
			border-top-left-radius: 10px;
			background-color: var(--colorBorder);
		}
		.bottom-border {
			position: absolute;
			bottom: 6%;
			right: 16%;
			width: 40px;
			height: 40px;
			z-index: -1;
			border-bottom-right-radius: 10px;
			background-color: var(--colorBorder);
		}
		.book-bookmark-button {
			position: absolute;
			bottom: 5px;
			right: 5px;
		}
	}
	.book-card-title {
		text-decoration: none;
		color: black;
		.book-title {
			font-size: 15px;
			font-weight: bold;
			// width: 195px;
			// overflow: hidden;
			// white-space: nowrap;
			// text-overflow: ellipsis;
			line-height: 22px;
			margin-bottom: 10px;
		}
	}
	.book-card-img {
		&:hover {
			cursor: pointer;
		}
	}
	.icon-book-locked {
		margin-top: -4px;
	}
}
.book-desc{
	width: 100%;
}
</style>
