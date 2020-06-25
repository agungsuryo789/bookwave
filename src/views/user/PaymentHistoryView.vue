<template>
  <div>
    <NavbarSection />
    <v-container>
      <v-row>
        <v-col>
          <h1>Payment History</h1>
        </v-col>
      </v-row>
      <v-row v-if="paymentHistoryList.length > 0">
        <v-col lg="7" md="12" sm="12" xs="12">
          <v-row>
            <v-col
              lg="12"
              md="12"
              sm="12"
              xs="12"
              v-for="item in paymentHistoryList"
              :key="item.id_transaksi"
            >
              <v-card>
                <v-row style="margin:0 auto;">
                  <v-col lg="3">
                    <v-img
                      src="@/assets/image/payment-image.png"
                      alt="AHA Payment history"
                      contain
                      width="150"
                      height="150"
                      style="margin: 0 auto;"
                    ></v-img>
                  </v-col>
                  <v-col lg="8">
                    <v-card-title>{{item.nama_langganan}}</v-card-title>
                    <v-card-text>{{item.order_id}}</v-card-text>
                    <v-card-subtitle>
                      <span>{{item.tgl_bayar}}</span>|
                      <span>Status: {{item.status_transaksi}}</span>
                    </v-card-subtitle>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="text-center" lg="5" md="12" sm="12" xs="12">
          <v-img
            src="@/assets/image/aha-hero.svg"
            alt="AHA Description Section"
            aspect-ratio="2"
            contain
            style="margin: 0 auto;"
          ></v-img>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <p>Anda belum mempunyai riwayat pembayaran</p>
          <v-btn rounded dark color="#49E295" to="/plans">Explore more</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";
export default {
  name: "PaymentHistoryView",
  components: {
    NavbarSection,
    FooterSection
  },
  data() {
    return {};
  },
  computed: mapState({
    paymentHistoryList: state => state.paymentHistoryList
  }),
  mounted() {
    this.$store.dispatch("getPaymentHistory");
    console.log(this.paymentHistoryList);
  }
};
</script>

<style>
</style>