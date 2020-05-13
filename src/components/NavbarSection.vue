<template>
  <nav class="navbar">
    <v-container>
      <v-row>
        <v-col v-if="userState == false">
          <v-app-bar
            flat
            fixed
            class="app-bar"
            id="appBar"
            color="#D65F5F"
            v-on:scroll="updateScroll"
          >
            <router-link to="/">
              <v-img
                alt="Vuetify Logo"
                class="shrink ml-5 mr-2"
                contain
                src="../assets/image/aha-white-icon.svg"
                transition="scale-transition"
                width="100"
              />
            </router-link>
            <v-spacer></v-spacer>
            <v-btn
              class="button-subscribe"
              rounded
              color="#39DF8C"
              elevation="2"
              depressed
            >Start Trial</v-btn>
            <v-btn
              color="transparent"
              depressed
              style="text-transform:none;font-size:18px;font-weight:600;"
            >Login</v-btn>
          </v-app-bar>
        </v-col>
        <v-col v-if="userState == true">
          <v-app-bar
            flat
            fixed
            class="app-bar"
            id="appBar"
            color="#D65F5F"
            v-on:scroll="updateScroll"
          >
            <router-link to="/home">
              <v-img
                alt="Vuetify Logo"
                class="shrink ml-5 mr-2"
                contain
                src="../assets/image/aha-white-icon.svg"
                transition="scale-transition"
                width="100"
              />
            </router-link>
            <v-spacer></v-spacer>
            <router-link to="/home/search" tag="icon">
              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </router-link>
            <v-btn
              color="transparent"
              depressed
              @click="showCategory = !showCategory"
              style="text-transform:none;font-size:18px;font-weight:600;"
            >Temukan</v-btn>
            <v-btn
              color="transparent"
              depressed
              style="text-transform:none;font-size:18px;font-weight:600;"
            >Library</v-btn>
            <router-link to="/promo" tag="button">
              <v-btn
                color="transparent"
                depressed
                style="text-transform:none;font-size:18px;font-weight:600;"
              >Promo</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn class="button-subscribe mx-5" rounded depressed color="#39DF8C" elevation="2">
              <router-link to="/plans" tag="icon">Upgrade Premium</router-link>
            </v-btn>
            <v-menu left bottom>
              <template v-slot:activator="{ on }">
                <v-btn class="button-dropdown-nav" v-on="on" color="transparent" depressed>You</v-btn>
              </template>
              <v-list>
                <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                  <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
        </v-col>
      </v-row>
    </v-container>
  </nav>
</template>

<script>
/* eslint-disable */
export default {
  name: "NavbarSection",
  data: () => ({
    userState: true,
    scrollPosition: null
  }),
  created() {
    window.addEventListener("scroll", this.updateScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll(event) {
      this.scrollPosition = window.scrollY;
      const navbarElement = document.querySelector(".app-bar");
      if (window.scrollY || window.pageYOffset > 500) {
        navbarElement.style.backgroundColor = "white";
      } else if (window.scrollY < 100) {
        navbarElement.style.backgroundColor = "#D65F5F";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/global_variables.scss";

.navbar {
  background-color: #d65f5f;
  .navbarChangeColor {
    background-color: #d65f5f;
  }
  .app-bar {
    color: white;
    .button-subscribe {
      @include btn-main-green();
      width: 15%;
    }
    .button-dropdown-nav {
      font-size: 18px;
      font-weight: 600;
      text-transform: none;
    }
  }
}
</style>
