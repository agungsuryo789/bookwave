<template>
  <div class="book-page">
    <NavbarSection />
    <v-container class="py-0 my-0" v-for="book in bookDetail.data" :key="book.id_buku">
      <v-row>
        <v-col lg="6" md="6" sm="12" cols="12">
          <v-card class="book-card" max-width="200" max-height="300">
            <div class="book-card-color py-7">
              <v-img
                class="book-card-img mx-auto"
                width="120"
                height="120"
                src="https://www.tibs.org.tw/images/default.jpg"
              ></v-img>
              <v-btn class="book-bookmark-button" icon>
                <v-icon>mdi-bookmark-outline</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col class="px-0 py-0 mx-0 my-0" lg="6" md="6" sm="12" cols="12">
          <h2 class="my-3">{{ book.judul }}</h2>
          <p class="my-3 font-weight-bold">{{ book.sub_judul }}</p>
          <p style="font-size:15px;font-weight:600;color:gray;">{{ book.penulis }}</p>
          <div class="d-flex flex-row justify-space-between my-10">
            <template v-if="isPremium">
				<div class="d-flex flex-row justify-space-between my-1">
					<v-btn class="mx-4">Mulai Baca</v-btn>
					<v-btn class="mx-4">Putar Audio</v-btn>
				</div>
			</template>
            <template v-if="!isPremium">
				<div class="d-flex flex-row justify-space-between">
					<v-btn rounded>Upgrade now to read.</v-btn>
				</div>
			</template>
            <ul>
              <li>{{ book.durasi }} membaca</li>
              <li>Audio Available</li>
            </ul>
          </div>
        </v-col>
      </v-row>
      <v-row>
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
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "BookPage",
  props: ["bookID"],
  components: {
    NavbarSection,
    BookpageTabs,
    FooterSection
  },
  data() {
    return {
      bookId: this.$store.state.bookId,
      isPremium: true
    };
  },
  computed: mapState({
    bookDetail: state => state.bookDetail
  }),
  mounted() {
    this.$store.dispatch("getBookDetailByID", this.bookId);
  }
};
</script>

<style>
</style>
