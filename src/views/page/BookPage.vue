<template>
  <div class="book-page">
    <NavbarSection />
    <v-container class="py-0 my-0">
      <v-row>
        <v-col lg="6" md="6" sm="12" cols="12">
          <v-card class="book-card" max-width="200" max-height="300">
            <div class="book-card-color py-7">
              <v-img
                class="book-card-img mx-auto"
                width="120"
                height="120"
                src="https://www.tibs.org.tw/images/default.jpg"
              ></v-img>
              <v-btn class="book-bookmark-button" icon>
                <v-icon>mdi-bookmark-outline</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col class="px-0 py-0 mx-0 my-0" lg="6" md="6" sm="12" cols="12">
          <h2>Judul Buku Lorem Ipsum</h2>
          <p>Sinopnis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas esse blanditiis enim voluptate dolor nostrum. Sint, nostrum rem! Aliquam unde adipisci aut quo laborum maiores quas ipsum sint inventore eius.</p>
          <small>Jhoe Sipenulis</small>
          <div class="d-flex flex-row justify-space-between">
            <v-btn rounded>Upgrade now to read.</v-btn>
            <ul>
              <li>15-menit membaca</li>
              <li>Audio Available</li>
            </ul>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <BookpageTabs />
        </v-col>
      </v-row>
    </v-container>
    <FooterSection />
  </div>
</template>

<script>
import BookpageTabs from "@/components/bookpage/BookpageTabs.vue";
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";
export default {
  name: "BookPage",
  components: {
    NavbarSection,
    BookpageTabs,
    FooterSection
  }
};
</script>

<style>
</style>
