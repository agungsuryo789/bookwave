<template>
  <v-container class="navbar-section px-0 mb-md-10" fluid>
    <v-row>
      <v-col class="mb-md-7">
        <nav v-if="userState" class="navbar navbar--auth" style="background-color:white;">
          <v-toolbar
            class="app-bar"
            id="appBar"
            color="white"
            absolute
            light
            flat
            elevation="3"
            style="width:100%;"
          >
            <v-toolbar-title id="appLogo">
              <router-link to="/home">
                <v-img
                  alt="Vuetify Logo"
                  class="shrink ml-5"
                  contain
                  src="@/assets/image/aha-red.svg"
                  transition="scale-transition"
                  width="100"
                />
              </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hide-on--md" v-if="!showSearchBar">
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
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items v-if="!showSearchBar" class="hide-on--md">
              <div v-if="isTroubleshoot">
                <v-btn
                  class="button-subscribe mx-5 my-3"
                  rounded
                  depressed
                  color="white"
                  elevation="2"
                  to="/contact"
                  style="text-transform:none;color:#1CB0F6;"
                >Kirim Pertanyaan</v-btn>
              </div>
              <div v-if="memberDetail.data && !isTroubleshoot">
                <v-btn
                  class="button-subscribe mx-5 my-3"
                  rounded
                  depressed
                  color="#39DF8C"
                  elevation="2"
                  v-if="!memberDetail.data[0].premium_member"
                  to="/plans"
                  style="text-transform:none;color:white;"
                >Upgrade Premium</v-btn>
              </div>
              <template v-if="memberDetail.data && !isTroubleshoot">
                <v-chip
                  v-if="memberDetail.data[0].premium_member"
                  class="my-4"
                  color="#E25757"
                  outlined
                >
                  Premium Account
                  <v-icon right>mdi-account-check-outline</v-icon>
                </v-chip>
              </template>
              <v-menu offset-y left>
                <template v-slot:activator="{ on }">
                  <v-btn class="button-dropdown-nav" v-on="on" color="transparent" depressed>You</v-btn>
                </template>
                <v-list>
                  <v-list-item @click="toPaymentHistory">
                    <v-list-item-title>Payment History</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="toHelp">
                    <v-list-item-title>Help & Support</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="userLogout">
                    <v-list-item-title>Log Out</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar-items>
            <v-toolbar-items v-if="!showSearchBar" class="hide-on--lg mobile-bar">
              <v-menu right bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn
                    class="button-dropdown-nav"
                    v-on="on"
                    @click="showCategory = false"
                    color="transparent"
                    depressed
                  >
                    <v-icon>mdi-menu</v-icon>
                  </v-btn>
                </template>
                <v-list style="z-index:3;width:200px;">
                  <v-list-item @click="toggleSearch">
                    <v-list-item-title>
                      <v-icon>mdi-magnify</v-icon>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="showCategory = !showCategory">
                    <v-list-item-title>Temukan</v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/library/book">
                    <v-list-item-title>Library</v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/promo">
                    <v-list-item-title>Promo</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu left bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn class="button-dropdown-nav" v-on="on" color="transparent" depressed>You</v-btn>
                </template>
                <v-list>
                  <template v-if="isTroubleshoot">
                    <v-list-item to="/contact">
                      <v-list-item-title>
                        <v-btn
                          class="button-subscribe"
                          rounded
                          depressed
                          color="white"
                          style="text-transform:none;color:#1CB0F6;"
                        >Kirim Pertanyaan</v-btn>
                      </v-list-item-title>
                    </v-list-item>
                  </template>
                  <template v-if="memberDetail.data && !isTroubleshoot">
                    <v-list-item v-if="!memberDetail.data[0].premium_member" to="/plans">
                      <v-list-item-title>
                        <v-btn
                          class="button-subscribe"
                          rounded
                          depressed
                          color="#39DF8C"
                          style="text-transform:none;color:white;"
                        >Upgrade Premium</v-btn>
                      </v-list-item-title>
                    </v-list-item>
                  </template>
                  <template v-if="memberDetail.data && !isTroubleshoot">
                    <v-list-item v-if="memberDetail.data[0].premium_member">
                      <v-list-item-title>
                        <v-chip class="my-4" color="#E25757" outlined>
                          Premium Account
                          <v-icon right>mdi-account-check-outline</v-icon>
                        </v-chip>
                      </v-list-item-title>
                    </v-list-item>
                  </template>
                  <v-list-item @click="toPaymentHistory">
                    <v-list-item-title>Payment History</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="toHelp">
                    <v-list-item-title>Help & Support</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="userLogout">
                    <v-list-item-title>Log Out</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar-items>
            <v-toolbar-items v-else class="nav-search" style="width:100%;">
              <NavbarSearch @clicked="onCloseSearchBar" />
            </v-toolbar-items>
          </v-toolbar>
          <v-row>
            <v-col v-show="showCategory" @click="hide" class="category-chip--navbar mx-0 px-0 py-0 my-10 my-lg-12">
              <NavbarCategoryChip />
            </v-col>
          </v-row>
        </nav>
        <nav v-else class="navbar" style="background-color:#D84B5B;">
          <v-toolbar class="app-bar--no-auth" id="appBar" color="#D84B5B" absolute light flat style>
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
              <div class="my-3">
                <v-btn
                  @click="toRegister"
                  class="button-subscribe"
                  rounded
                  color="#39DF8C"
                  elevation="2"
                  depressed
                >Start Trial</v-btn>
                <v-btn
                  @click="toLogin"
                  color="transparent"
                  depressed
                  style="text-transform:none;font-size:18px;font-weight:600;color:white;"
                >Login</v-btn>
              </div>
            </v-toolbar-items>
          </v-toolbar>
        </nav>
      </v-col>
    </v-row>
  </v-container>
</template>

<script type="text/javascript">
import NavbarCategoryChip from "@/components/navbar/NavbarCategoryChip.vue";
import NavbarSearch from "@/components/navbar/NavbarSearch.vue";
import { mapState } from "vuex";

export default {
  name: "NavbarSection",
  components: {
    NavbarCategoryChip,
    NavbarSearch
  },
  props: {
    isTroubleshoot: {
      type: Boolean
    }
  },
  data() {
    return {
      userState: this.$store.getters.isLoggedIn,
      showCategory: false,
      showSearchBar: false,
      dialog: false
    };
  },
  computed: mapState({
    memberDetail: state => state.memberDetail
  }),
  methods: {
    onCloseSearchBar(e) {
      this.showSearchBar = e;
      const appLogo = document.getElementById("appLogo");
      appLogo.style.display = "block";
    },
    toPaymentHistory() {
      this.$router.push({
        name: "PaymentHistoryView"
      });
    },
    toHelp() {
      this.$router.push({
        name: "HelpSupport"
      });
    },
    toLogin() {
      this.$router.push({
        name: "Login"
      });
    },
    toRegister() {
      this.$router.push({
        name: "Register"
      });
    },
    userLogout() {
      this.$store.dispatch("userLogout");
    },
    toggleSearch() {
      const appLogo = document.getElementById("appLogo");
      appLogo.style.display = "none";
      this.showSearchBar = !this.showSearchBar;
      this.showCategory = false;
    },
    hide: function() {
      this.showCategory = false;
    }
  },
  created() {
    this.$store.dispatch("getMemberDetail");
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global_variables.scss";

.navbar {
  .navbarChangeColor {
    background-color: white;
  }
  .app-bar,
  .app-bar--no-auth {
    color: white;
    .button-subscribe {
      @include btn-main-green();
      @media screen and (max-width: 425px) {
        width: 50%;
      }
      @media screen and (max-width: 340px) {
        width: 40%;
        font-size: 10px;
      }
    }
    .button-dropdown-nav {
      font-size: 18px;
      font-weight: 600;
      text-transform: none;
    }
  }
  .app-bar {
    width: 100%;
    padding: 0 5%;
    border-bottom: 2px solid black;
    @media screen and (max-width: 425px) {
      padding: 0;
      margin: 0;
    }
  }
  .app-bar--no-auth {
    width: 100%;
    padding: 0 11%;
    @media screen and (max-width: 425px) {
      padding: 0;
      margin: 0;
    }
  }
  .category-chip--navbar {
    height: 94%;
    position: absolute;
    top: 16px;
    left: 1px;
    z-index: 998;
	background-color: rgba(0,0,0,0.5);
  }
}
.nav-search {
  @media screen and (max-width: 425px) {
    width: 100%;
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
