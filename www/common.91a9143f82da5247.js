"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{7461:(k,y,m)=>{m.d(y,{c:()=>h});var d=m(1705),v=m(3885),n=m(9732);const h=(c,s)=>{let e,t;const o=(l,u,p)=>{if(typeof document>"u")return;const f=document.elementFromPoint(l,u);f&&s(f)?f!==e&&(a(),r(f,p)):a()},r=(l,u)=>{e=l,t||(t=e);const p=e;(0,d.c)(()=>p.classList.add("ion-activated")),u()},a=(l=!1)=>{if(!e)return;const u=e;(0,d.c)(()=>u.classList.remove("ion-activated")),l&&t!==e&&e.click(),e=void 0};return(0,n.createGesture)({el:c,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>o(l.currentX,l.currentY,v.a),onMove:l=>o(l.currentX,l.currentY,v.b),onEnd:()=>{a(!0),(0,v.h)(),t=void 0}})}},2815:(k,y,m)=>{m.d(y,{i:()=>d});const d=v=>v&&""!==v.dir?"rtl"===v.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},891:(k,y,m)=>{m.r(y),m.d(y,{startFocusVisible:()=>h});const d="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],h=c=>{let s=[],e=!0;const t=c?c.shadowRoot:document,o=c||document.body,r=b=>{s.forEach(g=>g.classList.remove(d)),b.forEach(g=>g.classList.add(d)),s=b},a=()=>{e=!1,r([])},l=b=>{e=n.includes(b.key),e||r([])},u=b=>{if(e&&void 0!==b.composedPath){const g=b.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));r(g)}},p=()=>{t.activeElement===o&&r([])};return t.addEventListener("keydown",l),t.addEventListener("focusin",u),t.addEventListener("focusout",p),t.addEventListener("touchstart",a),t.addEventListener("mousedown",a),{destroy:()=>{t.removeEventListener("keydown",l),t.removeEventListener("focusin",u),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",a),t.removeEventListener("mousedown",a)},setFocus:r}}},7411:(k,y,m)=>{m.d(y,{C:()=>c,a:()=>n,d:()=>h});var d=m(467),v=m(435);const n=function(){var s=(0,d.A)(function*(e,t,o,r,a,l){var u;if(e)return e.attachViewToDom(t,o,a,r);if(!(l||"string"==typeof o||o instanceof HTMLElement))throw new Error("framework delegate is missing");const p="string"==typeof o?null===(u=t.ownerDocument)||void 0===u?void 0:u.createElement(o):o;return r&&r.forEach(f=>p.classList.add(f)),a&&Object.assign(p,a),t.appendChild(p),yield new Promise(f=>(0,v.c)(p,f)),p});return function(t,o,r,a,l,u){return s.apply(this,arguments)}}(),h=(s,e)=>{if(e){if(s)return s.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},c=()=>{let s,e;return{attachViewToDom:function(){var r=(0,d.A)(function*(a,l,u={},p=[]){var f,b;if(s=a,l){const _="string"==typeof l?null===(f=s.ownerDocument)||void 0===f?void 0:f.createElement(l):l;p.forEach(i=>_.classList.add(i)),Object.assign(_,u),s.appendChild(_),yield new Promise(i=>(0,v.c)(_,i))}else if(s.children.length>0&&!s.children[0].classList.contains("ion-delegate-host")){const i=null===(b=s.ownerDocument)||void 0===b?void 0:b.createElement("div");i.classList.add("ion-delegate-host"),p.forEach(w=>i.classList.add(w)),i.append(...s.children),s.appendChild(i)}const g=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),s.parentNode.insertBefore(e,s),g.appendChild(s),s});return function(l,u){return r.apply(this,arguments)}}(),removeViewFromDom:()=>(s&&e&&(e.parentNode.insertBefore(s,e),e.remove()),Promise.resolve())}}},3885:(k,y,m)=>{m.d(y,{a:()=>h,b:()=>c,c:()=>n,d:()=>e,h:()=>s});const d={getEngine(){var t;const o=window;return o.TapticEngine||(null===(t=o.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&o.Capacitor.Plugins.Haptics},available(){var t;const o=window;return!!this.getEngine()&&("web"!==(null===(t=o.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const o=this.getEngine();if(!o)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;o.impact({style:r})},notification(t){const o=this.getEngine();if(!o)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;o.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},v=()=>d.available(),n=()=>{v()&&d.selection()},h=()=>{v()&&d.selectionStart()},c=()=>{v()&&d.selectionChanged()},s=()=>{v()&&d.selectionEnd()},e=t=>{v()&&d.impact(t)}},9768:(k,y,m)=>{m.d(y,{a:()=>d,b:()=>l,c:()=>e,d:()=>u,e:()=>C,f:()=>s,g:()=>p,h:()=>n,i:()=>v,j:()=>i,k:()=>w,l:()=>t,m:()=>r,n:()=>f,o:()=>o,p:()=>c,q:()=>h,r:()=>_,s:()=>E,t:()=>a,u:()=>b,v:()=>g});const d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4782:(k,y,m)=>{m.d(y,{I:()=>c,a:()=>r,b:()=>s,c:()=>u,d:()=>f,f:()=>a,g:()=>o,i:()=>t,p:()=>p,r:()=>b,s:()=>l});var d=m(467),v=m(435),n=m(8078);const c="ion-content",s=".ion-content-scroll-host",e=`${c}, ${s}`,t=g=>"ION-CONTENT"===g.tagName,o=function(){var g=(0,d.A)(function*(_){return t(_)?(yield new Promise(i=>(0,v.c)(_,i)),_.getScrollElement()):_});return function(i){return g.apply(this,arguments)}}(),r=g=>g.querySelector(s)||g.querySelector(e),a=g=>g.closest(e),l=(g,_)=>t(g)?g.scrollToTop(_):Promise.resolve(g.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),u=(g,_,i,w)=>t(g)?g.scrollByPoint(_,i,w):Promise.resolve(g.scrollBy({top:i,left:_,behavior:w>0?"smooth":"auto"})),p=g=>(0,n.a)(g,c),f=g=>{if(t(g)){const i=g.scrollY;return g.scrollY=!1,i}return g.style.setProperty("overflow","hidden"),!0},b=(g,_)=>{t(g)?g.scrollY=_:g.style.removeProperty("overflow")}},6290:(k,y,m)=>{m.r(y),m.d(y,{KEYBOARD_DID_CLOSE:()=>v,KEYBOARD_DID_OPEN:()=>d,copyVisualViewport:()=>_,keyboardDidClose:()=>p,keyboardDidOpen:()=>l,keyboardDidResize:()=>u,resetKeyboardAssist:()=>e,setKeyboardClose:()=>a,setKeyboardOpen:()=>r,startKeyboardAssist:()=>t,trackViewportChanges:()=>g});const d="ionKeyboardDidShow",v="ionKeyboardDidHide";let h={},c={},s=!1;const e=()=>{h={},c={},s=!1},t=i=>{o(i),i.visualViewport&&(c=_(i.visualViewport),i.visualViewport.onresize=()=>{g(i),l()||u(i)?r(i):p(i)&&a(i)})},o=i=>{i.addEventListener("keyboardDidShow",w=>r(i,w)),i.addEventListener("keyboardDidHide",()=>a(i))},r=(i,w)=>{f(i,w),s=!0},a=i=>{b(i),s=!1},l=()=>!s&&h.width===c.width&&(h.height-c.height)*c.scale>150,u=i=>s&&!p(i),p=i=>s&&c.height===i.innerHeight,f=(i,w)=>{const C=new CustomEvent(d,{detail:{keyboardHeight:w?w.keyboardHeight:i.innerHeight-c.height}});i.dispatchEvent(C)},b=i=>{const w=new CustomEvent(v);i.dispatchEvent(w)},g=i=>{h=Object.assign({},c),c=_(i.visualViewport)},_=i=>({width:Math.round(i.width),height:Math.round(i.height),offsetTop:i.offsetTop,offsetLeft:i.offsetLeft,pageTop:i.pageTop,pageLeft:i.pageLeft,scale:i.scale})},9323:(k,y,m)=>{m.d(y,{c:()=>v});var d=m(8745);const v=n=>{let h,c,s;const e=()=>{h=()=>{s=!0,n&&n(!0)},c=()=>{s=!1,n&&n(!1)},null==d.w||d.w.addEventListener("keyboardWillShow",h),null==d.w||d.w.addEventListener("keyboardWillHide",c)};return e(),{init:e,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",h),null==d.w||d.w.removeEventListener("keyboardWillHide",c),h=c=void 0},isKeyboardVisible:()=>s}}},214:(k,y,m)=>{m.d(y,{S:()=>v});const v={bubbles:{dur:1e3,circles:9,fn:(n,h,c)=>{const s=n*h/c-n+"ms",e=2*Math.PI*h/c;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(n,h,c)=>{const s=h/c,e=n*s-n+"ms",t=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(n,h)=>({r:6,style:{left:9-9*h+"px","animation-delay":-110*h+"ms"}})},lines:{dur:1e3,lines:8,fn:(n,h,c)=>({y1:14,y2:26,style:{transform:`rotate(${360/c*h+(h<c/2?180:-180)}deg)`,"animation-delay":n*h/c-n+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(n,h,c)=>({y1:12,y2:20,style:{transform:`rotate(${360/c*h+(h<c/2?180:-180)}deg)`,"animation-delay":n*h/c-n+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(n,h,c)=>({y1:17,y2:29,style:{transform:`rotate(${30*h+(h<6?180:-180)}deg)`,"animation-delay":n*h/c-n+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(n,h,c)=>({y1:12,y2:20,style:{transform:`rotate(${30*h+(h<6?180:-180)}deg)`,"animation-delay":n*h/c-n+"ms"}})}}},2884:(k,y,m)=>{m.r(y),m.d(y,{createSwipeBackGesture:()=>c});var d=m(435),v=m(2815),n=m(9732);m(5206);const c=(s,e,t,o,r)=>{const a=s.ownerDocument.defaultView;let l=(0,v.i)(s);const p=i=>l?-i.deltaX:i.deltaX;return(0,n.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:i=>(l=(0,v.i)(s),(i=>{const{startX:E}=i;return l?E>=a.innerWidth-50:E<=50})(i)&&e()),onStart:t,onMove:i=>{const E=p(i)/a.innerWidth;o(E)},onEnd:i=>{const w=p(i),E=a.innerWidth,C=w/E,x=(i=>l?-i.velocityX:i.velocityX)(i),P=x>=0&&(x>.2||w>E/2),M=(P?1-C:C)*E;let O=0;if(M>5){const $=M/Math.abs(x);O=Math.min($,540)}r(P,C<=0?.01:(0,d.l)(0,C,.9999),O)}})}},6055:(k,y,m)=>{m.d(y,{J:()=>h,OA:()=>c,PO:()=>n,tw:()=>s});var d=m(467),v=m(5972);const n=function(){var e=(0,d.A)(function*(t){var o,r,a,l,u,p;t.params=t.params||{},(0,v.Ll)({path:"api/Payment2/Pay",params:{userid:null!==(o=t.params.userid)&&void 0!==o?o:null,pay_orderid:null!==(r=t.params.pay_orderid)&&void 0!==r?r:null,discount_code:null!==(a=t.params.discount_code)&&void 0!==a?a:null,recharge_method:null!==(l=t.params.recharge_method)&&void 0!==l?l:null,v_doctypes:null!==(u=t.params.v_doctypes)&&void 0!==u?u:null,docid:null!==(p=t.params.docid)&&void 0!==p?p:null},success:f=>{"function"==typeof t.callback&&t.callback(f.data||null)},error:f=>{"function"==typeof t.callback&&t.callback(),console.error(f)},loading:t.loading,loadingController:t.loadingController})});return function(o){return e.apply(this,arguments)}}(),h=function(){var e=(0,d.A)(function*(t){var o,r;t.params=t.params||{},(0,v.hm)({path:"api/Payment/discount_code_valid",params:{userid:null!==(o=t.params.userid)&&void 0!==o?o:null,discount_code:null!==(r=t.params.discount_code)&&void 0!==r?r:null},success:a=>{"function"==typeof t.callback&&t.callback(a.data||null)},error:a=>{"function"==typeof t.callback&&t.callback(),console.error(a)},loading:t.loading,loadingController:t.loadingController})});return function(o){return e.apply(this,arguments)}}(),c=function(){var e=(0,d.A)(function*(t){var o,r,a,l,u;t.params=t.params||{},t.params.page=t.params.page||1,t.params.limit=t.params.limit||1,(0,v.hm)({path:"api/payment/search_pay_order_detail",params:{getby:null!==(o=t.params.userid)&&void 0!==o?o:null,order_code:null!==(r=t.params.order_code)&&void 0!==r?r:null,pay_orderid:null!==(a=t.params.pay_orderid)&&void 0!==a?a:null,posstart:(t.params.page-1)*t.params.limit,numofrow:t.params.limit,sortfield:null!==(l=t.params.sortfield)&&void 0!==l?l:null,sorttype:null!==(u=t.params.sorttype)&&void 0!==u?u:null},success:p=>{"function"==typeof t.callback&&t.callback(p.data||null)},error:p=>{"function"==typeof t.callback&&t.callback(),console.error(p)},loading:t.loading,loadingController:t.loadingController})});return function(o){return e.apply(this,arguments)}}(),s=function(){var e=(0,d.A)(function*(t){var o,r,a,l,u,p,f,b,g,_,i,w,E,C;t.params=t.params||{},t.params.page=t.params.page||1,t.params.limit=t.params.limit||1,(0,v.hm)({path:"api/payment/search_pay_order_info",params:{getby:null!==(o=t.params.userid)&&void 0!==o?o:null,userid:null!==(r=t.params.userid)&&void 0!==r?r:null,pay_orderid:null!==(a=t.params.pay_orderid)&&void 0!==a?a:null,orderid:null!==(l=t.params.orderid)&&void 0!==l?l:null,order_code:null!==(u=t.params.order_code)&&void 0!==u?u:null,amount_from:null!==(p=t.params.amount_from)&&void 0!==p?p:null,amount_to:null!==(f=t.params.amount_to)&&void 0!==f?f:null,order_date_from:null!==(b=t.params.order_date_from)&&void 0!==b?b:null,order_date_to:null!==(g=t.params.order_date_to)&&void 0!==g?g:null,v_feesstatus:null!==(_=t.params.v_feesstatus)&&void 0!==_?_:null,cardtype:null!==(i=t.params.cardtype)&&void 0!==i?i:null,pay_full_name:null!==(w=t.params.pay_full_name)&&void 0!==w?w:null,posstart:(t.params.page-1)*t.params.limit,numofrow:t.params.limit,sortfield:null!==(E=t.params.sortfield)&&void 0!==E?E:null,sorttype:null!==(C=t.params.sorttype)&&void 0!==C?C:null},success:x=>{"function"==typeof t.callback&&t.callback(x.data||null)},error:x=>{"function"==typeof t.callback&&t.callback(),console.error(x)},loading:t.loading,loadingController:t.loadingController})});return function(o){return e.apply(this,arguments)}}()},523:(k,y,m)=>{m.d(y,{$1:()=>s,_v:()=>n,b:()=>h,tZ:()=>v});var d=m(5972);function v(e){var t,o,r,a,l,u,p,f,b,g;e.params=e.params||{},e.params.page=e.params.page||1,e.params.limit=e.params.limit||1,(0,d.hm)({url:"api/TextBook/Search",params:{getby:null!==(t=e.params.userid)&&void 0!==t?t:null,textbook_id:null!==(o=e.params.textbook_id)&&void 0!==o?o:null,textbook_ids:null!==(r=e.params.textbook_ids)&&void 0!==r?r:null,textbook_title:null!==(a=e.params.textbook_title)&&void 0!==a?a:null,topic_id:null!==(l=e.params.topic_id)&&void 0!==l?l:null,category_id:null!==(u=e.params.category_id)&&void 0!==u?u:null,v_textbook_catg:null!==(p=e.params.v_textbook_catg)&&void 0!==p?p:null,v_publisher:null!==(f=e.params.v_publisher)&&void 0!==f?f:null,createdby:e.params.createdby||null,sortfield:null!==(b=e.params.sortfield)&&void 0!==b?b:null,sorttype:null!==(g=e.params.sorttype)&&void 0!==g?g:null,posstart:(e.params.page-1)*e.params.limit,numofrow:e.params.limit},success:_=>{var i;"function"==typeof e.callback&&e.callback(null!==(i=_.data)&&void 0!==i?i:null)},error:_=>{"function"==typeof e.callback&&e.callback(),console.error(_)},loading:e.loading,loadingController:e.loadingController})}function n(e){var t,o;e.params=e.params||{},(0,d.hm)({url:"api/TextBook/Detail",params:{getby:null!==(t=e.params.userid)&&void 0!==t?t:null,textbook_id:null!==(o=e.params.textbook_id)&&void 0!==o?o:null},success:r=>{var a;"function"==typeof e.callback&&e.callback(null!==(a=r.data)&&void 0!==a?a:null)},error:r=>{"function"==typeof e.callback&&e.callback(),console.error(r)},loading:e.loading,loadingController:e.loadingController})}function h(e){var t,o,r,a,l,u,p,f;e.params=e.params||{},(0,d.Ll)({url:"api/TextBook/AddUpdate",params:{user_id:null!==(t=e.params.userid)&&void 0!==t?t:null,textbook_id:null!==(o=e.params.textbook_id)&&void 0!==o?o:null,textbook_title:null!==(r=e.params.textbook_title)&&void 0!==r?r:null,topic_id:null!==(a=e.params.topic_id)&&void 0!==a?a:null,category_id:null!==(l=e.params.category_id)&&void 0!==l?l:null,v_textbook_catg:null!==(u=e.params.v_textbook_catg)&&void 0!==u?u:null,v_publisher:null!==(p=e.params.v_publisher)&&void 0!==p?p:null,filepath:null!==(f=e.params.filepath)&&void 0!==f?f:null},success:b=>{var g;"function"==typeof e.callback&&e.callback(null!==(g=b.data)&&void 0!==g?g:null)},error:b=>{"function"==typeof e.callback&&e.callback(),console.error(b)},loading:e.loading,loadingController:e.loadingController})}function s(e){var t,o,r;e.params=e.params||{},(0,d.Ll)({url:"api/TextBook/UpdateAiCode",params:{user_id:null!==(t=e.params.userid)&&void 0!==t?t:null,textbook_id:null!==(o=e.params.textbook_id)&&void 0!==o?o:null,ai_code:null!==(r=e.params.ai_code)&&void 0!==r?r:null},success:a=>{var l;"function"==typeof e.callback&&e.callback(null!==(l=a.data)&&void 0!==l?l:null)},error:a=>{"function"==typeof e.callback&&e.callback(),console.error(a)},loading:e.loading,loadingController:e.loadingController})}},9780:(k,y,m)=>{m.d(y,{n:()=>s});var d=m(8833),v=m(5312),n=m(4438),h=m(6637),c=m(31);let s=(()=>{var e;class t{constructor(){this.APP_ROUTE=d._,this.envVersion=v.c.version}ngOnInit(){}}return(e=t).\u0275fac=function(r){return new(r||e)},e.\u0275cmp=n.VBU({type:e,selectors:[["app-footer"]],decls:83,vars:47,consts:[[1,"footer"],[1,"container","pt-5"],[1,"row"],[1,"col-12","col-md-6","col-lg-3","mb-5"],[1,"title","mb-3"],[1,"content"],["name","arrow-forward-outline"],[3,"href"],[1,"title","mb-3","mt-5"],[1,"connect"],["href","https://www.facebook.com/LacvietCorporation","target","_blank"],["src","../../../../assets/image/landing-page/icon-facebook.svg"],[1,"col-12","col-md-6","col-lg-4","mb-5"],[1,"col-12","col-md-12","col-lg-5","mb-5"],[1,"title","mb-3",3,"innerHTML"],["href","https://maps.app.goo.gl/Hd7d53DR9GicP4JE6","target","_blank",3,"innerHTML"],[1,"contact"],["href","mailto:lacviet@lacviet.com.vn",3,"innerHTML"],["href","tel:+842838423333"],[1,"copyright"],["href","https://lacviet.vn","target","_blank",3,"innerHTML"],[1,"d-flex","align-items-center","justify-content-end","px-2","py-1","line-height-0"],["src","../../../../assets/favicon/favicon-16x16.png","alt","Tabca-16x16"],[1,"text-muted","ml-1"]],template:function(r,a){1&r&&(n.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),n.EFF(5),n.nI1(6,"translate"),n.k0s(),n.j41(7,"div",5)(8,"div"),n.nrm(9,"ion-icon",6),n.j41(10,"a",7),n.EFF(11),n.nI1(12,"translate"),n.k0s()(),n.j41(13,"div"),n.nrm(14,"ion-icon",6),n.j41(15,"a",7),n.EFF(16),n.nI1(17,"translate"),n.k0s()()(),n.j41(18,"div",8),n.EFF(19),n.nI1(20,"translate"),n.k0s(),n.j41(21,"div",5)(22,"div"),n.EFF(23),n.nI1(24,"translate"),n.k0s(),n.j41(25,"div",9)(26,"a",10),n.nrm(27,"ion-icon",11),n.k0s()()()(),n.j41(28,"div",12)(29,"div",4),n.EFF(30),n.nI1(31,"translate"),n.k0s(),n.j41(32,"div",5)(33,"div"),n.nrm(34,"ion-icon",6),n.j41(35,"a",7),n.EFF(36),n.nI1(37,"translate"),n.k0s()(),n.j41(38,"div"),n.nrm(39,"ion-icon",6),n.j41(40,"a",7),n.EFF(41),n.nI1(42,"translate"),n.k0s()(),n.j41(43,"div"),n.nrm(44,"ion-icon",6),n.j41(45,"a",7),n.EFF(46),n.nI1(47,"translate"),n.k0s()(),n.j41(48,"div"),n.nrm(49,"ion-icon",6),n.j41(50,"a",7),n.EFF(51),n.nI1(52,"translate"),n.k0s()()()(),n.j41(53,"div",13)(54,"div",14),n.nI1(55,"translate"),n.EFF(56,"C\xf4ng ty c\u1ed5 ph\u1ea7n tin h\u1ecdc L\u1ea1c Vi\u1ec7t"),n.k0s(),n.j41(57,"div",5)(58,"a",15),n.nI1(59,"translate"),n.j41(60,"span"),n.EFF(61,"23 Nguy\u1ec5n Th\u1ecb Hu\u1ef3nh,"),n.k0s(),n.j41(62,"span"),n.EFF(63,"ph\u01b0\u1eddng 8,"),n.k0s(),n.j41(64,"span"),n.EFF(65,"qu\u1eadn Ph\xfa Nhu\u1eadn,"),n.k0s(),n.j41(66,"span"),n.EFF(67,"th\xe0nh ph\u1ed1 H\u1ed3 Ch\xed Minh"),n.k0s()()(),n.j41(68,"div",16)(69,"div"),n.nrm(70,"a",17),n.k0s(),n.j41(71,"div")(72,"a",18),n.EFF(73,"(+84.28) 3842 3333"),n.k0s()()()()(),n.j41(74,"div",19),n.EFF(75,"\xa9 Copyright 2024 by "),n.j41(76,"a",20),n.nI1(77,"translate"),n.EFF(78,"L\u1ea1c Vi\u1ec7t"),n.k0s()()(),n.j41(79,"div",21),n.nrm(80,"img",22),n.j41(81,"small",23),n.EFF(82),n.k0s()()()),2&r&&(n.R7$(5),n.JRh(n.bMT(6,21,"ForUser")),n.R7$(5),n.Y8G("href",a.APP_ROUTE.HELP,n.B4B),n.R7$(),n.JRh(n.bMT(12,23,"UseGuide")),n.R7$(4),n.Y8G("href",a.APP_ROUTE.HOME_DOWNLOAD_APP,n.B4B),n.R7$(),n.JRh(n.bMT(17,25,"DownloadAppTabca")),n.R7$(3),n.JRh(n.bMT(20,27,"CustomerCare")),n.R7$(4),n.JRh(n.bMT(24,29,"ConnectWithUs")),n.R7$(7),n.JRh(n.bMT(31,31,"ForTabca")),n.R7$(5),n.Y8G("href",a.APP_ROUTE.ABOUT_US,n.B4B),n.R7$(),n.JRh(n.bMT(37,33,"AboutUs")),n.R7$(4),n.Y8G("href",a.APP_ROUTE.POLICIES_AND_REGULATIONS,n.B4B),n.R7$(),n.JRh(n.bMT(42,35,"PoliciesAndRegulations")),n.R7$(4),n.Y8G("href",a.APP_ROUTE.SALES_AND_PAYMENT_POLICIES,n.B4B),n.R7$(),n.JRh(n.bMT(47,37,"SalesAndPaymentPolicies")),n.R7$(4),n.Y8G("href",a.APP_ROUTE.TERMS_OF_USE,n.B4B),n.R7$(),n.JRh(n.bMT(52,39,"TermsOfUse")),n.R7$(3),n.Y8G("innerHTML",n.bMT(55,41,"LacVietCompany"),n.npT),n.R7$(4),n.Y8G("innerHTML",n.bMT(59,43,"LacVietAddress"),n.npT),n.R7$(12),n.Y8G("innerHTML","lacviet@lacviet.com.vn",n.npT),n.R7$(6),n.Y8G("innerHTML",n.bMT(77,45,"LacVietCompanyShort"),n.npT),n.R7$(6),n.SpI("v",a.envVersion,""))},dependencies:[h.iq,c.D9],styles:[".footer[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.1);background:#fff}.footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:17px;font-weight:700;letter-spacing:2px;text-transform:uppercase}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:28px;letter-spacing:1.8px}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:1rem}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;margin-right:.5rem}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{vertical-align:middle;color:inherit}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.75rem;vertical-align:middle;font-size:18px}.footer[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:40px}.footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{font-size:25px;font-weight:400;line-height:22px;letter-spacing:3px}.footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:20px}.footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit}.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{color:#333;text-align:center;font-size:18px;font-weight:400;line-height:26px}.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration-line:underline}"]}),t})()},8963:(k,y,m)=>{m.d(y,{L8:()=>v,jI:()=>d});const d=()=>{h([["assets/iframe/lib/kendoui.2022.1.301/js/kendo.all.min.js"],["assets/iframe/lib/kendoui.2022.1.301/js/jszip.min.js","assets/iframe/lib/kendoui.2022.1.301/js/cultures/kendo.culture.vi-VN.min.js","assets/iframe/lib/kendoui.2022.1.301/js/messages/kendo.messages.vi-VN.min.js"]])},v=()=>{c([["assets/iframe/lib/font-awesome-4.7.0/css/font-awesome.min.css"]])},h=(s,e)=>{let t=o=>{o?Promise.all(o.map(r=>new Promise((a,l)=>{let u=document.createElement("script");u.type="text/javascript",u.src=r,u.onload=()=>{a(u)},u.onerror=()=>{l(u)},window.document.body.append(u)}))).then(()=>{t(s.shift())}):e&&e()};t(s.shift())},c=(s,e)=>{let t=o=>{o?Promise.all(o.map(r=>new Promise((a,l)=>{let u=document.createElement("link");u.rel="stylesheet",u.href=r,u.onload=()=>{a(r)},u.onerror=()=>{l(r)},window.document.head.append(u)}))).then(()=>{t(s.shift())}):e&&e()};t(s.shift())}},7375:k=>{k.exports=JSON.parse('[{"title":"\u0110\u1eb7t c\xe2u h\u1ecfi cho AI nh\u01b0 th\u1ebf n\xe0o?","content":"<p>D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t s\u1ed1 c\xe2u h\u1ecfi m\xe0 anh/ch\u1ecb c\xf3 th\u1ec3 \u0111\u1eb7t ra \u0111\u1ec3 AI tr\u1ea3 l\u1eddi, d\u1ef1a tr\xean n\u1ed9i dung trong t\xe0i li\u1ec7u:</p><h5>V\xed d\u1ee5 c\xe2u h\u1ecfi:</h5><ol><li><strong>T\xf3m t\u1eaft l\u1ea1i b\xe0i 10 v\u1edbi c\xe1c n\u1ed9i dung \u0111\u01b0\u1ee3c n\xeau r\xf5 chi ti\u1ebft v\xe0 v\xed d\u1ee5 c\u1ee5 th\u1ec3.</strong><ul><li>T\xecm hi\u1ec3u chi ti\u1ebft v\u1ec1 m\u1ed9t ch\u1ee7 \u0111\u1ec1 trong b\xe0i h\u1ecdc, c\xf3 th\u1ec3 m\xf4 t\u1ea3 chi ti\u1ebft h\u01a1n \u0111\u1ec3 c\xf3 \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 r\xf5 r\xe0ng h\u01a1n.</li></ul><li><strong>Gi\u1ea3i th\xedch \xfd ngh\u0129a b\xe0i h\xe1t \\"Nh\u1edb \u01a1n th\u1ea7y c\xf4\\" v\xe0 n\xeau c\u1ea3m x\xfac c\u1ee7a t\xe1c gi\u1ea3 khi s\xe1ng t\xe1c b\xe0i h\xe1t n\xe0y.</strong><ul><li>T\xecm hi\u1ec3u chi ti\u1ebft v\u1ec1 m\u1ed9t ch\u1ee7 \u0111\u1ec1 trong b\xe0i h\u1ecdc, c\xe1c kh\xe1i ni\u1ec7m b\u1ea1n n\xean \u0111\u1eb7t n\xf3 v\xe0o d\u1ea5u \\"\\" \u0111\u1ec3 n\u1ed9i dung \u0111\u01b0\u1ee3c l\xe0m r\xf5 xung quanh ch\u1ee7 \u0111\u1ec1 n\xe0y.</li></ul><li><strong>V\u0103n h\xf3a \u1edf ch\xe2u th\u1ed5 s\xf4ng H\u1ed3ng v\xe0 s\xf4ng C\u1eedu Long c\xf3 nh\u1eefng n\xe9t \u0111\u1eb7c s\u1eafc g\xec?</strong><ul><li>C\xf3 th\u1ec3 y\xeau c\u1ea7u li\u1ec7t k\xea c\xe1c \u0111\u1eb7c \u0111i\u1ec3m v\u1ec1 \u0111\u1eddi s\u1ed1ng v\u1eadt ch\u1ea5t v\xe0 tinh th\u1ea7n c\u1ee7a hai v\xf9ng n\xe0y.</li></ul></li><li><strong>Bi\u1ebfn \u0111\u1ed5i kh\xed h\u1eadu \u1ea3nh h\u01b0\u1edfng nh\u01b0 th\u1ebf n\xe0o \u0111\u1ebfn \u0111\u1eddi s\u1ed1ng c\u1ee7a ng\u01b0\u1eddi d\xe2n \u1edf ch\xe2u th\u1ed5 s\xf4ng H\u1ed3ng v\xe0 s\xf4ng C\u1eedu Long?</strong><ul><li>H\u1ecfi v\u1ec1 c\xe1c bi\u1ec3u hi\u1ec7n c\u1ee5 th\u1ec3 c\u1ee7a bi\u1ebfn \u0111\u1ed5i kh\xed h\u1eadu t\u1ea1i hai khu v\u1ef1c n\xe0y.</li></ul></li><li><strong>Nh\u1eefng n\xe9t v\u0103n h\xf3a truy\u1ec1n th\u1ed1ng n\xe0o hi\u1ec7n \u0111ang \u0111\u01b0\u1ee3c l\u01b0u gi\u1eef t\u1ea1i v\xf9ng ch\xe2u th\u1ed5 s\xf4ng H\u1ed3ng v\xe0 s\xf4ng C\u1eedu Long?</strong><ul><li>\u0110\u1eb7t c\xe2u h\u1ecfi n\xe0y \u0111\u1ec3 t\xecm hi\u1ec3u v\u1ec1 c\xe1c phong t\u1ee5c t\u1eadp qu\xe1n v\xe0 di s\u1ea3n v\u0103n h\xf3a.</li></ul></li><li><strong>C\xf3 nh\u1eefng m\xf4 h\xecnh n\xe0o gi\xfap th\xedch \u1ee9ng v\u1edbi bi\u1ebfn \u0111\u1ed5i kh\xed h\u1eadu trong s\u1ea3n xu\u1ea5t n\xf4ng nghi\u1ec7p?</strong><ul><li>Y\xeau c\u1ea7u th\xf4ng tin v\u1ec1 c\xe1c ph\u01b0\u01a1ng ph\xe1p canh t\xe1c b\u1ec1n v\u1eefng, nh\u01b0 m\xf4 h\xecnh l\xfaa - t\xf4m hay l\xfaa - c\xe1.</li></ul></li><li><strong>T\xecnh h\xecnh ph\xe1t tri\u1ec3n ng\xe0nh c\xf4ng nghi\u1ec7p s\u1ea3n xu\u1ea5t, ch\u1ebf bi\u1ebfn th\u1ef1c ph\u1ea9m \u1edf Vi\u1ec7t Nam t\u1eeb n\u0103m 2005 \u0111\u1ebfn 2021 ra sao?</strong><ul><li>C\xf3 th\u1ec3 h\u1ecfi v\u1ec1 s\u1ef1 thay \u0111\u1ed5i trong s\u1ea3n l\u01b0\u1ee3ng c\xe1c s\u1ea3n ph\u1ea9m th\u1ef1c ph\u1ea9m c\u1ee5 th\u1ec3.</li></ul></li></ol><h5>H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng:</h5><p>Khi \u0111\u1eb7t c\xe2u h\u1ecfi, anh/ch\u1ecb n\xean c\u1ee5 th\u1ec3 h\xf3a \u0111\u1ec3 AI c\xf3 th\u1ec3 cung c\u1ea5p th\xf4ng tin ch\xednh x\xe1c v\xe0 chi ti\u1ebft h\u01a1n. N\u1ebfu c\u1ea7n th\xeam th\xf4ng tin, h\xe3y cho bi\u1ebft \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 th\xeam.</p>"},{"title":"T\xf4i n\xean l\xe0m g\xec n\u1ebfu AI kh\xf4ng tr\u1ea3 l\u1eddi \u0111\xfang nh\u01b0 t\xf4i mong \u0111\u1ee3i?","content":"N\u1ebfu AI kh\xf4ng tr\u1ea3 l\u1eddi nh\u01b0 mong \u0111\u1ee3i, b\u1ea1n n\xean xem x\xe9t l\u1ea1i c\xe1ch b\u1ea1n \u0111\xe3 \u0111\u1eb7t c\xe2u h\u1ecfi. Th\u1eed l\xe0m r\xf5 h\u01a1n b\u1eb1ng c\xe1ch cung c\u1ea5p th\xeam chi ti\u1ebft ho\u1eb7c \u0111\u1ecbnh h\u01b0\u1edbng c\xe2u h\u1ecfi theo c\xe1ch kh\xe1c. \u0110\xf4i khi, ph\u1ea3i th\u1eed nghi\u1ec7m v\u1edbi v\xe0i c\xe1ch di\u1ec5n \u0111\u1ea1t kh\xe1c nhau tr\u01b0\u1edbc khi t\xecm \u0111\u01b0\u1ee3c ph\u01b0\u01a1ng \xe1n ph\xf9 h\u1ee3p."},{"title":"\u0110\u1eb7t c\xe2u h\u1ecfi nh\u01b0 th\u1ebf n\xe0o \u0111\u1ec3 \u0111\u1ea1t \u0111\u01b0\u1ee3c hi\u1ec7u qu\u1ea3 t\u1ed1t nh\u1ea5t?","content":"<p>\u0110\u1ec3 \u0111\u1eb7t c\xe2u h\u1ecfi cho AI Bot m\u1ed9t c\xe1ch hi\u1ec7u qu\u1ea3, b\u1ea1n c\xf3 th\u1ec3 tu\xe2n theo m\u1ed9t s\u1ed1 nguy\xean t\u1eafc sau:</p><h5>1. <strong>R\xf5 r\xe0ng v\xe0 C\u1ee5 th\u1ec3</strong></h5><ul><li>\u0110\u1eb7t c\xe2u h\u1ecfi r\xf5 r\xe0ng v\xe0 c\u1ee5 th\u1ec3 \u0111\u1ec3 AI c\xf3 th\u1ec3 hi\u1ec3u \u0111\xfang \xfd b\u1ea1n.</li><li><strong>V\xed d\u1ee5:</strong> Thay v\xec h\u1ecfi \\"N\xf3i v\u1ec1 c\xe2y c\u1ed1i\\", b\u1ea1n c\xf3 th\u1ec3 h\u1ecfi \\"C\xe2y xanh c\xf3 vai tr\xf2 g\xec trong h\u1ec7 sinh th\xe1i?\\"</li></ul><h5>2. <strong>Cung c\u1ea5p Ng\u1eef c\u1ea3nh</strong></h5><ul><li>N\u1ebfu c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n li\xean quan \u0111\u1ebfn m\u1ed9t ch\u1ee7 \u0111\u1ec1 c\u1ee5 th\u1ec3, h\xe3y cung c\u1ea5p ng\u1eef c\u1ea3nh \u0111\u1ec3 AI c\xf3 th\u1ec3 tr\u1ea3 l\u1eddi ch\xednh x\xe1c h\u01a1n.</li><li><strong>V\xed d\u1ee5:</strong> \\"T\xf4i mu\u1ed1n bi\u1ebft v\u1ec1 l\u1ee3i \xedch s\u1ee9c kh\u1ecfe c\u1ee7a vi\u1ec7c u\u1ed1ng tr\xe0 xanh h\xe0ng ng\xe0y.\\"</li></ul><h5>3. <strong>Tr\xe1nh c\xe2u h\u1ecfi m\u01a1 h\u1ed3</strong></h5><ul><li>Nh\u1eefng c\xe2u h\u1ecfi c\xf3 th\u1ec3 hi\u1ec3u theo nhi\u1ec1u c\xe1ch kh\xe1c nhau c\xf3 th\u1ec3 d\u1eabn \u0111\u1ebfn s\u1ef1 nh\u1ea7m l\u1eabn.</li><li><strong>V\xed d\u1ee5:</strong> Thay v\xec h\u1ecfi \\"Ai l\xe0 ng\u01b0\u1eddi n\u1ed5i ti\u1ebfng?\\", h\xe3y h\u1ecfi \\"Ai l\xe0 ng\u01b0\u1eddi n\u1ed5i ti\u1ebfng nh\u1ea5t trong l\u0129nh v\u1ef1c \xe2m nh\u1ea1c hi\u1ec7n nay?\\"</li></ul><h5>4. <strong>S\u1eed d\u1ee5ng \u0110\u1ecbnh d\u1ea1ng H\u1ecfi \u0110\xfang</strong></h5><ul><li>S\u1eed d\u1ee5ng c\xe1c t\u1eeb kh\xf3a nh\u01b0 \\"c\xe1i g\xec\\", \\"t\u1ea1i sao\\", \\"th\u1ebf n\xe0o\\", \\"ai\\", \\"\u1edf \u0111\xe2u\\" \u0111\u1ec3 b\u1eaft \u0111\u1ea7u c\xe2u h\u1ecfi.</li><li><strong>V\xed d\u1ee5:</strong> \\"C\xe1i g\xec l\xe0 nguy\xean nh\xe2n ch\xednh g\xe2y ra bi\u1ebfn \u0111\u1ed5i kh\xed h\u1eadu?\\"</li></ul><h5>5. <strong>H\u1ecfi Chi ti\u1ebft</strong></h5><ul><li>N\u1ebfu b\u1ea1n c\u1ea7n th\xf4ng tin chi ti\u1ebft, h\xe3y y\xeau c\u1ea7u r\xf5 r\xe0ng \u0111\u1ec3 AI c\xf3 th\u1ec3 cung c\u1ea5p th\xf4ng tin \u0111\u1ea7y \u0111\u1ee7.</li><li><strong>V\xed d\u1ee5:</strong> \\"B\u1ea1n c\xf3 th\u1ec3 li\u1ec7t k\xea 5 lo\u1ea1i th\u1ef1c ph\u1ea9m gi\xe0u protein v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xfang kh\xf4ng?\\"</li></ul><h5>6. <strong>Ph\xe2n \u0111o\u1ea1n c\xe2u h\u1ecfi</strong></h5><ul><li>N\u1ebfu c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n ph\u1ee9c t\u1ea1p, h\xe3y chia nh\u1ecf th\xe0nh nhi\u1ec1u c\xe2u h\u1ecfi \u0111\u01a1n gi\u1ea3n \u0111\u1ec3 d\u1ec5 d\xe0ng thu th\u1eadp th\xf4ng tin.</li><li><strong>V\xed d\u1ee5:</strong> \\"T\xf4i mu\u1ed1n bi\u1ebft v\u1ec1 ngu\u1ed3n g\u1ed1c c\u1ee7a c\xe0 ph\xea. C\xe0 ph\xea \u0111\u01b0\u1ee3c tr\u1ed3ng \u1edf \u0111\xe2u v\xe0 quy tr\xecnh ch\u1ebf bi\u1ebfn nh\u01b0 th\u1ebf n\xe0o?\\"</li></ul><h5>7. <strong>Ki\u1ec3m tra l\u1ea1i c\xe2u h\u1ecfi</strong></h5><ul><li>Tr\u01b0\u1edbc khi g\u1eedi c\xe2u h\u1ecfi, h\xe3y \u0111\u1ecdc l\u1ea1i \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o r\u1eb1ng n\xf3 kh\xf4ng c\xf3 sai s\xf3t ng\u1eef ph\xe1p ho\u1eb7c ch\xednh t\u1ea3 c\xf3 th\u1ec3 l\xe0m m\u1ea5t \u0111i \xfd ngh\u0129a.</li></ul><p>B\u1eb1ng c\xe1ch tu\xe2n theo nh\u1eefng nguy\xean t\u1eafc n\xe0y, b\u1ea1n c\xf3 th\u1ec3 t\u1ed1i \u01b0u h\xf3a kh\u1ea3 n\u0103ng nh\u1eadn \u0111\u01b0\u1ee3c th\xf4ng tin ch\xednh x\xe1c v\xe0 h\u1eefu \xedch t\u1eeb AI.</p>"}]')}}]);