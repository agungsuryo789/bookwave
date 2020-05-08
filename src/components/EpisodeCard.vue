<template>
  <v-card class="episode-card mx-auto" max-width="350" max-height="200" color="#ffc400" v-ripple>
    <div class="d-flex flex-row justify-space-between align-center">
      <div class="mx-3">
        <p>Baru</p>
        <p>Judul Topic 1</p>
        <small>Tema Episode</small>
      </div>
      <div class="mx-3 episode-card-img-color">
        <div>
          <v-img
            class="book-card-img mx-auto"
            width="40"
            height="40"
            src="https://www.tibs.org.tw/images/default.jpg"
          ></v-img>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
/* eslint-disable */
export default {
  name: "EpisodeCard"
};
</script>

<style lang="scss">
.episode-card {
  .episode-card-img-color {
    border-radius: 8px;
    padding: 9px;
    background-color: #ffc400;
    box-shadow: 2px 4px 4px 2px #b68c04;
  }
}
</style>
