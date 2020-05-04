<template>
<div class="home">
    <v-app>
        <Navbar />
        <header class="banner">
            <img class="banner-bg-img-1" src="@/assets/image/banner-1.png">
            <img class="banner-bg-img-2" src="@/assets/image/banner-2.png">
            <v-container class="my-12">
                <v-row class="row-banner-image">
                    <v-col class="col-banner-text">
                        <h1 class="my-5">Halo Saya AHA</h1>
                        <p class="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde dolorum iste optio, repellendus laborum recusandae sit natus voluptate, tempore magni aliquam voluptatum illo magnam corporis doloremque! Cupiditate, alias hic.</p>
                        <v-btn x-large="true" rounded color="#39DF8C" depressed>Start Free Trial</v-btn>
                    </v-col>
                    <v-col class="col-banner-img">
                        <v-img class="banner-img-1" src="@/assets/image/aha-mobile.png"></v-img>
                        <v-img class="banner-img-2" src="@/assets/image/aha-screenshot.png" aspect-ratio="1.7"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </header>
        <section class="hero-section">
            <v-container fluid>
                <v-row class="row-hero-1">
                    <v-col>
                        <v-img class="hero-img-1" src="@/assets/image/aha-hero.png" alt="AHA Description Section" aspect-ratio="3" contain></v-img>
                    </v-col>
                    <v-col class="col-hero-text">
                        <h1 class="my-5">Apa yang AHA miliki ?</h1>
                        <p class="pr-5" style="font-size:18px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis laborum ex atque in libero. Libero eum labore illum ipsa blanditiis earum, aliquid mollitia doloremque quidem, odit quas animi dolores consequuntur!</p>
                        <a href="">Lihat Lebih Banyak</a>
                    </v-col>
                </v-row>
                <v-row class="row-hero-2 ">
                    <v-col class="hero-2 text-center d-flex flex-column justify-center align-center">
                        <p>Temukan Jutaan Buku Lainnya hanya di AHA</p>
                        <v-btn rounded color="#39DF8C" depressed>Start Free Trial</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section class="homepage-kategori mt-10">
            <v-container>
                <v-row class="kategori-desc">
                    <v-col>
                        <h1>Kategori yang sering di cari</h1>
                    </v-col>
                    <v-col>
                        <p>Dari kategori A- Z kami telah menyortirnya untuk Anda. Manfaatkan akses tak terbatas ke seluruh kategori yang ada.</p>
                    </v-col>
                </v-row>
                <v-row class="justify-center align-center my-10">
                    <v-col class="col-kategori-chip">
                        <v-chip-group v-model="chipKategori" column>
                            <v-chip filter outlined>Semua</v-chip>
                            <v-chip filter outlined>Agama</v-chip>
                            <v-chip filter outlined>Politik</v-chip>
                            <v-chip filter outlined>Budaya</v-chip>
                            <v-chip filter outlined>Kesehatan</v-chip>
                        </v-chip-group>
                    </v-col>
                </v-row>
                <v-row class="my-9">
                    <template v-for="n in 6">
                        <v-col :key="n" v-if="loadSkeleton" lg="4" md="12" class="my-5">
                            <v-skeleton-loader class="mx-auto" max-width="250" type="card"></v-skeleton-loader>
                        </v-col>
                        <v-col :key="n" lg="4" md="12" class="my-5">
                            <v-card class="mx-auto" max-width="250" v-ripple>
                                <v-img class="white--text align-end" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                                    <v-card-title></v-card-title>
                                </v-img>
                                <v-card-title class="text-right">Judul Buku Lorem Ipsum</v-card-title>
                                <v-card-subtitle class="text--primary text-right">
                                    Listen to your favorite artists and albums whenever and wherever, online and offline.
                                </v-card-subtitle>
                            </v-card>
                        </v-col>
                    </template>
                </v-row>
                <v-row>
                    <v-col class="text-center d-flex flex-column justify-center align-center">
                        <v-btn x-large="true" rounded color="#39DF8C" depressed>Lihat lebih banyak</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <FooterSection />
    </v-app>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import FooterSection from '@/components/FooterSection.vue'
/* eslint-disable */
export default {
    name: 'Home',
    components: {
        Navbar,
        FooterSection
    },
    data: () => ({
        chipKategori: [1],
        loadSkeleton: false
    })
}
</script>

<style lang="scss" scoped>
.banner {
    height: 700px;
    position: relative;

    .banner-bg-img-1,
    .banner-bg-img-2 {
        position: absolute;
    }

    .banner-bg-img-1 {
        top: 0;
        left: 0;
        width: 100%;
        height: 530px;
    }

    .banner-bg-img-2 {
        bottom: -20px;
        left: 0;
        width: 115%;
        transform: rotate(-2deg);
    }

    .col-banner-text {
        color: white;
        z-index: 2;

        button {
            color: white;
            text-transform: none;
            width: 300px;
        }

        p {
            font-size: 20px;
            letter-spacing: 1px;
        }
    }

    .col-banner-img {
        position: relative;

        .banner-img-1 {
            position: absolute;
            right: 0;
            top: 100px;
            z-index: 1;
        }
    }
}

.hero-section {

    .row-hero-1,
    .row-hero-2 {
        h1 {
            color: #D65F5F;
            font-weight: bold;
        }
    }

    .row-hero-2 {
        margin-top: 150px;
        margin-bottom: 150px;
    }

    .hero-2 {
        border: 1px solid green;
        height: 250px;
        background-color: #4f2e53;
        color: white;
        width: 100%;

        p {
            font-size: 28px;
            letter-spacing: 1px;
        }

        button {
            text-transform: none;
            color: white;
            max-width: 200px;
        }
    }
}

.homepage-kategori {
    .kategori-desc {
        h1 {
            font-size: 38px;
            color: #D84B5B;
            font-weight: 700;
        }

        p {
            letter-spacing: 1px;
        }
    }

    .col-kategori-chip {
        max-width: 400px;
    }
}
</style>
