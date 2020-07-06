<template>
  <div class="subcription-page">
    <NavbarSection />
    <v-container fluid>
      <v-row>
        <v-col class="d-flex align-center justify-center mx-0 px-0">
          <v-img src="@/assets/image/banner-sub.png" aspect-ratio="5.5"></v-img>
        </v-col>
      </v-row>
      <div class="d-flex flex-row justify-center align-center my-12">
        <h2 style="font-weight:bold;letter-spacing:1px;">UPGRADE KE AHA PREMIUM</h2>
      </div>
      <div class="d-flex flex-column flex-lg-row flex-xl-row">
        <v-row class="px-12">
          <v-col lg="12" md="6" sm="12" xs="12">
            <ul class="list-plans">
              <li>
                <img src="@/assets/image/icon-plans-book.svg" width="20" height="20" />Simpan lebih dari 256 buku bermanfaat
              </li>
              <li>
                <img src="@/assets/image/icon-plans-book2.svg" width="20" height="20" />Baca pada semua perangkat
              </li>
              <li>
                <img src="@/assets/image/icon-plans-play.svg" width="20" height="20" />Putar bacaan buku tanpa halangan
              </li>
              <li>
                <img src="@/assets/image/icon-plans-pencil.svg" width="20" height="20" />Tandai dan simpan kalimat penting
              </li>
            </ul>
          </v-col>
        </v-row>
        <v-row class="px-12">
          <v-col lg="6" md="6" sm="12" xs="12" v-for="item in subList" :key="item.id_langganan">
            <v-card class="card-plans" shaped height="180px" flat>
              <div class="d-flex flex-row justify-space-between pt-2">
                <div
                  v-if="item.id_langganan == 2"
                  class="subcription-page--price-badge justify-center align-center"
                  style="background-color:#B2FF59;height:35px;padding:3px;color:white;"
                >
                  <p>Hemat 20%</p>
                </div>
                <div v-else></div>
                <v-btn
                  color="#D32F2F"
                  elevation="3"
                  ripple
                  style="color:white;font-weight:bold;"
                  @click="pay(item.id_langganan)"
                >Coba 7 hari gratis</v-btn>
              </div>
              <v-card-title class="m-0 p-0">{{ item.nama_langganan }}</v-card-title>
              <v-card-text class="m-0 p-0">
                <h2>{{ item.harga }} / Bulan</h2>
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
  border-bottom: 5px solid #DDDDDD;
  border-top: 2px solid #DDDDDD;
  border-left: 2px solid #DDDDDD;
  border-right: 2px solid #DDDDDD;
  border-radius: 10px;
}
</style>
