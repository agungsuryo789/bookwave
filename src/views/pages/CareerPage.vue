<template>
	<div class="about">
		<NavbarSection />
		<div v-for="item in carrerSetting" :key="item.id_setting_career">
			<CareerHeader :title="item.judul" :subtitle="item.deskripsi_judul" :banner="item.banner_img"/>
		</div>
		<!-- <v-container>
			<v-row>
				<v-col cols="12" md="10">
					<p class="larger"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor nisl, posuere non cursus vel, rutrum sit amet purus. Suspendisse potenti. Nullam ex nisi, ornare id mi vel, accumsan tristique ante. Nulla imperdiet purus nisl, pellentesque eleifend mi pellentesque in. Ut ultricies porta fringilla. Pellentesque et facilisis odio. Aliquam nunc erat, accumsan in nibh in, iaculis interdum mauris. Sed eget eleifend lectus, non cursus ante. Sed vitae odio ut elit malesuada dictum ac vel neque. Donec suscipit sem vitae diam finibus euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ex nibh, imperdiet nec convallis nec, ornare id purus. Morbi sollicitudin tincidunt est sit amet tincidunt. Phasellus vel orci nisl.</p>
				</v-col>
			</v-row>
		</v-container> -->
		<v-container>
			<!-- <v-row>
				<v-col cols="12" md="10">
				<h1 class="ungu"> Tentang Kami </h1>
				</v-col>
			</v-row> -->
			<v-row v-for="item in carrerSetting" :key="item.id_setting_career">
				<v-col cols="12" md="4">
					<v-img :src="item.deskripsi_img"></v-img>
				</v-col>
				<v-col cols="12" md="8" v-html="item.deskripsi">
					{{item.deskripsi}}
				</v-col>
			</v-row>
		</v-container>
		<v-container>
			<!--<v-row v-for="item in about" :key="item.id_about_us">
				<v-img :src="item.img_file" max-height="300px" class="img-fluid my-4"></v-img>
			</v-row>-->
			<hr/>
		</v-container>
		<v-container>
			<v-row>
				<v-col cols="12" md="10">
					<h1 class="ungu"> Kesempatan Kerja </h1>
				</v-col>
			</v-row>
			<v-row class="mt-2 my-2" v-for="item in career" :key="item.id_karir">
				<a @click="goDetail(item.id_karir)">
					<v-col cols="12" md="12" class="my-3">
						<h4 class="larger merah"> {{ item.karir }} </h4>
						<p class="larger"> {{ item.deskripsi.substring(0,100)+"..." }} </p>
					</v-col>
				</a>
			</v-row>
			<hr/>
		</v-container>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import CareerHeader from "@/components/pages/CareerHeader.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "AppPrivacy",
  components: {
    NavbarSection,
    CareerHeader,
    FooterSection
  },
  created() {
    this.$store.dispatch("getCareer");
	this.$store.dispatch("getCareerSetting");
  },
  computed: mapState({
	career: state => state.career.data,
	carrerSetting: state => state.careerSetting.data
  }),
  methods: {
    goDetail(idKarir) {
      this.$router.push({
        name: "CareerDetail",
        params: { idKarir: idKarir }
      });
    }
  }
};
</script>

<style>
	.larger{
		font-size: larger;
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
</style>
