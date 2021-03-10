<template>
  <v-container class="main-container">
    <v-row>
      <v-col class="col-banner-text text-center text-md-left" md="6" sm="12" cols="12">
        <h1 class="my-2">Halo Saya AHA</h1>
        <p class="my-2">
          Ahabaca memungkinkan Anda membaca ratusan koleksi buku. Mulai uji coba gratis Anda hari ini dan cari tahu caranya.
        </p>
        <v-btn
          :to="{name: 'Register'}"
          class="button-banner my-3"
          elevation="2"
          x-large
          rounded
          color="#39DF8C"
          depressed
        >Uji Coba Gratis</v-btn>
      </v-col>
      <v-col class="col-banner-img" md="6" sm="12" cols="12">
        <v-img src="@/assets/image/aha-homapage-banner.png" aspect-ratio="1.1" style="z-index:4;"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomepageBannerSection"
};
</script>

<style lang="scss">
@import "@/assets/css/global_variables.scss";
.row-banner-image {
  max-width: 1000px;
}
.col-banner-text {
  color: white;
  z-index: 2;
  .button-banner {
    @include btn-main-green();
    width: 60%;
    @media screen and (max-width: 340px) {
      width: 60%;
      font-size: 12px;
    }
  }
  p {
    font-size: 20px;
  }
  @media screen and (max-width: 720px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 650px) {
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 450px) {
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 450px) {
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 360px) {
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 12px;
    }
  }
}
.col-banner-img {
  position: relative;
  margin-top: -25px;
  .banner-img-2 {
    position: absolute;
    z-index: 2;
  }
  .banner-img-1 {
    position: absolute;
    right: -80px;
    top: 150px;
    z-index: 3;
  }
  @media (max-width: 991.98px) {
    display: none;
  }

}
</style>
