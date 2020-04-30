<template>
  <nav class="navbar">
    <v-container>
      <v-row>
        <v-col>
          <v-app-bar flat fixed class="app-bar">
            <v-toolbar-title>AHA</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn rounded color="#39DF8C" depressed>Start Trial</v-btn>
          </v-app-bar>
        </v-col>
      </v-row>
    </v-container>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar{
	.app-bar{
		color: white;
		background-color: rgb(214, 95, 95) !important;
		button{
			color: white;
			text-transform: none;
		}
	}
}
</style>
