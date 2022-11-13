<template>
    <div class="md:flex mx-10 my-24 rounded-3xl p-16 bg-custom">
        <div class="w-2/5">
            <h3 class="text-gray-400 font-semibold text-base">BUILT FOR ENTERPRISE</h3>
            <h2 class="text-white font-semibold text-3xl leading-normal w-4/5">Karya yang Sudah Kita Selesaikan</h2>
            <ul class="text-white text-base pl-6 mt-10">
                <li class="pl-8">Dibuat menggunakan teknologi terbaru</li>
                <li class="pl-8 mt-2">Responsive Website</li>
                <li class="pl-8 mt-2">Loading Website yang cepat</li>
                <li class="pl-8 mt-2">Desain UI/UX yang baik</li>
            </ul>
            <div class="md:flex mt-16">
                <div>
                    <center><button class="custom-color hover:bg-black duration-300 rounded-2xl px-2 py-2"><img src="../assets/images/web_types_icon_static.svg" alt="" rel="preload"></button></center>
                    <p class="text-white text-center mt-4">Web Statis</p>
                </div>
                <div class="ml-8">
                    <center><button class="custom-color hover:bg-black duration-300 rounded-2xl px-2 py-2"><img src="../assets/images/web_types_icon_dynamic.svg" alt="" rel="preload"></button></center>
                    <p class="text-white text-center mt-4">Web Dinamis</p>
                </div>
            </div>
        </div>
        <div class="w-3/5 md:flex justify-end">
            <div class="md:w-48 h-full rounded-3xl custom-color p-9 mr-7 flex flex-col justify-center">
                <router-link to="" class="text-white text-base hover:underline">Lihat Selengkapnya <img src="../assets/images/arrow_white.svg" rel="preload" alt=""> </router-link>
            </div>
            <div class="md:flex flex-wrap flex-col justify-between w-custom h-full">
                <div class="w-60 h-44 bg-black rounded-xl"></div>
                <div class="w-60 h-44 bg-white rounded-xl"></div>
                <div class="w-60 h-44 bg-red-500 rounded-xl"></div>
                <div class="w-60 h-44 bg-blue-500 rounded-xl"></div>
                <div class="w-60 h-44 bg-green-500 rounded-xl"></div>
                <div class="w-60 h-44 bg-yellow-500 rounded-xl"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "HomeSecondBannerSection"
}
</script>

<style scoped>
    .bg-custom {
        background: #152238;
        height: 686px;
    }

    ul {
        list-style-image: url("../assets/images/validation_icon.svg");
    }

    .custom-color {
        background: #283852;
    }

    .w-custom {
        width: 510px;
    }
</style>