<template>
  <section id="hero" class="section-animate min-h-screen flex items-center">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <div class="relative">
        <div class="absolute -top-8 -left-8 w-24 h-24 border-l-2 border-t-2 border-[#EC8254]/30 hidden lg:block"></div>
        <div class="absolute -bottom-8 -right-8 w-24 h-24 border-r-2 border-b-2 border-[#EC8254]/30 hidden lg:block"></div>
        
        <div class="content-card relative overflow-hidden" style="background: rgba(30, 31, 30, 0.8); backdrop-filter: blur(0px); border: 1px solid #2a2b2a;">
          <div class="absolute top-0 right-0 w-64 h-64 bg-[#EC8254]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12">
            <div class="flex flex-col justify-center items-center lg:items-start order-2 lg:order-1">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-[#EC8254] to-[#EC8254]/50 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <img
                  src="/src/assets/avatar.png"
                  alt="AlexVoste Avatar"
                  class="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full shadow-2xl mb-6 sm:mb-8 transition-transform duration-300 group-hover:scale-105"
                  style="background-color: #0d0e0d; border: 3px solid #EC8254; object-fit: cover"
                >
              </div>
              
              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center lg:text-left" style="color: #e5e0c7; font-family: 'Inter', sans-serif; letter-spacing: -0.02em;">
                alexvoste
              </h1>
              
              <div class="flex items-center gap-3 mb-6">
                <span class="text-xs sm:text-sm uppercase tracking-[0.15em]" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace;">
                  go · systems · low-level · privacy
                </span>
                <span class="led-green w-2 h-2"></span>
              </div>
              
              <div class="flex gap-3 mt-4">
                <span class="trackpoint"></span>
                <span class="trackpoint"></span>
                <span class="trackpoint"></span>
              </div>
            </div>

            <div class="flex flex-col justify-center order-1 lg:order-2">
              <div class="mb-4">
                <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EC8254]/10 border border-[#EC8254]/20">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#EC8254] animate-pulse"></span>
                  <span class="text-xs font-mono text-[#EC8254]">STATUS: BUILDING</span>
                </span>
              </div>
              
              <p class="text-sm sm:text-base lg:text-lg mb-4" style="color: #e5e0c7; font-family: 'JetBrains Mono', monospace; line-height: 1.7;">
                <span class="text-[#EC8254]">$&nbsp;</span>whoami
              </p>
              
              <p class="text-sm sm:text-base mb-4 leading-relaxed" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.8;">
                yo. i'm alexvoste — <span class="text-[#e5e0c7] font-semibold">Go developer</span> with a low-level soul.
              </p>
              
              <p class="text-sm sm:text-base mb-6 leading-relaxed" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.8;">
                building <span class="text-[#EC8254]">ForgeZero</span> — open-source build system for C/asm, written in Go. 
                contributing to <span class="text-[#EC8254]">NASM</span> (AVX512-FP16) and <span class="text-[#EC8254]">Limine</span> (EFI handover). 
                i speak <span class="text-[#e5e0c7] font-semibold">Go, C, and assembly</span> fluently.
              </p>
              
              <div class="flex flex-wrap gap-3 pt-2 border-t border-[#2a2b2a]">
                <div class="flex items-center gap-2">
                  <span class="led-red w-1.5 h-1.5"></span>
                  <span class="text-[0.7rem] font-mono text-[#7a7563]">open-source or die</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="led-green w-1.5 h-1.5"></span>
                  <span class="text-[0.7rem] font-mono text-[#7a7563]">fast</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="led-green w-1.5 h-1.5"></span>
                  <span class="text-[0.7rem] font-mono text-[#7a7563]">secure</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="led-green w-1.5 h-1.5"></span>
                  <span class="text-[0.7rem] font-mono text-[#7a7563]">auditable</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="divider my-8 lg:my-12"></div>

        <div class="content-card group transition-all duration-300 hover:border-[#EC8254]/50" style="padding: 1.5rem sm:p-2rem lg:p-8; background: #1e1f1e; border: 1px solid #2a2b2a;">
          <div class="flex items-start gap-4">
            <div class="hidden sm:block text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-300">“</div>
            <div class="flex-1">
              <p class="quote-text text-sm sm:text-base lg:text-lg mb-3 text-center sm:text-left" style="color: #EC8254; font-style: italic;">
                “The computer is not the product. The product is what you build with it.”
              </p>
              <p class="text-xs sm:text-sm text-center sm:text-right" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; letter-spacing: 0.05em;">
                — alexvoste / ForgeZero
              </p>
            </div>
            <div class="hidden sm:block text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-300 self-end">”</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.content-card {
  border-radius: 24px;
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

.content-card:hover {
  border-color: #EC8254;
  transform: translateY(-2px);
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse-slow 2s ease-in-out infinite;
}

.led-green {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2ecc71;
  box-shadow: 0 0 6px #2ecc71;
  animation: led-blink 2s step-start infinite;
}

.led-red {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #da3e1a;
  box-shadow: 0 0 4px #da3e1a;
}

.trackpoint {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #da3e1a;
  box-shadow: 0 0 4px #da3e1a;
  transition: transform 0.2s ease;
}

.trackpoint:hover {
  transform: scale(1.3);
}

@keyframes led-blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

@media (max-width: 640px) {
  .content-card {
    border-radius: 16px;
  }
}
</style>
