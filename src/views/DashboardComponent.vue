<template>
  <div class="dashboard-body">
    <NavbarSection />
    <section>
      <v-container>
        <h2>Section Title</h2>
        <v-row class="my-9 justify-center align-center" no-gutters>
          <template v-for="n in 4">
            <v-col
              :key="n"
              v-if="loadSkeleton"
              lg="3"
              md="12"
              class="my-5"
              style="max-width:300px;"
            >
              <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
            </v-col>
            <v-col
              :key="n"
              v-if="!loadSkeleton"
              lg="3"
              md="12"
              class="my-5"
              style="max-width:300px;"
            >
              <BookCardComponent />
            </v-col>
          </template>
        </v-row>
        <h2>Section Title 2</h2>
        <v-row class="my-9 justify-center align-center" no-gutters>
          <template v-for="n in 4">
            <v-col
              :key="n"
              v-if="loadSkeleton"
              lg="3"
              md="12"
              class="my-5"
              style="max-width:300px;"
            >
              <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
            </v-col>
            <v-col
              :key="n"
              v-if="!loadSkeleton"
              lg="3"
              md="12"
              class="my-5"
              style="max-width:300px;"
            >
              <BookCardComponent />
            </v-col>
          </template>
        </v-row>
      </v-container>
    </section>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import BookCardComponent from "@/components/BookCardComponent.vue";
import FooterSection from "@/components/FooterSection.vue";
export default {
  name: "Dashboard",
  components: {
    NavbarSection,
    BookCardComponent,
    FooterSection
  },
  data: () => ({
    loadSkeleton: true
  })
};
</script>

<style>
</style>
