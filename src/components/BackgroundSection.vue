<template>
  <div class="background-fixed">
    <div class="absolute inset-0 bg-gradient-radial from-[#0a0b0a] via-[#0d0e0d] to-[#0a0b0a]"></div>
    
    <div class="absolute top-20 left-10 w-72 h-72 bg-[#EC8254]/5 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-[#EC8254]/3 rounded-full blur-3xl animate-pulse-slower"></div>
    <div class="absolute top-1/3 right-1/4 w-48 h-48 bg-[#EC8254]/4 rounded-full blur-2xl animate-float"></div>
    <div class="absolute bottom-1/3 left-1/4 w-56 h-56 bg-[#EC8254]/3 rounded-full blur-2xl animate-float-delayed"></div>
    
    <div class="absolute top-0 left-0 w-full h-full opacity-[0.015] pointer-events-none" style="background-image: repeating-linear-gradient(0deg, #EC8254 1px, transparent 1px); background-size: 100% 40px;"></div>
    <div class="absolute top-0 left-0 w-full h-full opacity-[0.015] pointer-events-none" style="background-image: repeating-linear-gradient(90deg, #EC8254 1px, transparent 1px); background-size: 40px 100%;"></div>
    
    <div class="absolute top-0 left-0 w-full h-full opacity-[0.008] pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, #EC8254 1px, transparent 1px); background-size: 32px 32px;"></div>
    
    <div class="absolute top-24 right-24 text-[#EC8254]/5 font-mono text-[0.5rem] whitespace-pre pointer-events-none select-none hidden lg:block">
      <pre>      mov rax, 60
      xor rdi, rdi
      syscall</pre>
    </div>
    
    <div class="absolute bottom-24 left-24 text-[#EC8254]/5 font-mono text-[0.5rem] whitespace-pre pointer-events-none select-none hidden lg:block">
      <pre>      section .text
      global _start
      _start:</pre>
    </div>
    
    <div class="absolute top-1/3 right-32 text-[#EC8254]/4 font-mono text-[0.45rem] whitespace-pre pointer-events-none select-none hidden xl:block">
      <pre>      push rbp
      mov rbp, rsp
      sub rsp, 16</pre>
    </div>
    
    <div class="absolute bottom-1/3 left-32 text-[#EC8254]/4 font-mono text-[0.45rem] whitespace-pre pointer-events-none select-none hidden xl:block">
      <pre>      lea rdi, [msg]
      call printf
      leave
      ret</pre>
    </div>
    
    <div class="absolute top-1/2 left-5 w-px h-32 bg-gradient-to-b from-transparent via-[#EC8254]/10 to-transparent animate-pulse-opacity"></div>
    <div class="absolute top-1/2 right-5 w-px h-32 bg-gradient-to-b from-transparent via-[#EC8254]/10 to-transparent animate-pulse-opacity-delayed"></div>
    
    <div class="absolute bottom-10 left-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#EC8254]/15 to-transparent"></div>
    <div class="absolute top-10 left-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#EC8254]/10 to-transparent"></div>
    
    <div class="absolute top-32 left-1/4 w-2 h-2 rounded-full bg-[#EC8254]/20 animate-ping-slow"></div>
    <div class="absolute bottom-32 right-1/3 w-1.5 h-1.5 rounded-full bg-[#EC8254]/20 animate-ping-slower"></div>
    <div class="absolute top-1/2 left-1/3 w-1 h-1 rounded-full bg-[#EC8254]/30 animate-pulse-slow"></div>
    <div class="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#EC8254]/25 animate-ping-slow"></div>
    <div class="absolute bottom-1/4 left-1/5 w-1 h-1 rounded-full bg-[#EC8254]/20 animate-pulse-slower"></div>
    
    <div class="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
    
    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#EC8254]/[0.02] to-transparent pointer-events-none rounded-full blur-2xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#EC8254]/[0.02] to-transparent pointer-events-none rounded-full blur-2xl"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.background-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.bg-gradient-radial {
  background: radial-gradient(ellipse at center, #0a0b0a 0%, #080908 100%);
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.05; transform: scale(1); }
  50% { opacity: 0.12; transform: scale(1.05); }
}

@keyframes pulse-slower {
  0%, 100% { opacity: 0.03; transform: scale(1); }
  50% { opacity: 0.08; transform: scale(1.08); }
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(10px, -15px) scale(1.02); }
  66% { transform: translate(-8px, 10px) scale(0.98); }
}

@keyframes float-delayed {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-12px, 8px) scale(0.98); }
  66% { transform: translate(10px, -12px) scale(1.02); }
}

@keyframes ping-slow {
  0% { transform: scale(0.8); opacity: 0.15; }
  50% { transform: scale(1.3); opacity: 0.35; }
  100% { transform: scale(0.8); opacity: 0.15; }
}

@keyframes ping-slower {
  0% { transform: scale(0.6); opacity: 0.1; }
  50% { transform: scale(1.2); opacity: 0.25; }
  100% { transform: scale(0.6); opacity: 0.1; }
}

@keyframes pulse-opacity {
  0%, 100% { opacity: 0.05; }
  50% { opacity: 0.15; }
}

@keyframes pulse-opacity-delayed {
  0%, 100% { opacity: 0.05; }
  50% { opacity: 0.12; }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 12s ease-in-out infinite;
}

.animate-float {
  animation: float 15s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 18s ease-in-out infinite;
}

.animate-ping-slow {
  animation: ping-slow 4s ease-in-out infinite;
}

.animate-ping-slower {
  animation: ping-slower 6s ease-in-out infinite;
}

.animate-pulse-opacity {
  animation: pulse-opacity 5s ease-in-out infinite;
}

.animate-pulse-opacity-delayed {
  animation: pulse-opacity-delayed 7s ease-in-out infinite;
}
</style>
