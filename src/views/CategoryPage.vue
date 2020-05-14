<template>
  <div class="category-page">
    <v-container fluid>
      <v-row>
        <v-col class="category-page-title">
          <h1>Category {{$route.params.categoryID}}</h1>
        </v-col>
      </v-row>
      <v-row>
        <template v-for="n in 4">
          <v-col :key="n" v-if="loadSkeleton" lg="3" md="6" sm="12" xs="12">
            <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
          </v-col>
          <v-col :key="n" v-if="!loadSkeleton" lg="3" md="6" sm="12" xs="12">
            <BookCard />
          </v-col>
        </template>
      </v-row>
      <v-row>
        <template v-for="n in 16">
          <v-col :key="n" v-if="loadSkeleton" lg="4" md="6" class="my-5"></v-col>
          <v-col :key="n" v-if="!loadSkeleton" lg="4" md="6" sm="6" xs="12" class="my-5">
            <BookCardSmall />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import BookCardSmall from "@/components/BookCardSmall.vue";

export default {
  name: "CategoryPage",
  components: {
    BookCard,
    BookCardSmall
  },
  data: () => ({
    loadSkeleton: false
  })
};
</script>

<style scoped lang="scss">
.category-page {
  .category-page-title {
    height: 150px;
    padding: 4px 14px;
    background-color: #8edf00;
    color: white;
    text-transform: uppercase;
    h1 {
      margin: 4% 0;
    }
  }
}
</style>
