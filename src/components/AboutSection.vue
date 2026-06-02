<template>
  <section id="about" class="section-animate">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div class="content-card p-6 sm:p-8 md:p-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style="color: #e5e0c7; font-family: 'Inter', sans-serif;">
          /whoami
        </h2>

        <p class="text-sm sm:text-base" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.8; margin-bottom: 16px;">
          systems engineer, low-level shit only. building fast, reliable, privacy-respecting software is the whole point. OS dev, compilers, bootloaders — bare metal or nothing.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-8 sm:my-12">
          <div class="grid-card p-4 sm:p-5" style="background: #151615; border: 1px solid #2a2b2a; border-radius: 8px;">
            <h3 class="text-lg sm:text-xl font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">
              OS Dev
            </h3>
            <p class="text-sm sm:text-base" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.6;">
              GloriaOS — x86_64, Long Mode, pure ASM/C.
            </p>
          </div>

          <div class="grid-card p-4 sm:p-5" style="background: #151615; border: 1px solid #2a2b2a; border-radius: 8px;">
            <h3 class="text-lg sm:text-xl font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">
              NASM
            </h3>
            <p class="text-sm sm:text-base" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.6;">
              throwing patches at The Netwide Assembler
            </p>
          </div>

          <div class="grid-card p-4 sm:p-5" style="background: #151615; border: 1px solid #2a2b2a; border-radius: 8px;">
            <h3 class="text-lg sm:text-xl font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">
              Limine
            </h3>
            <p class="text-sm sm:text-base" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.6;">
              bootloader contributor — someone gotta handle that boot protocol nonsense
            </p>
          </div>

          <div class="grid-card p-4 sm:p-5" style="background: #151615; border: 1px solid #2a2b2a; border-radius: 8px;">
            <h3 class="text-lg sm:text-xl font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">
              Toolchain
            </h3>
            <p class="text-sm sm:text-base" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.6;">
              NASM, C, and too much caffeine
            </p>
          </div>
        </div>
      </div>

      <div class="divider my-8 sm:my-10"></div>

      <div class="content-card p-6 sm:p-8 md:p-12" style="margin-top: 24px sm:margin-top-32px;">
        <p class="quote-text text-sm sm:text-base md:text-lg" style="margin-bottom: 0; color: #EC8254; font-family: 'Noto Sans JP', sans-serif;">
          旅に病で夢は枯野をかけめぐる
        </p>
        <p class="text-xs sm:text-sm" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; margin-top: 12px sm:margin-top-16px; font-style: italic;">
          sick on the road, dreams still roaming the dead fields. — Buson
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@media (max-width: 640px) {
  .grid-card {
    padding: 1rem;
  }
  
  .quote-text {
    font-size: 0.85rem;
    line-height: 1.4;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .grid-card {
    padding: 1.25rem;
  }
}

.grid-card {
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.grid-card:hover {
  border-color: #EC8254;
  transform: translateY(-2px);
}
</style>
