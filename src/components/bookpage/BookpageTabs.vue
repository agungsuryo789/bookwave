<template>
  <div class="bookpage-tabs my-7">
    <v-tabs v-model="tab" class="book-tab text-left" slider-color="#E76464" color="#E76464" grow :style="styleTab">
      <v-tab>Sinopsis</v-tab>
      <v-tab>Untuk Siapakah Buku ini?</v-tab>
      <v-tab>Tentang Penulis</v-tab>
    </v-tabs>
    <v-tabs-items class="book-tab-items" v-model="tab">
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
          <v-card-text style="font-size:15px;">
            <p>{{ author[0] }}</p>
            <p>{{ author[1] }}</p>
            <p>{{ author[2] }}</p>
            <p>{{ author[3] }}</p>
            <p>{{ author[4] }}</p>
          </v-card-text>
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
      type: Array
    }
  },
  data: () => ({
    tab: null,
    styleTab: null
  })
};
</script>
<style scoped lang="scss">
.book-tab-items {
  .v-card__text{
    padding-left: 0;
    padding-right: 0;
    padding-top: 30px;
  }
}
</style>