<template>
<nav class="navbar">
    <v-container>
        <v-row>
            <v-col v-if="userState == false">
                <v-app-bar flat fixed class="app-bar" id="appBar" color="#D65F5F" v-on:scroll="updateScroll">
                    <!-- <v-toolbar-title>AHA</v-toolbar-title> -->
                    <v-img alt="Vuetify Logo" class="shrink ml-5 mr-2" contain src="../assets/image/aha-white-icon.svg" transition="scale-transition" width="100" />
                    <v-spacer></v-spacer>
                    <v-btn rounded color="#39DF8C" depressed>Start Trial</v-btn>
                </v-app-bar>
            </v-col>
            <v-col v-if="userState == true">
                <v-app-bar flat fixed class="app-bar" id="appBar" color="#D65F5F" v-on:scroll="updateScroll">
                    <!-- <v-toolbar-title>AHA</v-toolbar-title> -->
                    <v-img alt="Vuetify Logo" class="shrink ml-5 mr-2" contain src="../assets/image/aha-white-icon.svg" transition="scale-transition" width="100" />
                    <v-spacer></v-spacer>
                    <v-btn rounded depressed>Temukan</v-btn>
                    <v-btn rounded depressed>Library</v-btn>
                    <v-btn rounded depressed>Promo</v-btn>
                    <v-btn rounded depressed>Laporan</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn rounded depressed color="#39DF8C">Upgrade Premium</v-btn>
                    <v-menu left bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                You
                            </v-btn>
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
    name: 'NavbarSection',
    data: () => ({
        userState: false,
        scrollPosition: null
    }),
    created() {
        window.addEventListener('scroll', this.updateScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.updateScroll);
    },
    methods: {
        updateScroll(event) {
            this.scrollPosition = window.scrollY
            const navbarElement = document.querySelector('.app-bar');
            if (window.scrollY || window.pageYOffset > 500) {
                navbarElement.style.backgroundColor = 'white';
            } else if (window.scrollY < 100) {
                navbarElement.style.backgroundColor = '#D65F5F';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #D65F5F;

    .navbarChangeColor {
        background-color: #D65F5F;
    }

    .app-bar {
        color: white;

        button {
            color: white;
            text-transform: none;
        }
    }
}
</style>
