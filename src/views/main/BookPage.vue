<template>
  <div class="book-page">
    <NavbarSection />
    <template v-if="!loadSkeleton">
      <v-container
        class="my-1 justify-center align-center"
        v-for="book in bookDetail.data"
        :key="book.id_buku"
      >
        <v-row style="max-width:850px;margin:0 auto;">
          <v-col lg="6" md="6" sm="12" cols="12">
            <v-card
              class="card--book-image"
              max-width="250"
              :style="{backgroundColor: book.warna_sub}"
            >
              <div class="d-flex flex-column justify-end py-10">
                <div class="top-border" :style="{backgroundColor: book.warna_utama}"></div>
                <v-img
                  class="book-card-img mx-auto"
                  width="150"
                  :src="book.foto_sampul"
                  style="z-index:2;"
                ></v-img>
                <div class="bottom-border" :style="{backgroundColor: book.warna_utama}"></div>
                <ButtonBookmark
                  :idBuku="parseInt(book.id_buku)"
                  :isCollected="book.is_collected"
                  style="position:absolute;right:0;bottom:0;"
                />
              </div>
            </v-card>
          </v-col>
          <v-col class="px-10 px-lg-0 my-0 py-0" lg="6" md="6" sm="12" cols="12">
            <v-row>
              <v-col class="card--book-detail pb-0 mb-0" lg="12" md="12" sm="12" cols="12">
                <h1 class="my-3 book-title">{{ book.judul }}</h1>
                <p class="my-1 book-sub-title">{{ book.sub_judul }}</p>
                <p
                  class="book-author"
                  style="font-size:15px;font-weight:600;color:gray;"
                >{{ book.penulis }}</p>
              </v-col>
              <v-col class="card--book-detail py-0 my-0 mt-lg-8" lg="12" md="12" sm="12" cols="12">
                <div class="d-flex flex-column flex-lg-row justify-space-between my-lg-12">
                  <template v-if="book.data_chapter.length < 1">
                    <div class="d-flex flex-row justify-space-between">
                      <v-btn
                        rounded
                        depressed
                        color="#49E295"
                        :to="{ name: 'MembershipPage'}"
                        style="font-size:12px;text-transform:none;color:white;"
                      >Chapter/Episode tidak ditemukan</v-btn>
                    </div>
                  </template>
                  <template v-else-if="book.data_chapter.length > 0 && book.is_premium == 0">
                    <div class="d-flex flex-row justify-space-between">
                      <v-btn
                        :to="{ name: 'BookChapter', params: {bookId: book.id_buku, chapterId: book.data_chapter[0].id_chapter}}"
                        depressed
                        rounded
                        color="#49E295"
                        style="font-size:12px;text-transform:none;color:white;"
                      >Mulai Baca atau Dengarkan Audio</v-btn>
                    </div>
                  </template>
                  <template
                    v-if="book.data_chapter.length > 0 && book.is_premium == 1 && premiumMemberStatus"
                  >
                    <div class="d-flex flex-row justify-space-between">
                      <v-btn
                        :to="{ name: 'BookChapter', params: {bookId: book.id_buku, chapterId: book.data_chapter[0].id_chapter}}"
                        depressed
                        rounded
                        color="#49E295"
                        style="font-size:12px;text-transform:none;color:white;"
                      >Mulai Baca atau Dengarkan Audio</v-btn>
                    </div>
                  </template>
                  <template
                    v-else-if="book.data_chapter.length > 0 && book.is_premium == 1 && !premiumMemberStatus"
                  >
                    <div class="d-flex flex-row justify-space-between">
                      <v-btn
                        rounded
                        depressed
                        color="#49E295"
                        :to="{ name: 'MembershipPage'}"
                        style="font-size:12px;text-transform:none;color:white;"
                      >Upgrade now to read.</v-btn>
                    </div>
                  </template>
                  <ul class="list-book-detail my-3 my-lg-0 mx-0 px-0" style="font-size:12px;">
                    <li>
                      <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
                      {{ book.durasi }} membaca
                    </li>
                    <li>
                      <v-icon class="mr-2" small>mdi-headphones</v-icon>Audio Available
                    </li>
                  </ul>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row style="max-width:850px;margin:0 auto;">
          <v-col>
            <BookpageTabs
              :sinopsis="book.deskripsi"
              :tujuan="book.tujuan"
              :author="book.tentang_penulis"
            />
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template v-else>
      <v-container>
        <v-row style="max-width:850px;margin:0 auto;">
          <v-col lg="6" md="6" sm="12" cols="12">
            <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
          </v-col>
          <v-col lg="6" md="6" sm="12" cols="12">
            <v-skeleton-loader class="mx-auto" max-width="600" type="list-item-three-line"></v-skeleton-loader>
            <v-skeleton-loader class="mx-auto" max-width="600" type="list-item-three-line"></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row style="max-width:850px;margin:0 auto;">
          <v-col>
            <v-skeleton-loader class="mx-auto" type="list-item-three-line"></v-skeleton-loader>
            <v-skeleton-loader class="mx-auto" type="list-item-three-line"></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <FooterSection />
  </div>
</template>

<script>
import BookpageTabs from "@/components/bookpage/BookpageTabs.vue";
import NavbarSection from "@/components/NavbarSection.vue";
import ButtonBookmark from "@/components/ButtonBookmark.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  components: {
    NavbarSection,
    BookpageTabs,
    ButtonBookmark,
    FooterSection
  },
  data() {
    return {
      premiumMemberStatus: this.$store.getters.premiumStatus,
      loadSkeleton: true
    };
  },
  methods: {
    gotoChapter() {
      this.$router.push({
        name: "BookChapter",
        params: {
          bookId: this.$props.idBuku,
          bookName: this.$props.title.toLowerCase()
        }
      });
    },
    callFunction: function() {
      this.$store.dispatch("getBookDetailByID", this.$route.params.bookId);
      var load = this.$store.state.loaderStatus;
      var v = this;
      setTimeout(function() {
        if (load) {
          v.loadSkeleton = false;
        } else {
          v.loadSkeleton = true;
        }
      }, 800);
    }
  },
  computed: mapState({
    bookDetail: state => state.bookDetail
  }),
  mounted() {
    this.callFunction();
    const pageTitle = this.$route.params.bookName;
    window.document.title =
      "Read " +
      this.$route.params.bookName
        .replace(/^./, pageTitle[0].toUpperCase())
        .replace(/-/g, " ") +
      " | Ahabaca";
  }
};
</script>

<style scoped lang="scss">
.card--book-image {
  .top-border {
    position: absolute;
    top: 8%;
    left: 12%;
    width: 60px;
    height: 60px;
    z-index: 0;
    border-top-left-radius: 30px;
  }
  .bottom-border {
    position: absolute;
    bottom: 8%;
    right: 12%;
    width: 60px;
    height: 60px;
    z-index: 0;
    border-bottom-right-radius: 30px;
  }
}
.card--book-detail {
  .list-book-detail {
    li {
      list-style-type: none;
    }
  }
}
@media only screen and (max-width: 900px) {
  .card--book-image {
    margin: 0 auto;
  }
  .card--book-detail {
    margin: 0 auto;
  }
}
@media only screen and (max-width: 500px) {
  .card--book-image {
    margin: 0 auto;
  }
  .card--book-detail {
    margin: 0 auto;
  }
}

@media only screen and (max-width: 375px) {
  .card--book-image {
    margin: 0 auto;
  }
  .card--book-detail {
    margin: 0 auto;
  }
}
</style>
