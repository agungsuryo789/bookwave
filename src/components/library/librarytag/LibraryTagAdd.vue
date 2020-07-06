<template>
  <v-row>
    <v-col class="my-4" lg="12">
      <p style="font-weight:bold;">
        <v-btn to="/library/tag" icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>Tag Baru
      </p>
      <hr />
      <!-- <v-text-field label="Buat Tag baru" v-on:keyup.enter="addTag" v-model="tagPayload.tag"></v-text-field> -->
      <v-combobox
        class="combobox-tag"
        v-model="tagModel"
        hide-selected
        label="Buat Tag baru"
        multiple
        chips
        deletable-chips
        color="gray"
      >
        <template v-slot:selection="data">
          <v-chip
            :key="JSON.stringify(data.item)"
            v-bind="data.attrs"
            :input-value="data.selected"
            :disabled="data.disabled"
            color="white"
            @click:close="data.parent.selectItem(data.item)"
            class="tag-chip"
          >
            <span class="mr-1">{{ data.item }}</span>
            <v-icon small @click="data.parent.selectItem(data.item)" color="black">mdi-close</v-icon>
          </v-chip>
        </template>
      </v-combobox>
      <v-btn class="btn-add-tag" text @click="addTag">Tambah Tag</v-btn>
      <v-dialog v-model="dialog" width="300" hide-overlay>
        <v-card>
          <v-card-title class="modal-hapus-title px-12">Tag Baru tidak boleh kosong.</v-card-title>
          <v-card-actions
            style="border:2px solid #DDDDDD;border-top:none;border-bottom:6px solid #DDDDDD;"
          >
            <v-btn class="btn-modal-tag btn-batal py-2 px-2" text @click="dialog = false">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LibraryTagAdd",
  data() {
    return {
      tagPayload: {
        id_buku: this.$route.params.idBuku,
        tag: ""
      },
      tagModel: "",
      dialog: false
    };
  },
  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop());
      }
    }
  },
  methods: {
    addTag() {
      const x = this.tagModel.toString();
      this.tagPayload.tag = x;

      if (this.tagModel.length > 0) {
        this.$store.dispatch("addTag", this.tagPayload);
      } else {
        this.dialog = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.tag-chip {
  border: 1px solid #dddddd !important;
  border-bottom: 4px solid #dddddd !important;
  background-color: white;
  color: #e76464;
  border-radius: 5px;
}
.btn-add-tag {
  text-transform: none;
  border: 1px solid #dddddd;
  border-bottom: 3px solid #dddddd;
  font-weight: bold;
  color: #e76464;
  border-radius: 3px;
}
.modal-hapus-title {
  text-align: center;
  border: 2px solid #dddddd;
  color: #e76464;
  font-size: 12px;
}
.btn-modal-tag {
  color: black;
  font-size: 12px;
  border: 1px solid #dddddd;
  margin: 0 auto;
  width: 100px;
}
.btn-batal {
  border: 1px solid #dddddd;
  border-bottom: 3px solid #dddddd;
}
</style>