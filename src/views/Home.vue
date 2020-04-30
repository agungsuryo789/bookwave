<template>
<div class="home">
    <v-app>
        <Navbar />
        <header class="banner">
            <v-container class="my-12">
                <v-row>
                    <v-col class="col-banner-text">
                        <h2 class="my-5">Halo Saya AHA</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde dolorum iste optio, repellendus laborum recusandae sit natus voluptate, tempore magni aliquam voluptatum illo magnam corporis doloremque! Cupiditate, alias hic.</p>
                        <v-btn rounded color="#39DF8C" depressed>Start Free Trial</v-btn>
                    </v-col>
                    <v-col class="col-banner-img">
                        <v-img class="banner-img-1" src="../assets/image/aha-mobile.png"></v-img>
                        <v-img class="banner-img-2" src="../assets/image/aha-screenshot.png" aspect-ratio="1.7"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </header>
        <section class="HeroSection">
            <v-container fluid>
                <v-row class="row-hero-1 my-10">
                    <v-col>
                        <v-img class="hero-img-1" src="../assets/image/aha-hero.png" alt="AHA Description Section" aspect-ratio="3" contain></v-img>
                    </v-col>
                    <v-col>
                        <h2 class="my-5">Apa yang AHA miliki ?</h2>
                        <p style="font-size:18px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis laborum ex atque in libero. Libero eum labore illum ipsa blanditiis earum, aliquid mollitia doloremque quidem, odit quas animi dolores consequuntur!</p>
                        <a href="">Lihat Lebih Banyak</a>
                    </v-col>
                </v-row>
                <v-row class="row-hero-2 my-10">
                    <v-col class="hero-2 text-center d-flex flex-column justify-center align-center">
                        <p>Temukan Jutaan Buku Lainnya hanya di AHA</p>
                        <v-btn rounded color="#39DF8C" depressed>Start Free Trial</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section class="homepage-kategori mt-10">
            <v-container>
                <v-row>
                    <v-col>
                        <h1>Kategori yang sering di cari</h1>
                    </v-col>
                    <v-col>
                        <p>Dari kategori A- Z kami telah menyortirnya untuk Anda. Manfaatkan akses tak terbatas ke seluruh kategori yang ada.</p>
                    </v-col>
                </v-row>
                <v-row class="justify-center align-center">
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
        chipKategori: [1]
    })
}
</script>

<style lang="scss" scoped>
.banner {
    height: 650px;
    background-color: rgb(214, 95, 95);

    .col-banner-text {
        color: white;

        button {
            color: white;
            text-transform: none;
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

.HeroSection {

    .row-hero-1,
    .row-hero-2 {}

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
.homepage-kategori{
	.col-kategori-chip{
		max-width: 400px;
	}
}
</style>
