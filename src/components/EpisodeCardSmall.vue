<template>
  <div>
    <v-card class="book-card--small mx-auto" max-width="350" max-height="150">
      <div class="d-flex flex-row">
        <div class="book-card-color" :style="cssVars">
          <v-img class="book-card-img mx-2" width="60" height="80" :src="foto_sampul"></v-img>
        </div>
        <div class="mx-3">
          <div>
            <a @click="toChapter" class="book-card-link">
              <h2 class="book-card--title font-weight-bold">{{episodeTitle}}</h2>
              <small>{{judul_buku}}</small>
            </a>
            <template
              v-if="is_premium_chapter == 'true' || is_premium_chapter == '1' && !premiumMemberStatus"
            >
              <v-icon
                class="book-card-icon-lock"
                style="position:absolute;top:0;right:0;"
              >mdi-lock-outline</v-icon>
            </template>
          </div>
          <div>
            <v-btn class="mt-4" icon @click="toChapter" small ripple><v-icon large>mdi-play-circle-outline</v-icon></v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </div>
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
    warna_kategori: {
      type: String
    },
    warna_border: {
      type: String
	},
	is_new: {
		type: Boolean
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
        "--color": this.$props.warna_kategori,
        "--colorBorder": this.$props.warna_border
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

<style scoped lang="scss">
.book-card--small {
  .book-card-color {
    position: relative;
    z-index: 0;
    padding: 5px 5px;
    border: 2px solid var(--color);
    border-bottom: 6px solid var(--color);
    border-radius: 8px;
  }
  h2 {
    font-size: 16px;
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  small {
    font-size: 12px;
    color: rgb(168, 168, 168);
  }
  p {
    margin: 0;
    font-size: 14px;
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .book-card-category {
    font-size: 8px;
    color: black !important;
    height: 25px;
    margin: 6px 0;
    border: 2px solid var(--color);
  }
}
.book-card-link {
  text-decoration: none;
  color: black;
}
</style>
