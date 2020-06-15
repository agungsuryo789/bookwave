<template>
  <v-row>
    <v-col lg="12">
      <v-card flat>
        <div class="d-flex flex-row justify-space-between align-center">
          <div style="width:90%;">
            <template v-if="!showEditTag">
              <v-text-field
                :value="tagName"
                color="purple darken-2"
                disabled
                full-width
                style="font-size:18px;"
              ></v-text-field>
            </template>
            <template v-if="showEditTag">
              <v-text-field
                label="Edit Tag"
                autofocus
                clearable
                full-width
                v-model="inputTag"
                @keyup.enter="dispatchEditTag"
              ></v-text-field>
            </template>
          </div>
          <div>
            <v-btn icon @click="showEditTag = !showEditTag">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="dispatchDelTag(tagName)">
              <v-icon>mdi-backspace-outline</v-icon>
            </v-btn>
          </div>
        </div>
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
  props: {
    tagName: {
      type: String,
      required: true
    }
  },
  components: {
    BookCardSmall
  },
  data() {
    return {
      loadSkeleton: true,
      showEditTag: false,
      inputTag: "",
      editTagPayload: {
        tag: this.tagName,
        tag_baru: ""
      },
      delTagPayload: {
        tag: this.tagName
      }
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
    },
    dispatchEditTag() {
      this.editTagPayload.tag_baru = this.inputTag;
      this.$store.dispatch("editTagAll", this.editTagPayload);
    },
    dispatchDelTag(tagName) {
      this.delTagPayload.tag = tagName;
      this.$store.dispatch("deleteTagFromAll", this.delTagPayload);
    }
  },
  mounted() {
    this.callFunction();
  }
};
</script>

<style>
</style>