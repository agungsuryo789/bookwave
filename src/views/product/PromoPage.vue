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
      <div class="promo-section">
        <v-row class="d-flex flex-row flex-xs-column justify-center">
          <v-col md="6" sm="6" xs="6" v-for="item in subList" :key="item.id_langganan">
            <v-card class="card-plans" shaped flat link ripple height="180px">
              <div class="d-flex flex-row justify-space-between pt-2 pr-3">
                  <div
                    v-if="item.id_langganan == 2"
                    class="subcription-page--price-badge justify-center align-center"
                  >
                    <p>Hemat 20%</p>
                  </div>
                  <div v-else></div>
                  <v-btn
                    class="btn-subs-pay"
                    color="red darken-1"
                    ripple
                    style="color:white;font-weight:bold;"
                    @click="pay(item.id_langganan)"
                  >Coba Sekarang</v-btn>
              </div>
              <v-card-title class="m-0 p-0 title-pre">{{item.satuan}}</v-card-title>
              <v-card-text class="m-0 p-0 pb-0">
                <h2 class="price">{{item.harga}}</h2>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
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
  border-radius: 16px;
  box-shadow: none;
  .subcription-page--price-badge {
    background-color: #8EDF00;
    padding: 5px 18px;
    color: white;
    p{
      margin-bottom: 0;
      font-weight: 600;
    }
  }
}
.promo-section {
    max-width: 765px;
    margin: auto;
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

.title-pre{
  color: #6F6F6F;
  font-weight: 800;
  font-size: 16px;
  padding-bottom: 5px;
}
.price{
  font-size: 24px;
  font-weight: 900;
  color: #E76464;
}
</style>
