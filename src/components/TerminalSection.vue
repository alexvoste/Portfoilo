<template>
  <section class="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
    <div class="text-center mb-8">
      <div class="inline-block">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full" style="background: #1e1f1e; border: 1px solid #2a2b2a;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #27c93f; box-shadow: 0 0 6px #27c93f;"></span>
          <span style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; letter-spacing: 0.05em;">TERMINAL_READY</span>
        </span>
      </div>
      <p class="mt-4" style="color: #e5e0c7; font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 500;">
        get your hands dirty.<br>
        <span style="color: #EC8254; font-family: 'JetBrains Mono', monospace; font-size: 0.9rem;">
          ~ $ <span class="cursor-blink">_</span>
        </span>
      </p>
      <div class="flex justify-center mt-2">
        <div class="flex gap-1">
          <span style="width: 40px; height: 2px; background: #EC8254; opacity: 0.5;"></span>
          <span style="width: 20px; height: 2px; background: #EC8254;"></span>
        </div>
      </div>
    </div>

    <div class="terminal" style="background: #0a0b0a; border: 1px solid #2a2b2a; border-radius: 12px; overflow: hidden;">
      
      <div class="terminal-header" style="background: #1a1b1a; padding: 12px 16px; border-bottom: 1px solid #2a2b2a; display: flex; align-items: center; gap: 8px;">
        <div style="display: flex; gap: 8px;">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: #ff5f56;"></div>
          <div style="width: 12px; height: 12px; border-radius: 50%; background: #ffbd2e;"></div>
          <div style="width: 12px; height: 12px; border-radius: 50%; background: #27c93f;"></div>
        </div>
        <span style="color: #b8b29a; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; margin-left: auto;">alexvoste@forgezero:~</span>
      </div>

      <div class="terminal-body" style="padding: 20px; min-height: 400px; max-height: 500px; overflow-y: auto;">
        <div v-for="(line, idx) in outputLines" :key="idx" class="terminal-line" style="margin-bottom: 12px;">
          <span v-if="line.type === 'prompt'" style="color: #27c93f;">alexvoste@forgezero:~$</span>
          <span v-if="line.type === 'prompt'" style="color: #e5e0c7; margin-left: 8px;">{{ line.content }}</span>
          <div v-if="line.type === 'response'" style="color: #b8b29a; margin-top: 4px; white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;">
            {{ line.content }}
          </div>
          <div v-if="line.type === 'ascii'" style="color: #EC8254; margin-top: 8px; white-space: pre; font-family: monospace; font-size: 0.7rem;">
            <pre>{{ line.content }}</pre>
          </div>
        </div>

        <div class="input-line" style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
          <span style="color: #27c93f;">alexvoste@forgezero:~$</span>
          <input
            ref="inputRef"
            v-model="currentCommand"
            type="text"
            class="command-input"
            style="background: transparent; border: none; color: #e5e0c7; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; outline: none; flex: 1;"
            @keyup.enter="handleCommand"
            placeholder="type help"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const inputRef = ref(null)
const currentCommand = ref('')
const outputLines = ref([
  { type: 'response', content: 'Welcome. Type help to see what i can do.' },
  { type: 'prompt', content: '' }
])

const sudoAttempts = ref(0)

const commands = {
  help: () => ({
    type: 'response',
    content: `
available commands:
  help        - show this
  info        - whoami
  about       - short bio
  ls          - list site sections
  pwd         - current location
  skills      - tech stack
  projects    - what i built
  forgezero   - about ForgeZero
  contact     - links
  uptime      - how long i've been coding
  motd        - message of the day
  neofetch    - ascii + sysinfo
  whoami      - display current user
  id          - show user identity
  uname -a    - system information
  echo        - repeat after me
  date        - current time
  cowsay      - cow says hello
  sl          - steam locomotive
  fortune     - random wisdom
  sudo        - try to gain privileges
  rm -rf /    - dangerous command
  clear       - clean screen
    `.trim()
  }),

  info: () => ({
    type: 'response',
    content: `alexvoste — systems engineer, Go dev with low-level soul. i speak Go, C, assembly.`
  }),

  about: () => ({
    type: 'response',
    content: `from python → php → flutter → c/asm → go. web studios, freelance, sysadmin. built TUI messenger with custom crypto, P2P file sharing, telegram bot with monero/ton/usdt. now: go + wasm + low-level.`
  }),

  ls: () => ({
    type: 'response',
    content: `
HeroSection/
AboutSection/
PrimaryTechnicalFocus/
ForgeZeroSection/
ForgeZeroSpeed/
HistorySection/
DiplomaSection/
LinksSection/
Footer/
    `.trim()
  }),

  pwd: () => ({
    type: 'response',
    content: `/home/alexvoste/forgezero/personal_site`
  }),

  skills: () => ({
    type: 'response',
    content: `primary: Go, C, NASM. secondary: Python, Java, Flutter, Node.js, PHP, Vue. infra: Docker, Linux hardening, VLESS REALITY, WASM.`
  }),

  projects: () => ({
    type: 'response',
    content: `ForgeZero (Go), NASM (AVX512-FP16), Limine (EFI handover), TUI messenger (C/crypto), P2P file sharing, Telegram bot (crypto+AI), ForgePanel (Go+WASM).`
  }),

  forgezero: () => ({
    type: 'response',
    content: `ForgeZero — open-source build system for C/asm. parallel builds, BLAKE3 cache, SAST, SBOM, cross-compilation (Zig), Windows native. first prototype: Node.js no deps. now: Go.`
  }),

  contact: () => ({
    type: 'response',
    content: `github.com/alexvoste | @alexvoste (tg) | alexvostedev@proton.me`
  }),

  uptime: () => ({
    type: 'response',
    content: `coding since 2018. ~8 years of breaking shit and fixing it.`
  }),

  motd: () => ({
    type: 'response',
    content: `"The computer is not the product. The product is what you build with it." — alexvoste`
  }),

  whoami: () => ({
    type: 'response',
    content: `alexvoste`
  }),

  id: () => ({
    type: 'response',
    content: `uid=1000(alexvoste) gid=1000(alexvoste) groups=1000(alexvoste),10(wheel),998(docker)`
  }),

  'uname -a': () => ({
    type: 'response',
    content: `Linux forgezero 7.0.10-zen1-1-zen #1 ZEN SMP PREEMPT_DYNAMIC x86_64 GNU/Linux`
  }),

  date: () => ({
    type: 'response',
    content: new Date().toString()
  }),

  cowsay: () => ({
    type: 'ascii',
    content: `
  _______
< hello >
  -------
         \\   ^__^
          \\  (oo)\\_______
             (__)\\       )\\/\\
                 ||----w |
                 ||     ||
    `
  }),

  sl: () => ({
    type: 'ascii',
    content: `
        ====        ________
    _D _|  |_______/        \\___
     |_/                   (_____}
    /                                train? never heard of it
    `
  }),

  fortune: () => {
    const fortunes = [
      '"It works on my machine" — every developer ever',
      'There are only two hard things in Computer Science: cache invalidation and naming things.',
      'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
      'The code is more what you would call guidelines than actual rules.',
      'Premature optimization is the root of all evil.',
      'Real programmers count from 0.',
      'The computer is not the product. The product is what you build with it.'
    ]
    return {
      type: 'response',
      content: fortunes[Math.floor(Math.random() * fortunes.length)]
    }
  },

  sudo: () => {
    sudoAttempts.value++
    const messages = [
      `nice try. no root for you.`,
      `not today, hacker. attempt #${sudoAttempts.value}`,
      `sudo: command not found. oh wait, it's my terminal. fuck off.`,
      `you really think i'd give you root? cute.`,
      `sudo: incident reported to /dev/null`
    ]
    return {
      type: 'response',
      content: messages[Math.min(sudoAttempts.value - 1, messages.length - 1)]
    }
  },

  'rm -rf /': () => ({
    type: 'ascii',
    content: `
  ╔═══════════════════════════════════════╗
  ║  nice try, but i like my system.      ║
  ║  rm -rf / blocked. go play elsewhere. ║
  ╚═══════════════════════════════════════╝
    `
  }),

  clear: () => {
    outputLines.value = []
    return { type: 'response', content: '' }
  }
}

async function handleCommand() {
  const cmd = currentCommand.value.trim().toLowerCase()
  if (!cmd) return

  outputLines.value.push({ type: 'prompt', content: cmd })

  let response
  if (commands[cmd]) {
    response = commands[cmd]()
  } else if (cmd.startsWith('echo ')) {
    const text = cmd.substring(5)
    response = { type: 'response', content: text }
  } else {
    response = { type: 'response', content: `command not found: ${cmd}. try help` }
  }

  if (response) outputLines.value.push(response)
  
  currentCommand.value = ''
  await nextTick()
  const terminalBody = document.querySelector('.terminal-body')
  if (terminalBody) terminalBody.scrollTop = terminalBody.scrollHeight
  inputRef.value?.focus()
}
</script>

<style scoped>
.terminal {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
}

.command-input::placeholder {
  color: #4a4b4a;
}

.terminal-body::-webkit-scrollbar {
  width: 6px;
}

.terminal-body::-webkit-scrollbar-track {
  background: #1a1b1a;
}

.terminal-body::-webkit-scrollbar-thumb {
  background: #3a3b3a;
  border-radius: 3px;
}

pre {
  margin: 0;
  font-family: monospace;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.cursor-blink {
  animation: blink 1s step-end infinite;
}
</style>
