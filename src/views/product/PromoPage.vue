<template>
  <div class="promo-page">
    <NavbarSection />
    <v-container>
      <v-row>
        <v-col
          v-for="item in promoList"
          :key="item.id_banner_promo"
          xl="12"
          lg="12"
          md="12"
          sm="12"
          style="margin: 0 auto;"
        >
          <PromoCard :judulPromo="item.judul" style="margin: 0 auto;" />
        </v-col>
      </v-row>
      <v-row class="d-flex flex-row flex-xs-column justify-center">
        <v-col lg="4" md="6" sm="6" xs="6" v-for="item in subList" :key="item.id_langganan">
          <v-card class="card-plans" shaped flat link ripple height="180px">
            <div class="d-flex flex-row justify-space-between pt-2">
              <div
                v-if="item.id_langganan == 2"
                class="subcription-page--price-badge justify-center align-center"
                style="background-color:#B2FF59;height:35px;padding:3px;color:white;"
              >
                <p>Hemat 20%</p>
              </div>
              <v-btn
                color="#D32F2F"
                elevation="3"
                style="color:white;font-weight:bold;"
                @click="pay(item.id_langganan)"
              >Coba Sekarang</v-btn>
            </div>
            <v-card-title class="m-0 p-0">{{item.satuan}}</v-card-title>
            <v-card-text class="m-0 p-0">
              <h2>{{item.harga}}</h2>
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
    promoList: state => state.promoList.data,
    subList: state => state.subList.data
  }),
  created() {
    this.$store.dispatch("getPromo");
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

<style lang="scss" scoped>
.card-plans {
  border-bottom: 5px solid #dddddd;
  border-top: 2px solid #dddddd;
  border-left: 2px solid #dddddd;
  border-right: 2px solid #dddddd;
  border-radius: 10px;
}
.promo-card {
  border-radius: 20px;
  background-color: #e76464;
  .promo-card-data {
    color: white;
    position: relative;
    h1 {
      margin-top: auto;
    }
    p {
      padding: 5px 4px;
      margin-top: 5px;
      background-color: #d33131;
    }
    img {
      position: absolute;
    }
  }
}
</style>
