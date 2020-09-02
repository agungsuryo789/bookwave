<template>
  <v-card
    class="episode-card mx-auto"
    max-width="350"
    max-height="250px"
    flat
    ripple
    :style="cssVars"
    :to="{ name: 'BookChapter', params: {bookId: idBuku, chapterId: idChapter}}"
  >
    <div class="d-flex flex-row justify-space-between align-center div--episode-card">
      <div class="mx-1">
		<p style="font-size:12px;">Baru</p>
        <p class="my-4" style="font-size:15px;">{{ episodeTitle }}</p>
      </div>
      <div class="mx-1 episode-card-img-color">
        <div>
          <v-img class="book-card-img mx-auto" width="40" height="40" :src="foto_sampul"></v-img>
        </div>
      </div>
    </div>
  </v-card>
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

<style scoped lang="scss">
.div--episode-card {
  border: 4px solid var(--color);
  border-bottom: 8px solid var(--color);
  border-radius: 6px;
}
.episode-card {
  .episode-card-img-color {
    border-radius: 8px;
    padding: 9px;
    background-color: var(--color);
  }
}
</style>
