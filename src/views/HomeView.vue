<template>
  <div class="home">
    <nav-bar/>
    <home-header/>
    <home-first-section/>
    <home-second-section/>
    <home-first-banner-section/>
    <home-second-banner-section/>
    <footer-section/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue"
import HomeHeader from "@/components/HomeHeader.vue"
import HomeFirstSection from "@/components/HomeFirstSection.vue"
import HomeSecondSection from "@/components/HomeSecondSection.vue"
import HomeFirstBannerSection from "@/components/HomeFirstBannerSection.vue"
import HomeSecondBannerSection from "@/components/HomeSecondBannerSection.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
  name: 'HomeView',
  components: {
    NavBar,
    HomeHeader, 
    HomeFirstSection,
    HomeSecondSection,
    HomeFirstBannerSection,
    HomeSecondBannerSection,
    FooterSection
  }
}
</script>
