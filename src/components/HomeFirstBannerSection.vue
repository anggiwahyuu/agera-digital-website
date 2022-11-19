<template>
    <div class="md:flex justify-between md:px-20 px-6 md:mb-0 mb-10">
        <div class="md:w-5/12 h-auto rounded-3xl p-8 bg-custom md:mb-0 mb-10">
            <img src="../assets/images/Category.svg" alt="" rel="preload">
            <h3 class="ml-1 mt-7 font-semibold text-gray-400 text-xs">MEMBER AREA</h3>
            <h2 class="text-lg ml-1 mt-1 font-bold text-white">Pemantauan Project dengan Member Area</h2>
            <p class="w-full ml-1 mt-1 text-xs text-white leading-relaxed">Kamu dapat memantau progress project dengan cepat melalui member area yang sudah kami siapkan, di dalam member area kamu dapat menghubungi tim professional untuk mengetahui lebih detail. Kami juga menyediakan tempat untuk melihat semua dokumen - dokumen kita saat pengerjaan seperti MOU dsb.</p>
            <button class="mb-6 text-white bg-white hover:bg-opacity-40 duration-300 bg-opacity-20 backdrop-blur-sm px-5 py-2 mt-8 rounded-full flex">Learn More <img class="ml-3" src="../assets/images/arrow-down-2.png" alt=""> </button>
        </div>
        <div v-on:mouseover="mouseover1()" v-on:mouseleave="mouseleave1()" class="md:w-1/4 flex flex-col justify-between md:h-auto h-72 bg-white border-2 border-gray-300 rounded-3xl p-8 md:mb-0 mb-10">
            <img v-bind:class="{'w-9': showTextHoverable1, 'w-1/5': !showTextHoverable1}" :src="showTextHoverable1 ? imageWalletBlue : imageWallet" class="transition-all duration-300" alt="" rel="preload">
            <div>
                <div v-bind:class="{'md:mt-20': showTextHoverable1, 'md:mt-40': !showTextHoverable1}" class="flex justify-between transition-all duration-300">
                    <p class="font-semibold md:w-2/3">Metode Pembayaran yang Fleksibel</p>
                    <img src="../assets/images/arrow-right.svg" alt="">
                </div>
                <p v-bind:class="{'max-h-20': showTextHoverable1, 'max-h-0': !showTextHoverable1}" class="text-sm mt-4 overflow-hidden duration-300">Dengan metode pembayaran yang fleksibel Anda dapat memilih berbagai macam metode pembayaran baik secara cash maupun digital</p>
            </div>
        </div>
        <div v-on:mouseover="mouseover2()" v-on:mouseleave="mouseleave2()" class="md:w-1/4 flex flex-col justify-between md:h-auto h-72 bg-white border-2 border-gray-300 rounded-3xl p-8 md:mb-0 mb-10">
            <img v-bind:class="{'w-9': showTextHoverable2, 'w-1/5': !showTextHoverable2}" :src="showTextHoverable2 ? imageTimeCircleBlue : imageTimeCircle" class="transition-all duration-300" alt="" rel="preload">
            <div>
                <div v-bind:class="{'md:mt-20': showTextHoverable2, 'md:mt-40': !showTextHoverable2}" class="flex justify-between transition-all duration-300">
                    <p class="font-semibold md:w-1/2">Ketat Terhadap Deadline</p>
                    <img src="../assets/images/arrow-right.svg" alt="">
                </div>
                <p v-bind:class="{'max-h-20': showTextHoverable2, 'max-h-0': !showTextHoverable2}" class="text-sm mt-4 overflow-hidden duration-300">Kamu dapat memantau progress project dengan cepat melalui member area yang sudah kami siapkan</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "HomeFirstBannerSection",
    data() {
        return {
            showTextHoverable1: false,
            showTextHoverable2: false,

            imageTimeCircle: require('@/assets/images/time_circle.svg'),
            imageTimeCircleBlue: require('@/assets/images/time_circle_blue.svg'),
            imageWallet: require('@/assets/images/wallet.svg'),
            imageWalletBlue: require('@/assets/images/wallet_blue.svg'),
        }
    },
    methods: {
        mouseover1: function(){
            this.showTextHoverable1 = true;
        },
        mouseleave1: function(){
            this.showTextHoverable1 = false;
        },
        mouseover2: function(){
            this.showTextHoverable2 = true;
        },
        mouseleave2: function(){
            this.showTextHoverable2 = false;
        },
    }
}
</script>

<style scoped>
    .bg-custom {
        background-image: url("../assets/images/card_bg.webp");
        background-size: cover;
    }
</style>