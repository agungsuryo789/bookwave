<template>
  <div>
    <NavbarSection />
    <v-container>
      <v-carousel cycle height="300" hide-delimiters touchless :show-arrows="false">
        <v-carousel-item>
          <v-sheet color="blue" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div
                class="display-3 px-5"
              >What’s in it for me? Get yourself fit for the future of work.</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-row>
        <v-col>
          <p
            class="headline"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque autem excepturi necessitatibus natus rerum dolorem quis dolores dignissimos minus qui unde voluptates inventore molestiae cumque odit, impedit cum repudiandae ullam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias facilis tempore esse dolore illum laborum, neque dolores rerum veniam sequi excepturi obcaecati blanditiis? Facere iure voluptates unde cumque vel ducimus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt pariatur et veritatis doloribus similique recusandae, possimus labore beatae. Hic corporis totam perspiciatis ad expedita? Deserunt quaerat iusto consectetur magni suscipit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, fugiat. Molestiae laboriosam, illo cum, odit laborum culpa tempora quaerat dignissimos ipsum esse architecto iste id consequuntur itaque. Eos, quos doloribus.</p>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col></v-col>
      </v-row>
    </v-container>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";
export default {
  name: "BookChapter",
  components: {
    NavbarSection,
    FooterSection
  },
  created() {}
};
</script>

<style>
</style>