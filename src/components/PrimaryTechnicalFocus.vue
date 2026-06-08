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

<div class="mt-2 space-y-10">
              <div>
                <h3 class="mono text-xs uppercase tracking-[0.22em] text-[#7a7563]">Weapons of Choice</h3>
                <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button type="button" class="tech-card group focus-ring" data-tech="C">
                    <div class="tech-card-inner">
                      <div class="tech-card-title">C</div>
                      <div class="tech-card-desc">Systems programming. predictable performance.</div>
                      <div class="tech-card-meta"><span>C</span></div>
                    </div>
                  </button>
                  <button type="button" class="tech-card group focus-ring" data-tech="Assembly (ASM)">
                    <div class="tech-card-inner">
                      <div class="tech-card-title">Assembly (ASM)</div>
                      <div class="tech-card-desc">Precision. ABI control. cycle-level thinking.</div>
                      <div class="tech-card-meta"><span>NASM</span><span>GAS</span><span>FASM</span></div>
                    </div>
                  </button>
                  <button type="button" class="tech-card group focus-ring" data-tech="Go (Golang)">
                    <div class="tech-card-inner">
                      <div class="tech-card-title">Go (Golang)</div>
                      <div class="tech-card-desc">Concurrency with low-level access.</div>
                      <div class="tech-card-meta"><span>Go</span></div>
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <h3 class="mono text-xs uppercase tracking-[0.22em] text-[#7a7563]">legacy & broad experience</h3>
                <div class="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div class="content-card p-4 border-[1px] border-[#2a2b2a] bg-[#0d0e0d] tech-subcard">
                    <div class="text-sm font-semibold" style="color: #EC8254; font-family: 'JetBrains Mono', monospace;">Backend & Frameworks</div>
                    <div class="mt-2 flex flex-wrap gap-2">
                      <span class="tech-chip">PHP (Laravel)</span>
                      <span class="tech-chip">PHP (OctoberCMS)</span>
                      <span class="tech-chip">Java (Spring Boot)</span>
                      <span class="tech-chip">Gradle</span>
                      <span class="tech-chip">Node.js (NestJS)</span>
                      <span class="tech-chip">ExpressJS</span>
                      <span class="tech-chip">Python (ML/AI)</span>
                      <span class="tech-chip">Scripting Tools</span>
                      <span class="tech-chip">C++</span>
                    </div>
                  </div>

                  <div class="content-card p-4 border-[1px] border-[#2a2b2a] bg-[#0d0e0d] tech-subcard">
                    <div class="text-sm font-semibold" style="color: #EC8254; font-family: 'JetBrains Mono', monospace;">Frontend & Mobile</div>
                    <div class="mt-2 flex flex-wrap gap-2">
                      <span class="tech-chip">Flutter</span>
                      <span class="tech-chip">Dart</span>
                      <span class="tech-chip">JavaScript/TypeScript</span>
                    </div>
                  </div>

                  <div class="content-card p-4 border-[1px] border-[#2a2b2a] bg-[#0d0e0d] tech-subcard">
                    <div class="text-sm font-semibold" style="color: #EC8254; font-family: 'JetBrains Mono', monospace;">Low-Level Specs</div>
                    <div class="mt-2 flex flex-wrap gap-2">
                      <span class="tech-chip">GAS (GNU Assembler)</span>
                      <span class="tech-chip">FASM</span>
                      <span class="tech-chip">FASM (16-bit DOS real mode)</span>
                    </div>
                  </div>

                  <div class="content-card p-4 border-[1px] border-[#2a2b2a] bg-[#0d0e0d] tech-subcard">
                    <div class="text-sm font-semibold" style="color: #EC8254; font-family: 'JetBrains Mono', monospace;">DevOps</div>
                    <div class="mt-2 flex flex-wrap gap-2">
                      <span class="tech-chip">CI/CD pipelines</span>
                      <span class="tech-chip">System administration</span>
                      <span class="tech-chip">Docker/infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="mono text-xs uppercase tracking-[0.22em] text-[#7a7563]">database matrix</h3>

                <div class="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div class="content-card p-4 border-[1px] border-[#2a2b2a] bg-[#0d0e0d]">
                    <div class="flex items-center justify-between gap-3">
                      <div class="text-sm font-semibold" style="color: #EC8254; font-family: 'JetBrains Mono', monospace;">Preferred</div>
                      <div class="mono text-xs text-[#7a7563]">interactive</div>
                    </div>

                    <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button type="button" class="db-card" data-db="SQLite3" data-note="Lightweight, simple, single-file monolith">
                        <div class="db-title">SQLite3</div>
                        <div class="db-sub">Lightweight</div>
                      </button>
                      <button type="button" class="db-card" data-db="PostgreSQL" data-note="Robust relational powerhouse">
                        <div class="db-title">PostgreSQL</div>
                        <div class="db-sub">Relational</div>
                      </button>
                      <button type="button" class="db-card" data-db="MongoDB" data-note="Flexible, horizontally scalable Document Store">
                        <div class="db-title">MongoDB</div>
                        <div class="db-sub">Document Store</div>
                      </button>
                      <button type="button" class="db-card" data-db="Redis" data-note="In-memory speed, caching, and sessions">
                        <div class="db-title">Redis</div>
                        <div class="db-sub">Caching</div>
                      </button>
                    </div>

                    <div class="mt-4 pt-4 border-t border-[#1f2128]">
                      <div class="text-sm font-semibold" style="color: #8f94a0; font-family: 'JetBrains Mono', monospace;">Legacy</div>
                      <div class="mt-2">
                        <button type="button" class="db-card db-card-legacy" data-db="MySQL" data-note="Used but not preferred">
                          <div class="db-title">MySQL</div>
                          <div class="db-sub">Legacy experience</div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="content-card p-5 border-[1px] border-[#2a2b2a] bg-[#0d0e0d]">
                    <div class="flex items-center gap-3">
                      <div class="w-1 h-8 bg-[#EC8254]" />
                      <div class="text-lg font-bold" style="color: #e5e0c7; font-family: 'JetBrains Mono', monospace;">Selected database</div>
                    </div>

                    <div class="mt-4">
                      <div class="mono text-xs uppercase tracking-[0.22em] text-[#7a7563]">name</div>
                      <div id="dbSelectedName" class="mt-1 text-2xl font-bold" style="color: #EC8254; font-family: 'JetBrains Mono', monospace;">PostgreSQL</div>
                    </div>

                    <div class="mt-5">
                      <div class="mono text-xs uppercase tracking-[0.22em] text-[#7a7563]">note</div>
                      <div id="dbSelectedNote" class="mt-2 text-sm" style="color: #b8b29a; font-family: 'Open Sans', system-ui, sans-serif;">Robust relational powerhouse</div>
                    </div>

                    <div class="mt-6">
                      <div class="mono text-xs uppercase tracking-[0.22em] text-[#7a7563]">operating mode</div>
                      <div class="mt-2 tech-mode" style="border: 1px solid #2a2b2a; background: rgba(18,19,22,0.4); padding: 12px 12px;">
                        <div class="tech-mode-line">Read-heavy workloads with predictable latency.</div>
                        <div class="tech-mode-line" style="margin-top: 6px;">Schema discipline and measurable performance.</div>
                      </div>
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
import { onMounted } from 'vue'

onMounted(() => {
  const setSelected = (btn) => {
    const name = btn.getAttribute('data-db') || ''
    const note = btn.getAttribute('data-note') || ''
    const nameEl = document.getElementById('dbSelectedName')
    const noteEl = document.getElementById('dbSelectedNote')
    if (nameEl) nameEl.textContent = name
    if (noteEl) noteEl.textContent = note

    const all = document.querySelectorAll('.db-card')
    all.forEach((el) => el.classList.remove('db-card-active'))
    btn.classList.add('db-card-active')
  }

  const dbCards = document.querySelectorAll('.db-card')
  dbCards.forEach((btn) => {
    btn.addEventListener('click', () => setSelected(btn))
  })

  const initially = document.querySelector('.db-card[data-db="PostgreSQL"]')
  if (initially) setSelected(initially)
})
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

.tech-card {
  width: 100%;
  text-align: left;
  padding: 0;
  background: rgba(13,14,13,0.8);
  border: 1px solid #2a2b2a;
  border-radius: 16px;
  transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
}

.tech-card-inner {
  padding: 16px;
}

.tech-card-title {
  color: #e5e0c7;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 0.95rem;
}

.tech-card-desc {
  margin-top: 6px;
  color: #b8b29a;
  font-family: 'Open Sans', system-ui, sans-serif;
  font-size: 0.85rem;
  line-height: 1.5;
}

.tech-card-meta {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-card-meta span {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #7a7563;
  border: 1px solid #2a2b2a;
  background: rgba(26,27,26,0.6);
  padding: 6px 10px;
  border-radius: 999px;
}

.tech-chip {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #b8b29a;
  border: 1px solid #2a2b2a;
  background: rgba(26,27,26,0.55);
  padding: 6px 10px;
  border-radius: 999px;
  transition: border-color 200ms ease, color 200ms ease, box-shadow 200ms ease;
}

.tech-chip:hover {
  border-color: #EC8254;
  color: #EC8254;
  box-shadow: 0 0 0 1px rgba(236,130,84,0.18);
}

.db-card {
  width: 100%;
  text-align: left;
  padding: 12px 12px;
  border: 1px solid #2a2b2a;
  background: rgba(18,19,22,0.35);
  border-radius: 14px;
  transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
}

.db-card-legacy {
  background: rgba(18,19,22,0.2);
}

.db-card:hover {
  border-color: #EC8254;
  box-shadow: 0 0 0 1px rgba(236,130,84,0.18), 0 10px 24px -16px rgba(236,130,84,0.35);
  transform: translateY(-2px);
}

.db-card-active {
  border-color: #EC8254;
  box-shadow: 0 0 0 1px rgba(236,130,84,0.25), 0 16px 34px -20px rgba(236,130,84,0.45);
}

.db-title {
  font-family: 'JetBrains Mono', monospace;
  color: #e5e0c7;
  font-weight: 700;
  font-size: 0.9rem;
}

.db-sub {
  margin-top: 4px;
  font-family: 'Open Sans', system-ui, sans-serif;
  color: #b8b29a;
  font-size: 0.82rem;
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
