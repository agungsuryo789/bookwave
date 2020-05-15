<template>
  <div class="bookpage-tabs">
    <v-tabs v-model="tab">
      <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "BookpageTabs",
  data: () => ({
    tab: null,
    items: [
      {
        tab: "Synopsis",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptate modi blanditiis eius rem. Illo consequuntur sint odit debitis rerum! Labore sed doloribus repudiandae fugit sit facere facilis accusamus commodi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptate modi blanditiis eius rem. Illo consequuntur sint odit debitis rerum! Labore sed doloribus repudiandae fugit sit facere facilis accusamus commodi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptate modi blanditiis eius rem. Illo consequuntur sint odit debitis rerum! Labore sed doloribus repudiandae fugit sit facere facilis accusamus commodi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptate modi blanditiis eius rem. Illo consequuntur sint odit debitis rerum! Labore sed doloribus repudiandae fugit sit facere facilis accusamus commodi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptate modi blanditiis eius rem. Illo consequuntur sint odit debitis rerum! Labore sed doloribus repudiandae fugit sit facere facilis accusamus commodi?"
      },
      {
        tab: "Untuk Siapa Buku ini?",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptate modi blanditiis eius rem. Illo consequuntur sint odit debitis rerum! Labore sed doloribus repudiandae fugit sit facere facilis accusamus commodi?"
      },
      {
        tab: "Tentang Penulis",
        content:
          "Seorang penulis kelahiran Indonesia. ribuan karya tulis berupa novel maupun buku bacaan telah diciptakan. Genre bacaan yang simpel dan mengena di hati adalah passion penulis."
      }
    ]
  })
};
</script>

<style>
</style>
