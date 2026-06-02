<template>
  <section id="about" class="section-animate">
    <div class="max-w-5xl mx-auto px-6 py-20">
      <div class="content-card p-12">
        <h2 style="color: var(--hokusai-heading); font-family: 'Inter', sans-serif; font-size: 2rem; font-weight: 700; margin-bottom: 24px;">
          /whoami
        </h2>

        <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 1rem; line-height: 1.8; margin-bottom: 16px;">
         yo, I'm AlexVoste — systems engineer who fucks with low-level shit. building fast, reliable, privacy-respecting software is my jam. OS dev, compiler bullshit, bootloader wizardry — I live down in the bare metal trenches.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div class="grid-card">
            <h3 style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">
              OS Dev
            </h3>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">
              GloriaOS — x86_64, Long Mode, pure ASM/C. shit's wild.
            </p>
          </div>

          <div class="grid-card">
            <h3 style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">
              NASM Gang
            </h3>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">
              throwing patches at The Netwide Assembler like it's nothing
            </p>
          </div>

          <div class="grid-card">
            <h3 style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">
              Limine Shit
            </h3>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">
              bootloader contributor — cuz someone gotta handle that boot protocol nonsense
            </p>
          </div>

          <div class="grid-card">
            <h3 style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">
              Toolchain
            </h3>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">
              NASM, C, and a whole lot of caffeine
            </p>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="content-card p-12" style="margin-top: 32px;">
        <p class="quote-text" style="margin-bottom: 0;">
          旅に病で夢は枯野をかけめぐる
        </p>
        <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; margin-top: 16px; font-style: italic;">
          sick on the road, dreams still roaming the dead fields. — Buson, probably drunk
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
