<template>
    <div class="md:flex h-screen">
        <div class="w-2/5 h-full pt-32 pl-16 pr-32">
            <h1 class="text-5xl font-bold mb-5">Masuk</h1>
            <p class="text-gray-400 mb-2">Masuk menggunakan email dan password yang sudah kamu buat. Belum memiliki akun ?</p>
            <router-link class="md:flex w-max mb-16 text-custom" to="/register">Daftar Disini <img class="pl-2" src="../assets/images/arrow_right_blue.svg" alt=""> </router-link>
            <div class="form">
                <p class="font-medium mb-2">Email Address<span class="text-red-700">*</span></p>
                <input type="email" class="border-2 border-gray-300 rounded-full py-2 pl-4 w-full mb-6" placeholder="email">
                <p class="font-medium mb-2">Password<span class="text-red-700">*</span></p>
                <input type="password" class="border-2 border-gray-300 rounded-full py-2 pl-4 w-full" placeholder="password">
                <br>
                <div class="md:flex justify-between my-6">
                    <div>
                        <input class="w-4 h-4 bg-gray-600 border-red-600" type="checkbox" id="checkbox">
                        <label class="font-medium pl-4" for="checkbox">Remember me</label>
                    </div>
                    <router-link class="text-gray-400" to="">Forgot Password?</router-link>
                </div>
                <button class="py-2 w-full rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium">Masuk</button>
            </div>
        </div>
        <div class="w-3/5 h-full bg-gray-300 bg-image"></div>
    </div>
</template>

<script>
export default {
    name : "LoginView"
}
</script>

<style scoped>
.text-custom {
    color: #3D67D2;
}

.bg-image {
    background: url("../assets/images/right_image.webp");
    background-size: cover;
}
</style>