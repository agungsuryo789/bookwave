import { mapMutations } from "vuex"
export default {
  computed: {
    snackbar() {
      return this.$store.state.snackbar
    }
  },
  methods: {
    ...mapMutations(["closeSnackbar"])
  }
}