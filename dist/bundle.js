(()=>{"use strict";const n="A".charCodeAt(0),t="Z".charCodeAt(0),e=(e,r)=>{const o=e.charCodeAt(r);return n<=o&&t>=o},r=n=>{let t="";for(let r=0;r<n.length;r++){const o=!(r>0)||e(n,r-1),i=e(n,r),c=!(r<n.length-1)||e(n,r+1);!o&&i||i&&!c?(t+="-",t+=n[r].toLowerCase()):t+=n[r]}return t},o=n=>n?" "+Object.keys(n).map((n=>t=>{const e=n[t],o=r(t),i=n=>`${o}="${n}"`;return e instanceof Date?i(e.toISOString()):"boolean"==typeof e?e?o:"":i((n=>n.replace(/(&)|(")|(\u00A0)/g,(function(n,t,e){return t?"&amp;":e?"&quot;":"&nbsp;"})))(e.toString()))})(n)).filter((n=>n.length)).join(" "):"";function i(n,t,...e){if("function"==typeof n)return n(t,e);{const i=r(n);return(n=>["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].indexOf(n)>-1)(i)&&!e.length?`<${i}${o(t)}>`:`<${i}${o(t)}>${(n=>n?n.map((n=>Array.isArray(n)?n.join("\n"):n)).join("\n"):"")(e)}</${i}>`}}var c=function(){var n,t,e=[],r=0,o=[];function i(){r=0,o.length=0,n.innerHTML=t()}return document.addEventListener("click",(function(n){return function(n){o.forEach((function(t){n.target.id===t.id&&(n.preventDefault(),t.callback())}))}(n)})),{useState:function(n){var t;t=void 0!==e[r]?e[r]:n;var o=r;return r++,[t,function(n){e[o]=n,i()}]},useEffect:function(n,t){var o=e[r],i=!0;o&&(i=t.some((function(n,t){return!Object.is(n,o[t])}))),e[r]=t,r++,i&&n()},init:function(e,r){n=e,t=r,i()},render:i,addOnClick:function(n,t){o.push({id:n,callback:t})}}}();const u=function(){return i("div",null,(t=c.useState(0),e=t[0],r=t[1],c.addOnClick("increaseAge",(function(){r(e+1)})),c.useEffect((function(){n=e>18?"نوش :)":"نه بچه ایی!!"}),[e,n]),i("div",null,i("p",null,"آیا سن شما بزرگتر از 18 سال است ؟ ",i("strong",null,n)),i("h1",null,"سن: ",e),i("button",{id:"increaseAge"},"افزایش سن"))));var n,t,e,r};window.addEventListener("DOMContentLoaded",(function(){return n=document.getElementById("root"),void c.init(n,u);var n}))})();