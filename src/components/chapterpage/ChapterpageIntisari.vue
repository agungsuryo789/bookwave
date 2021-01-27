<template>
  <div>
    <v-col class="col-intisari" :style="styleObject">
      <ul >
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
    },
    fontSize: {
      type: Number
    }
  },
  computed: mapState({
    intisariDetail: state => state.intisariDetail,
    styleObject() {
      return {
        fontSize: this.$props.fontSize + "px"
      };
    }
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