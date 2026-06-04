<template>
  <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28" id="terminal">
    <div class="relative">
      <div class="absolute -top-6 -left-6 hidden lg:block pointer-events-none border-l-[1px] border-t-[1px] border-[#1f2128] w-[6rem] h-[6rem]"></div>
      <div class="absolute -bottom-6 -right-6 hidden lg:block pointer-events-none border-r-[1px] border-b-[1px] border-[#1f2128] w-[6rem] h-[6rem]"></div>

      <div class="text-left mb-8 lg:mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-2 border-[1px] border-[#1f2128] bg-[#121316]">
          <span class="relative flex h-2 w-2">
            <span class="absolute inset-0 animate-pulse bg-[#5fa06d] w-2 h-2"></span>
          </span>
          <span class="mono text-[0.7rem] text-[#8f94a0] tracking-[0.05em] lowercase">interactive_terminal</span>
        </div>

        <div class="mt-5">
          <div class="mono text-sm sm:text-base text-[#8f94a0] lowercase leading-6">
            <span class="text-[#48698a]">$</span> poke around.
          </div>
          <div class="mono text-xs text-[#48698a] mt-1 lowercase">
            ~ $ <span class="inline-block w-[10px]">_</span>
          </div>
        </div>
      </div>

      <div class="terminal-shell" style="background:#07080a;">
        <div class="terminal-status" style="padding: 12px 16px; display:flex; align-items:center; gap:8px; background: var(--surface); border-bottom: 1px solid var(--border);">
          <div style="display:flex; gap:8px;">
            <span class="w-3 h-3 border-[1px] border-[#1f2128] bg-[#121316]"></span>
            <span class="w-3 h-3 border-[1px] border-[#1f2128] bg-[#121316]"></span>
            <span class="w-3 h-3 border-[1px] border-[#1f2128] bg-[#121316]"></span>
          </div>
          <span class="mono text-[0.7rem] text-[#8f94a0] ml-auto lowercase">alexvoste@forgezero:~</span>
        </div>

        <div class="terminal-body" style="padding: 1.25rem; min-height: 420px; max-height: 520px; overflow-y: auto; background:#07080a;">
          <div class="terminal-line mb-3">
            <div class="mono text-[#5fa06d]">boot: cold start</div>
            <div class="mono text-[#8f94a0] mt-1">init: storage ok · network staged</div>
            <div class="mono text-[#8f94a0] mt-1">ready: type <span class="text-[#48698a]">help</span> for commands</div>
          </div>

          <div v-for="(line, idx) in outputLines" :key="idx" class="terminal-line" style="margin-bottom: 12px;">
            <span v-if="line.type === 'prompt'" class="mono text-[#5fa06d] font-medium">alexvoste@forgezero:~$</span>
            <span v-if="line.type === 'prompt'" class="mono text-[#dcdfe5] ml-2 lowercase">{{ line.content }}</span>

            <div v-if="line.type === 'response'" class="mono text-[#8f94a0] mt-1" style="white-space: pre-wrap; font-size:0.85rem; border-left: 1px solid #1f2128; padding-left: 12px;">
              {{ line.content }}
            </div>

            <div v-if="line.type === 'ascii'" class="mono text-[#48698a] mt-2" style="white-space: pre; font-size:0.7rem;">
              <pre style="margin: 0; font-family:'JetBrains Mono','Fira Code',ui-monospace,SF Mono,system-ui,monospace;">{{ line.content }}</pre>
            </div>
          </div>

          <div class="input-line" style="display:flex; align-items:center; gap:8px; margin-top: 12px;">
            <span class="mono text-[#5fa06d] font-medium">alexvoste@forgezero:~$</span>
            <input
              ref="inputRef"
              v-model="currentCommand"
              type="text"
              class="terminal-input"
              style="font-size: 0.85rem;"
              @keyup.enter="handleCommand"
              placeholder="type help"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, nextTick, onMounted } from 'vue'

const inputRef = ref(null)
const currentCommand = ref('')
const outputLines = ref([
  { type: 'response', content: 'Welcome. Type help to see what i can do.' }
])

const sudoAttempts = ref(0)

const commands = {
  help: () => ({
    type: 'response',
    content: `available commands:\n  help        - show this\n  info        - whoami\n  about       - short bio\n  ls          - list site sections\n  pwd         - current location\n  skills      - tech stack\n  projects    - what i built\n  forgezero   - about ForgeZero\n  contact     - links\n  uptime      - how long i've been coding\n  motd        - message of the day\n  neofetch    - ascii + sysinfo\n  whoami      - display current user\n  id          - show user identity\n  uname -a    - system information\n  echo        - repeat after me\n  date        - current time\n  cowsay      - cow says hello\n  sl          - steam locomotive\n  fortune     - random wisdom\n  clear       - clean screen\n`.trim()
  }),

  info: () => ({
    type: 'response',
    content: 'alexvoste — systems engineer, Go dev with low-level soul. i speak Go, C, assembly.'
  }),

  about: () => ({
    type: 'response',
    content: 'from python → php → flutter → c/asm → go. web studios, freelance, sysadmin. built TUI messenger with custom crypto, P2P file sharing, telegram bot with monero/ton/usdt. now: go + wasm + low-level.'
  }),

  ls: () => ({
    type: 'response',
    content: 'HeroSection/\nAboutSection/\nPrimaryTechnicalFocus/\nForgeZeroSection/\nForgeZeroSpeed/\nHistorySection/\nDiplomaSection/\nLinksSection/\nFooter/'
  }),

  pwd: () => ({
    type: 'response',
    content: '/home/alexvoste/forgezero/personal_site'
  }),

  skills: () => ({
    type: 'response',
    content: 'primary: Go, C, NASM. secondary: Python, Java, Flutter, Node.js, PHP, Vue. infra: Docker, Linux hardening, VLESS REALITY, WASM.'
  }),

  projects: () => ({
    type: 'response',
    content: 'ForgeZero (Go), NASM (AVX512-FP16), Limine (EFI handover), TUI messenger (C/crypto), P2P file sharing, Telegram bot (crypto+AI), ForgePanel (Go+WASM).'
  }),

  forgezero: () => ({
    type: 'response',
    content: 'ForgeZero — open-source build system for C/asm. parallel builds, BLAKE3 cache, SAST, SBOM, cross-compilation (Zig), Windows native. first prototype: Node.js no deps. now: Go.'
  }),

  contact: () => ({
    type: 'response',
    content: 'github.com/alexvoste | @alexvoste (tg) | alexvostedev@proton.me'
  }),

  uptime: () => ({
    type: 'response',
    content: 'coding since 2018. ~8 years of breaking shit and fixing it.'
  }),

  motd: () => ({
    type: 'response',
    content: '"The computer is not the product. The product is what you build with it." — alexvoste'
  }),

  whoami: () => ({
    type: 'response',
    content: 'alexvoste'
  }),

  id: () => ({
    type: 'response',
    content: 'uid=1000(alexvoste) gid=1000(alexvoste) groups=1000(alexvoste),10(wheel),998(docker)'
  }),

  'uname -a': () => ({
    type: 'response',
    content: 'Linux forgezero 7.0.10-zen1-1-zen #1 ZEN SMP PREEMPT_DYNAMIC x86_64 GNU/Linux'
  }),

  date: () => ({
    type: 'response',
    content: new Date().toString()
  }),

  cowsay: () => ({
    type: 'ascii',
    content: '_________\n< hello >\n-------\n\\   ^__^\n \\  (oo)\\_______\n   (__)\\       )\\/\\\n       ||----w |\n       ||     ||'
  }),

  fortune: () => {
    const fortunes = [
      '"It works on my machine" — every developer ever',
      'There are only two hard things in Computer Science: cache invalidation and naming things.',
      'Premature optimization is the root of all evil.',
      'Real programmers count from 0.',
      'The code is more what you would call guidelines than actual rules.'
    ]
    return {
      type: 'response',
      content: fortunes[Math.floor(Math.random() * fortunes.length)]
    }
  },

  clear: () => {
    outputLines.value = []
    return { type: 'response', content: '' }
  }
}

function scrollToBottom() {
  const terminalBody = document.querySelector('#terminal .terminal-body')
  if (terminalBody) terminalBody.scrollTop = terminalBody.scrollHeight
}

async function handleCommand() {
  const cmd = currentCommand.value.trim().toLowerCase()
  if (!cmd) return

  outputLines.value.push({ type: 'prompt', content: cmd })

  let response
  if (commands[cmd]) {
    response = commands[cmd]()
  } else if (cmd.startsWith('echo ')) {
    response = { type: 'response', content: cmd.substring(5) }
  } else {
    response = { type: 'response', content: `command not found: ${cmd}. try help` }
  }

  if (response) outputLines.value.push(response)
  currentCommand.value = ''
  await nextTick()
  scrollToBottom()
  inputRef.value?.focus()
}

onMounted(() => {
  nextTick(() => inputRef.value?.focus())
})
</script>

<style scoped>
.terminal-body::-webkit-scrollbar {
  width: 6px;
}

.terminal-body::-webkit-scrollbar-track {
  background: #07080a;
}

.terminal-body::-webkit-scrollbar-thumb {
  background: #1f2128;
  border-radius: 3px;
}

.terminal-body::-webkit-scrollbar-thumb:hover {
  background: #48698a;
}
</style>


