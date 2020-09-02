<template>
  <v-card class="promo-card rounded-lg" shaped flat width="550px" height="150px">
    <div
      class="promo-card-data d-flex flex-column justify-space-between align-center"
      style="height:100%;"
    >
      <img src="@/assets/image/promocard/Group 192.svg" height="90" style="top:2%;left:4%;" />
      <img src="@/assets/image/promocard/Group 195.svg" height="30" style="bottom:10%;left:8%;" />
      <img src="@/assets/image/promocard/Group 197.svg" height="25" style="bottom:10%;left:30%;" />
      <img src="@/assets/image/promocard/Group 108.svg" height="25" style="top:15%;left:30%;" />
      <img src="@/assets/image/promocard/Group 147.svg" height="15" style="top:18%;left:40%;" />
      <img src="@/assets/image/promocard/Group 161.svg" height="25" style="top:2%;left:55%;" />
      <img src="@/assets/image/promocard/Group 55.svg" height="25" style="top:6%;left:65%;" />
      <img src="@/assets/image/promocard/Group 191.svg" height="30" style="top:4%;right:15%;" />
      <img src="@/assets/image/promocard/Group 196.svg" height="20" style="top:25%;right:3%;" />
      <img src="@/assets/image/promocard/radio-242.svg" height="20" style="bottom:2%;right:30%;" />
      <img src="@/assets/image/promocard/Group 188.svg" height="90" style="top:40%;right:3%;" />
      <h1>{{ judulPromo }}</h1>
      <p>Hemat 57%</p>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "PromoCard",
  props: {
    judulPromo: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.promo-card {
  border-radius: 20px;
  background-color: #e76464;
  .promo-card-data {
    color: white;
    position: relative;
    h1 {
      margin-top: auto;
    }
    p {
      padding: 5px 4px;
      margin-top: 5px;
      background-color: #d33131;
    }
    img {
      position: absolute;
    }
  }
}
</style>