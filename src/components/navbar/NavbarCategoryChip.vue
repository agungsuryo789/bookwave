<template>
  <v-card class="py-2 px-4">
    <router-link :to="{ name: 'CategoryPage', params: {categoryID: 4}}">
      <v-btn v-for="n in 12" :key="n" class="my-2 mx-3 btn-category" depressed>Kategory {{ n }}</v-btn>
    </router-link>
  </v-card>
</template>

<script>
export default {
  name: "NavbarCategoryChip"
};
</script>

<style scoped lang="scss">
.btn-category {
  text-decoration: none;
  font-size: 12px;
}
</style>
