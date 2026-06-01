<template>
  <section id="forgezero" class="section-animate">
    <div class="max-w-5xl mx-auto px-6 py-20">
      <div class="content-card p-12">
        <h2 style="color: var(--hokusai-heading); font-family: 'Inter', sans-serif; font-size: 2rem; font-weight: 700; margin-bottom: 24px;">
          Featured Project: ForgeZero (fz)
        </h2>

        <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 1rem; line-height: 1.8; margin-bottom: 16px;">
          My main focus right now is ForgeZero, a high-performance, zero-overhead build tool for assembly and C developers. It wraps NASM, GAS, FASM, GCC, Clang, Zig, and LD into a single unified command-line interface — no Makefiles, no build scripts.
        </p>

        <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 1rem; line-height: 1.8; margin-bottom: 24px;">
          ForgeZero removes the friction between writing assembly (or C) code and running it. Just point <code style="color: var(--hokusai-accent);">fz</code> at a source file or directory and it handles everything: detecting file types, selecting the right backend, caching with BLAKE3, parallel builds, and cross-compilation via Zig.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div class="grid-card">
            <h3 style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">0 Allocs/Op Hot Path</h3>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">Zero memory allocations in critical performance paths for maximum efficiency.</p>
          </div>

          <div class="grid-card">
            <h3 style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">100% Standalone</h3>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">No external dependencies, self-contained implementation for maximum portability.</p>
          </div>

          <div class="grid-card">
            <h3 style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">Native Bare-Metal Support</h3>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">Optimized for bare-metal environments without operating system dependencies.</p>
          </div>

          <div class="grid-card">
            <h3 style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">BLAKE3 Incremental Caching</h3>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">Advanced caching mechanisms for incremental hashing operations.</p>
          </div>

          <div class="grid-card md:col-span-2">
            <h3 style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">Native Windows Execution</h3>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.6;">First-class Windows support for enterprise deployment.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div>
            <p style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">GitHub</p>
            <a href="https://github.com/forgezero-cli/forgezero" target="_blank" rel="noreferrer" style="color: var(--hokusai-accent);">github.com/forgezero-cli/forgezero</a>
          </div>

          <div>
            <p style="color: var(--hokusai-accent); font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">GitHub Org</p>
            <a href="https://github.com/forgezero-cli" target="_blank" rel="noreferrer" style="color: var(--hokusai-accent);">github.com/forgezero-cli</a>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="content-card p-12" style="margin-top: 32px;">
        <p class="quote-text" style="margin-bottom: 0;">風立ちぬ、いざ生きめやも</p>
        <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; margin-top: 16px; font-style: italic;">The wind has risen; we must try to live. — Tatsuo Hori</p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
