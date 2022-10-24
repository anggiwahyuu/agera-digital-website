<template>
    <div class="mt-32">
        <div class="md:flex mx-24 my-14">
            <div>
                <img class="w-11/12" src="../assets/images/logo_agera.svg" alt="">
            </div>
            <ul class="ml-32">
                <li class="text-black font-medium text-base">Navigasi</li>
                <li class="text-xs text-softblue mt-4 hover:underline">
                    <router-link to="/">Layanan Kami</router-link>
                </li>
                <li class="text-xs text-softblue mt-2 hover:underline">
                    <router-link to="/">Partner Kami</router-link>
                </li>
                <li class="text-xs text-softblue mt-2 hover:underline">
                    <router-link to="/">Karya Kami</router-link>
                </li>
            </ul>
            <ul class="ml-32">
                <li class="text-black font-medium text-base">Bantuan</li>
                <li class="text-xs text-softblue mt-4 hover:underline">
                    <router-link to="/">Konsultasi</router-link>
                </li>
                <li class="text-xs text-softblue mt-2 hover:underline">
                    <router-link to="/">FAQ</router-link>
                </li>
                <li class="text-xs text-softblue mt-2 hover:underline">
                    <router-link to="/">Tentang Kami</router-link>
                </li>
                <li class="text-xs text-softblue mt-2 hover:underline">
                    <router-link to="/">Pembayaran</router-link>
                </li>
            </ul>
            <ul class="ml-32">
                <li class="text-black font-medium text-base">Member Area</li>
                <li class="text-xs text-softblue mt-4 hover:underline">
                    <router-link to="/">Hak Pembeli Jasa</router-link>
                </li>
                <li class="text-xs text-softblue mt-2 hover:underline">
                    <router-link to="/">Hak Tim Agera Digital</router-link>
                </li>
                <li class="text-xs text-softblue mt-2 hover:underline">
                    <router-link to="/">Kewajiban & Hak Jaminan</router-link>
                </li>
            </ul>
        </div>
        <div class="text-xs text-center text-softblue flex flex-col justify-center h-14 border-t mx-24">
            <p>Copyright &copy; 2022 Agera Digital</p>
        </div>
    </div>
</template>

<script>
export default {
    name : "FooterSection"
}
</script>