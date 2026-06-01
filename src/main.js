import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.css'

const metaList = [
	{ charset: 'UTF-8' },
	{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
	{ name: 'description', content: 'AlexVoste is a Systems Engineer specializing in low-level engineering, OS development, and high-performance computing. Visit his portfolio to explore ForgeZero, GloriaOS, and contributions to NASM/Limine.' },
	{ name: 'keywords', content: 'AlexVoste, systems engineer, low-level, GoLang, C, Assembly, Plan 9, ForgeZero, GloriaOS, NASM, Limine, OS development, compiler, bootloader, high performance, privacy, software, engineer, architecture, performance optimization, bare metal' },
	{ name: 'author', content: 'AlexVoste' },
	{ name: 'robots', content: 'index, follow' },
	{ property: 'og:title', content: 'AlexVoste | Systems Engineer & Low-Level Architect' },
	{ property: 'og:description', content: 'AlexVoste is a Systems Engineer specializing in low-level engineering, OS development, and high-performance computing.' },
	{ property: 'og:type', content: 'website' },
	{ property: 'og:url', content: 'https://your-domain.com' },
	{ property: 'og:image', content: '/src/assets/social-share.jpg' },
	{ property: 'og:site_name', content: "AlexVoste's Portfolio" },
	{ name: 'twitter:card', content: 'summary_large_image' },
	{ name: 'twitter:site', content: '@alexvoste' },
	{ name: 'twitter:creator', content: '@alexvoste' },
	{ name: 'twitter:title', content: 'AlexVoste | Systems Engineer & Low-Level Architect' },
	{ name: 'twitter:description', content: 'AlexVoste is a Systems Engineer specializing in low-level engineering, OS development, and high-performance computing.' },
	{ name: 'twitter:image', content: '/src/assets/social-share.jpg' }
]

function applyMeta(list){
	list.forEach(item => {
		if(item.charset){
			if(!document.querySelector('meta[charset]')){
				const m = document.createElement('meta')
				m.setAttribute('charset', item.charset)
				document.head.appendChild(m)
			}
			return
		}
		const key = item.name ? 'name' : 'property'
		const val = item.name || item.property
		let el = document.querySelector(`meta[${key}="${val}"]`)
		if(!el){
			el = document.createElement('meta')
			el.setAttribute(key, val)
			document.head.appendChild(el)
		}
		el.setAttribute('content', item.content)
	})
	if(!document.title || document.title === ''){
		document.title = 'AlexVoste | Systems Engineer & Low-Level Architect'
	}
}

applyMeta(metaList)

createApp(App).mount('#app')
