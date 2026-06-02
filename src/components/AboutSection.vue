<template>
  <section id="about" class="section-animate">
    <div class="max-w-5xl mx-auto px-6 py-20">
      <div class="content-card p-12" style="background: #1e1f1e; border: 1px solid #2a2b2a;">
        <h2 style="color: #e5e0c7; font-family: 'Inter', sans-serif; font-size: 2rem; font-weight: 700; margin-bottom: 24px;">
          /whoami
        </h2>

        <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 1rem; line-height: 1.8; margin-bottom: 16px;">
         systems engineer, low-level shit only. building fast, reliable, privacy-respecting software is the whole point. OS dev, compilers, bootloaders — bare metal or nothing.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div class="grid-card" style="background: #151615; border: 1px solid #2a2b2a;">
            <h3 style="color: #EC8254; font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">
              OS Dev
            </h3>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">
              GloriaOS — x86_64, Long Mode, pure ASM/C.
            </p>
          </div>

          <div class="grid-card" style="background: #151615; border: 1px solid #2a2b2a;">
            <h3 style="color: #EC8254; font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">
              NASM
            </h3>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">
              throwing patches at The Netwide Assembler
            </p>
          </div>

          <div class="grid-card" style="background: #151615; border: 1px solid #2a2b2a;">
            <h3 style="color: #EC8254; font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">
              Limine
            </h3>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">
              bootloader contributor — someone gotta handle that boot protocol nonsense
            </p>
          </div>

          <div class="grid-card" style="background: #151615; border: 1px solid #2a2b2a;">
            <h3 style="color: #EC8254; font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">
              Toolchain
            </h3>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">
              NASM, C, and too much caffeine
            </p>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="content-card p-12" style="margin-top: 32px; background: #1e1f1e; border: 1px solid #2a2b2a;">
        <p class="quote-text" style="margin-bottom: 0; color: #EC8254;">
          旅に病で夢は枯野をかけめぐる
        </p>
        <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; margin-top: 16px; font-style: italic;">
          sick on the road, dreams still roaming the dead fields. — Buson
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
