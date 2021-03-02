<template>
	<div class="navbar-search-form d-flex flex-column justify-center ml-lg-12">
		<div class="d-flex flex-row justify-space-between px-4 mt-4">
			<v-btn icon class="my-2" @click="goSearch">
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
			<v-text-field
				v-model="payload.pencarian"
				tabindex="0"
				@keyup.esc="onClose"
				@keyup.enter="goSearch"
				@keyup="liveSearch"
				class="mt-5 mx-2 text-inp"
				autofocus
				label="Temukan yang anda cari disini"
			></v-text-field>
			<v-btn icon class="my-2" @click="onClose">
				<v-icon>mdi-close-circle-outline</v-icon>
			</v-btn>
		</div>
		<div v-if="isResult" class="search-result">
			<v-list>
				<v-list-item-group v-if="searchResultDefaultLive.length > 0">
					<v-list-item
						v-for="item in searchResultDefaultLive"
						:key="item.id_buku"
						@click="gotoBook(item.id_buku, item.judul)"
					>
						<div style="width:100%;">
							{{ item.judul }}
							<v-divider></v-divider>
						</div>
					</v-list-item>
				</v-list-item-group>
				<v-list-item-group v-if="searchResultDefaultLive.length < 1">
					<div class="search-empty">
						Buku tidak ditemukan
					</div>
				</v-list-item-group>
			</v-list>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "NavbarSearch",
	data() {
		return {
			payload: {
				pencarian: "",
				type_filter: ""
			},
			isResult: false
		};
	},
	ready: function() {
	},
	computed: {
		...mapGetters("BookSearch", ["searchResultDefaultLive"])
	},
	methods: {
		onClose(event) {
			this.isResult = false;
			this.payload.pencarian = "";
			this.$emit("clicked", false);
		},
		goSearch() {
			if (this.payload.pencarian !== "") {
				this.$router.push({
					name: "SearchPage",
					params: {
						searchParams: this.payload.pencarian.replace(/ /g, "-")
					}
				});
			} else {
				this.isResult = false;
				return false;
			}
		},
		liveSearch() {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
				if (this.payload.pencarian !== "") {
					this.$store.dispatch(
						"BookSearch/getSearchByDefaultLive",
						this.payload
					);
					this.isResult = true;
				} else {
					this.payload.pencarian = "";
					this.isResult = false;
					return false;
				}
				resolve()
				}, 1000)
				return false;
			})
		},
		gotoBook(bookId, bookName) {
			const urlname = bookName.toLowerCase();
			this.$router.push({
				name: "BookPage",
				params: {
					bookId: bookId,
					bookName: urlname.replace(/ /g, "-")
				}
			});
		},
		hide: function() {
			this.$emit("clicked", false);
		}
	},
	destroyed() {
		this.$store.commit("BookSearch/resetState_mutation");
	}
};
</script>

<style scoped lang="scss">
.navbar-search-form {
	width: 90%;
	position: relative;
	@media screen and (max-width: 860px) {
		width: 100%;
	}
	@media screen and (max-width: 425px) {
		width: 100%;
	}
	.search-result {
		position: absolute;
		top: 100%;
		width: 68%;
		z-index: 999;
		border: 3px solid rgb(160, 160, 160);
		border-bottom: 10px solid rgb(160, 160, 160);
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		width: 96%;
		margin: auto;
		left: 0;
		right: 0;
		.v-list-item {
			padding: 0 38px;
		}
		@media screen and (max-width: 1903px) {
			width: 93.5%;
		}
		@media screen and (max-width: 1263px) {
			width: 91%;
		}
		@media screen and (max-width: 425px) {
			width: 84%;
		}
	}
}
.search-empty {
    padding: 13px 38px;
    color: #b5b5b5;
}
</style>
