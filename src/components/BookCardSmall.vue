<template>
  <div>
    <v-card class="book-card--small mx-auto" max-width="350" max-height="150">
      <div class="d-flex flex-row justify-space-between align-center">
        <div>
          <v-img class="book-card-img mx-auto" width="65" height="90" :src="foto_sampul"></v-img>
        </div>
        <div class>
          <a @click="gotoBook" class="book-card-link">
            <h2>{{title}}</h2>
            <small>{{penulis}}</small>
            <p>{{deskripsi}}</p>
          </a>
          <div class="d-flex flex-row justify-space-between mt-1">
            <v-btn disabled class="book-card-category" outlined :style="cssVars">{{kategori_buku}}</v-btn>
            <div class="d-flex flex-row justify-space-between">
              <ButtonBookmark class="book-bookmark-button" :idBuku="idBuku" />
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
                  <v-list-item @click="() => {}">
                    <v-list-item-title>Edit Tag</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="setBookDone">
                    <v-list-item-title>Tandai Selesai</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="setBookFavorit">
                    <v-list-item-title>Tambah ke Favorit</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="setDeleteKoleksi">
                    <v-list-item-title>Hapus Dari Koleksi</v-list-item-title>
                  </v-list-item>
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
      }
    };
  },
  methods: {
    gotoBook() {
      this.$router.push({
        name: "BookPage",
        params: {
          bookId: this.$props.idBuku,
          bookName: this.$props.title.toLowerCase()
        }
      });
    },
    addTag(idBuku) {
      this.$router.push({
        name: "LibraryTagAdd",
        params: { idBuku: idBuku }
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
    font-size: 16px;
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
