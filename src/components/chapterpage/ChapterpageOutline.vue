<template>
  <div>
    <v-container v-for="book in bookDetail.data" :key="book.id_buku">
      <v-row>
        <v-col>
          <v-list>
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in book.data_chapter"
                :key="item.id_chapter"
                @click="toChapter(bookID = book.id_buku, chapterId = item.id_chapter)"
              >
                <div style="width:100%;">
                  <v-divider></v-divider>
                  {{ i + 1 }}. {{ item.judul_chapter }}
                  <v-divider></v-divider>
                </div>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ChapterpageOutline",
  data() {
    return {};
  },
  methods: {
    toChapter(bookID, chapterId) {
      this.$router.push({
        name: "BookChapter",
        params: {
          bookId: bookID,
          chapterId: chapterId
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
