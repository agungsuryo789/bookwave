<template>
  <div class="home">
    <NavbarSection />
    <header class="banner">
      <img class="banner-bg-img-1" src="@/assets/image/banner-1.png" />
      <img class="banner-bg-img-2" src="@/assets/image/banner-2.png" />
      <HomepageBannerSection />
    </header>
    <section class="hero-section">
      <v-container fluid>
        <v-row class="row-hero-1">
          <v-col lg="6" md="12" sm="12" cols="12">
            <v-img
              class="hero-img-1"
              src="@/assets/image/aha-hero.svg"
              alt="AHA Description Section"
              aspect-ratio="3"
              contain
            ></v-img>
          </v-col>
          <v-col class="col-hero-text" lg="6" md="12" sm="12" cols="12">
            <h1 class="my-5">Apa yang AHA miliki ?</h1>
            <p class="pr-5" style="font-size:18px;">
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Nobis laborum ex atque in libero. Libero eum
              labore illum ipsa blanditiis earum, aliquid mollitia
              doloremque quidem, odit quas animi dolores
              consequuntur!
            </p>
            <a href>Lihat Lebih Banyak</a>
          </v-col>
        </v-row>
        <v-row class="row-hero-2">
          <v-col class="hero-2 text-center d-flex flex-column justify-center align-center">
            <p>Temukan Jutaan Buku Lainnya hanya di AHA</p>
            <v-btn rounded color="#39DF8C" depressed>Start Free Trial</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="homepage-kategori mt-10">
      <HomepageCategorySection />
    </section>
    <FooterSection />
  </div>
</template>

<script>
/* eslint-disable */
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import HomepageBannerSection from "@/components/homepage/HomepageBannerSection.vue";
import HomepageCategorySection from "@/components/homepage/HomepageCategorySection.vue";
export default {
  name: "Home",
  components: {
    NavbarSection,
    FooterSection,
    HomepageBannerSection,
    HomepageCategorySection
  },
  data: () => ({
    chipKategori: [1],
    loadSkeleton: true
  })
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/global_variables.scss";

.banner {
  height: 700px;
  position: relative;
  .banner-bg-img-1,
  .banner-bg-img-2 {
    position: absolute;
  }
  .banner-bg-img-1 {
    top: -50px;
    left: 0;
    width: 100%;
    height: 550px;
  }
  .banner-bg-img-2 {
    bottom: 10px;
    left: 0;
    width: 115%;
    transform: rotate(-2deg);
  }
}

.hero-section {
  .row-hero-1,
  .row-hero-2 {
    h1 {
      color: #d65f5f;
      font-weight: bold;
    }
  }
  .row-hero-2 {
    margin-top: 150px;
    margin-bottom: 150px;
  }
  .hero-2 {
    height: 250px;
    background-color: #4f2e53;
    color: white;
    width: 100%;
    p {
      font-size: 28px;
      letter-spacing: 1px;
    }
    button {
      @include btn-main-green();
      width: 15%;
    }
  }
}
</style>
