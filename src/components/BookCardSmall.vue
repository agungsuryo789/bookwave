<template>
  <div>
    <v-card class="book-card--small mx-auto" max-height="150">
      <div class="d-flex flex-row align-center">
        <div class="book-card-color" :style="cssVars">
          <div class="top-border"></div>
          <v-img class="book-card-img mx-2" width="76" height="90" :src="foto_sampul"></v-img>
          <div class="bottom-border"></div>
        </div>
        <div class="book-list-decs">
          <div>
            <a @click="gotoBook" class="book-card-link">
              <h2 class="book-card--title font-weight-bold">{{title}}</h2>
              <small class="author">{{penulis}}</small>
              <p>{{deskripsi}}</p>
            </a>
            <template v-if="is_premium == 'true' || is_premium == '1' && !premiumMemberStatus">
              <v-icon
                class="book-card-icon-lock"
                style="position:absolute;top:0;right:0;"
              >mdi-lock-outline</v-icon>
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
                <v-list class="dropdown-list">
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
	warna_border: {
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
      type: Boolean
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
		"--color": this.$props.warna_kategori,
		"--colorBorder": this.$props.warna_border
      };
    }
  }
};
</script>

<style scoped lang="scss">
.book-card--small {
  box-shadow: none !important;
  padding-bottom: 20px;
  border-bottom: 1px #dddddd solid;
  border-radius: 0 !important;
  .book-card-color {
    position: relative;
    z-index: 0;
    background-color: var(--color);
    padding: 19px 20px;
    .top-border {
      position: absolute;
      top: 8%;
      left: 14%;
      width: 20px;
      height: 20px;
      border-top-left-radius: 15px;
      background-color: var(--colorBorder);
    }
    .bottom-border {
      position: absolute;
      bottom: 6%;
      right: 13.5%;
      width: 20px;
      height: 20px;
      z-index: -1;
      border-bottom-right-radius: 15px;
      background-color: var(--colorBorder);
    }
  }
  h2 {
    font-size: 16px;
    width: 91%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #424242;
  }
  small {
    font-size: 12px;
    color: rgb(168, 168, 168);
  }
  p {
    margin: 0;
    margin-top: 11px;
    font-size: 14px;
    width: 91%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .author {
    width: 91%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
  .book-card-category {
    font-size: 8px;
    color: #424242 !important;
    min-height: 25px;
    height: auto;
    margin: 6px 0;
    border: 2px solid var(--color);
    max-width: 135px !important;
    display: unset ;
    white-space: normal;
  }
}
.book-card-link {
  text-decoration: none;
  color: #424242;
}
.book-list-decs {
    width: calc(100% - 132px);
    padding-left: 28px;
}
.v-menu__content.theme--light.menuable__content__active{
  box-shadow: none !important;
}
.dropdown-list{
  border: 1px #dddddd solid;
  border-bottom: 4px #dddddd solid;
  border-radius: 8px;
  padding: 0;
  .v-list-item{
    border-bottom: 1px #dddddd solid;
  }
}
</style>
