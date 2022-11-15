<template>
    <div class="md:flex justify-between md:px-20 px-6 md:mb-0 mb-10">
        <div class="md:w-5/12 h-auto rounded-3xl p-8 bg-custom md:mb-0 mb-10">
            <img src="../assets/images/Category.svg" alt="" rel="preload">
            <h3 class="ml-1 mt-7 font-semibold text-gray-400 text-xs">MEMBER AREA</h3>
            <h2 class="text-lg ml-1 mt-1 font-bold text-white">Pemantauan Project dengan Member Area</h2>
            <p class="w-full ml-1 mt-1 text-xs text-white leading-relaxed">Kamu dapat memantau progress project dengan cepat melalui member area yang sudah kami siapkan, di dalam member area kamu dapat menghubungi tim professional untuk mengetahui lebih detail. Kami juga menyediakan tempat untuk melihat semua dokumen - dokumen kita saat pengerjaan seperti MOU dsb.</p>
            <button class="mb-6 text-white bg-white hover:bg-gray-400 duration-300 bg-opacity-20 backdrop-blur-sm px-5 py-2 mt-8 rounded-full flex">Learn More <img class="ml-3" src="../assets/images/arrow-down-2.png" alt=""> </button>
        </div>
        <div class="md:w-1/4 h-auto bg-white border-2 border-gray-300 rounded-3xl p-8 md:mb-0 mb-10">
            <img src="../assets/images/wallet.svg" alt="" rel="preload">
            <div class="flex justify-between mt-40">
                <p class="font-semibold md:w-2/3">Metode Pembayaran yang Fleksibel</p>
                <img src="../assets/images/arrow-right.svg" alt="">
            </div>
        </div>
        <div class="md:w-1/4 h-auto bg-white border-2 border-gray-300 rounded-3xl p-8 md:mb-0 mb-10">
            <img src="../assets/images/time_circle.svg" alt="" rel="preload">
            <div class="flex justify-between mt-40">
                <p class="font-semibold md:w-1/2">Ketat Terhadap Deadline</p>
                <img src="../assets/images/arrow-right.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "HomeFirstBannerSection"
}
</script>

<style scoped>
    .bg-custom {
        background-image: url("../assets/images/card_bg.png");
        background-size: cover;
    }
</style>