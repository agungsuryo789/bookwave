<template>
  <v-card class="book-card--small mx-auto"  max-width="350" max-height="180">
    <div class="d-flex flex-row justify-space-between align-center">
      <div class="mx-5">
        <v-img
          class="book-card-img mx-auto"
          width="60"
          height="80"
          src="https://www.tibs.org.tw/images/default.jpg"
        ></v-img>
      </div>
      <div class="mx-1">
        <p>Judul Buku</p>
        <small>Nama Penulis</small>
        <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small>
        <div class="d-flex flex-row">
          <v-btn outlined color="indigo">Category</v-btn>
          <v-spacer></v-spacer>
          <v-btn class="book-bookmark-button" icon>
            <v-icon>mdi-bookmark-outline</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "BookCardSmall"
};
</script>

<style>
</style>
