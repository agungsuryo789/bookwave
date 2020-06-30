<template>
  <v-container class>
    <v-row class="row-banner-image d-flex flex-row justify-space-between">
      <v-col class="col-banner-text text-center text-lg-left" lg="6" md="12" sm="12" cols="12">
        <h1 class="my-1">Halo Saya AHA</h1>
        <p class="my-1">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sapiente unde dolorum iste optio, repellendus
          laborum recusandae sit natus voluptate, tempore
          magni aliquam voluptatum illo magnam corporis
          doloremque! Cupiditate, alias hic.
        </p>
        <v-btn
          :to="{name: 'Register'}"
          class="button-banner"
          elevation="2"
          x-large
          rounded
          color="#39DF8C"
          depressed
        >Start Free Trial</v-btn>
      </v-col>
      <v-col class="col-banner-img" lg="6" md="12" sm="12" cols="12">
        <v-img class="banner-img-2" src="@/assets/image/aha-screenshot.png"></v-img>
        <v-img class="banner-img-1" src="@/assets/image/aha-mobile.png"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomepageBannerSection"
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";
.col-banner-text {
  color: white;
  z-index: 2;
  .button-banner {
    @include btn-main-green();
    width: 40%;
    @media screen and (max-width: 340px) {
      width: 60%;
      font-size: 12px;
    }
  }
  p {
    font-size: 20px;
    letter-spacing: 1px;
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
  .banner-img-2 {
    position: absolute;
    z-index: 2;
  }
  .banner-img-1 {
    position: absolute;
    right: -40px;
    top: 100px;
    z-index: 3;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
}
</style>
