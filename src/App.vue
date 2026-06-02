<template>
  <div>
    <header class="sticky top-0 z-50 backdrop-blur-md" style="background-color: rgba(20, 21, 20, 0.9); border-bottom: 1px solid #2a2b2a;">
      <div class="max-w-5xl mx-auto px-6 py-4">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <span class="text-[#EC8254] font-mono text-xl font-bold">$</span>
            <span class="text-[#e5e0c7] font-mono text-sm tracking-tight">alexvoste@bare-metal:~</span>
          </div>

          <nav class="flex gap-6">
            <a href="https://blog.alexvoste.dev" target="_blank" rel="noreferrer" class="nav-link">blog</a>
            <a href="mailto:contact@alexvoste.dev" class="nav-link">email</a>
            <a href="#about" class="nav-link">about</a>
            <a href="#forgezero" class="nav-link">forgezero</a>
            <a href="#forgezero-benchmark" class="nav-link">benchmark</a>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <HeroSection />
      <AboutSection />
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
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import PrimaryTechnicalFocus from './components/PrimaryTechnicalFocus.vue'
import ForgeZeroSection from './components/ForgeZeroSection.vue'
import LinksSection from './components/LinksSection.vue'
import Footer from './components/Footer.vue'
import ForgeZeroSpeed from './components/ForgeZeroSpeed.vue'
import DiplomaSection from './components/StudySection.vue'
</script>

<style scoped>
.nav-link {
  color: #b8b29a;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  text-decoration: none;
  transition: all 0.2s ease;
  text-transform: lowercase;
}

.nav-link:hover {
  color: #EC8254;
}
</style>
