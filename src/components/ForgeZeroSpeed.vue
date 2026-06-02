<template>
  <section id="forgezero-benchmark" class="section-animate">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div class="content-card p-4 sm:p-6 md:p-8 lg:p-12">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div class="w-full lg:w-1/2">
            <img 
              src="/src/assets/bench2.jpg" 
              alt="forgezero vs ninja benchmark chart"
              class="w-full h-auto"
              style="display: block;"
            >
            <p class="text-center text-gray-500 font-mono text-xs mt-3">
              forgezero (308ms) vs ninja (2035ms) — lower is better
            </p>
          </div>

          <div class="w-full lg:w-1/2">
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-2" style="color: var(--hokusai-heading); font-family: 'Inter', sans-serif;">
              forgezero vs ninja
            </h2>
            <p class="text-gray-500 font-mono text-xs sm:text-sm mb-6">
              1000 asm modules · 8 threads · i5-10210U
            </p>

            <div class="bg-[#1a1b1a] rounded-2xl p-4 sm:p-5 border border-[#3a3a35] mb-6">
              <div class="flex justify-between items-baseline mb-2">
                <span class="text-[#EC8254] font-bold text-2xl sm:text-3xl lg:text-4xl">308.7</span>
                <span class="text-[#b8b29a] font-mono text-xs sm:text-sm">ms · forgezero</span>
              </div>
              <div class="h-1.5 sm:h-2 bg-[#2a2b2a] rounded-full mb-4 sm:mb-5 overflow-hidden">
                <div class="w-[15%] h-full bg-[#EC8254] rounded-full"></div>
              </div>

              <div class="flex justify-between items-baseline mb-2">
                <span class="text-[#b8b29a] font-bold text-xl sm:text-2xl lg:text-3xl">2,035</span>
                <span class="text-[#7a7563] font-mono text-xs sm:text-sm">ms · ninja</span>
              </div>
              <div class="h-1.5 sm:h-2 bg-[#2a2b2a] rounded-full overflow-hidden">
                <div class="w-full h-full bg-[#555] rounded-full"></div>
              </div>

              <div class="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-[#3a3a35]">
                <div class="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#EC8254]">6.59x</div>
                <div class="text-[#e5e0c7] font-mono text-xs sm:text-sm">faster than ninja</div>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bg-[#1a1b1a] border border-[#3a3a35] rounded-full px-2 sm:px-3 py-1 font-mono text-[0.65rem] sm:text-xs text-[#b8b29a]">system: 301ms vs 4150ms</span>
              <span class="bg-[#1a1b1a] border border-[#3a3a35] rounded-full px-2 sm:px-3 py-1 font-mono text-[0.65rem] sm:text-xs text-[#b8b29a]">no fork/exec spam</span>
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-8 bg-[#1a1b1a] rounded-xl p-3 sm:p-4 border-l-4 border-[#EC8254]">
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-start sm:items-center">
            <div>
              <div class="text-gray-500 font-mono text-[0.65rem] sm:text-xs">arch linux · zen kernel · alacritty</div>
              <div class="text-[#e5e0c7] font-mono text-xs sm:text-sm">latitude 5410 · 8 threads @ 1.7ghz</div>
            </div>
            <a href="https://github.com/alexvoste/forgezero" target="_blank" class="text-[#EC8254] font-mono text-[0.65rem] sm:text-xs uppercase tracking-wider hover:opacity-80 transition">
              github →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
