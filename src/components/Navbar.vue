<template>
<nav class="navbar">
    <v-container>
        <v-row>
            <v-col v-if="userState == false">
                <v-app-bar flat fixed class="app-bar">
                    <!-- <v-toolbar-title>AHA</v-toolbar-title> -->
                    <v-img alt="Vuetify Logo" class="shrink ml-5 mr-2" contain src="../assets/image/Union.png" transition="scale-transition" width="100" />
                    <v-spacer></v-spacer>
                    <v-btn rounded color="#39DF8C" depressed>Start Trial</v-btn>
                </v-app-bar>
            </v-col>
            <v-col v-if="userState == true">
                <v-app-bar flat fixed color="white" class="app-bar">
                    <!-- <v-toolbar-title>AHA</v-toolbar-title> -->
                    <v-img alt="Logo" class="shrink ml-5 mr-2" contain src="../assets/image/aha.png" transition="scale-transition" width="100" />
                    <v-spacer></v-spacer>
                    <v-btn rounded depressed>Temukan</v-btn>
                    <v-btn rounded depressed>Library</v-btn>
                    <v-btn rounded depressed>Promo</v-btn>
                    <v-btn rounded depressed>Laporan</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn rounded depressed color="#39DF8C">Upgrade Premium</v-btn>
                    <v-btn rounded depressed>You</v-btn>
                </v-app-bar>
            </v-col>
        </v-row>
    </v-container>
</nav>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Navbar',
    data: () => ({
        userState: false
    })
}
</script>

<style lang="scss" scoped>
.navbar {
    .app-bar {
        color: white;
        background-color: #D65F5F;
        button {
            color: white;
            text-transform: none;
        }
    }
}
</style>
