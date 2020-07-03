<template>
	<div>
		<NavbarSection />
		<PageHeader title="User Privacy"/>
		<div class="container">
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="12" v-for="item in userprivacy" :key="item.id_privasi_user" >
				<h2> {{ item.judul }} </h2>
				<p> {{ item.deskripsi }} </p>
			</v-col>
		</v-row>
		</div>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import PageHeader from "@/components/pages/PageHeader.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "UsersPrivacy",
  components: {
    NavbarSection,
    PageHeader,
    FooterSection
  },
  created() {
    this.$store.dispatch("getUserPrivacy");
  },
  computed: mapState({
	userprivacy: state => state.userPrivacy.data
  })
};
</script>
