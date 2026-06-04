<template>
  <header class="sticky top-0 z-50 bg-[#07080a]/80">
    <div class="border-b-[1px] border-[#1f2128]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mono text-[0.7rem] text-[#8f94a0] flex items-center justify-between gap-3 py-1">
          <span class="lowercase">[user@hostname]</span>
          <span class="lowercase">[uptime: 14d] [load: 0.8] [tty: 1]</span>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-4 py-3 sm:py-4">
        <button
          type="button"
          class="mono text-xs text-[#dcdfe5] border-[1px] border-[#1f2128] bg-transparent h-7 px-3 flex items-center lowercase transition-all duration-75 hover:border-[#48698a]"
          @click="emit('scrollToTop')"
        >
          $ alexvoste@bare-metal:~
        </button>

        <nav class="flex items-center gap-5">
          <a
            href="/blog"
            class="nav-link"
          >
            <span class="nav-arrow">></span>
            <span class="lowercase">blog</span>
          </a>
          <a
            href="/projects"
            class="nav-link"
          >
            <span class="nav-arrow">></span>
            <span class="lowercase">projects</span>
          </a>
          <a
            href="#about"
            class="nav-link"
            @click.prevent="emit('scrollToSection', 'about')"
          >
            <span class="nav-arrow">></span>
            <span class="lowercase">about</span>
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
  color: #8f94a0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  transition: color 75ms linear;
}

.nav-arrow {
  width: 10px;
  text-align: center;
  color: #1f2128;
  font-size: 0.8rem;
}

.nav-link:hover {
  color: #48698a;
}

.nav-link:focus-visible {
  outline: 1px solid #1f2128;
  outline-offset: 2px;
}
</style>


