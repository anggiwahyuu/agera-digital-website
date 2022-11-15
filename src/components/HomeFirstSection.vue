<template>
    <div class="w-full md:mb-0 mb-32">
      <h2 class="font-semibold text-center md:text-xl text-lg md:mx-0 mx-4">Perusahaan yang Mempercayakan Solusi Masalahnya Pada Kami</h2>
      <div class="slider overflow-hidden md:mx-28 mx-2 md:my-16 my-12">
        <div class="flex justify-between animate-track">
          <img class="w-32 animate" src="../assets/images/himawari.png" alt="" rel="preload">
          <img class="w-16 animate" src="../assets/images/logo_taces_black.png" alt="" rel="preload">
          <img class="w-32 animate" src="../assets/images/himawari.png" alt="" rel="preload">
          <img class="w-32 h-5 mt-4 animate" src="../assets/images/logo_reka_black.png" alt="" rel="preload">
          <img class="w-16 animate" src="../assets/images/logo_taces_black.png" alt="" rel="preload">
          <img class="w-32 h-5 mt-4 animate" src="../assets/images/logo_reka_black.png" alt="" rel="preload">
          
          <!-- Duplicate -->
          <img class="w-32 animate" src="../assets/images/himawari.png" alt="" rel="preload">
          <img class="w-16 animate" src="../assets/images/logo_taces_black.png" alt="" rel="preload">
          <img class="w-32 animate" src="../assets/images/himawari.png" alt="" rel="preload">
          <img class="w-32 h-5 mt-4 animate" src="../assets/images/logo_reka_black.png" alt="" rel="preload">
          <img class="w-16 animate" src="../assets/images/logo_taces_black.png" alt="" rel="preload">
          <img class="w-32 h-5 mt-4 animate" src="../assets/images/logo_reka_black.png" alt="" rel="preload">
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name : "HomeFirstSection"
}
</script>

<style scoped>
.slider::before, .slider::after {
  content: "";
  height: 100px;
  position: absolute;
	width: 200px;
	z-index: 2;
}

.slider::after {
	right: 0;
	top: 0;
	transform: rotateZ(180deg);
}

.slider::before {
	left: 0;
	top: 0;
}

@keyframes move {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-237px * 6));
  }
}

.animate-track {
  animation: move 30s linear infinite;
  width: calc(226px * 12);
}

.animate-track:hover {
  animation-play-state: paused;
}
</style>