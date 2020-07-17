<template>
  <v-card
    class="episode-card mx-auto"
    max-width="350"
    max-height="250px"
    flat
    ripple
    @click="toChapter"
    :style="cssVars"
  >
    <div class="d-flex flex-row justify-space-between align-center div--episode-card">
      <div class="mx-1">
        <p class="py-0" style="font-size:12px;color:red;">
          <span v-if="is_premium_chapter && !premiumMemberStatus">
            <v-icon>mdi-lock-outline</v-icon>
          </span>
          Baru
        </p>
        <p class="my-1 py-0 episode-title font-weight-bold" style="font-size:15px;">{{ judul_buku }}</p>
        <p class="my-0 py-0" style="font-size:15px;">{{ episodeTitle }}</p>
      </div>
      <div class="mx-1 episode-card-img-color">
        <div>
          <v-img class="book-card-img mx-auto" width="60" height="60" :src="foto_sampul"></v-img>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "EpisodeCard",
  props: {
    idBuku: {
      type: Number
    },
    idChapter: {
      type: Number
    },
    episodeTitle: {
      type: String
    },
    foto_sampul: {
      type: String
    },
    judul_buku: {
      type: String
    },
    is_premium_chapter: {
      type: Boolean
    },
    premium_member: {
      type: Boolean
    },
    warna_episode: {
      type: String
    }
  },
  data() {
    return {
      premiumMemberStatus: this.$store.getters.premiumStatus
    };
  },
  computed: {
    cssVars() {
      return {
        "--color": this.warna_episode
      };
    }
  },
  methods: {
    toChapter() {
      if (!this.is_premium_chapter) {
        this.$router.push({
          name: "BookChapter",
          params: { bookId: this.idBuku, chapterId: this.idChapter }
        });
      } else if (this.is_premium_chapter && this.$store.getters.premiumStatus) {
        this.$router.push({
          name: "BookChapter",
          params: { bookId: this.idBuku, chapterId: this.idChapter }
        });
      } else if (
        this.is_premium_chapter &&
        !this.$store.getters.premiumStatus
      ) {
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
.div--episode-card {
  border: 4px solid #D7D7D7;
  border-bottom: 8px solid #D7D7D7;
  border-radius: 6px;
}
.episode-card-link {
  text-decoration: none;
  .div--episode-card {
    color: black;
  }
}
.episode-card {
  .episode-card-img-color {
    padding: 9px;
  }
}
.episode-title {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
