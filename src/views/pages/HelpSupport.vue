<template>
  <div>
    <NavbarSection />
    <v-container fluid>
      <v-row style="margin-top:-20px;">
        <v-col class="d-flex align-center justify-center mx-0 px-0">
          <v-img src="@/assets/image/banner-sub.png" aspect-ratio="5.3">
            <!--<h1 style="position:absolute;top:45%;left:50%;color:white;">AHA</h1>-->
            <v-col class="my-12 my-lg-0" cols="12" md="8">
              <v-text-field
                class="form-rounded"
                solo
                rounded
                label="Temukan yang anda cari disini"
                prepend-inner-icon="mdi-magnify"
                style="position:absolute;top:40%;left:15%;right:15%"
              ></v-text-field>
            </v-col>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <div class="container">
      <v-row class="mt-2 my-2">
        <v-col cols="12" md="4">
          <v-btn large block outlined color="deep-purple accent-4" to="/about">Tentang</v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn large block outlined color="deep-purple accent-4" to="/plans">Langganan</v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn large block outlined color="deep-purple accent-4" to="/profile">Akun Saya</v-btn>
        </v-col>
      </v-row>
      <v-row class="mt-2 my-2">
        <v-col cols="12" md="4">
          <v-btn large block outlined color="deep-purple accent-4" to="/">Aplikasi Kami & Website Kami</v-btn>
        </v-col>
        <v-col cols="12" md="8">
          <v-btn
            large
            block
            outlined
            color="deep-purple accent-4"
            to="/troubleshoot"
          >Panduan & Pertanyaan</v-btn>
        </v-col>
      </v-row>
    </div>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "HelpSupport",
  components: {
    NavbarSection,
    FooterSection
  }
};
</script>

<style lang="scss">
.larger {
  font-size: larger;
}
.form-rounded{
  .v-input__slot{
    box-shadow: none !important;
    padding-left: 15px;
  }
  &.v-input--is-focused{
    .primary--text{
      color: rgba(0, 0, 0, 0.54) !important;
    }
  }
}

.v-application .deep-purple--text.text--accent-4 {
    color: #522d5b !important;
    caret-color: #522d5b !important;
    border-color: #522d5b;
    border-radius: 11px;
    text-transform: none;
    font-weight: 800;
    letter-spacing: 0.3px;
    height: 54px;
    &:hover{
      background: #522d5b ;
      color:#fff !important;
    }
}
</style>