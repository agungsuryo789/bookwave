<template>
  <div class="footer-body">
    <v-container fluid class="footer-container px-0 mx-0">
      <v-row class="mx-auto" style="max-width:1000px;">
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
            <v-col cols="12" lg="4" md="4" sm="4">
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
            <v-col cols="12" lg="4" md="4" sm="4">
              <table class="table-footer-links text-center text-lg-left text-xl-left">
                <tr>
                  <th>Useful Links</th>
                </tr>
                <tr>
                  <td>
                    <router-link to="/promo">Promotion</router-link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <router-link to="/blog">Blog</router-link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <router-link to="/contact">Contact & Help</router-link>
                  </td>
                </tr>
              </table>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="4">
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
					<td>
						<router-link to="/career">Careers</router-link>
					</td>
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
          class="footer-icon-app justify-center align-center text-center"
          lg="2"
          md="12"
          sm="12"
          cols="12"
          style="margin: 20px auto;"
        >
          <img class="my-2" src="@/assets/image/playstore-icon.svg" alt="AHA Google Playstore" />
          <img class="my-2" src="@/assets/image/iosstore-icon.svg" alt="AHA IOS Store" />
        </v-col>
      </v-row>
      <v-row class="footer-foot-row">
        <v-col class="text-center text-lg-left" lg="8" md="8" sm="12" cols="12" style="margin: 0 auto;">
          <ul class="footer-list-sitelink mt-2">
            <li>© AHA 2020 |</li>
            <li>
              <router-link to="/sitemap" style="text-decoration:none;color:white;">Sitemap</router-link>
              <span>|</span>
            </li>
            <li>
              <router-link to="/disclaimer" style="text-decoration:none;color:white;">Disclaimer</router-link>
              <span>|</span>
            </li>
            <li>
              <router-link to="/usersprivacy" style="text-decoration:none;color:white;">User Privacy</router-link>
              <span>|</span>
            </li>
            <li>
              <router-link to="/terms" style="text-decoration:none;color:white;">Terms</router-link>
              <span>|</span>
            </li>
            <li>
              <router-link to="/privacy" style="text-decoration:none;color:white;">Applicant Privacy</router-link>
            </li>
          </ul>
        </v-col>
        <v-col class="text-center text-lg-right" lg="4" md="4" sm="12" cols="12" style="margin: 0 auto;">
          <v-btn icon color="white">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon color="white">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon color="white">
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
  .footer-container {
    box-shadow: 0 -2px 3px #c0c0c0;
	padding-bottom: 0;
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
  padding: auto 14%;
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
