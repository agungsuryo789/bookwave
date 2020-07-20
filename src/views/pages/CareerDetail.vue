<template>
	<div>
		<NavbarSection />
		<template v-if="!loadSkeleton">
			<div class="container" v-for="item in career" :key="item.id_karir">
				<v-row class="mt-2 my-2">
					<v-col sm="12" md="4" align-self="start">
							<h1 class="merah"> {{ item.karir }} </h1>
							<p> {{ item.created_at }} </p>
							<v-spacer></v-spacer>
							<p class="merah"> Sampai Dengan : {{ item.sampai_tgl }} </p>
					</v-col>
					<v-col cols="12" sm="12" md="8">
						<v-img src="@/assets/image/blog.png" height="250px" width="auto" gradient="to right, rgba(255, 255, 255), transparent">
							<div class="fill-height left-gradient"></div>
						</v-img>
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12" md="12">
						<h1 class="ungu">Deskripsi Pekerjaan</h1>
						<p>{{ item.deskripsi }}</p>
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12" md="12">
						<h1 class="ungu">Spesifikasi Calon Pekerja</h1>
						<p> {{ item.spesifikasi }} </p>
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12" md="12">
						<v-btn rounded color="#62E6A4" dark>Kirim Lamaran<v-icon dark right>mdi-email-outline</v-icon></v-btn>
					</v-col>
				</v-row>
				<hr/>
			</div>

			<v-container>
				<v-row>
					<v-col cols="12" md="10">
						<h1 class="ungu"> Kesempatan Kerja Lainnya </h1>
					</v-col>
				</v-row>
				<v-row class="mt-2 my-2" v-for="items in careerlist" :key="items.id_karir">
					<v-col cols="12">
						<a @click="goDetail(items.id_karir)">
							<v-col cols="12" md="12" class="my-3">
								<h4 class="larger merah"> {{ items.karir }} </h4>
								<p class="larger"> {{ items.lokasi_pekerjaan }} </p>
							</v-col>
						</a>
					</v-col>
					<hr />
				</v-row>
			</v-container>
		</template>
		<template v-else>
			<div>
				<v-row class="mt-2 my-2">
					<v-col sm="12" md="4" align-self="start">
						<v-skeleton-loader type="list-item-three-line" tile></v-skeleton-loader>
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12" md="12">
						<v-skeleton-loader type="heading" tile="false" ></v-skeleton-loader>
						<v-skeleton-loader type="paragraph" tile="false" ></v-skeleton-loader>
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12" md="12">
						<v-skeleton-loader type="heading" tile="false" ></v-skeleton-loader>
						<v-skeleton-loader type="paragraph" tile="false" ></v-skeleton-loader>
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12" md="12">
						<v-skeleton-loader type="button" tile="false" ></v-skeleton-loader>
					</v-col>
				</v-row>
			</div>
		</template>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

/* eslint-disable */
export default {
  name: "CareerDetail",
  components: {
    NavbarSection,
    FooterSection
  },
  data() {
    return {
    	loadSkeleton: true
    };
  },
  methods: {
	callFunction: function() {
		this.$store.dispatch("getCareerDetail", this.$route.params.idKarir);
		var load = this.$store.state.loaderStatus;
		var v = this;
		setTimeout(function() {
			if (load) {
				v.loadSkeleton = false;
			} else {
				v.loadSkeleton = true;
			}
		}, 800);
    }
  },
  mounted() {
    this.callFunction();
  },
  computed: mapState(
	{
	career: state => state.detailCareer.data,
	careerlist: state => state.career.data
  }),
  created() {
    this.$store.dispatch("getCareer");
  },
};
</script>

<style scoped>
	.larger{
		font-size: larger;
	}
	p {
		line-height: 1.6;
	}
	.merah {
		color: #D84B5B;
	}
	.ungu {
		color: rgb(46, 0, 78);
	}
	.blog-link {
		color: black;
	}
	.bottom-gradient {
		background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
	}
</style>
