<template>
  <section id="forgezero" class="section-animate">
    <div class="max-w-5xl mx-auto px-6 py-20">
      <div class="content-card p-12" style="background: #1e1f1e; border: 1px solid #2a2b2a;">
        <h2 style="color: #e5e0c7; font-family: 'Inter', sans-serif; font-size: 2rem; font-weight: 700; margin-bottom: 24px;">
          forgezero (fz)
        </h2>

        <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 1rem; line-height: 1.8; margin-bottom: 16px;">
          main project rn. zero-overhead build tool that doesn't suck ass. wraps NASM, GAS, FASM, GCC, Clang, Zig, LD into one CLI — no makefiles, no bullshit scripts.
        </p>

        <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.8; margin-bottom: 24px;">
          point <code style="color: #EC8254;">fz</code> at a source file or directory and it just handles shit: detects file types, picks right backend, caches with BLAKE3, parallel builds, cross-compilation via Zig. friction? gone.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div class="grid-card" style="background: #151615; border: 1px solid #2a2b2a;">
            <h3 style="color: #EC8254; font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">zero allocs hot path</h3>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; line-height: 1.6;">no memory allocations in critical paths. just raw speed.</p>
          </div>

          <div class="grid-card" style="background: #151615; border: 1px solid #2a2b2a;">
            <h3 style="color: #EC8254; font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">100% standalone</h3>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; line-height: 1.6;">zero deps, self-contained. runs anywhere without crying.</p>
          </div>

          <div class="grid-card" style="background: #151615; border: 1px solid #2a2b2a;">
            <h3 style="color: #EC8254; font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">bare-metal native</h3>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; line-height: 1.6;">works without OS bullshit. for when you need real shit.</p>
          </div>

          <div class="grid-card" style="background: #151615; border: 1px solid #2a2b2a;">
            <h3 style="color: #EC8254; font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">blake3 caching</h3>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; line-height: 1.6;">incremental hashing. rebuilds only what actually changed.</p>
          </div>

          <div class="grid-card md:col-span-2" style="background: #151615; border: 1px solid #2a2b2a;">
            <h3 style="color: #EC8254; font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px;">windows? works.</h3>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; line-height: 1.6;">first-class windows support. no excuses, no half-assing.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-4 border-t border-[#2a2b2a]">
          <div>
            <p style="color: #EC8254; font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px; font-size: 0.8rem;">github</p>
            <a href="https://github.com/forgezero-cli/forgezero" target="_blank" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; text-decoration: none; border-bottom: 1px solid #EC8254;">github.com/forgezero-cli/forgezero →</a>
          </div>

          <div>
            <p style="color: #EC8254; font-family: 'Inter', sans-serif; font-weight: 600; margin-bottom: 8px; font-size: 0.8rem;">org</p>
            <a href="https://github.com/forgezero-cli" target="_blank" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; text-decoration: none; border-bottom: 1px solid #EC8254;">github.com/forgezero-cli →</a>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="content-card p-12" style="margin-top: 32px; background: #1e1f1e; border: 1px solid #2a2b2a;">
        <p class="quote-text" style="margin-bottom: 0; color: #EC8254;">風立ちぬ、いざ生きめやも</p>
        <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; margin-top: 16px; font-style: italic;">wind's up — gotta live anyway. — Hori</p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
