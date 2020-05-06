<template>
  <v-card class="book-card mx-auto" max-width="250" max-height="300" flat>
    <div class="book-card-color py-7">
      <v-img
        class="book-card-img mx-auto"
        width="120"
        height="120"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ></v-img>
      <v-btn class="book-bookmark-button" icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
    </div>
    <a href="#" class="book-card-title" v-ripple>
      <v-card-title class="text-right">Judul Buku Lorem Ipsum</v-card-title>
      <v-card-subtitle class="text--primary text-right">
        Listen to your favorite artists and albums whenever and wherever,
        online and offline.
      </v-card-subtitle>
    </a>
  </v-card>
</template>

<script>
/* eslint-disable */
export default {
  name: "BookCardComponent"
};
</script>

<style scoped lang="scss">
.book-card {
  .book-card-color {
    height: 180px;
    position: relative;
    border-radius: 8px;
    background-color: #e76464;
    box-shadow: 4px 4px rgb(199, 199, 199);
    .book-bookmark-button {
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
  }
  .book-card-title {
    text-decoration: none;
    color: black;
  }
}
</style>
