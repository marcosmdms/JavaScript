
(() => {
  const FRASES = ["oxe... cê abriu meu código? 😳","para, tô com vergonha...","não olha, tá todo bagunçado aqui dentro","ah não, F12 de novo? me deixa!","fecha o inspecionar que eu volto ao normal"];
  const css = `#shy-overlay{position:fixed;inset:0;z-index:999999;display:none;place-items:center;background:rgba(255,255,255,.85);backdrop-filter:blur(8px);font-family:system-ui,sans-serif;text-align:center;padding:24px}#shy-overlay.show{display:grid}#shy-overlay.box{background:#111;color:#fff;padding:32px 28px;border-radius:20px;max-width:380px;box-shadow:0 20px 60px rgba(0,0,0,.3);transform:rotate(-1deg)}#shy-overlay.emoji{font-size:48px;margin-bottom:12px}#shy-overlay h2{margin:0 0 8px;font-size:22px}#shy-overlay p{margin:0;opacity:.8;font-size:14px}body.com-vergonha>:not(#shy-overlay){filter:blur(14px) saturate(.2);pointer-events:none;user-select:none;transition:filter.4s ease}`;
  const style=document.createElement('style');style.textContent=css;document.documentElement.appendChild(style);
  const overlay=document.createElement('div');overlay.id='shy-overlay';overlay.innerHTML=`<div class="box"><div class="emoji">🫣</div><h2 id="shy-text"></h2><p>fecha o DevTools que eu volto</p></div>`;
  const textEl=overlay.querySelector('#shy-text');let frase=0, isShy=false;
  function ensure(){if(document.body){document.body.appendChild(overlay);return true}return false}if(!ensure())document.addEventListener('DOMContentLoaded',ensure);
  function setShy(s){if(s===isShy)return;isShy=s;if(!document.body)return;if(s){frase=(frase+1)%FRASES.length;textEl.textContent=FRASES[frase];document.body.classList.add('com-vergonha');overlay.classList.add('show')}else{document.body.classList.remove('com-vergonha');overlay.classList.remove('show')}}
  let open=false;const d=new Image();Object.defineProperty(d,'id',{get(){open=true;return'x'}});
  setInterval(()=>{open=false;console.log(d);console.clear();const w=window.outerWidth-window.innerWidth>160,h=window.outerHeight-window.innerHeight>160;setShy(open||w||h)},500);
})();
