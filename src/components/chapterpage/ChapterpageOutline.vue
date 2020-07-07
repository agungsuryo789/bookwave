<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-list>
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in bookOutline.data"
                :key="item.id_chapter"
                @click="toChapter(bookID = item.id_buku, chapterId = item.id_chapter)"
              >
                <div v-if="!item.isRead" style="width:100%;">
                  <v-divider class="my-3"></v-divider>
                  {{ i + 1 }}. {{ item.judul_chapter }}
                  <v-divider class="my-3"></v-divider>
                </div>
                <div v-if="item.isRead" style="width:100%;color:#E76464;">
                  <v-divider class="my-3"></v-divider>
                  {{ i + 1 }}. {{ item.judul_chapter }}
                  <v-divider class="my-3"></v-divider>
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
    bookOutline: state => state.bookOutline
  }),
  created() {
    this.$store.dispatch("getBookOutline", this.$route.params.bookId);
  }
};
</script>
