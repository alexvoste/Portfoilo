<template>
  <div class="background-fixed">
    <div class="absolute top-24 left-10 hidden lg:block text-[#1f2128] opacity-20 font-mono text-[0.5rem] whitespace-pre pointer-events-none select-none">
      <pre>      lea rdi, [msg]
      call printf</pre>
    </div>

    <div class="absolute top-28 right-10 hidden lg:block text-[#1f2128] opacity-20 font-mono text-[0.5rem] whitespace-pre pointer-events-none select-none">
      <pre>      push rbp
      mov rbp, rsp</pre>
    </div>

    <div class="absolute top-1/2 -left-10 hidden xl:block text-[#1f2128] opacity-15 font-mono text-[0.45rem] whitespace-pre pointer-events-none select-none">
      <pre>      mov rax, 1
      syscall</pre>
    </div>

    <div class="absolute bottom-1/2 -right-10 hidden xl:block text-[#1f2128] opacity-15 font-mono text-[0.45rem] whitespace-pre pointer-events-none select-none">
      <pre>      xor rdi, rdi
      jmp done</pre>
    </div>
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
</style>

