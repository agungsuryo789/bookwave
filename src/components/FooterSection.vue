<template>
  <div class="footer-body">
    <v-card class="mt-12" height="250">
      <div class="d-flex flex-lg-row flex-md-column justify-center align-center footer-links">
        <div>
          <img
            alt="AHA Footer Library"
            src="@/assets/image/screenshot-footer.svg"
            width="200"
            height="150"
          />
        </div>
        <div>
          <table class="table-footer-links text-left">
            <tr>
              <th>Top Kategori</th>
              <th>Useful Links</th>
              <th>Company</th>
            </tr>
            <tr>
              <td>
                <a href>Makanan</a>
              </td>
              <td>
                <a href>Pricing</a>
              </td>
              <td>
                 <router-link to="/about">About</router-link>
              </td>
            </tr>
            <tr>
              <td>
                <a href>Politik</a>
              </td>
              <td>
                <a href>Pricing for Teams</a>
              </td>
              <td>
                <a href>Carreers</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href>Komunikasi</a>
              </td>
              <td>
                <a href>Magazine</a>
              </td>
              <td>
                 <router-link to="/partnership">Partners</router-link>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <a href>Contact & Help</a>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="d-flex flex-column">
          <img
            class="my-2"
            src="@/assets/image/playstore-icon.svg"
            alt="AHA Google Playstore"
            width="100"
          />
          <img class="my-2" src="@/assets/image/iosstore-icon.svg" alt="AHA IOS Store" width="100" />
        </div>
      </div>
      <v-footer absolute padless class="font-weight-medium">
        <v-col class="text-center d-flex flex-row align-center justify-center px-12" cols="12">
          <ul class="footer-list-sitelink mt-2">
            <li>AHA 2020 |</li>
            <li>
              <router-link to="/sitemap">Sitemap</router-link> |
            </li>
            <li>
               <router-link to="/disclaimer">Disclaimer</router-link> |
            </li>
            <li>
               <router-link to="/usersprivacy">User Privacy</router-link> |
            </li>
            <li>
               <router-link to="/terms">Terms</router-link> |
            </li>
            <li>
               <router-link to="/privacy">Applicant Privacy</router-link>
            </li>
          </ul>
          <v-spacer></v-spacer>
          <div class="d-flex flex-row">
            <v-btn icon>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-footer>
    </v-card>
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
}
</style>
