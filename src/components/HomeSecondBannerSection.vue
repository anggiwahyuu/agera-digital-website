<template>
    <div class="md:flex md:mx-10 my-24 mx-4 rounded-3xl md:p-10 py-16 px-5 bg-custom h-auto">
        <div class="md:w-2/5 md:pl-4 md:pt-6">
            <h3 class="text-gray-400 md:text-left text-center font-semibold text-base">BUILT FOR ENTERPRISE</h3>
            <h2 class="text-white md:text-left text-center font-semibold text-3xl leading-normal md:w-4/5">Karya yang Sudah Kita Selesaikan</h2>
            <ul class="text-white text-base pl-6 mt-10">
                <li class="pl-8">Dibuat menggunakan teknologi terbaru</li>
                <li class="pl-8 mt-2">Responsive Website</li>
                <li class="pl-8 mt-2">Loading Website yang cepat</li>
                <li class="pl-8 mt-2">Desain UI/UX yang baik</li>
                <li class="pl-8 mt-2">CMSW yang mudah digunakan</li>
                <li class="pl-8 mt-2">Bisa request sistem</li>
            </ul>
            <div class="flex flex-row items-center mt-16 md:w-56">
                <div class="m-0 m-auto">
                    <center><button class="custom-color hover:bg-black duration-300 rounded-2xl px-2 py-2"><img src="../assets/images/web_types_icon_static.svg" alt="" rel="preload"></button></center>
                    <p class="text-white text-center mt-4">Web Statis</p>
                </div>
                <div class="md:ml-8 m-0 m-auto">
                    <center><button class="custom-color hover:bg-black duration-300 rounded-2xl px-2 py-2"><img src="../assets/images/web_types_icon_dynamic.svg" alt="" rel="preload"></button></center>
                    <p class="text-white text-center mt-4">Web Dinamis</p>
                </div>
            </div>
        </div>
        <div class="md:w-3/5 md:flex justify-end">
            <div class="md:w-48 w-full h-full rounded-3xl custom-color p-9 mr-7 flex flex-col items-center justify-center md:my-0 my-24">
                <router-link to="" class="text-white text-base md:text-left text-center hover:underline">Lihat Selengkapnya <img src="../assets/images/arrow_white.svg" rel="preload" alt=""> </router-link>
            </div>
            <div class="md:flex md:flex-wrap md:flex-row justify-between h-full">
                <div class="md:w-72 md:h-48 w-full h-56 bg-black rounded-xl md:mb-6 mb-8"></div>
                <div class="md:w-72 md:h-48 w-full h-56 bg-white rounded-xl md:mb-6 mb-8"></div>
                <div class="md:w-72 md:h-48 w-full h-56 bg-red-500 rounded-xl md:mb-6 mb-8"></div>
                <div class="md:w-72 md:h-48 w-full h-56 bg-blue-500 rounded-xl md:mb-6 mb-8"></div>
                <div class="md:w-72 md:h-48 w-full h-56 bg-green-500 rounded-xl md:mb-0 mb-8"></div>
                <div class="md:w-72 md:h-48 w-full h-56 bg-yellow-500 rounded-xl md:mb-0"></div>
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
        /* height: 686px; */
    }

    ul {
        list-style-image: url("../assets/images/validation_icon.svg");
    }

    .custom-color {
        background: #283852;
    }
</style>