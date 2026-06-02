<template>
  <section id="hero" class="section-animate">
    <div class="max-w-5xl mx-auto px-6 py-32">
      <div class="content-card" style="background: #1e1f1e; border: 1px solid #2a2b2a;">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12">
          <div class="flex flex-col justify-center items-center md:items-start">
            <img
              src="/src/assets/avatar.png"
              alt="AlexVoste Avatar"
              class="w-48 h-48 rounded-full shadow-xl mb-8"
              style="background-color: #0d0e0d; border: 4px solid #EC8254; object-fit: cover"
            >
            <h1 style="color: #e5e0c7; font-family: 'Inter', sans-serif; font-size: 2.5rem; font-weight: 700; line-height: 1.1; margin-bottom: 8px;">
              alexvoste
            </h1>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; letter-spacing: 0.1em; line-height: 1.6;">
              go · systems · low-level · privacy
            </p>
          </div>

          <div class="flex flex-col justify-center">
            <p style="color: #e5e0c7; font-family: 'JetBrains Mono', monospace; font-size: 1rem; line-height: 1.8; margin-bottom: 16px;">
              yo. i'm alexvoste — <strong>Go developer</strong> with a low-level soul.
            </p>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.8; margin-bottom: 24px;">
              building <strong>ForgeZero</strong> — an open-source build system for C/asm, written in Go. 
              contributing to <strong>NASM</strong> (AVX512-FP16) and <strong>Limine</strong> (EFI handover). 
              i speak <strong>Go, C, and assembly</strong> fluently.
            </p>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.8;">
              open-source or die. fast, secure, auditable. if it ain't, i don't want it.
            </p>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="content-card" style="margin-top: 32px; padding: 32px; background: #1e1f1e; border: 1px solid #2a2b2a;">
        <p class="quote-text" style="margin-bottom: 0; color: #EC8254;">“The computer is not the product. The product is what you build with it.”</p>
        <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; margin-top: 16px; font-style: italic;">
          — alexvoste / ForgeZero
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
