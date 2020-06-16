<template>
  <div class="footer-body">
    <v-container>
      <v-row>
        <v-col
          class="justify-center align-center text-center footer--screenshot"
          lg="3"
          md="12"
          sm="12"
          style="margin: 0 auto;"
        >
          <img
            alt="AHA Footer Library"
            src="@/assets/image/screenshot-footer.svg"
            width="200"
            height="150"
          />
        </v-col>
        <v-col
          class="justify-center align-center text-center"
          lg="6"
          md="12"
          sm="12"
          style="margin: 0 auto;"
        >
          <v-row>
            <v-col cols="12" lg="4" md="4" sm="12">
              <table class="table-footer-links text-center text-lg-left text-xl-left">
                <tr>
                  <th>Top Kategori</th>
                </tr>
                <tr>
                  <td>Makanan</td>
                </tr>
                <tr>
                  <td>Politik</td>
                </tr>
                <tr>
                  <td>Komunikasi</td>
                </tr>
              </table>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="12">
              <table class="table-footer-links text-center text-lg-left text-xl-left">
                <tr>
                  <th>Useful Links</th>
                </tr>
                <tr>
                  <td>Pricing</td>
                </tr>
                <tr>
                  <td>Pricing for Teams</td>
                </tr>
                <tr>
                  <td>Magazine</td>
                </tr>
                <tr>
                  <td>Contact & Help</td>
                </tr>
              </table>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="12">
              <table class="table-footer-links text-center text-lg-left text-xl-left">
                <tr>
                  <th>Company</th>
                </tr>
                <tr>
                  <td>
                    <router-link to="/about">About</router-link>
                  </td>
                </tr>
                <tr>
                  <td>Careers</td>
                </tr>
                <tr>
                  <td>
                    <router-link to="/partnership">Partners</router-link>
                  </td>
                </tr>
              </table>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          class="justify-center align-center text-center"
          lg="2"
          md="12"
          sm="12"
          cols="12"
          style="margin: 0 auto;"
        >
          <img
            class="my-2"
            src="@/assets/image/playstore-icon.svg"
            alt="AHA Google Playstore"
            width="100"
          />
          <img class="my-2" src="@/assets/image/iosstore-icon.svg" alt="AHA IOS Store" width="100" />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center" lg="8" md="8" sm="12" cols="12" style="margin: 0 auto;">
          <ul class="footer-list-sitelink mt-2">
            <li>AHA 2020 |</li>
            <li>
              <router-link to="/sitemap">Sitemap</router-link>|
            </li>
            <li>
              <router-link to="/disclaimer">Disclaimer</router-link>|
            </li>
            <li>
              <router-link to="/usersprivacy">User Privacy</router-link>|
            </li>
            <li>
              <router-link to="/terms">Terms</router-link>|
            </li>
            <li>
              <router-link to="/privacy">Applicant Privacy</router-link>
            </li>
          </ul>
        </v-col>
        <v-col class="text-center" lg="4" md="4" sm="12" cols="12" style="margin: 0 auto;">
          <v-btn icon>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "FooterSection"
};
</script>

<style lang="scss" scoped>
.footer-body {
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
    li {
      display: inline;
      padding: 4px 6px;
    }
  }
  .footer--screenshot {
    @media screen and (max-width: 900px) {
      display: none;
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
}
</style>
