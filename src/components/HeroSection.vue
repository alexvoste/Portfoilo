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
              systems · low-level · privacy
            </p>
          </div>

          <div class="flex flex-col justify-center">
            <p style="color: #e5e0c7; font-family: 'JetBrains Mono', monospace; font-size: 1rem; line-height: 1.8; margin-bottom: 16px;">
              yo. i'm alexvoste — systems engineer who actually gives a fuck about performance and privacy.
            </p>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.8; margin-bottom: 24px;">
              i build OS shit, compilers, bootloaders. living in the bare metal trenches. no bloat, no bullshit abstractions — just code that fucking works.
            </p>
            <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.8;">
              open-source or die. contributing to toolchains you actually use. if it ain't fast and auditable, i don't want it.
            </p>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="content-card" style="margin-top: 32px; padding: 32px; background: #1e1f1e; border: 1px solid #2a2b2a;">
        <p class="quote-text" style="margin-bottom: 0; color: #EC8254;">古池や蛙飛びこむ水の音</p>
        <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; margin-top: 16px; font-style: italic;">
          old pond — frog jumps in, splash. — bashō, probably drunk
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
