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
          <v-card-text>{{ sinopsis }}</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>{{ tujuan }}</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>{{ author }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "BookpageTabs",
  props: ["sinopsis", "tujuan", "author"],
  data: () => ({
    tab: null
  })
};
</script>

<style>
</style>
