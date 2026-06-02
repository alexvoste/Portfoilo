<template>
  <section class="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
    <div class="content-card" style="background: #1e1f1e; border: 1px solid #2a2b2a; border-radius: 16px; padding: 20px sm:padding-24px md:padding-32px;">
      
      <h2 style="color: #EC8254; font-family: 'Inter', sans-serif; font-size: 1.25rem sm:text-1.5rem; font-weight: 600; margin-bottom: 20px sm:margin-bottom-24px; border-left: 3px solid #EC8254; padding-left: 12px sm:padding-left-16px;">
        /dev/walk
      </h2>

      <div class="space-y-4 sm:space-y-6">
        <div class="timeline-item">
          <p class="timeline-year" style="color: #EC8254; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem sm:text-0.85rem; font-weight: bold; margin-bottom: 4px;">first blood</p>
          <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem sm:text-0.9rem; line-height: 1.5 sm:line-height-1.6;">
            started with <strong>Python</strong>, jumped into web shit: <strong>PHP, Vue, Laravel, HTML, CSS, JS</strong>. 
            worked in web studios, did freelance gigs. got bored.
          </p>
        </div>

        <div class="timeline-item">
          <p class="timeline-year" style="color: #EC8254; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem sm:text-0.85rem; font-weight: bold; margin-bottom: 4px;">cross-platform era</p>
          <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem sm:text-0.9rem; line-height: 1.5 sm:line-height-1.6;">
            switched to <strong>Flutter</strong>. built a luxury car marketplace app from scratch. 
            learned that software runs everywhere if you don't suck.
          </p>
        </div>

        <div class="timeline-item">
          <p class="timeline-year" style="color: #EC8254; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem sm:text-0.85rem; font-weight: bold; margin-bottom: 4px;">sysadmin & security</p>
          <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem sm:text-0.9rem; line-height: 1.5 sm:line-height-1.6;">
            hardened servers, configured <strong>VLESS REALITY</strong> gateways, dug into networking and privacy. 
            realized the web is a circus — real engineering happens below.
          </p>
        </div>

        <div class="timeline-item">
          <p class="timeline-year" style="color: #EC8254; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem sm:text-0.85rem; font-weight: bold; margin-bottom: 4px;">low-level rabbit hole</p>
          <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem sm:text-0.9rem; line-height: 1.5 sm:line-height-1.6;">
            went deep into <strong>C and assembly</strong>. built a <strong>TUI messenger</strong> with custom crypto, 
            an <strong>anonymous P2P file sharing</strong> tool. contributed to <strong>NASM and Limine</strong>.
          </p>
        </div>

        <div class="timeline-item">
          <p class="timeline-year" style="color: #EC8254; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem sm:text-0.85rem; font-weight: bold; margin-bottom: 4px;">java / node / crypto</p>
          <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem sm:text-0.9rem; line-height: 1.5 sm:line-height-1.6;">
            did <strong>Java (Spring Boot)</strong>, game prototypes, MVPs. 
            built a <strong>telegram bot</strong> with <strong>Monero, TON, USDT</strong>, AI support, VPN subscription manager. 
            first <strong>ForgeZero prototype</strong> was on <strong>Node.js</strong> — no deps.
          </p>
        </div>

        <div class="timeline-item">
          <p class="timeline-year" style="color: #EC8254; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem sm:text-0.85rem; font-weight: bold; margin-bottom: 4px;">now: go + wasm</p>
          <p style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem sm:text-0.9rem; line-height: 1.5 sm:line-height-1.6;">
            main stack: <strong>Go + WASM + JS + HTML5</strong>. building <strong>ForgePanel</strong> — 
            subscription & proxy management. still speaking C/asm when shit needs to be fast.
          </p>
        </div>
      </div>

      <div class="divider" style="margin: 24px 0 sm:margin-32px-0;"></div>

      <p style="color: #e5e0c7; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem sm:text-0.95rem; line-height: 1.6 sm:line-height-1.8; text-align: center;">
        from web bullshit to bare metal. from python to go. from "it works" to <strong>"it fucking works and i can prove it"</strong>.
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.timeline-item {
  transition: all 0.2s ease;
  border-left: 1px solid #2a2b2a;
  padding-left: 12px;
  margin-left: 8px;
}

@media (min-width: 640px) {
  .timeline-item {
    padding-left: 20px;
  }
}

.timeline-item:hover {
  border-left-color: #EC8254;
}

.divider {
  height: 1px;
  background: #2a2b2a;
  margin: 20px 0;
}

@media (min-width: 640px) {
  .divider {
    margin: 32px 0;
  }
}

.content-card {
  transition: border-color 0.2s ease;
}

.content-card:hover {
  border-color: #3a3b3a;
}
</style
