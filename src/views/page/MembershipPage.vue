<template>
  <div class="subcription-page">
    <NavbarSection />
    <v-container fluid>
      <v-row>
        <v-col
          class="d-flex align-center justify-center"
          style="height:300px;border:1px solid red;"
        >
          <h1>AHA</h1>
        </v-col>
      </v-row>
      <div class="d-flex flex-row justify-center align-center my-12">
        <h2>UPGRADE KE AHA PREMIUM</h2>
      </div>
      <v-row>
        <v-col lg="4" md="6" sm="12" xs="12">
          <ul>
            <li>Simpan lebih dari 256 buku bermanfaat</li>
            <li>Baca pada semua perangkat</li>
            <li>Putar bacaan buku tanpa halangan</li>
            <li>Tandai dan simpan kalimat penting</li>
          </ul>
        </v-col>
        <v-col lg="4" md="6" sm="12" xs="12">
          <v-card height="180px">
            <div class="d-flex flex-row justify-space-between pt-2">
              <div
                class="subcription-page--price-badge justify-center align-center"
                style="background-color:#B2FF59;height:35px;padding:3px;color:white;"
              >
                <p>Hemat 57%</p>
              </div>
              <v-btn
                color="#D32F2F"
                elevation="3"
                style="color:white;font-weight:bold;"
              >Coba 7 hari gratis</v-btn>
            </div>
            <v-card-title class="m-0 p-0">Tahunan</v-card-title>
            <v-card-text class="m-0 p-0">
              <h2>Rp 116.583/Bulan</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="4" md="6" sm="12" xs="12">
          <v-card height="180px">
            <div class="d-flex flex-row justify-space-between pt-2">
              <div class="subcription-page--price-badge"></div>
              <v-btn outlined color="#D32F2F" elevation="2" style="font-weight:bold;">Langganan</v-btn>
            </div>
            <v-card-title class="m-0 p-0">Bulanan</v-card-title>
            <v-card-text class="m-0 p-0">
              <h2>Rp 116.583/Bulan</h2>
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
export default {
  name: "MembershipPage",
  components: {
    NavbarSection,
    FooterSection
  }
};
</script>

<style>
</style>
