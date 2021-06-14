<template>
  <div class="footer-body mt-12">
    <v-container fluid class="footer-container px-0 mx-0">
      <v-container class="main-container">
        <v-row class="mx-auto text-center align-items-center">
          <v-col
            class="justify-center footer--screenshot"
            lg="3"
            md="12"
            sm="12"
          >
            <img
              alt="AHA Footer Library"
              src="@/assets/image/screenshot-footer.svg"
              class="img-fluid"
            />
          </v-col>
          <v-col class="text-center" lg="9" md="12" sm="12">
            <v-row>
              <v-col cols="12" lg="3" md="3" sm="3">
                <table
                  v-if="topKategoriNoAuth.length > 0"
                  class="table-footer-links text-center text-lg-left text-xl-left"
                >
                  <tr>
                    <th>Top Kategori</th>
                  </tr>
                  <tr
                    v-for="item in topKategoriNoAuth.slice(0, 3)"
                    :key="item.id_daftar_kategori"
                  >
                    <td>
                      <router-link
                        :to="{
                          name: 'CategoryPage',
                          params: { idKategori: item.id_daftar_kategori },
                        }"
                        >{{ item.nama_kategori }}</router-link
                      >
                    </td>
                  </tr>
                </table>
              </v-col>
              <v-col cols="12" lg="3" md="3" sm="3">
                <table
                  class="table-footer-links text-center text-lg-left text-xl-left"
                >
                  <tr>
                    <th>Link AHA</th>
                  </tr>
                  <tr>
                    <td>
                      <router-link to="/promo">Promosi</router-link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <router-link to="/blog">Blog</router-link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <router-link to="/contact">Kontak & Bantuan</router-link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <router-link to="/troubleshoot">Pertanyaan</router-link>
                    </td>
                  </tr>
                </table>
              </v-col>
              <v-col cols="12" lg="3" md="3" sm="3">
                <table
                  class="table-footer-links text-center text-lg-left text-xl-left"
                >
                  <tr>
                    <th>AHA Baca </th>
                  </tr>
                  <tr>
                    <td>
                      <router-link to="/about">Tentang</router-link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <router-link to="/career">Karir</router-link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <router-link to="/partnership">Rekan</router-link>
                    </td>
                  </tr>
                </table>
              </v-col>
              <v-col
                class="footer-icon-app justify-center align-center text-center"
                lg="3"
                md="3"
                sm="3"
                cols="12"
              >
                <a href="https://play.google.com/store/apps/details?id=com.aha.ahaandroid" target="_blank">
                  <img
                    class="my-2"
                    src="@/assets/image/playstore-icon.svg"
                    alt="AHA Google Playstore"
                  />
                </a>
                <a href="https://apps.apple.com/id/app/aha-audiobook/id1524840117?l=id" target="_blank">
                  <img
                    class="my-2"
                    src="@/assets/image/iosstore-icon.svg"
                    alt="AHA IOS Store"
                  />
                </a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <v-container class="footer-foot-row" fluid>
      <v-container class="main-container">
        <v-row class="align-items-center">
          <v-col
            class="text-center text-lg-left py-0"
            lg="8"
            md="8"
            sm="12"
            cols="12"
            style="margin: 0 auto"
          >
            <ul class="footer-list-sitelink">
              <li>© AHA 2020 |</li>
              <li>
                <router-link
                  to="/sitemap"
                  style="text-decoration: none; color: white"
                  >Sitemap</router-link
                >
                <span>|</span>
              </li>
              <li>
                <router-link
                  to="/disclaimer"
                  style="text-decoration: none; color: white"
                  >Disclaimer</router-link
                >
                <span>|</span>
              </li>
              <li>
                <router-link
                  to="/usersprivacy"
                  style="text-decoration: none; color: white"
                  >Privasi Pengguna</router-link
                >
                <span>|</span>
              </li>
              <li>
                <router-link
                  to="/terms"
                  style="text-decoration: none; color: white"
                  >Ketentuan</router-link
                >
                <span>|</span>
              </li>
              <li>
                <router-link
                  to="/privacy"
                  style="text-decoration: none; color: white"
                  >Kebijakan Aplikasi</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col
            class="text-center text-lg-right py-0"
            lg="4"
            md="4"
            sm="12"
            cols="12"
            style="margin: 0 auto"
          >
            <a href="https://www.facebook.com/Ahabaca-105791011647934" target="_blank">
              <v-btn icon color="white">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </a>
            <a href="https://www.instagram.com/ahaaudiobook/" target="_blank">
              <v-btn icon color="white">
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </a>
            <a href="https://twitter.com/ahabaca" target="_blank">
              <v-btn icon color="white">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
/* eslint-disable */
export default {
  name: "FooterSection",
  mounted() {
    this.$store.dispatch("getTopKategoriNoAuth");
  },
  computed: mapState({
    topKategoriNoAuth: (state) => state.topKategoriNoAuth,
  }),
};
</script>

<style lang="scss" scoped>
.footer-body {
  .footer-container {
    padding-bottom: 0;
    background-color: #f7f7f7;
    border-top: 4px solid #f0f0f0;
  }
  .footer-links {
    div {
      margin: 0 30px;
    }
  }
  .table-footer-links {
    margin: 5px 0;
    width: 100%;
    td,
    th {
      padding: 2px 15px;
    }
    a {
      text-decoration: none;
      color: black;
    }
  }
  .footer-list-sitelink {
    list-style: none;
    padding-left: 0 !important;
    li {
      display: inline;
      padding: 4px 6px;
    }
  }
  .footer--screenshot {
    @media screen and (max-width: 1024px) {
      display: none;
    }
    @media screen and (max-width: 900px) {
      display: none;
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
}
.footer-icon-app {
  img {
    width: 160px;
  }
}
.footer-foot-row {
  color: white;
  font-size: 14px;
  background-color: black;
  li {
    color: white;
    text-decoration: none;
  }
  span {
    margin-left: 10px;
  }
}
</style>
