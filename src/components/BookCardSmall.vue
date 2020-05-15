<template>
  <div>
    <v-card class="book-card--small mx-auto" max-width="350" max-height="150">
      <div class="d-flex flex-row justify-space-between align-center">
        <div class="mx-4">
          <v-img
            class="book-card-img mx-auto"
            width="65"
            height="90"
            src="https://www.tibs.org.tw/images/default.jpg"
          ></v-img>
        </div>
        <div class>
          <router-link to="/books/sebuah-buku" class="book-card-link">
            <h2>Judul Buku</h2>
            <small>Nama Penulis</small>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, dolor neque? Tempora, neque beatae provident ipsam facilis quaerat blanditiis consectetur saepe eligendi! Tempora dignissimos harum cupiditate, illo inventore repellat odio.</p>
          </router-link>
          <div class="d-flex flex-row justify-space-between mt-1">
            <v-btn class="book-card-category" outlined color="indigo">Category</v-btn>
            <v-btn class="book-bookmark-button" icon>
              <v-icon>mdi-bookmark-outline</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BookCardSmall"
};
</script>

<style scoped lang="scss">
.book-card--small {
  h2 {
    font-size: 16px;
  }
  small {
    font-size: 12px;
    color: rgb(168, 168, 168);
  }
  p {
    margin: 0;
    font-size: 14px;
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .book-card-category {
    font-size: 8px;
    height: 25px;
    margin: 6px 0;
  }
}
.book-card-link {
  text-decoration: none;
  color: black;
}
</style>
