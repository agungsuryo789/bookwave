<template>
  <div class="grey-container">
    <NavbarSection />
    <v-container class="second-container">
      <v-row>
        <v-col>
          <h1 class="mb-2">Payment History</h1>
          <div class="title-underline d-flex flex-row justify-start">
            <img src="@/assets/image/underline-1.svg" height="8" />
            <img class="mx-2" src="@/assets/image/underline-2.svg" height="8" />
          </div>
        </v-col>
      </v-row>
      <v-row v-if="paymentHistoryList.length > 0">
        <v-col lg="7" md="12" sm="12" cols="12">
          <v-row>
            <v-col
              lg="12"
              md="12"
              sm="12"
              cols="12"
              v-for="item in paymentHistoryList"
              :key="item.id_transaksi"
            >
              <v-card class="card-sd" @click="toDownloadInvoice(item.invoice_file)">
                <v-row style="margin:0 auto;" class="align-items-center">
                  <v-col class="hide-on-sm" lg="3">
                    <v-img
                      src="@/assets/image/payment-image.png"
                      alt="AHA Payment history"
                      contain
                      width="150"
                      height="110"
                      style="margin: 0 auto;"
                    ></v-img>
                  </v-col>
                  <v-col lg="8">
                    <v-card-title class="py-0 px-0" style="font-weight:bold;">{{item.nama_langganan}}</v-card-title>
                    <v-card-text class="py-0 px-0" style="font-weight:bold;">{{item.order_id}}</v-card-text>
                    <v-card-subtitle class="pb-0 px-0" style="font-weight: 600;color: #4C4C4C;opacity:.6">
                      <span>{{item.tgl_bayar}}</span><span class="mx-2">|</span>
                      <span>Status: {{item.status_transaksi}}</span>
                    </v-card-subtitle>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="text-center hide-on-sm" lg="5" md="12" sm="12" cols="12">
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
    paymentHistoryList: state => state.paymentHistoryList,
    invoiceDownloadDetail: state => state.invoiceDownloadDetail
  }),
  methods: {
    toDownloadInvoice(val) {
      const x = "https://ahabaca-dev.s3-ap-southeast-1.amazonaws.com/";
      setTimeout(function() {
        window.open(x + val);
      }, 300);
    }
  },
  mounted() {
    this.$store.dispatch("getPaymentHistory");
  }
};
</script>

<style scoped lang="scss">
.hide-on-sm {
  @media screen and (max-width: 450px) {
    display: none;
  }
}
.card-sd{
  box-shadow: none;
  margin-bottom: 15px;
}
</style>
