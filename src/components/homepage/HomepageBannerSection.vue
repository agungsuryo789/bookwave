<template>
  <v-container class="my-12">
    <v-row class="row-banner-image">
      <v-col class="col-banner-text" lg="6" md="12" sm="12" cols="12">
        <h1 class="my-5">Halo Saya AHA</h1>
        <p class="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sapiente unde dolorum iste optio, repellendus
          laborum recusandae sit natus voluptate, tempore
          magni aliquam voluptatum illo magnam corporis
          doloremque! Cupiditate, alias hic.
        </p>
        <v-btn x-large rounded color="#39DF8C" depressed>Start Free Trial</v-btn>
      </v-col>
      <v-col class="col-banner-img" lg="6" md="12" sm="12" cols="12">
        <v-img class="banner-img-1" src="@/assets/image/aha-mobile.png"></v-img>
        <v-img class="banner-img-2" src="@/assets/image/aha-screenshot.png" aspect-ratio="1.7"></v-img>
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
  button {
    @include btn-main-green();
    width: 60%;
  }
  p {
    font-size: 20px;
    letter-spacing: 1px;
  }
}
.col-banner-img {
  position: relative;
  .banner-img-1 {
    position: absolute;
    right: 0;
    top: 100px;
    z-index: 1;
  }
}
</style>
