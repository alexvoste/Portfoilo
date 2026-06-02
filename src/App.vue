<template>
  <div class="app-container">
    <AppHeader @scroll-to-top="scrollToTop" @scroll-to-section="scrollToSection" />
    
    <main class="relative">
      <ScrollIndicator />
      <BackgroundSection />
      <HeroSection />
      <AboutSection />
      <HistorySection />
      <TerminalSection />
      <DiplomaSection />
      <PrimaryTechnicalFocus />
      <ForgeZeroSection />
      <ForgeZeroSpeed />
      <LinksSection />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import ScrollIndicator from './components/ScrollIndicator.vue'
import BackgroundSection from './components/BackgroundSection.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import PrimaryTechnicalFocus from './components/PrimaryTechnicalFocus.vue'
import ForgeZeroSection from './components/ForgeZeroSection.vue'
import LinksSection from './components/LinksSection.vue'
import Footer from './components/Footer.vue'
import ForgeZeroSpeed from './components/ForgeZeroSpeed.vue'
import DiplomaSection from './components/StudySection.vue'
import HistorySection from './components/HistorySection.vue'
import TerminalSection from './components/TerminalSection.vue'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.app-container {
  position: relative;
  background: #0a0b0a;
}
</style>
