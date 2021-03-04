<template>
	<v-card class="book-card mx-auto" flat>
		<div class="book-card-color" :style="cssVars">
			<div class="top-border"></div>
			<v-img
				lazy-src="https://www.tibs.org.tw/images/default.jpg"
				class="book-card-img mx-auto"
				@click="gotoBook"
				:src="foto_sampul"
				style="z-index:0;"
			></v-img>
			<div class="bottom-border"></div>
		</div>
		<div class="d-flex flex-row">
			<div class="book-desc">
				<a @click="gotoBook" class="book-card-title m-0 p-0">
					<v-card-title class="book-title px-0">{{ title }}</v-card-title>
					<v-card-subtitle class="d-flex flex-column px-0">
						<small>{{ penulis }}</small>
						<small>
							<v-icon class="mr-1 pb-1" small
								>mdi-clock-outline</v-icon
							>{{ durasi }}
						</small>
					</v-card-subtitle>
				</a>
				<template v-if="isPremiumBook == '1' && !premiumMemberStatus">
					<span class="my-0 p-0" style="color:red;"
						>Premium</span
					>
				</template>
			</div>
			<div class="my-4">
				<ButtonBookmark
					:idBuku="parseInt(idBuku)"
					:isCollected="isCollected"
				/>
			</div>
		</div>
	</v-card>
</template>

<script>
import ButtonBookmark from "@/components/ButtonBookmark.vue";
import { mapGetters } from "vuex";
export default {
	name: "BookCard",
	props: {
		idBuku: {
			type: Number
		},
		title: {
			type: String
		},
		foto_sampul: {
			type: String
		},
		deskripsi: {
			type: String
		},
		penulis: {
			type: String
		},
		warna_kategori: {
			type: String
		},
		warna_border: {
			type: String
		},
		kategori_buku: {
			type: String
		},
		durasi: {
			type: String
		},
		isCollected: {
			type: Boolean
		},
		isFavorited: {
			type: Boolean
		},
		is_premium: {
			type: String
		}
	},
	components: {
		ButtonBookmark
	},
	data() {
		return {
			premiumMemberStatus: "",
			isPremiumBook: ""
		};
	},
	methods: {
		gotoBook() {
			const urlName = this.$props.title.toLowerCase();
			this.$router.push({
				name: "BookPage",
				params: {
					bookId: this.$props.idBuku,
					bookName: urlName.replace(/ /g, "-")
				}
			});
		},
		fetchData() {
			this.premiumMemberStatus = this.premiumStatus;
			this.isPremiumBook = this.is_premium;
		}
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
	created() {
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
		height: 0;
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
		.top-border {
			position: absolute;
			top: 6%;
			left: 16%;
			width: 50px;
			height: 40px;
			z-index: 0;
			border-top-left-radius: 10px;
			background-color: var(--colorBorder);
		}
		.bottom-border {
			position: absolute;
			bottom: 6%;
			right: 16%;
			width: 50px;
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
			word-break: unset;
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
