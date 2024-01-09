import{j as tt,B as de}from"./runtime-core.esm-bundler.xF-NwQvv.js";var G={exports:{}};function ke(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ke(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function he(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=ke(e))&&(i&&(i+=" "),i+=t);return i}G.exports=he,G.exports.clsx=he;var rt=G.exports,nt=Object.create,B=Object.defineProperty,it=Object.getOwnPropertyDescriptor,ot=Object.getOwnPropertyNames,st=Object.getPrototypeOf,at=Object.prototype.hasOwnProperty,ct=(e,t)=>{for(var n in t)B(e,n,{get:t[n],enumerable:!0})},je=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ot(t))!at.call(e,r)&&r!==n&&B(e,r,{get:()=>t[r],enumerable:!(i=it(t,r))||i.enumerable});return e},lt=(e,t,n)=>(n=e!=null?nt(st(e)):{},je(t||!e||!e.__esModule?B(n,"default",{value:e,enumerable:!0}):n,e)),ut=e=>je(B({},"__esModule",{value:!0}),e),Pe={};ct(Pe,{bootstrapCN_EFS:()=>Zt,cnEFS:()=>Yt,tailwindOrWindiCN_EFS:()=>Xt});var en=ut(Pe),ft=lt(rt),V=/^(?<variable_hint>[a-z]+:)?(?<variable_value>--_?[a-z0-9]+(?:(?:-|_)[a-z0-9]+)*)$/,pt=e=>V.test(e),dt=e=>V.exec(e)?.groups?.variable_hint==="color:",ht=e=>V.exec(e)?.groups?.variable_hint==="length:",gt=e=>V.exec(e)?.groups?.variable_hint==="string:",yt=/^(?<variant>\S+:)?(?<prefix>!|-|!-)?(?<type>[a-z]+-)(?<subtype>(?<first>[a-z]+-)?(?<second>[a-z]+-))?(?<value>\[[\w\-0-9$.#),(%\/:]+\]|[\w\d\/\][]+)$/,mt=/^(?<type>[a-z]+|[a-z]+-[a-z]+)(?<breakpoint>-(?:sm|md|lg|xl|xxl))?-(?<value>[a-z0-9]+)(?<state>-[a-z]+)?$/,wt=/^(?<type>[a-z]+|[a-z]+-[a-z]+)(?<breakpoint>-(?:sm|md|lg|xl|xxl))?-(?<value>(?:(?:(?:prim|second|terti)ary)|info|light|dark|danger|warning)+(?:-emphasis|-subtle)?)(?<state>-[a-z]+)?$/,bt=/^(?<digit>\d{1,4}(?:[a-z]{2,4})?)$/,D=e=>bt.test(e),ie=/^(?<color>[a-z]+-)(?<range>[0-9]{2,4})$/,vt=/^(?<hex_color>#[A-Fa-f0-9]{3,6})$/,Oe=/(?<css_color_function>[a-z]{3,9}\((?:\d{1,4}(?:%|[a-z]{3,4}|\.\d+)?(?:,|_)?){3,4}\))/,xt=/(?<variant>\S+:)?(?<class_type_and_value>[a-z0-9\-_\]\[,)(%#!]+)/,Ee=e=>ie.test(e),Fe=/^(?<subtype>[a-z]+ary-)(?<value>[a-z\d]+)?$/,St=e=>vt.test(e)||Oe.test(e)||Fe.test(e),Mt=/^(?<css_function>[a-z_-]{3,15}\(([a-z0-9%!\(\).\/-]+(?:_|,)?)+\))$/,$t=e=>Mt.test(e)&&!Oe.test(e),Tt=/^\[(?<value>[\w\-),%!\/($.:#]+)\]$/,It=/^(?<lower_case_word>[a-z]+)$/,zt=/(?<first_word>[a-z]+-)(?<middle_words>(?:[a-z]+-)+)?(?<last_word>[a-z]+)/,J=e=>It.test(e),Ct=/([a-z0-9\-)(\/,.]+)(?:_[a-z0-9\/),(.\-]+)+/,_t=e=>Ct.test(e),g=["digit","word","color","variable","function","args","slashValue"],oe=e=>{let t={customFiltered:new Map,safeListed:[]};return Object.freeze(e?Object.assign(t,e):t)},kt=()=>oe({bem:new Map}),jt=()=>Object.freeze({...kt(),basicUtility:new Map}),Pt=()=>oe({bootstrapCSSUtility:new Map}),Ot=()=>oe({arbitraryProperties:new Map,tailwindCSSUtility:new Map}),Et=(e,t)=>{let n=/(?<type>[a-z]+-)(?<subtype>(?:[a-z]+-)*)?(?<value>[a-z\d]+)/.exec(t)?.groups||/(?<type>[a-z]+)(?<value>\d+)/.exec(t)?.groups;if(!n)return!1;let{type:i,value:r,subtype:o=""}=n;if(!i||!r)return!1;let a=`${i}${o}`,s=`${o}${r}`,c=D(r),u=J(r),l=Ee(s)||Fe.test(s),f=ie.exec(s)?.groups,w=zt.exec(s)?.groups;if(!e.has(i)){if(l){if(f){let{color:b,range:h}=f;return!b||!h?!1:(e.set(i,new Map([[g[2],`${b}${h}`]])),!0)}return e.set(i,new Map([[g[2],s]])),!0}if(c)return e.set(a,new Map([[g[0],r]])),!0;if(u){if(w){let{first_word:b,middle_words:h="",last_word:d}=w;return b&&d?(e.set(i,new Map([[g[1],`${b}${h}${d}`]])),!0):(e.get(i)?.set(g[1],`${b}${h}${d}`),!0)}return e.set(a,new Map([[g[1],r]])),!0}}let p=e.get(i)||e.get(a);if(p){if(l)return f?(p.set(g[2],`${f.color}${f.range}`),!0):(p.set(g[2],r),!0);if(c)return p.set(g[0],r),!0;if(u)return p.set(g[1],r),!0}return!1},Ft=(e,t)=>{let n=wt.exec(t)?.groups||mt.exec(t)?.groups;if(!n)return!1;let{type:i,value:r,breakpoint:o="",state:a="base"}=n;if(!i||!r)return!1;let s=`${i}${o}`,c=D(r),u=/[a-z\-_]+/.test(r);if(!e.has(s)){if(c)return e.set(s,new Map([["digitMap",new Map().set(a,r)]])),!0;if(u)return e.set(s,new Map([["wordMap",new Map().set(a,r)]])),!0}let l=e.get(s);if(l){if(c)return l.get("digitMap")?.set(a,r),!0;if(u)return l.get("wordMap")?.set(a,r),!0}return!1},Lt=(e,t)=>(n,i,r)=>{let{type:o,subtype:a}=r;if(!e.some(y=>o.startsWith(y)||o===y))return!1;let s=(y,z)=>o.endsWith(y)?n.get(`${o.replace(y,"")}${z}`)?.delete(i):a===y?n.get(`${o}${z==="-"?"":z}`)?.delete(i):!1,{up:c,down:u,left:l,right:f,horizontal:w,both:p,vertical:b,bottomLeft:h,bottomRight:d,topLeft:x,topRight:v}=t;return[s(p,c),s(c,p),s(u,p),s(l.primary,p),s(p,l.primary),s(f.primary,p),s(p,f.primary),s(x.primary,p),s(p,x.primary),s(v.primary,p),s(p,v.primary),s(h.primary,p),s(p,h.primary),s(d.primary,p),s(p,d.primary),s(w,p),s(p,w),s(b,p),s(p,b),l?.secondary&&f?.secondary&&s(l.secondary,p),l?.secondary&&f?.secondary&&s(p,l.secondary),x?.secondary&&v?.secondary&&s(v.secondary,p),x?.secondary&&v?.secondary&&s(p,v.secondary),h?.secondary&&d?.secondary&&s(d.secondary,p),h?.secondary&&d?.secondary&&s(p,d.secondary)].reduce(y=>y===!0)},At=["m","z-index","border","p","start","end","overflow","gap","scale","translate","rotate","skew","rounded","scroll","scroll-m","touch-pan","bg-repeat","divide"],P=Lt(At,{up:"t-",down:"b-",left:{primary:"l-",secondary:"s-"},topLeft:{primary:"tl-",secondary:"ss-"},bottomLeft:{primary:"bl-",secondary:"es-"},right:{primary:"r-",secondary:"e-"},topRight:{primary:"tr-",secondary:"se-"},bottomRight:{primary:"br-",secondary:"ee-"},horizontal:"x-",both:"-",vertical:"y-"}),ge=(e,t)=>{let n=!1,i={text:{classType:"text-",valueType:"word",secondary:{classType:"leading-",valueType:"digit"}},shadow:{classType:"shadow-",valueType:"color",secondary:{classType:"opacity-",valueType:"digit"}},accent:{classType:"accent-",valueType:"color",secondary:{classType:"opacity-",valueType:"digit"}},bg:{classType:"bg-",valueType:"color",secondary:{classType:"opacity-",valueType:"digit"}},border:{isDirectional:!0,classType:"border-",valueType:"color",secondary:{classType:"opacity-",valueType:"digit"}},divide:{isDirectional:!0,classType:"divide-",valueType:"color",secondary:{classType:"opacity-",valueType:"digit"}},ring:{classType:"ring-",valueType:"color",secondary:{classType:"opacity-",valueType:"digit"}}},{variant:r,prefix:o,type:a,firstSubtype:s,secondSubtype:c="",value:u}=t,l=i[a.replace("-","")],f=s?`${r}${a}${s}`:`${r}${a}${c}`,w=/^[a-z\d]+\/[a-z\d\][]+$/.test(u);if(l&&w){let p=`${c}${u}`,b=/^[a-z]+-[a-z\d]+\/[a-z\d\][\.]+$/.test(p);if(s&&b&&(e.has(f)||e.set(f,new Map([[g[6],new Map([["prefix",o],["value",p]])]])),e.has(f))){let y=e.get(f);!y?.has(g[6])&&y?.set("slashValue",new Map([["prefix",o],["value",p]])),y?.get(g[6])?.set("prefix",o)?.set("value",p)}if(!s&&(e.has(f)||e.set(f,new Map([[g[6],new Map([["prefix",o],["value",u]])]])),e.has(f))){let y=e.get(f);!y?.has(g[6])&&y?.set("slashValue",new Map([["prefix",o],["value",u]])),y?.get(g[6])?.set("prefix",o)?.set("value",u)}let{isDirectional:h,secondary:d,classType:x,valueType:v}=l;h&&(P(e,"color",{type:`${r}${x}`,subtype:s??c}),e.get(`${r}${d.classType}`)?.delete(d.valueType)),h||(e.get(`${r}${x}`)?.delete(v),e.get(`${r}${d.classType}`)?.delete(d.valueType)),n=!0}return n},Le=(e,t)=>{let n=yt.exec(t)?.groups;if(!n)return!1;let{type:i,value:r,variant:o="",subtype:a="",prefix:s="",first:c,second:u}=n;if(!i||!r)return!1;let l=`${o}${i}`,f=`${o}${i}${a}`,w=`${a}${r}`,p=r.match(Tt)?.[1],b=!!p,h=D(r)||p&&D(p)||p&&ht(p),d=J(r)||b&&J(p)||b&&gt(p),x=b&&$t(p),v=b&&_t(p),y=b&&pt(p),z=p&&St(p)||b&&dt(p)||Ee(`${a}${r}`);if(s==="-"&&!h)throw new Error(`The ${s} only works with digits don't use it on classes that aren't numbers`);let T=ie.exec(w)?.groups;if(a){if(T){let{color:I,range:C}=T;return!I||!C?!1:e.has(l)?(e.get(l)?.set(g[2],new Map([["prefix",s],["value",`${I}${C}`]])),$(e,f,"color"),!0):(e.set(l,new Map([[g[2],new Map([["prefix",s],["value",`${I}${C}`]])]])),!0)}if(!e.has(f)){if(h)return e.set(f,new Map([[g[0],new Map([["prefix",s],["value",r]])]])),P(e,"digit",{type:l,subtype:a})||$(e,f,"digit"),!0;if(d)return e.set(f,new Map([[g[1],new Map([["prefix",s],["value",r]])]])),$(e,f,"word"),!0;if(x)return e.set(f,new Map([[g[4],new Map([["prefix",s],["value",r]])]])),$(e,f,"function"),!0;if(y)return e.set(f,new Map([[g[3],new Map([["prefix",s],["value",r]])]])),$(e,f,"variable"),!0;if(v)return e.set(f,new Map([[g[5],new Map([["prefix",s],["value",r]])]])),$(e,f,"args"),!0}let S=e.get(f);if(S){if(h)return S.set(g[0],new Map([["prefix",s],["value",r]])),P(e,"digit",{type:l,subtype:a})||$(e,f,"digit"),!0;if(d)return S.set(g[1],new Map([["prefix",s],["value",r]])),$(e,f,"word"),!0;if(x)return S.set(g[4],new Map([["prefix",s],["value",r]])),$(e,f,"color"),!0;if(y)return S.set(g[3],new Map([["prefix",s],["value",r]])),$(e,f,"variable"),!0;if(v)return S.set(g[5],new Map([["prefix",s],["value",r]])),$(e,f,"args"),!0}return!!ge(e,{type:i,firstSubtype:c,secondSubtype:u,value:r,variant:o,prefix:s})}if(!e.has(l)){if(z)return e.set(l,new Map([[g[2],new Map([["prefix",s],["value",r]])]])),M(e,l,"color"),!0;if(h)return e.set(f,new Map([[g[0],new Map([["prefix",s],["value",r]])]])),P(e,"digit",{type:l,subtype:a})||M(e,l,"digit"),!0;if(d)return e.set(f,new Map([[g[1],new Map([["prefix",s],["value",r]])]])),M(e,l,"word"),!0;if(x)return e.set(f,new Map([[g[4],new Map([["prefix",s],["value",r]])]])),M(e,l,"function"),!0;if(y)return e.set(f,new Map([[g[3],new Map([["prefix",s],["value",r]])]])),M(e,l,"variable"),!0;if(v)return e.set(f,new Map([[g[5],new Map([["prefix",s],["value",r]])]])),M(e,l,"args"),!0}let m=e.get(l);if(m){if(z)return T?(m.get(g[2])?.set("prefix",s).set("value",`${T?.color}${T?.range}`),M(e,l,"color"),!0):(m.set(g[2],new Map([["prefix",s],["value",r]])),M(e,l,"color"),!0);if(h)return m.set(g[0],new Map([["prefix",s],["value",r]])),P(e,"digit",{type:l,subtype:a})||M(e,l,"digit"),!0;if(d)return m.set(g[1],new Map([["prefix",s],["value",r]])),M(e,l,"word"),!0;if(x)return m.set(g[4],new Map([["prefix",s],["value",r]])),M(e,l,"function"),!0;if(y)return m.set(g[3],new Map([["prefix",s],["value",r]])),M(e,l,"variable"),!0;if(v)return m.set(g[5],new Map([["prefix",s],["value",r]])),M(e,l,"args"),!0}return!!ge(e,{type:i,firstSubtype:c,secondSubtype:u,value:r,variant:o,prefix:s})};function $(e,t,n){let i=/^(?<variant>\S+:)?(?<type>[a-z]+-)(?<subtype>[a-z]+-)$/,r=i.exec(t)?.groups;if(!r)return;let{variant:o="",type:a}=r;if(!a)return;let s=Array.from(e.keys()).find(c=>{let u=i.test(c),l=new Set(`${c}${o}${a}`).size===new Set(c).size;return u&&c!==t&&l});if(s)return e.get(s)?.delete(n)}function M(e,t,n){let i=/^(?<variant>\S+:)(?<type>[a-z]+-)$/,r=i.exec(t)?.groups;if(!r)return;let{variant:o,type:a}=r;if(!o||!a)return;let s=Array.from(e.keys()).find(c=>{let u=i.test(c),l=new Set(`${c}${o}${a}`).size===new Set(c).size;return u&&c!==t&&l});if(s)return e.get(s)?.delete(n)}var Ae=(e,t,n)=>{let i=!1;return Object.entries(n).forEach(([r,o])=>{let a=xt.exec(t)?.groups;if(!a)return;let{variant:s="base",class_type_and_value:c}=a;c&&(!e.has(r)&&o.includes(c)&&(e.set(r,new Map([[s,c]])),i=!0),o.includes(c)&&(e.get(r)?.set(s,c),i=!0))}),i},Ut=/^(?<lower_case_word>[a-z]+)(?<element>__[a-z]+(?:--[a-z0-9]+)?)$/,Nt=/^(?<lower_case_word>[a-z]+)(?<modifier>--[a-z0-9]+)$/,Dt=(e,t,n)=>{let i=Ut.exec(t)?.groups,r=Nt.exec(t)?.groups;if(i){let{lower_case_word:o,element:a}=i;return!o||!a?!1:e.has(o)?(e.get(o)?.set("element",a),!0):(e.set(o,new Map([["element",a]])),!0)}if(r){let{lower_case_word:o,modifier:a}=r;if(!o||!a)return!1;if(!n.includes(o))throw new Error(`To have a modifier you must have the block ${o} in the list of classes already.
                    Please put the block as the class that requires the use of the modifier.`);return e.has(o)?(e.get(o)?.set("modifier",a),!0):(e.set(o,new Map([["modifier",a]])),!0)}return!1},Rt=/(?<variant>\S+:)?\[(?<property_key>[a-z]+(?:\-[a-z]+)*:)(?<property_value>[_\-),.\/(a-z0-9]+)\]/,Ue=(e,t)=>{let n=Rt.exec(t);if(!n)return!1;let[,i="base",r,o]=n;return!r||!o?!1:e.has(r)?(e.get(r)?.set(i,o),!0):(e.set(r,new Map([[i,o]])),!0)},Bt=/^(?<relationship>@?[a-z-]+\/)(?<name>[a-z]+)$/,Ne=(e,t)=>{let n=t.match(Bt);if(!n)return!1;let[,i,r]=n;return!i||!r?!1:e.has(i)?(e.get(i)?.get("word")?.set("value",r),!0):(e.set(i,new Map([["word",new Map([["value",r]])]])),!0)},Vt=/(?<variant>\S+:)\((?<class_names>(?:[\w\-\]\[$.#),(%:\/]+)(?:\s[\w\-\]\[$.#)\/,(%:]+)+)\)/,qt=({arbitraryProperties:e,customFiltered:t,tailwindCSSUtility:n},i,r)=>{let o=!1,a=Vt.exec(i)?.groups;if(!a)return o;let{variant:s,class_names:c}=a;return!s||!c||(c?.split(/\s/)).map(u=>`${s}${u}`).forEach(u=>{if(Le(n,u)){o=!0;return}if(Ne(n,u)){o=!0;return}if(Ue(e,u)){o=!0;return}if(r&&Ae(t,u,r)){o=!0;return}}),o},Qt=e=>{let t="";if(e.size===0)return t;for(let n of e.values())if(n)for(let[i,r]of n)t=t.concat(`${i==="base"?"":i}${r} `);return t},Ht=e=>e.length===0?"":`${e.join(" ")} `,Wt=(e,t,n)=>(i,r)=>{let o=e(),{customFiltered:a,safeListed:s,...c}=i.reduce(Kt(r,t),o),u=Ht(s),l=Qt(a);return n(c,u.concat(l)).trimEnd()};function Kt(e,t){return(n,i)=>{if(e&&Ae(n.customFiltered,i,e))return n;if(/^[a-z]+$/.test(i)){if(n.safeListed.includes(i))throw new Error(`You have this class in the safelist and as a class name.
                     Classes that are safe listed are not filtered just prepended
                     to the start result of this function.
                     If you want them filtered then please use a filter map instead.
                    `);return n.safeListed.push(i),n}return t(n,i,e)}}function Gt(e){return e instanceof Map}function Jt(e){return typeof e=="string"}var se=e=>(...t)=>{let{sortedClassesCreator:n,classMapChanger:i,classMapToStringTransformer:r,filterObject:o}=e,a=/\s+/,s=(0,ft.default)(...t).split(a);if(s.length<2)throw new Error("This string has no sets of classes please add spaces between classes that need to be sorted");return Wt(n,i,r)(s,o)},Yt=se({sortedClassesCreator:jt,classMapChanger(e,t){return Et(e.basicUtility,t)||Dt(e.bem,t,e.safeListed),e},classMapToStringTransformer(e,t){if(e.bem.size!==0)for(let[n,i]of e.bem){let r=i?.get("modifier"),o=i?.get("element");r&&(t=t.concat(`${n} ${n}${r} `)),o&&(t=t.concat(`${n}${o} `))}if(e.basicUtility.size!==0)for(let[n,i]of e.basicUtility){if(!i)continue;let r=[i.get("digit"),i.get("word"),i.get("color")].filter(Jt).map(o=>`${n}${o} `);t=t.concat(...r)}return t}}),Xt=se({sortedClassesCreator:Ot,classMapChanger(e,t,n){if([()=>Le(e.tailwindCSSUtility,t),()=>Ue(e.arbitraryProperties,t),()=>Ne(e.tailwindCSSUtility,t)].some(a=>a()===!0))return e;let{customFiltered:i,tailwindCSSUtility:r,arbitraryProperties:o}=e;return qt({tailwindCSSUtility:r,arbitraryProperties:o,customFiltered:i},t,n),e},classMapToStringTransformer(e,t){if(e.arbitraryProperties.size!==0){for(let[n,i]of e.arbitraryProperties)if(!(!i||i.size===0))for(let[r,o]of i)t=t.concat(`${r==="base"?"":r}[${n}${o}] `)}if(e.tailwindCSSUtility.size!==0)for(let[n,i]of e.tailwindCSSUtility){if(!i||i.size===0)continue;let r=[i.get("digit"),i.get("word"),i.get("color"),i.get("function"),i.get("variable"),i.get("args")].filter(Gt).map(o=>{let a=o?.get("prefix"),s=o?.get("value");return`${n}${a}${s} `});t=t.concat(...r)}return t}}),Zt=se({filterObject:{visibility:["visible","invisible","collapse"],layout:["d-flex","grid"],stack:["vstack","hstack"]},sortedClassesCreator:Pt,classMapChanger(e,t){return Ft(e.bootstrapCSSUtility,t),e},classMapToStringTransformer(e,t){if(e.bootstrapCSSUtility.size!==0)for(let[n,i]of e.bootstrapCSSUtility){if(!i)continue;let[r,o]=[i.get("digitMap"),i.get("wordMap")];if(r)for(let[a,s]of r.entries()){let c=a==="base"?"":a;t=t.concat(`${n}-${s}${c} `)}if(o)for(let[a,s]of o.entries()){let c=a==="base"?"":a;t=t.concat(`${n}-${s}${c} `)}}return t}});const O=/^[a-z0-9]+(-[a-z0-9]+)*$/,q=(e,t,n,i="")=>{const r=e.split(":");if(e.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const s=r.pop(),c=r.pop(),u={provider:r.length>0?r[0]:i,prefix:c,name:s};return t&&!A(u)?null:u}const o=r[0],a=o.split("-");if(a.length>1){const s={provider:i,prefix:a.shift(),name:a.join("-")};return t&&!A(s)?null:s}if(n&&i===""){const s={provider:i,prefix:"",name:o};return t&&!A(s,n)?null:s}return null},A=(e,t)=>e?!!((e.provider===""||e.provider.match(O))&&(t&&e.prefix===""||e.prefix.match(O))&&e.name.match(O)):!1,De=Object.freeze({left:0,top:0,width:16,height:16}),R=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Q=Object.freeze({...De,...R}),Y=Object.freeze({...Q,body:"",hidden:!1});function er(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const i=((e.rotate||0)+(t.rotate||0))%4;return i&&(n.rotate=i),n}function ye(e,t){const n=er(e,t);for(const i in Y)i in R?i in e&&!(i in n)&&(n[i]=R[i]):i in t?n[i]=t[i]:i in e&&(n[i]=e[i]);return n}function tr(e,t){const n=e.icons,i=e.aliases||Object.create(null),r=Object.create(null);function o(a){if(n[a])return r[a]=[];if(!(a in r)){r[a]=null;const s=i[a]&&i[a].parent,c=s&&o(s);c&&(r[a]=[s].concat(c))}return r[a]}return(t||Object.keys(n).concat(Object.keys(i))).forEach(o),r}function rr(e,t,n){const i=e.icons,r=e.aliases||Object.create(null);let o={};function a(s){o=ye(i[s]||r[s],o)}return a(t),n.forEach(a),ye(e,o)}function Re(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(r=>{t(r,null),n.push(r)});const i=tr(e);for(const r in i){const o=i[r];o&&(t(r,rr(e,r,o)),n.push(r))}return n}const nr={provider:"",aliases:{},not_found:{},...De};function W(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Be(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!W(e,nr))return null;const n=t.icons;for(const r in n){const o=n[r];if(!r.match(O)||typeof o.body!="string"||!W(o,Y))return null}const i=t.aliases||Object.create(null);for(const r in i){const o=i[r],a=o.parent;if(!r.match(O)||typeof a!="string"||!n[a]&&!i[a]||!W(o,Y))return null}return t}const me=Object.create(null);function ir(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function k(e,t){const n=me[e]||(me[e]=Object.create(null));return n[t]||(n[t]=ir(e,t))}function ae(e,t){return Be(t)?Re(t,(n,i)=>{i?e.icons[n]=i:e.missing.add(n)}):[]}function or(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let E=!1;function Ve(e){return typeof e=="boolean"&&(E=e),E}function sr(e){const t=typeof e=="string"?q(e,!0,E):e;if(t){const n=k(t.provider,t.prefix),i=t.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function ar(e,t){const n=q(e,!0,E);if(!n)return!1;const i=k(n.provider,n.prefix);return or(i,n.name,t)}function cr(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),E&&!t&&!e.prefix){let r=!1;return Be(e)&&(e.prefix="",Re(e,(o,a)=>{a&&ar(o,a)&&(r=!0)})),r}const n=e.prefix;if(!A({provider:t,prefix:n,name:"a"}))return!1;const i=k(t,n);return!!ae(i,e)}const qe=Object.freeze({width:null,height:null}),Qe=Object.freeze({...qe,...R}),lr=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ur=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function we(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const i=e.split(lr);if(i===null||!i.length)return e;const r=[];let o=i.shift(),a=ur.test(o);for(;;){if(a){const s=parseFloat(o);isNaN(s)?r.push(o):r.push(Math.ceil(s*t*n)/n)}else r.push(o);if(o=i.shift(),o===void 0)return r.join("");a=!a}}const fr=e=>e==="unset"||e==="undefined"||e==="none";function pr(e,t){const n={...Q,...e},i={...Qe,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let o=n.body;[n,i].forEach(b=>{const h=[],d=b.hFlip,x=b.vFlip;let v=b.rotate;d?x?v+=2:(h.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),h.push("scale(-1 1)"),r.top=r.left=0):x&&(h.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),h.push("scale(1 -1)"),r.top=r.left=0);let y;switch(v<0&&(v-=Math.floor(v/4)*4),v=v%4,v){case 1:y=r.height/2+r.top,h.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:h.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:y=r.width/2+r.left,h.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}v%2===1&&(r.left!==r.top&&(y=r.left,r.left=r.top,r.top=y),r.width!==r.height&&(y=r.width,r.width=r.height,r.height=y)),h.length&&(o='<g transform="'+h.join(" ")+'">'+o+"</g>")});const a=i.width,s=i.height,c=r.width,u=r.height;let l,f;a===null?(f=s===null?"1em":s==="auto"?u:s,l=we(f,c/u)):(l=a==="auto"?c:a,f=s===null?we(l,u/c):s==="auto"?u:s);const w={},p=(b,h)=>{fr(h)||(w[b]=h.toString())};return p("width",l),p("height",f),w.viewBox=r.left.toString()+" "+r.top.toString()+" "+c.toString()+" "+u.toString(),{attributes:w,body:o}}const dr=/\sid="(\S+)"/g,hr="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let gr=0;function yr(e,t=hr){const n=[];let i;for(;i=dr.exec(e);)n.push(i[1]);if(!n.length)return e;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(o=>{const a=typeof t=="function"?t(o):t+(gr++).toString(),s=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+a+r+"$3")}),e=e.replace(new RegExp(r,"g"),""),e}const X=Object.create(null);function mr(e,t){X[e]=t}function Z(e){return X[e]||X[""]}function ce(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const le=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],U=[];for(;j.length>0;)j.length===1||Math.random()>.5?U.push(j.shift()):U.push(j.pop());le[""]=ce({resources:["https://api.iconify.design"].concat(U)});function wr(e,t){const n=ce(t);return n===null?!1:(le[e]=n,!0)}function ue(e){return le[e]}const br=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let be=br();function vr(e,t){const n=ue(e);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(a=>{r=Math.max(r,a.length)});const o=t+".json?icons=";i=n.maxURL-r-n.path.length-o.length}return i}function xr(e){return e===404}const Sr=(e,t,n)=>{const i=[],r=vr(e,t),o="icons";let a={type:o,provider:e,prefix:t,icons:[]},s=0;return n.forEach((c,u)=>{s+=c.length+1,s>=r&&u>0&&(i.push(a),a={type:o,provider:e,prefix:t,icons:[]},s=c.length),a.icons.push(c)}),i.push(a),i};function Mr(e){if(typeof e=="string"){const t=ue(e);if(t)return t.path}return"/"}const $r=(e,t,n)=>{if(!be){n("abort",424);return}let i=Mr(t.provider);switch(t.type){case"icons":{const o=t.prefix,s=t.icons.join(","),c=new URLSearchParams({icons:s});i+=o+".json?"+c.toString();break}case"custom":{const o=t.uri;i+=o.slice(0,1)==="/"?o.slice(1):o;break}default:n("abort",400);return}let r=503;be(e+i).then(o=>{const a=o.status;if(a!==200){setTimeout(()=>{n(xr(a)?"abort":"next",a)});return}return r=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?n("abort",o):n("next",r)});return}setTimeout(()=>{n("success",o)})}).catch(()=>{n("next",r)})},Tr={prepare:Sr,send:$r};function Ir(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((r,o)=>r.provider!==o.provider?r.provider.localeCompare(o.provider):r.prefix!==o.prefix?r.prefix.localeCompare(o.prefix):r.name.localeCompare(o.name));let i={provider:"",prefix:"",name:""};return e.forEach(r=>{if(i.name===r.name&&i.prefix===r.prefix&&i.provider===r.provider)return;i=r;const o=r.provider,a=r.prefix,s=r.name,c=n[o]||(n[o]=Object.create(null)),u=c[a]||(c[a]=k(o,a));let l;s in u.icons?l=t.loaded:a===""||u.missing.has(s)?l=t.missing:l=t.pending;const f={provider:o,prefix:a,name:s};l.push(f)}),t}function He(e,t){e.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(r=>r.id!==t))})}function zr(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const i=e.provider,r=e.prefix;t.forEach(o=>{const a=o.icons,s=a.pending.length;a.pending=a.pending.filter(c=>{if(c.prefix!==r)return!0;const u=c.name;if(e.icons[u])a.loaded.push({provider:i,prefix:r,name:u});else if(e.missing.has(u))a.missing.push({provider:i,prefix:r,name:u});else return n=!0,!0;return!1}),a.pending.length!==s&&(n||He([e],o.id),o.callback(a.loaded.slice(0),a.missing.slice(0),a.pending.slice(0),o.abort))})}))}let Cr=0;function _r(e,t,n){const i=Cr++,r=He.bind(null,n,i);if(!t.pending.length)return r;const o={id:i,icons:t,callback:e,abort:r};return n.forEach(a=>{(a.loaderCallbacks||(a.loaderCallbacks=[])).push(o)}),r}function kr(e,t=!0,n=!1){const i=[];return e.forEach(r=>{const o=typeof r=="string"?q(r,t,n):r;o&&i.push(o)}),i}var jr={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Pr(e,t,n,i){const r=e.resources.length,o=e.random?Math.floor(Math.random()*r):e.index;let a;if(e.random){let m=e.resources.slice(0);for(a=[];m.length>1;){const S=Math.floor(Math.random()*m.length);a.push(m[S]),m=m.slice(0,S).concat(m.slice(S+1))}a=a.concat(m)}else a=e.resources.slice(o).concat(e.resources.slice(0,o));const s=Date.now();let c="pending",u=0,l,f=null,w=[],p=[];typeof i=="function"&&p.push(i);function b(){f&&(clearTimeout(f),f=null)}function h(){c==="pending"&&(c="aborted"),b(),w.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),w=[]}function d(m,S){S&&(p=[]),typeof m=="function"&&p.push(m)}function x(){return{startTime:s,payload:t,status:c,queriesSent:u,queriesPending:w.length,subscribe:d,abort:h}}function v(){c="failed",p.forEach(m=>{m(void 0,l)})}function y(){w.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),w=[]}function z(m,S,I){const C=S!=="success";switch(w=w.filter(_=>_!==m),c){case"pending":break;case"failed":if(C||!e.dataAfterTimeout)return;break;default:return}if(S==="abort"){l=I,v();return}if(C){l=I,w.length||(a.length?T():v());return}if(b(),y(),!e.random){const _=e.resources.indexOf(m.resource);_!==-1&&_!==e.index&&(e.index=_)}c="completed",p.forEach(_=>{_(I)})}function T(){if(c!=="pending")return;b();const m=a.shift();if(m===void 0){if(w.length){f=setTimeout(()=>{b(),c==="pending"&&(y(),v())},e.timeout);return}v();return}const S={status:"pending",resource:m,callback:(I,C)=>{z(S,I,C)}};w.push(S),u++,f=setTimeout(T,e.rotate),n(m,t,S.callback)}return setTimeout(T),x}function We(e){const t={...jr,...e};let n=[];function i(){n=n.filter(s=>s().status==="pending")}function r(s,c,u){const l=Pr(t,s,c,(f,w)=>{i(),u&&u(f,w)});return n.push(l),l}function o(s){return n.find(c=>s(c))||null}return{query:r,find:o,setIndex:s=>{t.index=s},getIndex:()=>t.index,cleanup:i}}function ve(){}const K=Object.create(null);function Or(e){if(!K[e]){const t=ue(e);if(!t)return;const n=We(t),i={config:t,redundancy:n};K[e]=i}return K[e]}function Er(e,t,n){let i,r;if(typeof e=="string"){const o=Z(e);if(!o)return n(void 0,424),ve;r=o.send;const a=Or(e);a&&(i=a.redundancy)}else{const o=ce(e);if(o){i=We(o);const a=e.resources?e.resources[0]:"",s=Z(a);s&&(r=s.send)}}return!i||!r?(n(void 0,424),ve):i.query(t,r,n)().abort}const xe="iconify2",F="iconify",Ke=F+"-count",Se=F+"-version",Ge=36e5,Fr=168;function ee(e,t){try{return e.getItem(t)}catch{}}function fe(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Me(e,t){try{e.removeItem(t)}catch{}}function te(e,t){return fe(e,Ke,t.toString())}function re(e){return parseInt(ee(e,Ke))||0}const H={local:!0,session:!0},Je={local:new Set,session:new Set};let pe=!1;function Lr(e){pe=e}let L=typeof window>"u"?{}:window;function Ye(e){const t=e+"Storage";try{if(L&&L[t]&&typeof L[t].length=="number")return L[t]}catch{}H[e]=!1}function Xe(e,t){const n=Ye(e);if(!n)return;const i=ee(n,Se);if(i!==xe){if(i){const s=re(n);for(let c=0;c<s;c++)Me(n,F+c.toString())}fe(n,Se,xe),te(n,0);return}const r=Math.floor(Date.now()/Ge)-Fr,o=s=>{const c=F+s.toString(),u=ee(n,c);if(typeof u=="string"){try{const l=JSON.parse(u);if(typeof l=="object"&&typeof l.cached=="number"&&l.cached>r&&typeof l.provider=="string"&&typeof l.data=="object"&&typeof l.data.prefix=="string"&&t(l,s))return!0}catch{}Me(n,c)}};let a=re(n);for(let s=a-1;s>=0;s--)o(s)||(s===a-1?(a--,te(n,a)):Je[e].add(s))}function Ze(){if(!pe){Lr(!0);for(const e in H)Xe(e,t=>{const n=t.data,i=t.provider,r=n.prefix,o=k(i,r);if(!ae(o,n).length)return!1;const a=n.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,a):a,!0})}}function Ar(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const i in H)Xe(i,r=>{const o=r.data;return r.provider!==e.provider||o.prefix!==e.prefix||o.lastModified===t});return!0}function Ur(e,t){pe||Ze();function n(i){let r;if(!H[i]||!(r=Ye(i)))return;const o=Je[i];let a;if(o.size)o.delete(a=Array.from(o).shift());else if(a=re(r),!te(r,a+1))return;const s={cached:Math.floor(Date.now()/Ge),provider:e.provider,data:t};return fe(r,F+a.toString(),JSON.stringify(s))}t.lastModified&&!Ar(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function $e(){}function Nr(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,zr(e)}))}function Dr(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:i}=e,r=e.iconsToLoad;delete e.iconsToLoad;let o;if(!r||!(o=Z(n)))return;o.prepare(n,i,r).forEach(s=>{Er(n,s,c=>{if(typeof c!="object")s.icons.forEach(u=>{e.missing.add(u)});else try{const u=ae(e,c);if(!u.length)return;const l=e.pendingIcons;l&&u.forEach(f=>{l.delete(f)}),Ur(e,c)}catch(u){console.error(u)}Nr(e)})})}))}const Rr=(e,t)=>{const n=kr(e,!0,Ve()),i=Ir(n);if(!i.pending.length){let c=!0;return t&&setTimeout(()=>{c&&t(i.loaded,i.missing,i.pending,$e)}),()=>{c=!1}}const r=Object.create(null),o=[];let a,s;return i.pending.forEach(c=>{const{provider:u,prefix:l}=c;if(l===s&&u===a)return;a=u,s=l,o.push(k(u,l));const f=r[u]||(r[u]=Object.create(null));f[l]||(f[l]=[])}),i.pending.forEach(c=>{const{provider:u,prefix:l,name:f}=c,w=k(u,l),p=w.pendingIcons||(w.pendingIcons=new Set);p.has(f)||(p.add(f),r[u][l].push(f))}),o.forEach(c=>{const{provider:u,prefix:l}=c;r[u][l].length&&Dr(c,r[u][l])}),t?_r(t,i,o):$e};function Br(e,t){const n={...e};for(const i in t){const r=t[i],o=typeof r;i in qe?(r===null||r&&(o==="string"||o==="number"))&&(n[i]=r):o===typeof n[i]&&(n[i]=i==="rotate"?r%4:r)}return n}const Vr=/[\s,]+/;function qr(e,t){t.split(Vr).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Qr(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function i(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(e);return isNaN(r)?0:i(r)}else if(n!==e){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let o=parseFloat(e.slice(0,e.length-n.length));return isNaN(o)?0:(o=o/r,o%1===0?i(o):0)}}return t}function Hr(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in t)n+=" "+i+'="'+t[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Wr(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Kr(e){return"data:image/svg+xml,"+Wr(e)}function Gr(e){return'url("'+Kr(e)+'")'}const Te={...Qe,inline:!1},Jr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Yr={display:"inline-block"},ne={backgroundColor:"currentColor"},et={backgroundColor:"transparent"},Ie={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ze={webkitMask:ne,mask:ne,background:et};for(const e in ze){const t=ze[e];for(const n in Ie)t[e+n]=Ie[n]}const N={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";N[e+"-flip"]=t,N[e.slice(0,1)+"-flip"]=t,N[e+"Flip"]=t});function Ce(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const _e=(e,t)=>{const n=Br(Te,t),i={...Jr},r=t.mode||"svg",o={},a=t.style,s=typeof a=="object"&&!(a instanceof Array)?a:{};for(let h in t){const d=t[h];if(d!==void 0)switch(h){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[h]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&qr(n,d);break;case"color":o.color=d;break;case"rotate":typeof d=="string"?n[h]=Qr(d):typeof d=="number"&&(n[h]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete i["aria-hidden"];break;default:{const x=N[h];x?(d===!0||d==="true"||d===1)&&(n[x]=!0):Te[h]===void 0&&(i[h]=d)}}}const c=pr(e,n),u=c.attributes;if(n.inline&&(o.verticalAlign="-0.125em"),r==="svg"){i.style={...o,...s},Object.assign(i,u);let h=0,d=t.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),i.innerHTML=yr(c.body,d?()=>d+"ID"+h++:"iconifyVue"),de("svg",i)}const{body:l,width:f,height:w}=e,p=r==="mask"||(r==="bg"?!1:l.indexOf("currentColor")!==-1),b=Hr(l,{...u,width:f+"",height:w+""});return i.style={...o,"--svg":Gr(b),width:Ce(u.width),height:Ce(u.height),...Yr,...p?ne:et,...s},de("span",i)};Ve(!0);mr("",Tr);if(typeof document<"u"&&typeof window<"u"){Ze();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!cr(i))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const i="IconifyProviders["+n+"] is invalid.";try{const r=t[n];if(typeof r!="object"||!r||r.resources===void 0)continue;wr(n,r)||console.error(i)}catch{console.error(i)}}}}const Xr={...Q,body:""},tn=tt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,t){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let n;if(typeof e!="string"||(n=q(e,!1,!0))===null)return this.abortLoading(),null;const i=sr(n);if(!i)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",i!==null&&(this._loadingIcon={name:e,abort:Rr([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==e&&(this._name=e,t&&t(e));const r=["iconify"];return n.prefix!==""&&r.push("iconify--"+n.prefix),n.provider!==""&&r.push("iconify--"+n.provider),{data:i,classes:r}}},render(){this.counter;const e=this.$attrs,t=this.iconMounted?this.getIcon(e.icon,e.onLoad):null;if(!t)return _e(Xr,e);let n=e;return t.classes&&(n={...e,class:(typeof e.class=="string"?e.class+" ":"")+t.classes.join(" ")}),_e({...Q,...t.data},n)}}),rn=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n};export{tn as I,rn as _,en as d};