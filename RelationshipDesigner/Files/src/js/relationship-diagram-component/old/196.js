"use strict";(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[196],{52196:(k,d,n)=>{n.r(d),n.d(d,{CrtDataTablePhoneCellComponent:()=>o,CrtDataTablePhoneCellModule:()=>i});var r=n(84911),s=n(55069),c=n(86876),g=n(97719),e=n(36599),p=n(30660),v=n(47518),C=n(83331);function f(a,t){if(1&a){const l=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"mat-icon",2),e.\u0275\u0275listener("click",function(m){e.\u0275\u0275restoreView(l);const u=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(u.onCallLinkClicked(m,u.value))}),e.\u0275\u0275elementEnd()}}let o=class extends g.W2{constructor(t){super(),this._phoneInputService=t}onCallLinkClicked(t,l){l&&(c.o9.isTelephonyEnabled?this._phoneInputService.callNumber(l,t):window.location.href=`tel:${l}`)}ngOnInit(){c.o9.isTelephonyEnabledFlagInitialized||this._phoneInputService.initIsTelephonyEnabled()}};o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(c.o9))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["crt-data-table-phone-cell"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:2,consts:[["svgIcon","call-icon","class","grid-communication-call-icon",3,"click",4,"ngIf"],["mode","preventDefault",1,"communication-link-wrapper",3,"caption","clicked"],["svgIcon","call-icon",1,"grid-communication-call-icon",3,"click"]],template:function(t,l){1&t&&(e.\u0275\u0275template(0,f,1,0,"mat-icon",0),e.\u0275\u0275elementStart(1,"crt-link",1),e.\u0275\u0275listener("clicked",function(m){return l.onCallLinkClicked(m.event,l.value)}),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("ngIf",l.value),e.\u0275\u0275advance(1),e.\u0275\u0275propertyInterpolate("caption",l.value))},dependencies:[p.NgIf,v.R,C.Hw],styles:["[_nghost-%COMP%]{display:flex;max-width:100%}[_nghost-%COMP%]   .grid-communication-call-icon[_ngcontent-%COMP%]{display:inline-block;flex-shrink:0;width:16px;height:16px;cursor:pointer}[_nghost-%COMP%]   .communication-link-wrapper[_ngcontent-%COMP%]{display:inline-block;min-width:0;margin-left:8px}[dir=rtl] crt-link.communication-link-wrapper[_ngcontent-%COMP%]{direction:ltr;margin-right:8px}"]}),o=(0,r.gn)([(0,s.CrtViewElement)({type:"crt.TablePhoneCell",reuseStrategy:s.ViewElementReuseStrategy.Reuse}),(0,r.w6)("design:paramtypes",[c.o9])],o);var P=n(56707),h=n(83503),T=n(47684),y=n(83471),I=n(10119);let i=class{constructor(t){this._materialIconsRegistrator=t,this._materialIconsRegistrator.addIcons([{name:"call-icon",icon:n(11052)}])}};i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275inject(h.ZH))},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({providers:[T.qL,c.o9],imports:[p.CommonModule,I.h,y.HH,C.Ps,P.aw]}),i=(0,r.gn)([(0,s.CrtModule)({viewElements:[o]}),(0,r.w6)("design:paramtypes",[h.ZH])],i)}}]);