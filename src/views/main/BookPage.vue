<template>
  <div class="book-page">
    <NavbarSection />
    <v-container
      class="py-0 justify-center align-center"
      v-for="book in bookDetail.data"
      :key="book.id_buku"
    >
      <v-row style="max-width:850px;margin:0 auto;">
        <v-col lg="6" md="6" sm="12" cols="12">
          <v-card max-width="250" :style="{backgroundColor: book.warna_kategori}">
            <div class="d-flex flex-column justify-end py-10">
              <v-img class="book-card-img mx-auto" width="150" :src="book.foto_sampul"></v-img>
              <ButtonBookmark :idBuku="book.id_buku" style="position:absolute;right:0;bottom:0;" />
            </div>
          </v-card>
        </v-col>
        <v-col class="px-0 py-0 mx-0 my-0" lg="6" md="6" sm="12" cols="12">
          <h1 class="my-3">{{ book.judul }}</h1>
          <p class="my-3 font-weight-bold">{{ book.sub_judul }}</p>
          <p style="font-size:15px;font-weight:600;color:gray;">{{ book.penulis }}</p>
          <div class="d-flex flex-column flex-lg-row justify-space-between my-10">
            <template v-if="book.is_premium == 0">
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
            <template v-else>
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
            <ul style="font-size:12px;">
              <li>{{ book.durasi }} membaca</li>
              <li>Audio Available</li>
            </ul>
          </div>
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
  name: "BookPage",
  props: ["bookID"],
  components: {
    NavbarSection,
    BookpageTabs,
    ButtonBookmark,
    FooterSection
  },
  data() {
    return {
      isPremium: true
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
    }
  },
  computed: mapState({
    bookDetail: state => state.bookDetail
  }),
  created() {
    this.$store.dispatch("getBookDetailByID", this.$route.params.bookId);
  }
};
</script>

<style scoped lang="scss">
</style>
