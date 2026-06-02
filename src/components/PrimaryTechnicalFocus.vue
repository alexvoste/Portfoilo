<template>
  <section id="primary-technical-focus" class="section-animate">
    <div class="max-w-5xl mx-auto px-6 py-20">
      <div class="content-card p-12">
        <h2 style="color: var(--hokusai-heading); font-family: 'Inter', sans-serif; font-size: 2rem; font-weight: 700; margin-bottom: 24px;">
          primary technical focus
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="grid-card">
            <h3 style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">
              systems programming
            </h3>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">
              C and assembly (NASM, FASM, GAS). low-level tooling, efficient runtimes, systems-level performance.
            </p>
          </div>

          <div class="grid-card">
            <h3 style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">
              build systems engineering
            </h3>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">
              ForgeZero (fz) — build tool that wraps NASM, GAS, FASM, GCC, Clang, Zig, LD into a single CLI.
            </p>
          </div>

          <div class="grid-card">
            <h3 style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">
              compiler & bootloader contributions
            </h3>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">
              active contributor to NASM and Limine bootloader.
            </p>
          </div>

          <div class="grid-card">
            <h3 style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">
              infrastructure philosophy
            </h3>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">
              toolchains should be fast, transparent, auditable. ForgeZero = zero-overhead, cross-platform, no bloat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
