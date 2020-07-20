<template>
  <div>
    <v-card class="book-card--small mx-auto" max-width="350" max-height="150">
      <div class="d-flex flex-row justify-space-between align-center">
        <div>
          <v-img class="book-card-img mx-2" width="65" height="90" :src="foto_sampul"></v-img>
        </div>
        <div>
          <div>
            <a @click="gotoBook" class="book-card-link">
              <h2 class="book-card--title font-weight-bold">{{title}}</h2>
              <small>{{penulis}}</small>
              <p>{{deskripsi}}</p>
            </a>
            <template v-if="is_premium == 'true' || is_premium == '1' && !premiumMemberStatus">
              <v-icon class="book-card-icon-lock" style="position:absolute;top:0;right:0;">mdi-lock-outline</v-icon>
            </template>
          </div>
          <div class="d-flex flex-row justify-space-between mt-1">
            <v-btn disabled class="book-card-category" outlined :style="cssVars">{{kategori_buku}}</v-btn>
            <div class="d-flex flex-row justify-space-between">
              <ButtonBookmark
                class="book-bookmark-button"
                :idBuku="parseInt(idBuku)"
                :isCollected="isCollected"
              />
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon depressed>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="addTag(idBuku)">
                    <v-list-item-title>Tambah Tag</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="editTag">
                    <v-list-item-title>Edit Tag</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="setBookDone">
                    <v-list-item-title>Tandai Selesai</v-list-item-title>
                  </v-list-item>
                  <template v-if="!isFavorited">
                    <v-list-item @click="setBookFavorit">
                      <v-list-item-title>Tambah ke Favorit</v-list-item-title>
                    </v-list-item>
                  </template>
                  <template v-if="isFavorited">
                    <v-list-item @click="delBookFavorit">
                      <v-list-item-title>Hapus Favorit</v-list-item-title>
                    </v-list-item>
                  </template>
                  <template v-if="isCollected">
                    <v-list-item @click="setDeleteKoleksi">
                      <v-list-item-title>Hapus Dari Koleksi</v-list-item-title>
                    </v-list-item>
                  </template>
                  <template v-if="isTagged">
                    <v-list-item @click="delTagByBook">
                      <v-list-item-title>Hapus Dari Tag</v-list-item-title>
                    </v-list-item>
                  </template>
                </v-list>
              </v-menu>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import ButtonBookmark from "@/components/ButtonBookmark.vue";
export default {
  name: "BookCardSmall",
  props: {
    idBuku: {
      type: Number
    },
    title: {
      type: String
    },
    foto_sampul: {
      type: String
    },
    deskripsi: {
      type: String
    },
    penulis: {
      type: String
    },
    warna_kategori: {
      type: String
    },
    kategori_buku: {
      type: String
    },
    isFavorited: {
      type: Boolean
    },
    isCollected: {
      type: Boolean
    },
    is_premium: {
      type: String
    },
    isTagged: {
      type: Boolean
    },
    tagName: {
      type: String
    }
  },
  components: {
    ButtonBookmark
  },
  data() {
    return {
      payloadDone: {
        id_buku: this.$props.idBuku,
        id_chapter: ""
      },
      payloadFav: {
        id_buku: this.$props.idBuku
      },
      payloadDelTagByBook: {
        id_buku: this.$props.idBuku,
        tag: this.$props.tagName
      },
      premiumMemberStatus: this.$store.getters.premiumStatus
    };
  },
  methods: {
    gotoBook() {
      const urlName = this.$props.title.toLowerCase();
      this.$router.push({
        name: "BookPage",
        params: {
          bookId: this.$props.idBuku,
          bookName: urlName.replace(/ /g, "-")
        }
      });
    },
    addTag(idBuku) {
      this.$router.push({
        name: "LibraryTagAdd",
        params: { idBuku: idBuku }
      });
    },
    editTag() {
      this.$router.push({
        path: "/library/tag"
      });
    },
    setBookDone() {
      this.$store.dispatch("setBookDone", this.payloadDone);
    },
    setDeleteKoleksi() {
      this.$store.dispatch("setDeleteKoleksi", this.payloadFav);
    },
    setBookFavorit() {
      this.$store.dispatch("setBookFavorit", this.payloadFav);
    },
    delBookFavorit() {
      this.$store.dispatch("delBookFavorit", this.payloadFav);
    },
    delTagByBook() {
      this.$store.dispatch("deleteTagByBook", this.payloadDelTagByBook);
    }
  },
  computed: {
    cssVars() {
      return {
        "--color": this.$props.warna_kategori
      };
    }
  }
};
</script>

<style scoped lang="scss">
.book-card--small {
  h2 {
    font-size: 14px;
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
