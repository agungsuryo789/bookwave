<template>
  <div>
    <router-link tag="p" :to="{ name: 'BookChapter', params: {bookId: idBuku, chapterId: idChapter}}">
      <v-card
        class="episode-card mx-auto"
        max-width="350"
        max-height="250px"
        ripple
        :style="cssVars"
      >
        <div class="d-flex flex-row justify-space-between align-center">
          <div class="mx-3">
            <p>Baru</p>
            <p>{{ episodeTitle }}</p>
            <small>Tema Episode</small>
          </div>
          <div class="mx-3 episode-card-img-color">
            <div>
              <v-img class="book-card-img mx-auto" width="40" height="40" :src="foto_sampul"></v-img>
            </div>
          </div>
        </div>
      </v-card>
    </router-link>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "EpisodeCard",
  props: [
    "idBuku",
    "idChapter",
    "episodeTitle",
    "foto_sampul",
    "warna_episode"
  ],
  computed: {
    cssVars() {
      return {
        "--color": this.warna_episode
      };
    }
  }
};
</script>

<style lang="scss">
.episode-card {
  background-color: red;
  .episode-card-img-color {
    border-radius: 8px;
    padding: 9px;
    background-color: var(--color);
  }
}
</style>
