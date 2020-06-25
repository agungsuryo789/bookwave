<template>
  <div class="promo-page">
    <NavbarSection />
    <v-container>
      <v-row>
        <v-col
          v-for="item in 4"
          :key="item"
          xl="12"
          lg="12"
          md="12"
          sm="12"
          style="margin: 0 auto;"
        >
          <PromoCard style="margin: 0 auto;" />
        </v-col>
      </v-row>
      <v-row class="d-flex flex-row flex-xs-column justify-center">
        <v-col lg="4" md="6" sm="6" xs="6" v-for="item in subList" :key="item.id_langganan">
          <v-card link ripple height="180px">
            <div class="d-flex flex-row justify-space-between pt-2">
              <div v-if="item.id_langganan == 2" class="subcription-page--price-badge justify-center align-center" style="background-color:#B2FF59;height:35px;padding:3px;color:white;">
                <p>Hemat 20%</p>
              </div>
              <v-btn
                color="#D32F2F"
                elevation="3"
                style="color:white;font-weight:bold;"
				@click="pay(item.id_langganan)"
              >Coba 7 hari gratis</v-btn>
            </div>
            <v-card-title class="m-0 p-0">Tahunan</v-card-title>
            <v-card-text class="m-0 p-0">
              <h2>Rp. 99,999 / Bulan</h2>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import PromoCard from "@/components/PromoCard.vue";
import { mapState } from "vuex";

export default {
  name: "PromoPage",
  components: {
    NavbarSection,
    FooterSection,
    PromoCard
  },
  computed: mapState({
    subList: state => state.subList.data
  }),
  created() {
    this.$store.dispatch("getSubsOption");
  },
  methods: {
    pay(value) {
      var data = {
        id_langganan: value
      };
      this.$store.dispatch("invoiceDetails", data);
    }
  },
  data: () => ({
    loadSkeleton: false,
    booksToShow: 6
  })
};
</script>

<style>
</style>
