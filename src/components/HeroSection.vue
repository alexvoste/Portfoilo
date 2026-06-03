<template>
  <section id="hero" class="section-animate min-h-screen flex items-center">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <div class="relative">
        <div class="absolute -top-8 -left-8 w-24 h-24 border-l-2 border-t-2 border-[#4a6a8a]/25 hidden lg:block"></div>
        <div class="absolute -bottom-8 -right-8 w-24 h-24 border-r-2 border-b-2 border-[#4a6a8a]/25 hidden lg:block"></div>


        <div class="content-card relative overflow-hidden" style="background: rgba(30, 31, 30, 0.8); backdrop-filter: blur(0px); border: 1px solid #2a2b2a;">
          <div class="absolute top-0 right-0 w-64 h-64 bg-[#4a6a8a]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12">
            <div class="flex flex-col justify-center items-center lg:items-start order-2 lg:order-1">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-[#4a6a8a] to-[#4a6a8a]/50 rounded-full blur opacity-0 group-hover:opacity-15 transition duration-500"></div>
                <img
                  src="/src/assets/avatar.png"
                  alt="AlexVoste Avatar"
                  class="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-none mb-6 sm:mb-8"
                  style="background-color: #0d0e0d; border: 1px solid #4a6a8a; object-fit: cover"
                >
              </div>

              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center lg:text-left" style="color: #e0e0e0; font-family: 'IBM Plex Sans', 'Inter', sans-serif; letter-spacing: -0.02em;">
                alexvoste
              </h1>

              <div class="flex items-center gap-3 mb-6">
                <span class="text-xs sm:text-sm uppercase tracking-[0.15em]" style="color: #a0a0a0; font-family: 'IBM Plex Mono', monospace;">
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
                <span class="inline-flex items-center gap-2 px-3 py-1" style="background: #1e1f1e; border: 1px solid #2a2b2a;">
                  <span class="w-1.5 h-1.5" style="background:#5a8a5a; border:1px solid rgba(90,138,90,0.35)"></span>
                  <span class="text-xs font-mono" style="color:#5a8a5a;">STATUS: BUILDING</span>
                </span>
              </div>

              <p class="text-sm sm:text-base lg:text-lg mb-4" style="color: #e0e0e0; font-family: 'IBM Plex Mono', monospace; line-height: 1.7;">
                <span style="color:#4a6a8a;">$&nbsp;</span>whoami
              </p>

              <p class="text-sm sm:text-base mb-4 leading-relaxed" style="color: #a0a0a0; font-family: 'IBM Plex Mono', monospace; line-height: 1.8;">
                yo. i'm alexvoste — <span class="text-[#e0e0e0] font-semibold">Go developer</span> with a low-level soul.
              </p>

              <p class="text-sm sm:text-base mb-6 leading-relaxed" style="color: #a0a0a0; font-family: 'IBM Plex Mono', monospace; line-height: 1.8;">
                building <span style="color:#4a6a8a;">ForgeZero</span> — open-source build system for C/asm, written in Go.
                contributing to <span style="color:#4a6a8a;">NASM</span> (AVX512-FP16) and <span style="color:#4a6a8a;">Limine</span> (EFI handover).
                i speak <span class="text-[#e0e0e0] font-semibold">Go, C, and assembly</span> fluently.
              </p>

              <div class="flex flex-wrap gap-3 pt-2 border-t border-[#2a2b2a]">
                <div class="flex items-center gap-2">
                  <span class="led-red w-1.5 h-1.5"></span>
                  <span class="text-[0.7rem] font-mono" style="color:#707070;">open-source or die</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="led-green w-1.5 h-1.5"></span>
                  <span class="text-[0.7rem] font-mono" style="color:#707070;">fast</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="led-green w-1.5 h-1.5"></span>
                  <span class="text-[0.7rem] font-mono" style="color:#707070;">secure</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="led-green w-1.5 h-1.5"></span>
                  <span class="text-[0.7rem] font-mono" style="color:#707070;">auditable</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="divider my-8 lg:my-12"></div>

        <div class="content-card group" style="padding: 1.5rem sm:p-2rem lg:p-8; background: #1e1f1e; border: 1px solid #2a2b2a;">
          <div class="flex items-start gap-4">
            <div class="hidden sm:block text-4xl opacity-20">“</div>
            <div class="flex-1">
              <p class="quote-text text-sm sm:text-base lg:text-lg mb-3 text-center sm:text-left" style="color: #8a9aaa; font-style: italic;">
                “The computer is not the product. The product is what you build with it.”
              </p>
              <p class="text-xs sm:text-sm text-center sm:text-right" style="color: #a0a0a0; font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.05em;">
                — alexvoste / ForgeZero
              </p>
            </div>
            <div class="hidden sm:block text-4xl opacity-20 self-end">”</div>
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
  border-radius: 0;
  transition: border-color 0.2s ease;
}

.content-card:hover {
  border-color: #8a9aaa;
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
  border-radius: 0;
  background: #5a8a5a;
}

.led-red {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 0;
  background: #4a6a8a;
}

.trackpoint {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 0;
  background: #4a6a8a;
}

@keyframes led-blink {
}


@media (max-width: 640px) {
}

</style>
