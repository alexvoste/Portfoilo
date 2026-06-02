<template>
  <section id="primary-technical-focus" class="section-animate">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
      <div class="relative">
        <div class="absolute -top-8 -right-8 w-32 h-32 border-r-2 border-t-2 border-[#EC8254]/20 rounded-tr-2xl hidden lg:block"></div>
        
        <div class="content-card group relative overflow-hidden" style="background: linear-gradient(135deg, #1a1b1a 0%, #121312 100%); border: 1px solid #2a2b2a;">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style="background-image: radial-gradient(circle at 1px 1px, rgba(236,130,84,0.03) 1px, transparent 0); background-size: 32px 32px;"></div>
          
          <div class="relative p-6 sm:p-8 lg:p-10">
            <div class="flex items-center gap-3 mb-8 lg:mb-10">
              <div class="w-1 h-8 bg-[#EC8254] rounded-full"></div>
              <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight" style="color: #e5e0c7; font-family: 'Inter', sans-serif;">
                /tech_stack
              </h2>
              <div class="flex-1"></div>
              <div class="hidden sm:flex gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-[#EC8254]/30"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-[#EC8254]/50"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-[#EC8254]"></span>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              <div class="focus-card group/card" style="background: #0d0e0d; border: 1px solid #2a2b2a;">
                <div class="flex items-start gap-3">
                  <div class="focus-icon">⚙️</div>
                  <div>
                    <h3 class="text-lg lg:text-xl font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">
                      systems programming
                    </h3>
                    <p class="text-sm lg:text-base" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.7;">
                      C and assembly (NASM, FASM, GAS). low-level tooling, efficient runtimes, systems-level performance.
                    </p>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span class="tech-tag">C</span>
                      <span class="tech-tag">NASM</span>
                      <span class="tech-tag">FASM</span>
                      <span class="tech-tag">GAS</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="focus-card group/card" style="background: #0d0e0d; border: 1px solid #2a2b2a;">
                <div class="flex items-start gap-3">
                  <div class="focus-icon">🔧</div>
                  <div>
                    <h3 class="text-lg lg:text-xl font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">
                      build systems engineering
                    </h3>
                    <p class="text-sm lg:text-base" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.7;">
                      ForgeZero (fz) — build tool that wraps NASM, GAS, FASM, GCC, Clang, Zig, LD into a single CLI.
                    </p>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span class="tech-tag">Go</span>
                      <span class="tech-tag">Zig</span>
                      <span class="tech-tag">GCC</span>
                      <span class="tech-tag">Clang</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="focus-card group/card" style="background: #0d0e0d; border: 1px solid #2a2b2a;">
                <div class="flex items-start gap-3">
                  <div class="focus-icon">📦</div>
                  <div>
                    <h3 class="text-lg lg:text-xl font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">
                      compiler & bootloader
                    </h3>
                    <p class="text-sm lg:text-base" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.7;">
                      active contributor to NASM and Limine bootloader. AVX512-FP16, EFI handover, TPM/BitLocker.
                    </p>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span class="tech-tag">NASM</span>
                      <span class="tech-tag">Limine</span>
                      <span class="tech-tag">UEFI</span>
                      <span class="tech-tag">TPM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="focus-card group/card" style="background: #0d0e0d; border: 1px solid #2a2b2a;">
                <div class="flex items-start gap-3">
                  <div class="focus-icon">🎯</div>
                  <div>
                    <h3 class="text-lg lg:text-xl font-semibold mb-2" style="color: #EC8254; font-family: 'Inter', sans-serif;">
                      infrastructure philosophy
                    </h3>
                    <p class="text-sm lg:text-base" style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; line-height: 1.7;">
                      toolchains should be fast, transparent, auditable. ForgeZero = zero-overhead, cross-platform, no bloat.
                    </p>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span class="tech-tag">zero-overhead</span>
                      <span class="tech-tag">auditable</span>
                      <span class="tech-tag">no-bloat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="divider-custom my-8 lg:my-10"></div>

            <div class="flex flex-wrap justify-center gap-4">
              <div class="flex items-center gap-2">
                <span class="led-red w-1.5 h-1.5"></span>
                <span class="text-[0.7rem] font-mono text-[#7a7563]">low-level</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="led-green w-1.5 h-1.5"></span>
                <span class="text-[0.7rem] font-mono text-[#7a7563]">production-ready</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="led-green w-1.5 h-1.5"></span>
                <span class="text-[0.7rem] font-mono text-[#7a7563]">cross-platform</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="led-green w-1.5 h-1.5"></span>
                <span class="text-[0.7rem] font-mono text-[#7a7563]">zero-bullshit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.section-animate {
  animation: fadeUp 0.65s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
  opacity: 0;
  transform: translateY(16px);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-card {
  border-radius: 32px;
  transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

.content-card:hover {
  border-color: #EC8254;
  transform: translateY(-3px);
  box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.6);
}

.focus-card {
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

.focus-card:hover {
  border-color: #EC8254;
  transform: translateX(6px) translateY(-2px);
  background: #121312;
}

.focus-icon {
  font-size: 1.75rem;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.focus-card:hover .focus-icon {
  opacity: 1;
}

.tech-tag {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  font-size: 0.65rem;
  font-family: 'JetBrains Mono', monospace;
  background: #1a1b1a;
  border: 1px solid #2a2b2a;
  border-radius: 12px;
  color: #b8b29a;
  transition: all 0.2s ease;
}

.tech-tag:hover {
  border-color: #EC8254;
  color: #EC8254;
}

.divider-custom {
  position: relative;
  height: 1px;
  background: linear-gradient(90deg, transparent, #2a2b2a, transparent);
}

.led-green {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2ecc71;
  box-shadow: 0 0 6px #2ecc71;
  animation: led-blink 2s step-start infinite;
}

.led-red {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #da3e1a;
  box-shadow: 0 0 4px #da3e1a;
}

@keyframes led-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@media (max-width: 640px) {
  .content-card {
    border-radius: 24px;
  }
  
  .focus-card {
    padding: 1.25rem;
  }
  
  .focus-icon {
    font-size: 1.5rem;
  }
  
  .tech-tag {
    font-size: 0.55rem;
    padding: 0.15rem 0.5rem;
  }
}

@media (max-width: 768px) and (min-width: 641px) {
  .focus-card {
    padding: 1.25rem;
  }
}
</style>
