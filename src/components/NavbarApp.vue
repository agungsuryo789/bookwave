<template>
  <nav class="navbar">
    <v-container>
      <v-row>
        <v-col>
          <v-app-bar absolute color="white" class="app-bar">
            <!-- <v-toolbar-title>AHA</v-toolbar-title> -->
            <v-img
              alt="Logo"
              class="shrink ml-5 mr-2"
              contain
              src="../assets/image/aha.png"
              transition="scale-transition"
              width="100"
            />
            <v-spacer></v-spacer>
            <v-btn rounded depressed>Temukan</v-btn>
            <v-btn rounded depressed>Library</v-btn>
            <v-btn rounded depressed>Promo</v-btn>
            <v-btn rounded depressed>Laporan</v-btn>
            <v-spacer></v-spacer>
            <v-btn rounded depressed color="#39DF8C" >Upgrade Premium</v-btn>
            <v-btn rounded depressed>You</v-btn>
          </v-app-bar>
        </v-col>
      </v-row>
    </v-container>
  </nav>
</template>

<script>
export default {
  name: 'NavbarApp'
}
</script>
