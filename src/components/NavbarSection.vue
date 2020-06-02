<template>
  <div class="navbar-section">
    <nav v-if="userState" class="navbar" style="background-color:white;">
      <v-container>
        <v-row>
          <v-col>
            <v-app-bar fixed elevate-on-scroll class="app-bar" id="appBar" color="white">
              <template v-if="!showSearchBar">
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
                <v-btn icon @click="showSearchBar = !showSearchBar">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn
                  color="transparent"
                  depressed
                  @click="showCategory = !showCategory"
                  style="text-transform:none;font-size:18px;font-weight:600;"
                >Temukan</v-btn>
                <router-link to="/library" tag="button">
				<v-btn
                  color="transparent"
                  depressed
                  style="text-transform:none;font-size:18px;font-weight:600;"
                >Library</v-btn>
                </router-link>
                <router-link to="/promo" tag="button">
                  <v-btn
                    color="transparent"
                    depressed
                    style="text-transform:none;font-size:18px;font-weight:600;"
                  >Promo</v-btn>
                </router-link>
                <v-spacer></v-spacer>
                <v-btn
                  class="button-subscribe mx-5"
                  rounded
                  depressed
                  color="#39DF8C"
                  elevation="2"
                >
                  <router-link to="/plans" tag="p">Upgrade Premium</router-link>
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
              </template>
              <template v-else>
                <NavbarSearch :showState="showSearchBar" />
              </template>
            </v-app-bar>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row>
          <transition name="fade" mode="out-in">
            <v-col v-if="showCategory" class="category-chip--navbar">
              <NavbarCategoryChip />
            </v-col>
          </transition>
        </v-row>
      </v-container>
    </nav>
    <nav v-else class="navbar" style="background-color:#D84B5B;">
      <v-container>
        <v-row>
          <v-col>
            <v-app-bar fixed elevate-on-scroll class="app-bar" id="appBar" color="#D84B5B">
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
			<router-link to="login">
              <v-btn
                color="transparent"
                depressed
                style="text-transform:none;font-size:18px;font-weight:600;"
              >Login</v-btn>
			</router-link>
            </v-app-bar>
          </v-col>
        </v-row>
      </v-container>
    </nav>
  </div>
</template>

<script>
import NavbarCategoryChip from "@/components/navbar/NavbarCategoryChip.vue";
import NavbarSearch from "@/components/navbar/NavbarSearch.vue";
export default {
  name: "NavbarSection",
  components: {
    NavbarCategoryChip,
    NavbarSearch
  },
  data() {
    return {
      userState: this.$store.getters.isLoggedIn,
      showCategory: false,
      showSearchBar: false
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/global_variables.scss";

.navbar {
  .navbarChangeColor {
    background-color: white;
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
  .category-chip--navbar {
    position: fixed;
    z-index: 999;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
