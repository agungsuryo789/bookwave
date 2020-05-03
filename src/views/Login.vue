<template>
    <div class="Login">
         <NavbarApp />
         <v-container fluid>
            <v-row>
            <v-col cols="12">
                <v-row justify="center">
                <v-col
                    cols="6"
                    md="4"
                >
                    <v-select
                    v-model="alignment"
                    :items="alignmentsAvailable"
                    label="Align"
                    ></v-select>
                </v-col>
                </v-row>
            </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import NavbarApp from '@/components/NavbarApp.vue'
/* eslint-disable */
export default {
    name: 'Login',
    components: {
        NavbarApp
    }
}
</script>