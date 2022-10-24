<template>
  <div class="home">
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
import HomeHeader from "@/components/HomeHeader.vue"
import HomeFirstSection from "@/components/HomeFirstSection.vue"
import HomeSecondSection from "@/components/HomeSecondSection.vue"
import HomeFirstBannerSection from "@/components/HomeFirstBannerSection.vue"
import HomeSecondBannerSection from "@/components/HomeSecondBannerSection.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
  name: 'HomeView',
  components: {
    HomeHeader, 
    HomeFirstSection,
    HomeSecondSection,
    HomeFirstBannerSection,
    HomeSecondBannerSection,
    FooterSection
  }
}
</script>
