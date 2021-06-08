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
              <div class="d-flex flex-row justify-space-between pt-2 pr-3">
                <div
                  v-if="item.id_langganan == 2"
                  class="subcription-page--price-badge justify-center align-center"
                >
                  <p>Hemat 20%</p>
                </div>
                <div v-else></div>
                <div v-if="item.id_langganan == 3">
                  <v-btn
                    class="btn-subs-pay"
                    color="red darken-1"
                    ripple
                    style="color:white;font-weight:bold;"
                    @click="paytrial(item.id_langganan)"
                  >Coba Sekarang</v-btn>
                </div>
                <div v-else>
                <v-btn
                  class="btn-subs-pay"
                  color="red darken-1"
                  ripple
                  style="color:white;font-weight:bold;"
                  @click="pay(item.id_langganan)"
                >Coba Sekarang</v-btn>
                </div>
              </div>
              <v-card-title class="title-pre">{{ item.nama_langganan }}</v-card-title>
              <v-card-text>
                <h2 class="price">{{ item.harga }} / {{item.satuan}}</h2>
                <p class="price-desc"
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
  data() {
    return {
        currentOrder: 'value',
    }
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
    },
    paytrial(value) {
      var data = {
        id_langganan: value
      };
      this.$store.dispatch("invoiceDetailsTrial", data);
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
  border-radius: 16px;
  box-shadow: none;
  overflow: hidden;
  .subcription-page--price-badge {
    background-color: #8EDF00;
    padding: 5px 18px;
    color: white;
    p{
      margin-bottom: 0;
      font-weight: 600;
    }
  }
  .btn-subs-pay {
    @media screen and (max-width: 450px) {
      font-size: 10px;
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
.price-desc{
  color: #929292;
  font-size: 12px;
  margin-top: 20px;
  margin-bottom: 0;
}
</style>
