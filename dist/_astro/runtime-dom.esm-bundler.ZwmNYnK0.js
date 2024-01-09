import{C as O,D as d,E as H,F as x,G as D,H as B,I as z,J as L,K as M,L as K,M as W,N as q,O as R,P as U}from"./runtime-core.esm-bundler.xF-NwQvv.js";const $="http://www.w3.org/2000/svg",u=typeof document<"u"?document:null,A=u&&u.createElement("template"),F={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?u.createElementNS($,t):u.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>u.createTextNode(t),createComment:t=>u.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>u.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{A.innerHTML=i?`<svg>${t}</svg>`:t;const c=A.content;if(i){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},G=Symbol("_vtc");function j(t,e,n){const i=t[G];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const g=Symbol("_vod"),lt={beforeMount(t,{value:e},{transition:n}){t[g]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):a(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),a(t,!0),i.enter(t)):i.leave(t,()=>{a(t,!1)}):a(t,e))},beforeUnmount(t,{value:e}){a(t,e)}};function a(t,e){t.style.display=e?t[g]:"none"}function J(t,e,n){const i=t.style,r=d(n);if(n&&!r){if(e&&!d(e))for(const s in e)n[s]==null&&b(i,s,"");for(const s in n)b(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),g in t&&(i.display=s)}}const C=/\s*!important$/;function b(t,e,n){if(L(n))n.forEach(i=>b(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=X(t,e);C.test(n)?t.setProperty(M(i),n.replace(C,""),"important"):t[i]=n}}const E=["Webkit","Moz","ms"],m={};function X(t,e){const n=m[e];if(n)return n;let i=K(e);if(i!=="filter"&&i in t)return m[e]=i;i=W(i);for(let r=0;r<E.length;r++){const s=E[r]+i;if(s in t)return m[e]=s}return e}const v="http://www.w3.org/1999/xlink";function Q(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(v,e.slice(6,e.length)):t.setAttributeNS(v,e,n);else{const s=q(e);n==null||s&&!R(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Y(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,S=n??"";l!==S&&(t.value=S),n==null&&t.removeAttribute(e);return}let f=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=R(n):n==null&&l==="string"?(n="",f=!0):l==="number"&&(n=0,f=!0)}try{t[e]=n}catch{}f&&t.removeAttribute(e)}function Z(t,e,n,i){t.addEventListener(e,n,i)}function V(t,e,n,i){t.removeEventListener(e,n,i)}const N=Symbol("_vei");function y(t,e,n,i,r=null){const s=t[N]||(t[N]={}),o=s[e];if(i&&o)o.value=i;else{const[c,f]=k(e);if(i){const l=s[e]=nt(i,r);Z(t,c,l,f)}else o&&(V(t,c,o,f),s[e]=void 0)}}const P=/(?:Once|Passive|Capture)$/;function k(t){let e;if(P.test(t)){e={};let i;for(;i=t.match(P);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):M(t.slice(2)),e]}let h=0;const tt=Promise.resolve(),et=()=>h||(tt.then(()=>h=0),h=Date.now());function nt(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;U(it(i,n.value),e,5,[i])};return n.value=t,n.attached=et(),n}function it(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const w=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rt=(t,e,n,i,r=!1,s,o,c,f)=>{e==="class"?j(t,i,r):e==="style"?J(t,n,i):B(e)?z(e)||y(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):st(t,e,i,r))?Y(t,e,i,s,o,c,f):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Q(t,e,i,r))};function st(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&w(e)&&O(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return w(e)&&d(n)?!1:e in t}const _=D({patchProp:rt},F);let p,T=!1;function ot(){return p||(p=H(_))}function ct(){return p=T?p:x(_),T=!0,p}const ut=(...t)=>{const e=ot().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=I(i);if(!r)return;const s=e._component;!O(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},at=(...t)=>{const e=ct().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=I(i);if(r)return n(r,!0,r instanceof SVGElement)},e};function I(t){return d(t)?document.querySelector(t):t}export{ut as a,at as c,lt as v};