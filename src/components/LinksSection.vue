<template>
  <section id="connect-explore" class="section-animate">
    <div class="max-w-5xl mx-auto px-6 py-20">
      <div class="content-card">
        <div class="section-header">
          connect & explore
        </div>

        <div class="links-grid">
          <a href="https://t.me/alexvoste" target="_blank" rel="noopener noreferrer" class="contact-link">
            <div class="link-title">Telegram</div>
            <div class="link-sub">t.me/alexvoste</div>
          </a>

          <a href="https://github.com/alexvoste" target="_blank" rel="noopener noreferrer" class="contact-link">
            <div class="link-title">GitHub</div>
            <div class="link-sub">github.com/alexvoste</div>
          </a>

          <a href="https://discord.gg/alexvoste" target="_blank" rel="noopener noreferrer" class="contact-link">
            <div class="link-title">Discord</div>
            <div class="link-sub">discord.gg/alexvoste</div>
          </a>

          <a href="https://t.me/alexvostedev" target="_blank" rel="noopener noreferrer" class="contact-link">
            <div class="link-title">Blog</div>
            <div class="link-sub">@alexvostedev - telegram</div>
          </a>

          <a href="mailto:alexvostedev@proton.me" class="contact-link">
            <div class="link-title">Mail</div>
            <div class="link-sub">alexvostedev@proton.me</div>
          </a>

          <a href="https://instagram.com/alexvoste" target="_blank" rel="noopener noreferrer" class="contact-link">
            <div class="link-title">Instagram</div>
            <div class="link-sub">instagram.com/alexvoste</div>
          </a>

          <a href="https://t.me/alexbronsone" target="_blank" rel="noopener noreferrer" class="contact-link">
            <div class="link-title">US Telegram</div>
            <div class="link-sub">t.me/alexbronsone</div>
          </a>

          <a href="https://wienton.ru" target="_blank" rel="noopener noreferrer" class="contact-link">
            <div class="link-title">Portfolio (C-based)</div>
            <div class="link-sub">wienton.ru</div>
          </a>

          <a href="https://dev.to/bare_metal_junkie" target="_blank" rel="noopener noreferrer" class="contact-link">
            <div class="link-title">dev.to</div>
            <div class="link-sub">dev.to/bare_metal_junkie</div>
          </a>

          <a href="https://dev.to/alexvoste" target="_blank" rel="noopener noreferrer" class="contact-link featured-border">
            <div class="link-title">dev.to</div>
            <div class="link-sub">dev.to/alexvoste</div>
          </a>

          <a href="https://coderlegion.com/user/alexvoste" target="_blank" rel="noopener noreferrer" class="contact-link full-width-item">
            <div class="link-title">coderlegion</div>
            <div class="link-sub">coderlegion.com/user/alexvoste</div>
          </a>
        </div>

        <div class="footer-section">
          <a href="#about" class="footer-link">about me: click here →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.section-animate {
  animation: fadeUp 0.65s ease-out forwards;
  opacity: 0;
  transform: translateY(16px);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.max-w-5xl {
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.content-card {
  background: #242524;
  border-radius: 28px;
  padding: 2rem;
  transition: all 0.2s;
  box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.5);
}

.section-header {
  color: #7a7563;
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.35em;
  margin-bottom: 2rem;
  font-weight: 500;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.contact-link {
  display: block;
  background: #1a1b1a;
  border: 1px solid #3a3a35;
  border-radius: 20px;
  padding: 1.25rem 1.25rem;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

.contact-link:hover {
  border-color: #EC8254;
  background: #2a2b2a;
  transform: translateY(-2px);
}

.contact-link:hover .link-title {
  color: #EC8254;
}

.contact-link:hover .link-sub {
  color: #e5e0c7;
}

.link-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.35rem;
  color: #e5e0c7;
  transition: color 0.2s;
}

.link-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: #b8b29a;
  word-break: break-word;
  transition: color 0.2s;
}

.full-width-item {
  grid-column: 1 / -1;
}

.featured-border {
  border: 1px solid #EC8254;
}

.footer-section {
  margin-top: 2rem;
}

.footer-link {
  color: #EC8254;
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.35em;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: opacity 0.2s, transform 0.2s;
  font-weight: 500;
}

.footer-link:hover {
  opacity: 0.85;
  transform: translateX(3px);
}

@media (max-width: 640px) {
  .py-20 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  
  .px-6 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .content-card {
    padding: 1.5rem;
    border-radius: 24px;
  }
  
  .links-grid {
    grid-template-columns: 1fr;
    gap: 0.875rem;
  }
  
  .contact-link {
    padding: 1rem 1.25rem;
  }
  
  .link-title {
    font-size: 0.9rem;
  }
  
  .link-sub {
    font-size: 0.7rem;
  }
  
  .section-header {
    font-size: 0.65rem;
    margin-bottom: 1.5rem;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .links-grid {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  
  .content-card {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .content-card {
    padding: 3rem;
  }
  
  .link-sub {
    font-size: 0.8rem;
  }
}

@media (max-width: 380px) {
  .link-sub {
    font-size: 0.65rem;
    word-break: break-all;
  }
  
  .contact-link {
    padding: 0.9rem 1rem;
  }
  
  .footer-link {
    font-size: 0.6rem;
  }
}
</style>
