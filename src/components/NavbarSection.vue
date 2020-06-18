<template>
  <v-container class="navbar-section px-0" fluid>
    <v-row>
      <v-col>
        <nav v-if="userState" class="navbar" style="background-color:white;">
          <v-row>
            <v-col>
              <v-toolbar
                class="app-bar"
                id="appBar"
                color="white"
                absolute
                light
                flat
                style="width:100%;"
              >
                <v-toolbar-title>
                  <router-link to="/home">
                    <v-img
                      alt="Vuetify Logo"
                      class="shrink ml-5 mr-2"
                      contain
                      src="@/assets/image/aha-red.svg"
                      transition="scale-transition"
                      width="100"
                    />
                  </router-link>
                </v-toolbar-title>
                <v-toolbar-items
                  v-if="!showSearchBar"
                  class="d-flex flex-row justify-center px-3 hide-on--sm"
                  style="width:90%;"
                >
                  <v-btn icon @click="showSearchBar = !showSearchBar, showCategory = false">
                    <v-icon>mdi-magnify</v-icon>
                  </v-btn>
                  <v-btn
                    color="transparent"
                    depressed
                    @click="showCategory = !showCategory"
                    style="text-transform:none;font-size:18px;font-weight:600;"
                  >Temukan</v-btn>
                  <v-btn
                    to="/library/book"
                    color="transparent"
                    depressed
                    style="text-transform:none;font-size:18px;font-weight:600;"
                  >Library</v-btn>
                  <v-btn
                    to="/promo"
                    color="transparent"
                    depressed
                    style="text-transform:none;font-size:18px;font-weight:600;"
                  >Promo</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="button-subscribe mx-5"
                    rounded
                    depressed
                    color="#39DF8C"
                    elevation="2"
                    to="/plans"
                  >Upgrade Premium</v-btn>
                  <v-menu left bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn class="button-dropdown-nav" v-on="on" color="transparent" depressed>You</v-btn>
                    </template>
                    <v-list>
                      <v-list-item @click="toPaymentHistory">
                        <v-list-item-title>Payment History</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="() => {}">
                        <v-list-item-title>Help & Support</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="userLogout">
                        <v-list-item-title>Log Out</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-toolbar-items>
                <v-toolbar-items v-else style="width:90%;">
                  <NavbarSearch @clicked="onCloseSearchBar" />
                </v-toolbar-items>
              </v-toolbar>
            </v-col>
          </v-row>
          <v-row>
            <transition name="fade" mode="out-in">
              <v-col v-if="showCategory" class="category-chip--navbar ml-3 my-5">
                <NavbarCategoryChip />
              </v-col>
            </transition>
          </v-row>
        </nav>
        <nav v-else class="navbar" style="background-color:#D84B5B;">
          <v-row>
            <v-col>
              <v-toolbar
                class="app-bar"
                id="appBar"
                color="#D84B5B"
                absolute
                light
                flat
                style="width:100%;"
              >
                <v-toolbar-title>
                  <router-link to="/">
                    <v-img
                      alt="Vuetify Logo"
                      class="shrink ml-5 mr-2"
                      contain
                      src="@/assets/image/aha-white.svg"
                      transition="scale-transition"
                      width="100px"
                    />
                  </router-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn
                    to="register"
                    class="button-subscribe"
                    rounded
                    color="#39DF8C"
                    elevation="2"
                    depressed
                  >Start Trial</v-btn>
                  <v-btn
                    to="login"
                    color="transparent"
                    depressed
                    style="text-transform:none;font-size:18px;font-weight:600;color:white;"
                  >Login</v-btn>
                </v-toolbar-items>
              </v-toolbar>
            </v-col>
          </v-row>
        </nav>
      </v-col>
    </v-row>
  </v-container>
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
  methods: {
    onCloseSearchBar(e) {
      this.showSearchBar = e;
    },
    toPaymentHistory() {
      this.$router.push({
        name: "PaymentHistoryView"
      });
    },
    userLogout() {
      this.$store.dispatch("userLogout");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/global_variables.scss";

.navbar {
  .navbarChangeColor {
    background-color: white;
  }
  .app-bar {
    color: white;
    .button-subscribe {
      @include btn-main-green();
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
    background-color: white;
    border: 2px solid rgb(184, 184, 184);
    border-bottom: 6px solid rgb(184, 184, 184);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
.hide-on--sm {
  @media screen and (max-width: 600px) {
    display: none !important;
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
