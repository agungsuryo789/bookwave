<template>
  <v-snackbar
    v-model="snackbar.visible"
	:color="snackbar.color"
    :timeout="snackbar.timeout"
    :multi-line="snackbar.multiline === true">

      {{ snackbar.text }}

      <v-btn dark text @click="closeSnackbar">X</v-btn>

  </v-snackbar>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "SnackbarToast",
  computed: {
    snackbar() {
      return this.$store.state.snackbar;
    }
  },
  methods: {
    ...mapMutations(["closeSnackbar"])
  }
};
</script>