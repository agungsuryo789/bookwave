<template>
  <v-row>
    <v-col lg="12">
      <v-card flat>
        <div class="d-flex flex-row justify-space-between align-center">
          <div>
            <v-card-title>{{ tagName }}</v-card-title>
          </div>
          <div>
            <v-btn icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-backspace-outline</v-icon>
            </v-btn>
          </div>
        </div>
        <hr />
      </v-card>
      <v-row>
        <template v-if="loadSkeleton">
          <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" xs="12" class="my-2">
            <v-skeleton-loader class="mx-auto" width="350" type="list-item-avatar-three-line" tile></v-skeleton-loader>
          </v-col>
        </template>
        <template v-else>
          <v-col
            v-for="n in koleksiTagSingle"
            :key="n.id_buku"
            lg="4"
            md="6"
            sm="12"
            xs="12"
            class="my-5"
          >
            <BookCardSmall
              :idBuku="n.id_buku"
              :title="n.judul"
              :penulis="n.penulis"
              :foto_sampul="n.foto_sampul"
            />
          </v-col>
        </template>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import BookCardSmall from "@/components/BookCardSmall.vue";
import { mapState } from "vuex";
export default {
  name: "LibraryTagDetail",
  props: ["tagName"],
  components: {
    BookCardSmall
  },
  data() {
    return {
      loadSkeleton: true
    };
  },
  computed: mapState({
    koleksiTagSingle: state => state.koleksiTagSingle
  }),
  methods: {
    callFunction: function() {
      this.$store.dispatch("koleksiTagSingle", this.$props.tagName);
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
  mounted() {
    this.callFunction();
  }
};
</script>

<style>
</style>