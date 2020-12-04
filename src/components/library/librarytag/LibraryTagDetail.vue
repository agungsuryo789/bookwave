<template>
	<v-col lg="12">
		<v-card flat class="radius-0">
			<div class="d-flex flex-row justify-space-between align-center input-fortag">
				<div class="mx-5 mx-lg-0" style="width:90%;">
					<v-text-field
						v-model="inputTag"
						id="inputTagEdit"
						color="red darken-2"
						full-width
						solo
						@keyup.enter="dispatchEditTag"
						style="font-size:18px;"
						class="form-tag"
					></v-text-field>
				</div>
				<div class="d-flex flex-row">
					<v-btn icon @click="inputFocus()">
						<v-icon>mdi-pencil</v-icon>
					</v-btn>
					<div>
						<v-dialog v-model="dialog" width="300" hide-overlay>
							<template v-slot:activator="{ on, attrs }">
								<v-btn text v-bind="attrs" v-on="on" class="pr-0 btn-del">
									<v-icon>mdi-backspace-outline</v-icon>
								</v-btn>
							</template>
							<v-card class="no-shadow">
								<v-card-title
									class="modal-hapus-title text-center"
								>
									<h4 style="font-size:16px;">
										Hapus Tag "{{ inputTag }}" ?
									</h4>
								</v-card-title>
								<v-card-actions class="py-8"
									style="border:2px solid #DDDDDD;border-top:none;border-bottom:6px solid #DDDDDD;"
								>
									<v-btn
										class="btn-modal-tag btn-hapus py-2 px-2"
										text
										@click="dispatchDelTag"
										style="color:#E76464;"
										>Hapus</v-btn
									>
									<v-btn
										class="btn-modal-tag btn-batal py-2 px-2"
										text
										@click="dialog = false"
										>Batal</v-btn
									>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</div>
				</div>
			</div>
		</v-card>
		<v-row>
			<template v-if="loadSkeleton">
			<v-col
				v-for="n in 4"
				:key="n"
				lg="3"
				md="6"
				sm="12"
				xs="12"
				class="my-2"
			>
				<v-skeleton-loader
					class="mx-auto"
					width="350"
					type="list-item-avatar-three-line"
					tile
				></v-skeleton-loader>
			</v-col>
		</template>
		<template v-else>
			<v-col
				v-for="n in koleksiTagSingle"
				:key="n.id_buku"
				lg="4"
				md="6"
				sm="12"
				xs="12"
				class="my-5"
			>
				<BookCardSmall
					:idBuku="parseInt(n.id_buku)"
					:title="n.judul"
					:penulis="n.penulis"
					:foto_sampul="n.foto_sampul"
					:deskripsi="n.deskripsi"
					:warna_kategori="n.warna_sub"
					:warna_border="n.warna_utama"
					:kategori_buku="n.nama_kategori"
					:isCollected="n.is_collected"
					:isFavorited="n.is_favorite"
					:isTagged="true"
					:tagName="tagName"
				/>
			</v-col>
		</template>
		</v-row>
	</v-col>
</template>

<script>
import BookCardSmall from "@/components/BookCardSmall.vue";
import { mapState } from "vuex";
export default {
	name: "LibraryTagDetail",
	props: {
		tagName: {
			type: String,
			required: true
		}
	},
	components: {
		BookCardSmall
	},
	data() {
		return {
			loadSkeleton: true,
			showEditTag: false,
			dialog: false,
			inputTag: this.tagName,
			editTagPayload: {
				tag: this.tagName,
				tag_baru: ""
			},
			delTagPayload: {
				tag: this.tagName.toString()
			}
		};
	},
	computed: mapState({
		koleksiTagSingle: state => state.koleksiTagSingle
	}),
	methods: {
		callFunction: function() {
			this.$store.dispatch("koleksiTagSingle", this.$props.tagName);
			var _this = this;
			setTimeout(function() {
				_this.loadSkeleton = false;
			}, 1000);
		},
		inputFocus() {
			document.getElementById("inputTagEdit").focus();
		},
		dispatchEditTag() {
			this.editTagPayload.tag_baru = this.inputTag;
			this.$store.dispatch("editTagAll", this.editTagPayload);
		},
		dispatchDelTag() {
			this.$store.dispatch("deleteTagFromAll", this.delTagPayload);
		}
	},
	mounted() {
		this.callFunction();
	},
	destroyed() {
		this.$store.state.koleksiTagSingle = [];
	}
};
</script>

<style lang="scss">
.input-tag-disabled {
	border: none;
}
.v-dialog{
	box-shadow: none !important;
}
.modal-hapus-title {
	border: 2px solid #dddddd;
	color: #e76464;
	font-size: 12px;
	justify-content: center;
}
.v-dialog > .v-card > .v-card__title.modal-hapus-title{
	text-align: center !important;
	padding: 10px;
}
.btn-modal-tag {
	color: black;
	font-size: 12px;
	border: 1px solid #dddddd;
	margin: 0 auto;
	width: 100px;
}
.btn-hapus {
	border: 2px solid #e76464;
	border-bottom: 4px solid #e76464;
}
.btn-batal {
	border: 2px solid #dddddd;
	border-bottom: 4px solid #dddddd;
}
.form-tag{
	.v-input__slot{
		box-shadow: none !important;
		padding-left: 0 !important;
		margin-bottom: 0 !important;
	}
	.v-input__control{
		height: 56px ;
	}
}
.input-fortag{
	border-bottom: 1px #dddddd solid;
	border-radius: 0;
}
.radius-0{
	border-radius: 0 !important;
}
.btn-del:not(.v-btn--round).v-size--default {
    min-width: auto;
}
</style>
