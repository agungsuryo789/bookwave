<template>
  <div class="d-flex flex-column justify-center" style="width:100%;">
    <div class="d-flex flex-row justify-space-between px-4" style="width:100%;">
      <v-btn icon class="my-2" @click="goSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-text-field
        v-model="payload.pencarian"
        @keyup.enter="goSearch"
        @keyup="liveSearch"
        class="mt-4 mx-2"
        clearable
        label="Temukan yang anda cari disini"
      ></v-text-field>
      <v-btn icon class="my-2" @click="onClose">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <div v-if="isResult" class="search-result">
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="item in searchResult.data_buku" :key="item.id_buku" @click="gotoBook(item.id_buku, item.judul)">
            <div style="width:100%;">
              {{ item.judul }}
              <v-divider></v-divider>
            </div>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NavbarSearch",
  data() {
    return {
      payload: {
        pencarian: "",
        type_filter: ""
      },
      isResult: false
    };
  },
  methods: {
    onClose(event) {
      this.isResult = false;
      this.payload.pencarian = "";
      this.$emit("clicked", false);
    },
    goSearch() {
      if (this.payload.pencarian !== "") {
        this.$router.push({ name: "SearchPage", params: { searchParams: this.payload.pencarian } });
      } else {
        this.isResult = false;
        return false;
      }
    },
    liveSearch() {
      if (this.payload.pencarian !== "") {
        this.$store.dispatch("getSearchByDefault", this.payload);
        this.isResult = true;
      } else {
        this.payload.pencarian = "";
        this.isResult = false;
        return false;
      }
    },
    gotoBook(bookId, bookName) {
      this.$router.push({
        name: "BookPage",
        params: {
          bookId: bookId,
          bookName: bookName.toLowerCase()
        }
      });
    }
  },
  computed: mapState({
    searchResult: state => state.searchResult
  })
};
</script>

<style scoped lang="scss">
.search-result {
  position: absolute;
  top: 100%;
  width: 75%;
  border: 3px solid rgb(160, 160, 160);
  border-bottom: 10px solid rgb(160, 160, 160);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>