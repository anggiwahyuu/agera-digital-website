<template>
    <nav class="bg-white text-black md:px-20 md:py-6">
        <div class="flex justify-between items-center md:py-0 md:px-0 py-4 px-6">
            <div class="md:flex items-center">
                <router-link to="/" class="md:w-52 md:mr-12 items-center">
                    <img src="../assets/images/logo_agera.svg" class="md:w-max w-3/4" alt="" rel="preload">
                </router-link>
                <ul class="hidden md:flex md:items-center">
                    <li class="md:mx-4" v-for="item in items" :key="item.id">
                        <router-link :to="item.link" class="text-sm duration-300 md:bg-transparent">{{item.menu}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="hidden md:flex ">
                <router-link to="/register"><button class="bg-gray-200 hover:bg-blue-500 hover:text-white duration-300 font-sm text-black rounded-full py-2 px-8">Daftar</button></router-link>
                <router-link to="/login"><button class="bg-blue-500 hover:bg-blue-700 duration-300 font-sm text-white rounded-full py-2 px-8 md:ml-4">Masuk</button></router-link>
            </div>
            <div class="md:hidden cursor-pointer block">
                <button class="cursor-pointer hover:bg-gray-100 rounded-xl duration-200" v-on:click="toggleNavbar()">
                    <svg v-bind:class="{'block': !showMenu, 'hidden': showMenu}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-gray-500">
                        <path fill-rule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                    <svg v-bind:class="{'hidden': !showMenu, 'block': showMenu}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
        <div v-bind:class="{'max-h-0': !showMenu, 'max-h-96': showMenu}" class="md:hidden bg-gray-50 px-10 duration-300 overflow-hidden transition-all">
            <ul class="md:hidden md:items-center">
                <li class="py-2 router-responsive hover:bg-gray-100" v-for="item in items" :key="item.id">
                    <router-link :to="item.link" class="text-sm duration-300 md:bg-transparent">{{item.menu}}</router-link>
                </li>
            </ul>
            <div class="md:hidden block mt-4">
                <router-link to="/register"><button class="bg-gray-200 hover:bg-blue-500 hover:text-white duration-300 font-sm text-black rounded-full w-full py-1 px-6 mr-4">Daftar</button></router-link> <br>
                <router-link to="/login"><button class="bg-blue-500 hover:bg-blue-700 duration-300 font-sm text-white rounded-full w-full py-1 px-6 my-4">Masuk</button></router-link>
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
            ],

            showMenu: false,
        }
    },
    methods: {
        toggleNavbar: function(){
            this.showMenu = !this.showMenu;
        }
    },
}
</script>