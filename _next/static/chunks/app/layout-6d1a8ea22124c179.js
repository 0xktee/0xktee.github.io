(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3118:function(e,t,n){Promise.resolve().then(n.t.bind(n,9211,23)),Promise.resolve().then(n.t.bind(n,2778,23)),Promise.resolve().then(n.bind(n,2513))},2513:function(e,t,n){"use strict";n.d(t,{default:function(){return o}});var r=n(7437),a=n(5922);function o(e){let{children:t,...n}=e;return(0,r.jsx)(a.f,{...n,children:t})}},2778:function(){},9211:function(e){e.exports={style:{fontFamily:"'__JetBrainsMono_42e24a', '__JetBrainsMono_Fallback_42e24a'",fontStyle:"normal"},className:"__className_42e24a",variable:"__variable_42e24a"}},5922:function(e,t,n){"use strict";n.d(t,{F:function(){return m},f:function(){return u}});var r=n(2265),a=(e,t,n,r,a,o,s,l)=>{let i=document.documentElement,c=["light","dark"];function m(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&o?a.map(e=>o[e]||e):a;n?(i.classList.remove(...r),i.classList.add(t)):i.setAttribute(e,t)}),l&&c.includes(t)&&(i.style.colorScheme=t)}if(r)m(r);else try{let e=localStorage.getItem(t)||n,r=s&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(r)}catch(e){}},o=["light","dark"],s="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=r.createContext(void 0),c={setTheme:e=>{},themes:[]},m=()=>{var e;return null!=(e=r.useContext(i))?e:c},u=e=>r.useContext(i)?r.createElement(r.Fragment,null,e.children):r.createElement(h,{...e}),d=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:m=d,defaultTheme:u=a?"system":"light",attribute:h="data-theme",value:v,children:g,nonce:_,scriptProps:w}=e,[E,S]=r.useState(()=>y(c,u)),[k,C]=r.useState(()=>y(c)),T=v?Object.values(v):m,L=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=p());let r=v?v[t]:t,s=n?b(_):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(...T),r&&i.classList.add(r)):e.startsWith("data-")&&(r?i.setAttribute(e,r):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(c):c(h),l){let e=o.includes(u)?u:null,n=o.includes(t)?t:e;i.style.colorScheme=n}null==s||s()},[_]),A=r.useCallback(e=>{let t="function"==typeof e?e(E):e;S(t);try{localStorage.setItem(c,t)}catch(e){}},[E]),M=r.useCallback(e=>{C(p(e)),"system"===E&&a&&!t&&L("system")},[E,t]);r.useEffect(()=>{let e=window.matchMedia(s);return e.addListener(M),M(e),()=>e.removeListener(M)},[M]),r.useEffect(()=>{let e=e=>{e.key===c&&A(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[A]),r.useEffect(()=>{L(null!=t?t:E)},[t,E]);let N=r.useMemo(()=>({theme:E,setTheme:A,forcedTheme:t,resolvedTheme:"system"===E?k:E,themes:a?[...m,"system"]:m,systemTheme:a?k:void 0}),[E,A,t,k,a,m]);return r.createElement(i.Provider,{value:N},r.createElement(f,{forcedTheme:t,storageKey:c,attribute:h,enableSystem:a,enableColorScheme:l,defaultTheme:u,value:v,themes:m,nonce:_,scriptProps:w}),g)},f=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:o,enableSystem:s,enableColorScheme:l,defaultTheme:i,value:c,themes:m,nonce:u,scriptProps:d}=e,h=JSON.stringify([o,n,i,t,m,c,s,l]).slice(1,-1);return r.createElement("script",{...d,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?u:"",dangerouslySetInnerHTML:{__html:"(".concat(a.toString(),")(").concat(h,")")}})}),y=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},b=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")}},function(e){e.O(0,[889,971,117,744],function(){return e(e.s=3118)}),_N_E=e.O()}]);