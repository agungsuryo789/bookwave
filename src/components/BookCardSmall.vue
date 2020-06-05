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
            <v-btn class="book-card-category" outlined :style="cssVars">{{kategori_buku}}</v-btn>
            <div>
              <v-btn class="book-bookmark-button" icon>
                <v-icon>mdi-bookmark-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BookCardSmall",
  props: [
    "idBuku",
    "title",
    "deskripsi",
    "foto_sampul",
    "penulis",
    "warna_kategori",
    "kategori_buku"
  ],
  methods: {
    gotoBook() {
      this.$router.push({
        name: "BookPage",
        params: {
          bookId: this.$props.idBuku,
          bookName: this.$props.title.toLowerCase()
        }
      });
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
