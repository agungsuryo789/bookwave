<template>
  <div class="home">
    <NavbarSection />
    <header class="banner">
      <img class="banner-bg-img-1" src="@/assets/image/banner-1.png" />
      <img class="banner-bg-img-2" src="@/assets/image/banner-2.png" />
      <v-container class="my-12">
        <v-row class="row-banner-image">
          <v-col class="col-banner-text">
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
          <v-col class="col-banner-img">
            <v-img class="banner-img-1" src="@/assets/image/aha-mobile.png"></v-img>
            <v-img class="banner-img-2" src="@/assets/image/aha-screenshot.png" aspect-ratio="1.7"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </header>
    <section class="hero-section">
      <v-container fluid>
        <v-row class="row-hero-1">
          <v-col>
            <v-img
              class="hero-img-1"
              src="@/assets/image/aha-hero.svg"
              alt="AHA Description Section"
              aspect-ratio="3"
              contain
            ></v-img>
          </v-col>
          <v-col class="col-hero-text">
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
      <v-container>
        <v-row class="kategori-desc">
          <v-col>
            <h1>Kategori yang sering di cari</h1>
          </v-col>
          <v-col>
            <p>
              Dari kategori A-Z kami telah menyortirnya untuk
              Anda. Manfaatkan akses tak terbatas ke seluruh
              kategori yang ada.
            </p>
          </v-col>
        </v-row>
        <v-row class="justify-center align-center my-10">
          <v-col class="col-kategori-chip">
            <v-chip-group v-model="chipKategori" column>
              <v-chip filter outlined>Semua</v-chip>
              <v-chip filter outlined>Agama</v-chip>
              <v-chip filter outlined>Politik</v-chip>
              <v-chip filter outlined>Budaya</v-chip>
              <v-chip filter outlined>Kesehatan</v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
        <v-row class="my-9 justify-center align-center" no-gutters>
          <template v-for="n in 6">
            <v-col
              :key="n"
              v-if="loadSkeleton"
              lg="4"
              md="12"
              class="my-5"
              style="max-width:300px;"
            >
              <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
            </v-col>
            <v-col
              :key="n"
              v-if="!loadSkeleton"
              lg="4"
              md="12"
              class="my-5"
              style="max-width:300px;"
            >
              <BookCardComponent />
            </v-col>
          </template>
        </v-row>
        <v-row>
          <v-col class="text-center d-flex flex-column justify-center align-center">
            <v-btn
              class="btnLihat"
              rounded
              color="#39DF8C"
              elevation="2"
              depressed
            >Lihat lebih banyak</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <FooterSection />
  </div>
</template>

<script>
/* eslint-disable */
import NavbarSection from "@/components/NavbarSection.vue";
import BookCardComponent from "@/components/BookCardComponent.vue";
import FooterSection from "@/components/FooterSection.vue";
export default {
  name: "Home",
  components: {
    NavbarSection,
    BookCardComponent,
    FooterSection
  },
  data: () => ({
    chipKategori: [1],
    loadSkeleton: false
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

.homepage-kategori {
  .kategori-desc {
    h1 {
      font-size: 38px;
      color: #d84b5b;
      font-weight: 700;
    }
    p {
      letter-spacing: 1px;
    }
  }
  .col-kategori-chip {
    max-width: 400px;
  }
  .btnLihat {
    @include btn-main-green();
    width: 20%;
  }
}
</style>
