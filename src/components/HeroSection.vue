<template>
  <section id="hero" class="section-animate min-h-screen flex items-center">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative">
      <div class="absolute -left-2 top-20 hidden lg:block pointer-events-none text-[#1f2128]">
        <pre class="mono text-[0.45rem] whitespace-pre">lea rdi, [msg]
call printf</pre>
      </div>

      <div class="absolute -right-2 top-28 hidden lg:block pointer-events-none text-[#1f2128]">
        <pre class="mono text-[0.45rem] whitespace-pre">push rbp
mov rbp, rsp
sub rsp, 16</pre>
      </div>

      <div class="content-card relative overflow-hidden border-[1px] border-[#1f2128]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 sm:p-8 lg:p-12">
          <div class="flex flex-col items-center lg:items-start justify-center gap-5">
            <div class="flex items-center gap-4">
              <img
                src="/src/assets/avatar.png"
                alt="AlexVoste Avatar"
                class="w-20 h-20 sm:w-28 sm:h-28 border-[1px] border-[#1f2128]"
              />
              <div class="flex flex-col">
                <h1 class="mono text-base sm:text-lg font-semibold text-[#dcdfe5] lowercase">alexvoste</h1>
                <div class="mono text-xs text-[#8f94a0] lowercase mt-1">go · systems · low-level · privacy</div>
              </div>
            </div>

            <div class="mono text-xs text-[#8f94a0] w-full border-t-[1px] border-[#1f2128] pt-4">
              <div class="flex items-center gap-2">
                <span class="animate-pulse bg-[#5fa06d] w-2 h-2"></span>
                <span class="text-[#5fa06d]">status: building</span>
              </div>
              <div class="flex items-center gap-2 mt-2">
                <span class="w-2 h-2 bg-[#48698a] opacity-60"></span>
                <span class="lowercase">auditable builds</span>
              </div>
              <div class="flex items-center gap-2 mt-2">
                <span class="w-2 h-2 bg-[#5fa06d] opacity-60"></span>
                <span class="lowercase">fast + reliable</span>
              </div>
            </div>

            <div class="flex gap-2">
              <span class="w-2 h-2 bg-[#48698a]"></span>
              <span class="w-2 h-2 bg-[#48698a]"></span>
              <span class="w-2 h-2 bg-[#48698a]"></span>
            </div>
          </div>

          <div class="flex flex-col justify-center">
            <div class="mono text-xs text-[#8f94a0] mb-3 uppercase tracking-[0.08em]">$ whoami</div>
            <div class="mono text-sm sm:text-base text-[#8f94a0] leading-7 lowercase">
              yo. i'm alexvoste — go developer with a low-level soul.
            </div>
            <div class="mono text-sm sm:text-base text-[#8f94a0] leading-7 lowercase mt-3">
              building <span class="text-[#48698a]">forgezero</span> — open-source build system for c/asm, written in go.
              contributing to <span class="text-[#48698a]">nasm</span> and <span class="text-[#48698a]">limine</span>.
              i speak <span class="text-[#dcdfe5]">go, c, and assembly</span>.
            </div>

            <div class="mt-6 mono text-xs text-[#8f94a0] border-t-[1px] border-[#1f2128] pt-4 flex flex-wrap gap-x-6 gap-y-2">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-[#b04343] animate-pulse"></span>
                <span class="text-[#8f94a0] lowercase">open-source or die</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-[#5fa06d] animate-pulse"></span>
                <span class="text-[#8f94a0] lowercase">fast</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-[#5fa06d] animate-pulse"></span>
                <span class="text-[#8f94a0] lowercase">secure</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-[#5fa06d] animate-pulse"></span>
                <span class="text-[#8f94a0] lowercase">auditable</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="divider my-8 lg:my-12"></div>

      <div class="content-card border-[1px] border-[#1f2128] p-4 sm:p-6 lg:p-8">
        <div class="mono text-xs sm:text-sm text-[#48698a]">
          <span class="text-[#dcdfe5]">&ldquo;</span>
          <span class="lowercase">the computer is not the product. the product is what you build with it.</span>
          <span class="text-[#dcdfe5]">&rdquo;</span>
        </div>
        <div class="mono text-[0.7rem] text-[#8f94a0] mt-2 uppercase tracking-[0.08em]">— alexvoste / forgezero</div>
      </div>
    </div>
  </section>
</template>


<script setup>
</script>

<style scoped>
</style>

