<template>
  <header class="sticky top-0 z-50 backdrop-blur-md transition-all duration-300" style="background-color: rgba(20, 21, 20, 0.92); border-bottom: 1px solid #2a2b2a;">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <div class="flex gap-2">
            <a href="https://github.com/alexvoste" target="_blank" class="social-icon">
              <span class="text-xs font-bold">GH</span>
              <span class="tooltip">github</span>
            </a>
            <a href="https://t.me/alexvoste" target="_blank" class="social-icon">
              <span class="text-xs font-bold">TG</span>
              <span class="tooltip">telegram</span>
            </a>
            <a href="mailto:alexvostedev@proton.me" class="social-icon">
              <span class="text-xs font-bold">✉</span>
              <span class="tooltip">email</span>
            </a>
            <a href="https://dev.to/alexvoste" target="_blank" class="social-icon">
              <span class="text-xs font-bold">DEV</span>
              <span class="tooltip">dev.to</span>
            </a>
            <a href="https://discord.gg/alexvoste" target="_blank" class="social-icon">
              <span class="text-xs font-bold">DC</span>
              <span class="tooltip">discord</span>
            </a>
          </div>
          
          <div class="h-6 w-px bg-[#2a2b2a]"></div>
          
          <div class="flex items-center gap-2 group cursor-pointer" @click="emit('scrollToTop')">
            <span class="text-[#EC8254] font-mono text-xl sm:text-2xl font-bold transition-transform duration-300 group-hover:scale-110 inline-block">$</span>
            <span class="text-[#e5e0c7] font-mono text-xs sm:text-sm tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">alexvoste@bare-metal:~</span>
            <span class="led-green w-1.5 h-1.5 ml-1 hidden sm:inline-block"></span>
          </div>
        </div>

        <nav class="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="https://blog.alexvoste.dev" target="_blank" class="nav-link group">
            <span>blog</span>
            <span class="nav-underline"></span>
          </a>
          <a href="mailto:contact@alexvoste.dev" class="nav-link group">
            <span>email</span>
            <span class="nav-underline"></span>
          </a>
          <a href="#about" class="nav-link group" @click.prevent="emit('scrollToSection', 'about')">
            <span>about</span>
            <span class="nav-underline"></span>
          </a>
          <a href="#forgezero" class="nav-link group" @click.prevent="emit('scrollToSection', 'forgezero')">
            <span>forgezero</span>
            <span class="nav-underline"></span>
          </a>
          <a href="#forgezero-benchmark" class="nav-link group" @click.prevent="emit('scrollToSection', 'forgezero-benchmark')">
            <span>benchmark</span>
            <span class="nav-underline"></span>
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
  color: #b8b29a;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  text-decoration: none;
  transition: color 0.2s ease;
  text-transform: lowercase;
  letter-spacing: 0.02em;
  position: relative;
}

.nav-link:hover {
  color: #EC8254;
}

.nav-underline {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #EC8254;
  transition: width 0.2s ease;
}

.nav-link:hover .nav-underline {
  width: 100%;
}

.social-icon {
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #1a1b1a;
  border: 1px solid #2a2b2a;
  color: #b8b29a;
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

.social-icon:hover {
  border-color: #EC8254;
  color: #EC8254;
  transform: translateY(-2px);
}

.tooltip {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  margin-top: 6px;
  padding: 4px 8px;
  background: #1a1b1a;
  border: 1px solid #2a2b2a;
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55rem;
  color: #b8b29a;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 60;
}

.social-icon:hover .tooltip {
  opacity: 1;
}

.led-green {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #2ecc71;
  box-shadow: 0 0 4px #2ecc71;
  animation: led-blink 2s step-start infinite;
}

@keyframes led-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

header {
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

header:hover {
  background-color: rgba(20, 21, 20, 0.98);
  border-bottom-color: #EC8254;
}

@media (max-width: 768px) {
  .social-icon {
    width: 28px;
    height: 28px;
  }
  .tooltip {
    display: none;
  }
}
</style>
