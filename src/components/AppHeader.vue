<template>
  <header class="sticky top-0 z-50" style="border-bottom: 1px solid #2a2b2a; background: rgba(15, 15, 15, 0.86); backdrop-filter: blur(6px);">
    <div class="border-b" style="border-bottom-color:#2a2b2a; background: rgba(18, 18, 18, 0.75);">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div class="mono text-[0.7rem] text-[#a0a0a0] flex items-center justify-between gap-3">
          <span>[user@hostname]</span>
          <span>[uptime: 14d] [load: 0.8] [tty: 1]</span>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="mono text-[#e0e0e0] text-xs"
              style="background: transparent; border: 1px solid #2a2b2a; height: 28px; padding: 0 10px;"
              @click="emit('scrollToTop')"
            >
              $ alexvoste@bare-metal:~
            </button>
          </div>
        </div>

        <nav class="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href="https://blog.alexvoste.dev"
            target="_blank"
            class="nav-link mono"
          >
            <span class="nav-arrow">></span>
            <span>blog</span>
          </a>
          <a
            href="mailto:contact@alexvoste.dev"
            class="nav-link mono"
          >
            <span class="nav-arrow">></span>
            <span>email</span>
          </a>
          <a
            href="#about"
            class="nav-link mono"
            @click.prevent="emit('scrollToSection', 'about')"
          >
            <span class="nav-arrow">></span>
            <span>about</span>
          </a>
          <a
            href="#forgezero"
            class="nav-link mono"
            @click.prevent="emit('scrollToSection', 'forgezero')"
          >
            <span class="nav-arrow">></span>
            <span>forgezero</span>
          </a>
          <a
            href="#forgezero-benchmark"
            class="nav-link mono"
            @click.prevent="emit('scrollToSection', 'forgezero-benchmark')"
          >
            <span class="nav-arrow">></span>
            <span>benchmark</span>
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(['scrollToTop', 'scrollToSection'])
</script>

<style scoped>
.nav-link {
  font-size: 0.7rem;
  text-decoration: none;
  color: #a0a0a0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
}

.nav-arrow {
  width: 10px;
  text-align: center;
  color: #707070;
  font-size: 0.8rem;
}

.nav-link:hover {
  color: #4a6a8a;
}

.nav-link:focus-visible {
  outline: 1px solid #3a3b3a;
  outline-offset: 2px;
}
</style>

