<template>
	<div>
		<NavbarSection :isTroubleshoot="true" />
		<div class="container second-container">
		<v-row>
			<v-col>
				<h1 class="mb-2">Step By Step & Troubleshooting</h1>
				<div class="title-underline d-flex flex-row justify-start">
					<img src="@/assets/image/underline-1.svg" height="8" />
					<img class="mx-2" src="@/assets/image/underline-2.svg" height="8" />
				</div>
				<div class="divider"></div>
			</v-col>
        </v-row>
		<v-row class="mt-2 my-2 mx-0">
			<v-expansion-panels multiple>
				<v-expansion-panel class="collapse-ex"  v-for="item in listBantuan" :key="item.id_bantuan_kategori">
					<v-expansion-panel-header class="px-0">
						<h2 style="color:#7D6183">{{ item.nama_kategori}}</h2>
					</v-expansion-panel-header>
					<v-expansion-panel-content v-for="items in item.list_bantuan" :key="items.id_bantuan">
						<a @click="goDetail(items.id_bantuan)">
						<p> {{ items.judul }}</p>
						</a>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-row>
		</div>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import HeaderNoimage from "@/components/pages/HeaderNoimage.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

/* eslint-disable */
export default {
  name: "Troubleshoot",
  components: {
    NavbarSection,
    HeaderNoimage,
    FooterSection
  },
  created() {
	this.$store.dispatch("getBantuan");
  },
  computed: mapState({
	listBantuan: state => state.listBantuan.data
  }),
  methods: {
	  goDetail(idBantuan) {
      this.$router.push({
        name: "TroubleshootDetail",
        params: { idBantuan: idBantuan }
	  	});
	  }
  }
};
</script>

<style lang="scss">
	.larger {
		font-size: larger;
	}
	.collapse-ex{
		&::before{
			box-shadow: none !important
		}
		.v-expansion-panel-content__wrap{
			padding: 15px 0;
			border-bottom: 1px #e8e8e8 solid;
			p{
				margin-bottom: 0;
				color: #363636;
			}
		}
	}
	.divider{
		border-bottom: 1px #e8e8e8 solid;
		width: 100%;
		margin-top: 40px;
		margin-bottom: 33px;
	}
</style>