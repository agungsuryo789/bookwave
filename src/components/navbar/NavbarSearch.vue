<template>
  <div class="navbar-search-form d-flex flex-column justify-center ml-lg-12">
    <div class="d-flex flex-row justify-space-between px-4">
      <v-btn icon class="my-2" @click="goSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-text-field
        v-model="payload.pencarian"
        tabindex="0"
        @keyup.esc="onClose"
        @keyup.enter="goSearch"
        @keyup="liveSearch"
        class="mt-4 mx-2"
        clearable
        autofocus
        label="Temukan yang anda cari disini"
      ></v-text-field>
      <v-btn icon class="my-2" @click="onClose">
        <v-icon>mdi-close-circle-outline</v-icon>
      </v-btn>
    </div>
    <div v-if="isResult" class="search-result">
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="item in searchResult.data_buku"
            :key="item.id_buku"
            @click="gotoBook(item.id_buku, item.judul)"
          >
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
        this.$router.push({
          name: "SearchPage",
          params: { searchParams: this.payload.pencarian.replace(/ /g, "-") }
        });
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
      const urlname = bookName.toLowerCase();
      this.$router.push({
        name: "BookPage",
        params: {
          bookId: bookId,
          bookName: urlname.replace(/ /g, "-")
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
.navbar-search-form {
  width: 90%;
  @media screen and (max-width: 425px) {
    width: 120%;
  }
  .search-result {
    position: absolute;
    top: 100%;
    width: 68%;
    margin-left: 5%;
    z-index: 999;
    border: 3px solid rgb(160, 160, 160);
    border-bottom: 10px solid rgb(160, 160, 160);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    @media screen and (max-width: 425px) {
      margin-left: 0%;
      width: 90%;
    }
  }
}
</style>