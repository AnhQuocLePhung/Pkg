(self.webpackChunkapp_studio_enterprise_pivot_table=self.webpackChunkapp_studio_enterprise_pivot_table||[]).push([[7762,5704],{17762:(D,E,d)=>{d.r(E),d.d(E,{InViewportConfig:()=>c,InViewportConfigDirection:()=>p,InViewportDirective:()=>h,InViewportMetadata:()=>w,InViewportModule:()=>l,InViewportService:()=>s,isPlatformBrowser:()=>M,toBase64:()=>_,toBase64Browser:()=>I,toBase64Node:()=>m});var f=d(31134),v=d.n(f),i=d(94450),A=d.n(i),u=d(21322),R=d.n(u),y=d(27049),T=d.n(y);/*******************************************************************************
 * @license
 * Copyright (c) 2020 Piotr Stępniewski <k3nsei.pl@gmail.com>
 * (https://www.linkedin.com/in/piotrstepniewski/)
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://opensource.org/licenses/MIT
 */const p={BOTH:"both",VERTICAL:"vertical",HORIZONTAL:"horizontal"};function M(){try{return typeof window<"u"&&this===window}catch{return!1}}function _(o){return M()?I(o):m(o)}function m(o){try{return typeof global<"u"&&global.Buffer.from(o).toString("base64")}catch{return o}}function I(o){try{return typeof window<"u"&&window.btoa(o)}catch{return o}}class c{constructor(t){this._rootMargin="0px 0px 0px 0px",this._threshold=[...c.DEFAULT_THRESHOLD],this._partial=!0,this._direction=p.BOTH,Object.prototype.toString.call(t)==="[object Object]"&&["root","rootMargin","threshold","partial","direction","checkFn"].forEach(e=>{t.hasOwnProperty(e)&&(this[e]=t[e])}),this._hash=c.hash({rootMargin:this.rootMargin,threshold:this.threshold,partial:this.partial,direction:this.direction,checkFn:String(this.checkFn)})}static stringify(t){if(Array.isArray(t)){const e=[];for(let r=0;r<t.length;r++)e.push(c.stringify(t[r]));return`[${e.join(",")}]`}else if(typeof t=="object"&&t!==null){const e=[],r=Object.keys(t).sort();for(const n of r){const a=c.stringify(t[n]);e.push(`${n}:${a}`)}return e.join(c.STRINGIFY_DELIMITER)}return String(t)}static hash(t){return _(c.stringify(t))}get root(){return this._root}set root(t){this._root=t&&t.nodeType===1?t:void 0}get rootMargin(){return this._rootMargin}set rootMargin(t){if(!t||typeof t!="string")this._rootMargin="0px 0px 0px 0px";else{const r=(t||"0px").split(new RegExp("\\s+")).map(n=>{const a=/^(-?\d*\.?\d+)(px|%)$/.exec(n);if(!a)throw new TypeError("rootMargin must be specified in pixels or percent");return`${a[1]}${a[2]}`});r[1]=r[1]||r[0],r[2]=r[2]||r[0],r[3]=r[3]||r[1],this._rootMargin=r.join(" ")}}get threshold(){return this._threshold}set threshold(t){let e=[];const r=n=>typeof n=="number"&&n>=0&&n<=1;r(t)?e=[t]:Array.isArray(t)&&t.length&&(e=t.filter(n=>r(n))),e.length===0&&(e=[...c.DEFAULT_THRESHOLD]),this._threshold=e}get partial(){return this._partial}set partial(t){this._partial=!!t}get direction(){return this._direction}set direction(t){const e=r=>[p.BOTH,p.HORIZONTAL,p.VERTICAL].indexOf(r)>=0;this._direction=e(t)?t:p.BOTH}get hash(){return this._hash}get checkFn(){return this._checkFn}set checkFn(t){this._checkFn=t}}c.DEFAULT_THRESHOLD=[0,1],c.STRINGIFY_DELIMITER="|";class s{constructor(t){this.ngZone=t,this.trigger$=new u.Subject,this.registry=[]}emitTrigger(t){Array.isArray(t)&&t.length&&t.forEach(e=>this.trigger$.next(e))}getRootElement(t){return t&&t.nodeType===Node.ELEMENT_NODE?t:null}findEntry(t,e){return this.registry.find(r=>r.root===this.getRootElement(t)&&r.configHash===e)}register(t,e){this.ngZone.runOutsideAngular(()=>{const r=this.findEntry(e.root,e.hash);if(r&&!r.targets.has(t))r.targets.add(t),r.observer.observe(t);else{const n=this.getRootElement(e.root),a={root:n!==null?n:void 0,rootMargin:e.rootMargin,threshold:e.threshold},g={root:n,configHash:e.hash,targets:new Set([t]),observer:new IntersectionObserver(O=>this.ngZone.run(()=>this.emitTrigger(O)),a)};g.observer.observe(t),this.registry=[...this.registry,g]}})}unregister(t,e){this.ngZone.runOutsideAngular(()=>{const r=this.findEntry(e.root,e.hash);if(r){const{observer:n,targets:a}=r;a.has(t)&&(n.unobserve(t),a.delete(t)),a.size===0&&(n.disconnect(),this.registry=this.registry.filter(g=>g!==r))}})}}s.\u0275fac=function(t){return new(t||s)(i.\u0275\u0275inject(i.NgZone))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"}),s.ctorParameters=()=>[{type:i.NgZone}],s.ngInjectableDef=(0,i.defineInjectable)({factory:function(){return new s((0,i.inject)(i.NgZone))},token:s,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(s,[{type:i.Injectable,args:[{providedIn:"root"}]}],function(){return[{type:i.NgZone}]},null)}();const w=Symbol("InViewportMetadata");class h{constructor(t,e,r){this.platformId=t,this.elementRef=e,this.inViewport=r,this.config=new c,this.destroyed$=new u.Subject,this.inViewportAction=new i.EventEmitter}set options(t){this.config=new c(t)}ngAfterViewInit(){(0,f.isPlatformBrowser)(this.platformId)?(this.inViewport.register(this.elementRef.nativeElement,this.config),this.inViewport.trigger$.pipe((0,y.filter)(t=>t&&t.target===this.elementRef.nativeElement),(0,y.takeUntil)(this.destroyed$)).subscribe(t=>{this.emitAction(t,!1)})):this.emitAction(void 0,!0)}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete(),(0,f.isPlatformBrowser)(this.platformId)&&this.inViewport.unregister(this.elementRef.nativeElement,this.config)}check(t,e){const n=e||!t||(()=>{const a=t.isIntersecting||t.intersectionRatio>0,g=t.intersectionRatio>=1;return this.config.partial?a:g})();return{[w]:{entry:t},target:this.elementRef.nativeElement,visible:n}}emitAction(t,e){const r=this.config.checkFn?this.config.checkFn(t,{force:e,config:this.config}):this.check(t,e);this.inViewportAction.emit(r)}}h.\u0275fac=function(t){return new(t||h)(i.\u0275\u0275directiveInject(i.PLATFORM_ID),i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(s))},h.\u0275dir=i.\u0275\u0275defineDirective({type:h,selectors:[["","inViewport",""]],inputs:{options:["inViewportOptions","options"]},outputs:{inViewportAction:"inViewportAction"}}),h.ctorParameters=()=>[{type:Object,decorators:[{type:i.Inject,args:[i.PLATFORM_ID]}]},{type:i.ElementRef},{type:s}],h.propDecorators={options:[{type:i.Input,args:["inViewportOptions"]}],inViewportAction:[{type:i.Output}]},function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(h,[{type:i.Directive,args:[{selector:"[inViewport]"}]}],function(){return[{type:Object,decorators:[{type:i.Inject,args:[i.PLATFORM_ID]}]},{type:i.ElementRef},{type:s}]},{inViewportAction:[{type:i.Output}],options:[{type:i.Input,args:["inViewportOptions"]}]})}();class l{}l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=i.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=i.\u0275\u0275defineInjector({imports:[f.CommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(l,[{type:i.NgModule,args:[{imports:[f.CommonModule],declarations:[h],exports:[h]}]}],null,null)}(),function(){(typeof ngJitMode>"u"||ngJitMode)&&i.\u0275\u0275setNgModuleScope(l,{declarations:function(){return[h]},imports:function(){return[f.CommonModule]},exports:function(){return[h]}})}()}}]);
