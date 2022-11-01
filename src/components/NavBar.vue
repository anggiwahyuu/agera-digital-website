<template>
    <nav class="bg-white text-black px-20 py-6">
        <div class="md:flex justify-between items-center">
            <div class="md:flex">
                <router-link to="/" class="mr-12">
                    <img src="../assets/images/logo_agera.svg" alt="">
                </router-link>
                <ul class="md:flex md:items-center">
                    <li class="md:mx-4" v-for="item in items" :key="item.id">
                        <router-link :to="item.link" class="text-sm duration-300">{{item.menu}}</router-link>
                    </li>
                </ul>
            </div>
            <div>
                <router-link to="/register"><button class="bg-gray-200 hover:bg-blue-500 hover:text-white duration-300 font-sm text-black rounded-full py-2 px-8 mr-4">Daftar</button></router-link>
                <router-link to="/login"><button class="bg-blue-500 hover:bg-blue-700 duration-300 font-sm text-white rounded-full py-2 px-8">Masuk</button></router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name : "NavBar",

    data(){
        return {
            items: [
                {menu: "Program", link: "/"},
                {menu: "Mentor", link: "/mentor"},
                {menu: "Pricing", link: "/pricing"},
                {menu: "Business", link: "/business"},
            ]
        }
    }
}
</script>