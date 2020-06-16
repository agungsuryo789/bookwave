<template>
  <div class="bookpage-tabs">
    <v-tabs v-model="tab">
      <v-tab>Sinopsis</v-tab>
      <v-tab>Untuk Siapakah Buku ini?</v-tab>
      <v-tab>Tentang Penulis</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text style="font-size:15px;">{{ sinopsis }}</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text style="font-size:15px;">{{ tujuan }}</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text style="font-size:15px;">{{ author }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "BookpageTabs",
  props: {
    sinopsis: {
      type: String
    },
    tujuan: {
      type: String
    },
    author: {
      type: String
    }
  },
  data: () => ({
    tab: null
  })
};
</script>

<style>
</style>
