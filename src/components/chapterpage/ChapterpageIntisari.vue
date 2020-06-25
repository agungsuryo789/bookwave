<template>
  <div>
    <v-col class="col-intisari">
      <p style="font-weight:bold;font-size:20px;">In these book you will learn</p>
      <ul>
        <li v-for="item in intisariDetail.data" :key="item.id_intisari">{{ item.intisari }}</li>
      </ul>
    </v-col>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ChapterpageIntisari",
  props: {
    bookId: {
      type: Number
    }
  },
  computed: mapState({
    intisariDetail: state => state.intisariDetail
  }),
  mounted() {
    this.$store.dispatch("getBookIntisari", this.bookId);
  }
};
</script>

<style scoped lang="scss">
.col-intisari {
  p {
    font-weight: bold;
    font-size: 14px;
  }
}
</style>