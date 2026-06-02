<template>
  <section id="diploma" class="section-animate">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
      <div class="relative">
        <div class="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-[#EC8254]/20 rounded-bl-2xl hidden lg:block"></div>
        
        <div class="content-card group relative overflow-hidden" style="background: linear-gradient(135deg, #1a1b1a 0%, #121312 100%); border: 1px solid #2a2b2a;">
          <div class="absolute inset-0 bg-gradient-to-br from-[#EC8254]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <div class="relative p-5 sm:p-8 lg:p-10">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
              <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-[#EC8254] rounded-full"></div>
                <h2 class="text-sm sm:text-base uppercase tracking-[0.3em] font-semibold" style="color: #7a7563; font-family: 'Inter', sans-serif;">
                  /certified_suffering
                </h2>
              </div>
              <div class="flex gap-2">
                <span class="led-red w-2 h-2"></span>
                <span class="text-[0.65rem] font-mono text-[#7a7563]">verified</span>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(236,130,84,0.15)]">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
              
              <img 
                src="/src/assets/diploma.jpg" 
                alt="ForgeZero Academy Diploma - Master of Bare-Metal Suffering"
                class="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                style="filter: brightness(0.95) contrast(1.05);"
              >
              
              <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20">
                <p class="text-xs sm:text-sm font-mono text-[#EC8254] text-center tracking-wider">
                  master of bare-metal suffering · est. 2024
                </p>
              </div>
            </div>

            <div class="mt-6 sm:mt-8 flex justify-center">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full" style="background: #0d0e0d; border: 1px solid #2a2b2a;">
                <span class="trackpoint-small"></span>
                <span class="text-[0.65rem] font-mono text-[#7a7563] uppercase tracking-wider">not a real diploma, but it should be</span>
                <span class="trackpoint-small"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.section-animate {
  animation: fadeUp 0.65s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
  opacity: 0;
  transform: translateY(16px);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-card {
  border-radius: 28px;
  transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

.content-card:hover {
  border-color: #EC8254;
  transform: translateY(-3px);
  box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.6);
}

.led-red {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #da3e1a;
  box-shadow: 0 0 4px #da3e1a;
  animation: led-pulse 2s ease-in-out infinite;
}

.trackpoint-small {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #da3e1a;
  box-shadow: 0 0 3px #da3e1a;
  vertical-align: middle;
}

@keyframes led-pulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 4px #da3e1a;
  }
  50% {
    opacity: 0.6;
    box-shadow: 0 0 8px #da3e1a;
  }
}

@media (max-width: 640px) {
  .content-card {
    border-radius: 20px;
  }
}
</style>
