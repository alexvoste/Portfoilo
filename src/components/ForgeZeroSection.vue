<template>
  <section id="forgezero" class="section-animate">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div class="content-card p-6 sm:p-8 md:p-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style="color: #e5e0c7; font-family: 'Inter', sans-serif;">
          forgezero (fz)
        </h2>

        <p class="text-sm sm:text-base" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.8; margin-bottom: 16px;">
          main project rn. zero-overhead build tool that doesn't suck ass. wraps NASM, GAS, FASM, GCC, Clang, Zig, LD into one CLI — no makefiles, no bullshit scripts.
        </p>

        <p class="text-sm sm:text-base" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.8; margin-bottom: 24px;">
          point <code class="text-xs sm:text-sm" style="color: #EC8254;">fz</code> at a source file or directory and it just handles shit: detects file types, picks right backend, caches with BLAKE3, parallel builds, cross-compilation via Zig. friction? gone.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-8 sm:my-12">
          <div class="grid-card p-4 sm:p-5" style="background: #151615; border: 1px solid #2a2b2a; border-radius: 8px;">
            <h3 class="text-base sm:text-lg font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">zero allocs hot path</h3>
            <p class="text-sm" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.6;">no memory allocations in critical paths. just raw speed.</p>
          </div>

          <div class="grid-card p-4 sm:p-5" style="background: #151615; border: 1px solid #2a2b2a; border-radius: 8px;">
            <h3 class="text-base sm:text-lg font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">100% standalone</h3>
            <p class="text-sm" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.6;">zero deps, self-contained. runs anywhere without crying.</p>
          </div>

          <div class="grid-card p-4 sm:p-5" style="background: #151615; border: 1px solid #2a2b2a; border-radius: 8px;">
            <h3 class="text-base sm:text-lg font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">bare-metal native</h3>
            <p class="text-sm" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.6;">works without OS bullshit. for when you need real shit.</p>
          </div>

          <div class="grid-card p-4 sm:p-5" style="background: #151615; border: 1px solid #2a2b2a; border-radius: 8px;">
            <h3 class="text-base sm:text-lg font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">blake3 caching</h3>
            <p class="text-sm" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.6;">incremental hashing. rebuilds only what actually changed.</p>
          </div>

          <div class="grid-card p-4 sm:p-5 sm:col-span-2" style="background: #151615; border: 1px solid #2a2b2a; border-radius: 8px;">
            <h3 class="text-base sm:text-lg font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">windows? works.</h3>
            <p class="text-sm" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.6;">first-class windows support. no excuses, no half-assing.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#2a2b2a]">
          <div>
            <p class="text-xs sm:text-sm font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">github</p>
            <a href="https://github.com/forgezero-cli/forgezero" target="_blank" class="text-xs sm:text-sm break-all" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; text-decoration: none; border-bottom: 1px solid #EC8254;">github.com/forgezero-cli/forgezero →</a>
          </div>

          <div>
            <p class="text-xs sm:text-sm font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">org</p>
            <a href="https://github.com/forgezero-cli" target="_blank" class="text-xs sm:text-sm break-all" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; text-decoration: none; border-bottom: 1px solid #EC8254;">github.com/forgezero-cli →</a>
          </div>
        </div>
      </div>

      <div class="divider my-8 sm:my-10"></div>

      <div class="content-card p-6 sm:p-8 md:p-12" style="margin-top: 24px sm:margin-top-32px;">
        <p class="quote-text text-sm sm:text-base md:text-lg" style="margin-bottom: 0; color: #EC8254; font-family: 'Noto Sans JP', sans-serif;">風立ちぬ、いざ生きめやも</p>
        <p class="text-xs sm:text-sm" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; margin-top: 12px sm:margin-top-16px; font-style: italic;">wind's up — gotta live anyway. — Hori</p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@media (max-width: 640px) {
  .grid-card {
    padding: 0.75rem;
  }
}

.grid-card {
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.grid-card:hover {
  border-color: #EC8254;
  transform: translateY(-2px);
}

code {
  background: #0d0e0d;
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
}
</style>
