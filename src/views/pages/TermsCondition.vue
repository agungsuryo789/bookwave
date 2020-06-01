<template>
	<div>
		<NavbarSection />
		<PageHeader title="Terms & Condition"/>
		<div class="container">
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="12">
				<h2>GENERAL TERMS AND CONDITIONS</h2>
				<p> Dengan melakukan Transaksi Online di www.ahabaca.com, AHA iOS atau Android, Pembeli dianggap telah membaca dan menyetujui, dan oleh karena itu, terikat pada Syarat dan Ketentuan sebagaimana dijelaskan di bawah ini. </p>
			</v-col>
		</v-row>
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="12">
				<h2>METODE DAN ATURAN PEMBAYARAN</h2>
				<p> Metode Pembayaran yang tersedia di AHABACA adalah dengan menggunakan</p>
				<ul>
					<li>
						Transfer Bank
					</li>
					<li>
						Virtual Account
					</li>
					<li>
						Credit Card (Visa/Mastercard
					</li>
				</ul> <br/>
				<p>Untuk pembayaran menggunakan Credit Card (Visa/Master Card), biaya ditanggung oleh Pembeli.</p>
			</v-col>
		</v-row>
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="12">
				<h2>Penggantian dan Metode Pembayaran, Kompensasi dan Hak Retensi </h2>
				<p> Syarat dan ketentuan ini berlaku untuk semua kasus retur dan penukaran produk AHABACA.COM. </p>
				<ul>
					<li>
					Akses Langganan dikenai biaya dan harus dibayar di awal berlangganan. </li>
					<li>
					Pembelian buku audio juga harus dibayar.</li>
					<li>
					Sebagai metode pembayaran, AHABACA menawarkan kartu kredit, Paypal, dan metode pembayaran tambahan, jika tersedia, ditentukan sebelum memulai proses pemesanan.</li>
					<li>
					Jika mengakses dengan menggunakan kode, pembayaran akan dilakukan dengan metode pembayaran yang ditentukan oleh AHABACA dan dipilih oleh Anda sebelum pembelian kode, seperti Paypal atau transfer bank.</li>
					<li>
					Saat membeli langganan dengan aplikasi AHA iOS atau Android, pembayaran dilakukan oleh Apple, Google atau proses pembelian dalam aplikasi.</li>
					<li>
					Sebagai bagian dari Akses Langganan Anda, kewajiban pembayaran Anda untuk AHABACA akan diperpanjang secara otomatis pada akhir jangka waktu berlangganan yang relevan jika Anda tidak membatalkan langganan berbayar Anda setidaknya 24 jam sebelum akhir jangka waktu, Anda tidak berhak untuk mengimbangi klaim apa pun terhadap klaim AHABACA, kecuali gugatan balik Anda pada akhirnya ditentukan dengan pengaruh hukum atau tidak diperselisihkan. </li>
					<li>
					Anda juga berhak mengimbangi klaim AHABACA, jika Anda mengajukan keluhan atas cacat atau gugatan balik berdasarkan perjanjian yang sama.
					</li>
					<li>Anda hanya dapat menggunakan hak retensi jika hasil balasan Anda dari perjanjian yang sama.</li>
				</ul>
			</v-col>
		</v-row>
		</div>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import PageHeader from "@/components/pages/PageHeader.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "TermsCondition",
  components: {
    NavbarSection,
    PageHeader,
    FooterSection
  }
};
</script>
