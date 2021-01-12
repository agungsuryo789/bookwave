<template>
  <div class="home">
    <NavbarSection style="background-color: #d84b5b" />
    <header class="banner">
      <HomepageBannerSection />
      <img class="banner-bg-img-1" src="@/assets/image/bg_landing.png" />
      <!-- <img class="banner-bg-img-2" src="@/assets/image/banner-2.png" /> -->
    </header>
    <section class="hero-section">
      <v-container class="main-container">
        <v-row class="row-hero-1">
          <v-col class="home-banner-hero" lg="5" md="5" sm="12" cols="12">
            <v-img
              class="hero-img-1"
              src="@/assets/image/aha-hero.svg"
              alt="AHA Description Section"
              contain
            ></v-img>
          </v-col>
          <v-col class="col-hero-text" lg="7" md="7" sm="12" cols="12">
            <h1 class="mb-3 home-hero-title">Apa yang AHA miliki ?</h1>
            <div class="title-underline d-flex flex-row justify-start">
              <img src="@/assets/image/underline-1.svg" height="10" />
              <img src="@/assets/image/underline-2.svg" height="10" />
            </div>
            <p class="pr-5 home-hero-text" style="font-size: 18px">
              Pelajari lebih dalam topik favorit Anda dengan buku audio lengkap.
              Baca atau dengarkan ide-ide kunci dari judul nonfiksi terlaris
              dalam 15 menit. Temukan perspektif baru dengan acara dan podcast
              eksklusif.
            </p>
            <router-link to="/home" class="hero-link text-right">
              Lihat lebih banyak
              <v-icon class="mb-1">mdi-arrow-right</v-icon>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row class="row-hero-2">
          <v-col
            class="hero-2 text-center d-flex flex-column justify-center align-center"
          >
            <h3>Temukan Jutaan Buku Lainnya hanya di AHA</h3>
            <v-btn
              :to="{ name: 'Register' }"
              class="px-12 py-5"
              rounded
              color="#39DF8C"
              depressed
              style="text-transform: capitalize; color: white"
              >Start Free Trial</v-btn
            >
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
    HomepageCategorySection,
  },
  data: () => ({
    chipKategori: [1],
    loadSkeleton: true,
  }),
};
</script>

<style lang="scss">
@import "@/assets/css/global_variables.scss";

.banner {
  height: 700px;
  position: relative;
  padding: 0;
  margin: 0;
  padding-top: 96px;
  h1 {
    @media (max-width: 767.98px) {
		font-size: 32px;
    }
  }
  @media screen and (max-width: 767.98px) {
      padding-top: 0;
  }
  @media screen and (max-width: 450px) {
    height: 300px;
  }
  .banner-bg-img-1,
  .banner-bg-img-2 {
    position: absolute;
  }
  .banner-bg-img-1 {
    top: -50px;
    left: 0;
    width: 100%;
    height: 550px;
    @media screen and (max-width: 900px) {
      height: 70%;
    }
    @media screen and (max-width: 720px) {
      height: 60%;
      width: 120%;
    }
    @media screen and (max-width: 650px) {
      height: 50%;
    }
    @media screen and (max-width: 450px) {
      height: 95%;
    }
    @media screen and (max-width: 360px) {
      height: 100%;
      width: 140%;
      margin-left: -5%;
    }
  }
  .banner-bg-img-2 {
    bottom: 10px;
    left: 0;
    width: 115%;
    transform: rotate(-2deg);
    @media screen and (max-width: 900px) {
      bottom: 110px;
      width: 135%;
    }
    @media screen and (max-width: 650px) {
      bottom: 350px;
    }
    @media screen and (max-width: 450px) {
      bottom: 0;
    }
    @media screen and (max-width: 360px) {
      bottom: -20px;
      left: 5px;
      width: 130%;
    }
  }
}

.hero-section {
  .row-hero-1,
  .row-hero-2 {
    h1 {
      color: $mainColor;
      font-weight: bold;
    }
  }
  .row-hero-1 {
    align-items: center;
    .col-hero-text {
      text-align: right;
      h1,
      p {
        text-align: left;
      }
      .hero-link {
        color: #4f2e53;
        font-weight: bold;
        text-decoration: none;
        margin-right: 5%;
      }
      h1 {
		font-size: 34px;
		@media (max-width: 767.98px) {
			font-size: 28px;
		}
      }
    }
  }
  .row-hero-2 {
    margin-top: 5%;
    margin-bottom: 5%;
    h3 {
      font-size: 42px;
      margin-bottom: 20px;
	  font-weight: 400;
	  	@media (max-width: 767.98px) {
			font-size: 28px;
		}
    }
  }
  .home-banner-hero {
    padding-right: 60px;
    @media screen and (max-width: 991.98px) {
      display: none;
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  .hero-2 {
    height: 250px;
    background-image: url("../assets/image/aha-homepage-bg-purp.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
