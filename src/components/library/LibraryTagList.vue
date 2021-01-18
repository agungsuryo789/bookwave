<template>
	<v-row>
		<template v-if="loadSkeleton">
			<v-col
				v-for="n in 4"
				:key="n"
				lg="4"
				md="4"
				sm="12"
				cols="12"
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
			<template v-if="koleksiTag.data">
				<template v-if="!showTagDetail">
					<v-col
						v-for="n in koleksiTag.data"
						:key="n.id_tag"
						lg="4"
						md="4"
						sm="2"
						cols="6"
						class="my-5"
					>
						<div class="col-tag">
							<v-btn
								class="btn-tag"
								depressed
								text
								@click="toTagDetail(n.tag)"
								>{{ n.tag }}</v-btn
							>
						</div>
					</v-col>
				</template>
				<template v-if="showTagDetail">
					<LibraryTagDetail :tagName="tagName" />
				</template>
			</template>
			<template v-else>
				<v-col lg="12" class="align-center justify-center text-center">
					<v-img
						src="@/assets/image/bookNotFound.svg"
						aspect-ratio="1"
						width="150px"
						height="150px"
						style="margin: 0 auto;margin-top:40px"
					></v-img>
					<p class="my-3" style="color:#DDDDDD;">
						Tag Tidak Ditemukan
					</p>
				</v-col>
			</template>
		</template>
	</v-row>
</template>

<script>
import LibraryTagDetail from "@/components/library/librarytag/LibraryTagDetail.vue";
import { mapState } from "vuex";
export default {
	name: "LibraryTagList",
	components: {
		LibraryTagDetail
	},
	data() {
		return {
			loadSkeleton: true,
			showTagDetail: false,
			tagName: ""
		};
	},
	computed: mapState({
		koleksiTag: state => state.koleksiTag
	}),
	methods: {
		callFunction: function() {
			this.$store.dispatch("koleksiTag");
			var _this = this;
			setTimeout(function() {
				_this.loadSkeleton = false;
			}, 1000);
		},
		toTagDetail(tagName) {
			this.showTagDetail = true;
			this.tagName = tagName;
		}
	},
	created() {
		this.callFunction();
	},
	destroyed() {
		this.$store.state.koleksiTag = [];
	}
};
</script>

<style scoped lang="scss">
.col-tag {
	border-bottom: 1px solid #dddddd;
	padding-left: 0;
	padding-right: 0;
	.btn-tag {
		text-transform: none;
		font-size: 14px;
		font-weight: 700;
		letter-spacing: .3px;
		justify-content: start;
		width: 100%;
	}
}
</style>
