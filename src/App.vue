<template>
  <div class="min-h-screen" style="background-color: var(--hokusai-bg)">
    <header class="sticky top-0 z-50 backdrop-blur-sm" style="background-color: rgba(245, 240, 229, 0.95); border-bottom: 1px solid rgba(175, 200, 220, 0.2)">
      <div class="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex items-center gap-4">
          <img
            src="/src/assets/avatar.png"
            alt="AlexVoste Avatar"
            class="w-12 h-12 rounded-full shadow-md"
            style="background-color: var(--hokusai-content); border: 2px solid var(--hokusai-accent)"
          >
          <div>
            <h1 class="text-2xl font-bold" style="color: var(--hokusai-heading); font-family: 'Inter', sans-serif">
              AlexVoste
            </h1>
            <p class="text-xs" style="color: var(--hokusai-text); letter-spacing: 0.15em">
              systems engineering · low-level · privacy-first
            </p>
          </div>
        </div>

        <nav class="flex flex-wrap gap-6 text-sm" style="color: var(--hokusai-text)">
          <a href="https://github.com/alexvoste" target="_blank" rel="noreferrer" class="link-hover">GitHub</a>
          <a href="https://t.me/alexvoste" target="_blank" rel="noreferrer" class="link-hover">Telegram</a>
          <a href="https://blog.alexvoste.dev" target="_blank" rel="noreferrer" class="link-hover">Blog</a>
          <a href="mailto:contact@alexvoste.dev" class="link-hover">Email</a>
          <a href="#about" class="link-hover">About</a>
        </nav>
      </div>
    </header>

    <main>
      <HeroSection />
      <AboutSection />
      <PrimaryTechnicalFocus />
      <ForgeZeroSection />
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
</script>
