<template>
    <div class="md:flex h-screen">
        <div class="w-2/5 h-full pt-20 pl-16 pr-32">
            <h1 class="text-5xl font-bold mb-5">Daftar</h1>
            <p class="text-gray-400 mb-2">Daftar menggunakan email dan password. Sudah punya akun ?</p>
            <router-link class="md:flex w-max mb-16 text-custom" to="/login">Masuk Disini <img class="pl-2" src="../assets/images/arrow_right_blue.svg" alt=""> </router-link>
            <div class="form">
                <p class="font-medium mb-2">Email Address<span class="text-red-700">*</span></p>
                <input type="email" class="border-2 border-gray-300 rounded-full py-2 pl-4 w-full mb-6" placeholder="email">
                <p class="font-medium mb-2">Password<span class="text-red-700">*</span></p>
                <input type="password" class="border-2 border-gray-300 rounded-full py-2 pl-4 w-full mb-6" placeholder="password">
                <p class="font-medium mb-2">Ulangi Password<span class="text-red-700">*</span></p>
                <input type="password" class="border-2 border-gray-300 rounded-full py-2 pl-4 w-full" placeholder="password">
                <br>
                <button class="py-2 w-full rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium mt-10">Masuk</button>
            </div>
        </div>
        <div class="w-3/5 h-full bg-gray-300 bg-image"></div>
    </div>
</template>

<script>
export default {
    name : "RegisterView"
}
</script>

<style scoped>
.text-custom {
    color: #3D67D2;
}

.bg-image {
    background: url("../assets/images/right_image.png");
    background-size: cover;
}
</style>