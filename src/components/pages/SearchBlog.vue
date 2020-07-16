<template>
  <v-container>
    <v-row class="align-center">
      <v-col cols="12" md="6">
        <v-text-field
          solo
          rounded="4"
          v-model="payload.pencarian"
          tabindex="0"
          @keyup.esc="onClose"
          @keyup.enter="goSearch"
          @keyup="liveSearch"
          class="mt-4 mx-2"
          clearable
          autofocus
          label="Temukan yang anda cari"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-space-around">
        <p>Kategori 1</p>
        <p>Kategori 2</p>
        <p>Kategori 3</p>
        <p>Kategori 4</p>
      </v-col>
    </v-row>
    <v-row v-if="isResult">
      <v-col class="search-result">
        <v-list>
          <v-list-item-group>
            <v-list-item v-for="item in 4" :key="item" @click="gotoBook()">
              <div style="width:100%;">
                {{ item }}
                <v-divider></v-divider>
              </div>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchBlog",
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