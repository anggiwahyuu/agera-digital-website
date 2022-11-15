<template>
    <div class="md:mt-32 mt-48">
        <div class="md:flex md:mx-24 md:my-14 mx-10">
            <div>
                <img class="md:w-full" src="../assets/images/logo_agera.svg" alt="" rel="preload">
            </div>
            <ul class="md:ml-32 md:mt-0 mt-16">
                <li class="text-black font-medium md:text-lg text-base">Navigasi</li>
                <li class="md:text-base text-sm text-softblue mt-4 hover:underline">
                    <router-link to="/">Layanan Kami</router-link>
                </li>
                <li class="md:text-base text-sm text-softblue mt-2 hover:underline">
                    <router-link to="/">Partner Kami</router-link>
                </li>
                <li class="md:text-base text-sm text-softblue mt-2 hover:underline">
                    <router-link to="/">Karya Kami</router-link>
                </li>
            </ul>
            <ul class="md:ml-32 md:mt-0 mt-16">
                <li class="text-black font-medium md:text-lg text-base">Bantuan</li>
                <li class="md:text-base text-sm text-softblue mt-4 hover:underline">
                    <router-link to="/">Konsultasi</router-link>
                </li>
                <li class="md:text-base text-sm text-softblue mt-2 hover:underline">
                    <router-link to="/">FAQ</router-link>
                </li>
                <li class="md:text-base text-sm text-softblue mt-2 hover:underline">
                    <router-link to="/">Tentang Kami</router-link>
                </li>
                <li class="md:text-base text-sm text-softblue mt-2 hover:underline">
                    <router-link to="/">Pembayaran</router-link>
                </li>
            </ul>
            <ul class="md:ml-32 md:mt-0 mt-16">
                <li class="text-black font-medium md:text-lg text-base">Member Area</li>
                <li class="md:text-base text-sm text-softblue mt-4 hover:underline">
                    <router-link to="/">Hak Pembeli Jasa</router-link>
                </li>
                <li class="md:text-base text-sm text-softblue mt-2 hover:underline">
                    <router-link to="/">Hak Tim Agera Digital</router-link>
                </li>
                <li class="md:text-base text-sm text-softblue mt-2 hover:underline">
                    <router-link to="/">Kewajiban & Hak Jaminan</router-link>
                </li>
            </ul>
        </div>
        <div class="md:text-base text-sm text-center text-softblue flex flex-col justify-center h-14 border-t md:mx-24 md:mt-0 mt-20 mx-10">
            <p>Copyright &copy; 2022 Agera Digital</p>
        </div>
    </div>
</template>

<script>
export default {
    name : "FooterSection"
}
</script>