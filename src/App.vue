<template>
  <div id="app">
    <v-app>
      <router-view :key="$route.fullPath"></router-view>
    </v-app>
  </div>
</template>
<script>
const ROOT_PATH = 'https://ahabaca.com'
export default {
  data() {
    return {
      logo: ROOT_PATH + require('./assets/image/logo-bg.jpg')
    }
  },
  metaInfo() {
    return {
      meta: [
          { name: 'twitter:card', content: 'Ahabaca' },
          { name: 'twitter:title', content: 'Ahabaca: lets you read hundred of books collection' },
          { name: 'twitter:description', content: 'Ahabaca lets you read hundred of books collection. Start your free trial today and find out how.' },
          { name: 'twitter:image', content: this.logo },
          { property: 'og:title', content: 'Ahabaca: lets you read hundred of books collection' },
          { property: 'og:site_name', content: 'Ahabaca' },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: this.logo },
          { property: 'og:description', content: 'Ahabaca lets you read hundred of books collection. Start your free trial today and find out how.' }
      ]
    }
  }
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");

#app {
  font-family: "Nunito Sans", sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
</style>
