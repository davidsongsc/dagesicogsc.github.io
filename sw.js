if(!self.define){let e,s={};const c=(c,r)=>(c=new URL(c+".js",r).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let o={};const n=e=>c(e,d),a={module:{uri:d},exports:o,require:n};s[d]=Promise.all(r.map((e=>a[e]||n(e)))).then((e=>(i(...e),o)))}}define(["./workbox-0883dee4"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"build/css/styles.css",revision:"e2ecc20d464c98900f6d3db97878e922"},{url:"build/index.html",revision:"ab039dc713df94712df7d2ee5d74e2c3"},{url:"build/js/script.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"build/service-worker.js",revision:"da3ba7b69444cfc3989d93012d188b84"},{url:"build/static/css/main.e6c13ad2.css",revision:"9f6fd7b89af737fe9ff6849a58501b1b"},{url:"build/static/js/787.a86db4f7.chunk.js",revision:"a2442d326bc7e760185d60a533b017f7"},{url:"build/static/js/main.95286e44.js",revision:"87b6c768230f482dcc586e966eef7348"},{url:"docs/index.html",revision:"f2c1135d434f3cdff39a65995305a5af"},{url:"docs/static/css/main.268c9f22.css",revision:"4304d72ccda6db61160c0147af951628"},{url:"docs/static/js/787.a86db4f7.chunk.js",revision:"a2442d326bc7e760185d60a533b017f7"},{url:"docs/static/js/main.f3ce36ea.js",revision:"094cd018e9dfd48738a4fcb87f21638f"},{url:"index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"public/css/styles.css",revision:"e2ecc20d464c98900f6d3db97878e922"},{url:"public/index.html",revision:"d6034500603a9c6ceef3f5e729ec098e"},{url:"public/js/script.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"public/service-worker.js",revision:"da3ba7b69444cfc3989d93012d188b84"},{url:"src/App.js",revision:"ac31d0ab4e25e9ae011e177c5cc20724"},{url:"src/App.test.js",revision:"83ca979af0e840672a4aa673b0c7be01"},{url:"src/components/Api.js",revision:"b0f2ef570d513f6b9bfcc298ffe5c445"},{url:"src/components/ApiGrupo.js",revision:"acf0432826da9772ccfd367a2f4fc769"},{url:"src/components/Aside.js",revision:"9f96844f888179251ea0292843224015"},{url:"src/components/Cadastro.js",revision:"577a29bf3034a2b32932947dc8e8938a"},{url:"src/components/Cardapio.js",revision:"b0524815e6e6c4b82d0f66c145b2efc9"},{url:"src/components/CardapioDetalhe.js",revision:"c389ed0da4cc5648a4de21075a7bef93"},{url:"src/components/CardapioExecutivo.js",revision:"7d7cc5322717fdb88b89712590e5d0ea"},{url:"src/components/CardapioPrincipal.js",revision:"a292617508a78ca26003ae66c9edd36f"},{url:"src/components/CardapioSobremesa.js",revision:"00f0b414b5dd056729c7901acf6889ab"},{url:"src/components/Catalogo.js",revision:"517f939b6ad65836b2b77951cbc1d130"},{url:"src/components/Conteudo.js",revision:"e71c08500a67972068ac8905ec444405"},{url:"src/components/Conteudoduo.js",revision:"0c3c1283ff9cf7ff9faf35ccf6a30215"},{url:"src/components/Footer.js",revision:"561e829e7bf1439c77e52afc1d63b982"},{url:"src/components/Header.js",revision:"bc019019956da0475cb34f889a85b5d5"},{url:"src/components/inicio.js",revision:"05f613d74f29c0eb7ea65eb33e7a09a9"},{url:"src/components/Login.js",revision:"40ecadb683e92db5290834daebd1243f"},{url:"src/components/logout.js",revision:"5267d1f44ca9c7a43b0733f8dabb5e6d"},{url:"src/components/Loja.js",revision:"db304e0976638b6e815df6682a164760"},{url:"src/components/Main.js",revision:"31d3a585b1ff273e251c7eea8532bd5d"},{url:"src/components/Produtos.js",revision:"c16ad81c98e58176a5d920bbd7024b30"},{url:"src/components/Reservas.js",revision:"559a0f2dd9ab5249d1dbad8ad98367aa"},{url:"src/components/script.js",revision:"13ddcf63052a60f03a6f8d50d7f8adc3"},{url:"src/components/Slide.js",revision:"e44129fda3128ca9c646a4a83aa58c95"},{url:"src/components/Sobre.js",revision:"04751f76523b9c1ddd1b64460d483b43"},{url:"src/index.css",revision:"7386d27f653921d6b5c3b54e0cd9d67d"},{url:"src/index.js",revision:"94174c190d0df2f99575eec1182c52dc"},{url:"src/reportWebVitals.js",revision:"b528fd380de9b503eb5c84973639cca4"},{url:"src/setupTests.js",revision:"72158175c4ba432ede32a7c2ca4143e0"},{url:"src/styles/Banner.css",revision:"6a417c831cc2fe8d2dfbf082925ee60d"},{url:"src/styles/media.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"src/styles/principal.css",revision:"c3e189980e025883ac51db7a811f9de3"},{url:"webpack.config.js",revision:"00d703402e1fb55d7934ee5039f2d972"}],{}),e.registerRoute(/https:\/\/jsonplaceholder\.typicode\.com\/todos/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=sw.js.map
