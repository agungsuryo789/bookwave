<template>
  <v-row>
    <template v-if="loadSkeleton">
      <v-col v-for="n in 4" :key="n" lg="3" md="6" sm="12" xs="12" class="my-2">
        <v-skeleton-loader class="mx-auto" width="350" type="list-item-avatar-three-line" tile></v-skeleton-loader>
      </v-col>
    </template>
    <template v-else>
      <v-col
        v-for="n in koleksiBukuHighlight"
        :key="n.id_buku_highlight"
        lg="4"
        md="6"
        sm="12"
        xs="12"
        class="my-5"
        style="text-align:center;"
      >
        <v-card flat link>
          <p style="font-weight:bold;">{{n.kalimat}}</p>
          <small style="color:gray;">{{n.judul_buku}}</small>
          <hr />
        </v-card>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LibraryColouredList",
  data() {
    return {
      loadSkeleton: true
    };
  },
  computed: mapState({
    koleksiBukuHighlight: state => state.koleksiBukuHighlight
  }),
  methods: {
    callFunction: function() {
      this.$store.dispatch("koleksiBukuHighlight");
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
  created() {
    this.callFunction();
  }
};
</script>