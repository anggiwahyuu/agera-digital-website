<template>
    <nav class="bg-white text-black md:px-20 md:py-6">
        <div class="flex justify-between items-center">
            <div class="md:flex items-center">
                <router-link to="/" class="w-52 mr-12 items-center">
                    <img src="../assets/images/logo_agera.svg" alt="" rel="preload">
                </router-link>
                <ul class="hidden md:flex md:items-center">
                    <li class="md:mx-4" v-for="item in items" :key="item.id">
                        <router-link :to="item.link" class="text-sm duration-300">{{item.menu}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="hidden md:flex">
                <router-link to="/register"><button class="bg-gray-200 hover:bg-blue-500 hover:text-white duration-300 font-sm text-black rounded-full py-2 px-8 mr-4">Daftar</button></router-link>
                <router-link to="/login"><button class="bg-blue-500 hover:bg-blue-700 duration-300 font-sm text-white rounded-full py-2 px-8">Masuk</button></router-link>
            </div>

            <div class="md:hidden flex items-center">
                <button @click="showMobileMenu = !showMobileMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-14 text-gray-500">
                        <path fill-rule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
        <div v-show="showMobileMenu">
            <ul class="md:hidden">
                <li class="md:mx-4" v-for="item in items" :key="item.id">
                    <router-link :to="item.link" class="text-sm duration-300">{{item.menu}}</router-link>
                </li>
            </ul>
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

<script setup>
import { ref } from "vue"

const showMobileMenu = ref(false)
</script>