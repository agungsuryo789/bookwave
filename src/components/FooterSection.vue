<template>
<div class="Footer-aha">
    <v-footer dark padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
            <v-card-text class="white--text pt-0">
                <div class="d-flex flex-row justify-center footer-body">
                    <div>
                        <img src="" alt="app screenshot">
                    </div>
                    <div>
                        <ul>
                            <li>Top Kategory</li>
                            <li>Makanan</li>
                            <li>Politik</li>
                            <li>Komunikasi</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Useful Links</li>
                            <li>Pricing</li>
                            <li>Pricing for Teams</li>
                            <li>Magazine</li>
                            <li>Contact & Help</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Company</li>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                    <div class="d-flex flex-column">
                        <img src="" alt="AHA android">
                        <img src="" alt="AHA IOS">
                    </div>
                </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="white--text">
                <ul class="footer-foot-link text-center">
                    <li>AHA {{ new Date().getFullYear() }}</li>
                    <li><a href="">Sitemap</a></li>
                    <li><a href="">Disclaimer</a></li>
                    <li><a href="">User Privacy</a></li>
                    <li><a href="">Terms</a></li>
                    <li><a href="">Applicant Privacy</a></li>
                </ul>
                <v-divider></v-divider>
                <img src="" alt="facebook">
                <img src="" alt="instagram">
                <img src="" alt="twitter">
            </v-card-text>
        </v-card>
    </v-footer>
</div>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style lang="scss" scoped>
.Footer-aha{
    .footer-body{
        width: 100%;
    }
    .footer-foot-link{
        li{
            list-style: none;
            float: left;
            margin:0 5px;
            &::after{
                content: ' |';
            }
        }
    }
}
</style>
