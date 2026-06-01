<template>
  <section id="hero" class="section-animate">
    <div class="max-w-5xl mx-auto px-6 py-32">
      <div class="content-card">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-12">
          <div class="flex flex-col justify-center items-center md:items-start">
            <img
              src="/src/assets/avatar.png"
              alt="AlexVoste Avatar"
              class="w-48 h-48 rounded-full shadow-xl mb-8"
              style="background-color: var(--hokusai-content); border: 4px solid var(--hokusai-accent); object-fit: cover"
            >
            <h1 style="color: var(--hokusai-heading); font-family: 'Inter', sans-serif; font-size: 2.5rem; font-weight: 700; line-height: 1.1; margin-bottom: 8px;">
              AlexVoste
            </h1>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; letter-spacing: 0.1em; line-height: 1.6;">
              systems programming · low-level engineering · privacy-first software
            </p>
          </div>

          <div class="flex flex-col justify-center">
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 1.1rem; line-height: 1.8; margin-bottom: 16px;">
              Hi there. I'm AlexVoste, a systems engineer deeply passionate about building fast, reliable, and privacy-respecting software.
            </p>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 1rem; line-height: 1.8; margin-bottom: 24px;">
              My work spans operating system development, compiler infrastructure, and bootloader engineering — primarily working at the lowest levels of the stack.
            </p>
            <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 1rem; line-height: 1.8;">
              I believe in writing code that is both efficient and maintainable, with a strong focus on minimizing abstractions where they're not needed. I'm committed to open-source collaboration and contributing to foundational tools that other developers rely on.
            </p>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="content-card" style="margin-top: 32px; padding: 32px;">
        <p class="quote-text" style="margin-bottom: 0;">古池や蛙飛びこむ水の音</p>
        <p style="color: var(--hokusai-text); font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; margin-top: 16px; font-style: italic;">
          An old pond, a frog jumps in — the sound of water. — Matsuo Bashō
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
