<template>
  <div class="subcription-page">
    <NavbarSection />
    <v-container class="container-sub-page" fluid>
      <v-row>
        <v-col class="mx-0 px-0">
          <v-img src="@/assets/image/banner-sub.png" aspect-ratio="5"></v-img>
        </v-col>
      </v-row>
      <div class="d-flex flex-row justify-center align-center text-center my-12">
        <h2 style="font-weight:800;letter-spacing:1px;">UPGRADE KE AHA PREMIUM</h2>
      </div>
      <div class="d-flex flex-column flex-lg-row flex-xl-row">
        <v-row class="px-12">
          <v-col lg="6" md="6" sm="12" cols="12" v-for="item in subList" :key="item.id_langganan">
            <v-card class="card-plans" shaped>
              <div class="d-flex flex-row justify-space-between pt-2">
                <div
                  v-if="item.id_langganan == 2"
                  class="subcription-page--price-badge justify-center align-center"
                >
                  <p>Hemat 20%</p>
                </div>
                <div v-else></div>
                <v-btn
                  class="btn-subs-pay"
                  color="#D32F2F"
                  elevation="3"
                  ripple
                  style="color:white;font-weight:bold;"
                  @click="pay(item.id_langganan)"
                >Coba 7 hari gratis</v-btn>
              </div>
              <v-card-title>{{ item.nama_langganan }}</v-card-title>
              <v-card-text>
                <h2>{{ item.harga }} / Bulan</h2>
                <p
                  class="my-3"
                  style="color:black;font-size:14px;letter-spacing:1px;white-space:pre-line;"
                >{{ item.deskripsi }}</p>
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
import { mapState } from "vuex";
// import Midtrans from '@/midtrans.js'
/* eslint-disable */
export default {
  name: "MembershipPage",
  components: {
    NavbarSection,
    FooterSection
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
  }
};
</script>

<style lang="scss" scoped>
.container-sub-page {
  margin-top: -75px;
  @media screen and (max-width: 450px) {
    margin-top: -15px;
  }
}
.list-plans {
  li {
    list-style-type: none;
    margin: 7px 0;
    img {
      margin-right: 5px;
      padding-top: 4px;
    }
  }
}
.card-plans {
  border-bottom: 5px solid #dddddd;
  border-top: 2px solid #dddddd;
  border-left: 2px solid #dddddd;
  border-right: 2px solid #dddddd;
  border-radius: 10px;
  .subcription-page--price-badge {
    background-color: #b2ff59;
    height: 35px;
    padding: 3px;
    color: white;
  }
  .btn-subs-pay {
    @media screen and (max-width: 450px) {
      font-size: 10px;
    }
  }
}
</style>
