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
        <v-col>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure distinctio accusantium ut dolor, eveniet voluptatibus ad repellendus nulla quod aspernatur doloremque quibusdam amet dolorum laborum dolorem, vel natus facere suscipit?</v-col>
        <v-col>
          <v-card height="180px">
            <div class="d-flex flex-row justify-space-between">
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
            <v-card-title>Tahunan</v-card-title>
            <v-card-text>
              <h2>Rp 116.583/Bulan</h2>
            </v-card-text>
            <v-card-subtitle>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card height="180px">
            <div class="d-flex flex-row justify-space-between">
              <div class="subcription-page--price-badge"></div>
              <v-btn outlined color="#D32F2F" elevation="2" style="font-weight:bold;">Langganan</v-btn>
            </div>
            <v-card-title>Bulanan</v-card-title>
            <v-card-text>
              <h2>Rp 116.583/Bulan</h2>
            </v-card-text>
            <v-card-subtitle></v-card-subtitle>
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
  name: "SubcriptionPage",
  components: {
    NavbarSection,
    FooterSection
  }
};
</script>

<style>
</style>
