(self.webpackChunkapp_studio_enterprise_duplicates_widget=self.webpackChunkapp_studio_enterprise_duplicates_widget||[]).push([[5557],{87241:(E,c,r)=>{r.d(c,{y:()=>l});var s=r(94021),o=r(42948),a=r(43122),u=r(17824),i=r(42046),f=r(35975),h=r(1519);class l{constructor(d){d&&(this._subscribe=d)}lift(d){const b=new l;return b.source=this,b.operator=d,b}subscribe(d,b,y){const P=p(d)?d:new s.Hp(d,b,y);return(0,h.x)(()=>{const{operator:O,source:D}=this;P.add(O?O.call(P,D):D?this._subscribe(P):this._trySubscribe(P))}),P}_trySubscribe(d){try{return this._subscribe(d)}catch(b){d.error(b)}}forEach(d,b){return b=t(b),new b((y,P)=>{const O=new s.Hp({next:D=>{try{d(D)}catch(M){P(M),O.unsubscribe()}},error:P,complete:y});this.subscribe(O)})}_subscribe(d){var b;return(b=this.source)===null||b===void 0?void 0:b.subscribe(d)}[a.L](){return this}pipe(...d){return(0,u.U)(d)(this)}toPromise(d){return d=t(d),new d((b,y)=>{let P;this.subscribe(O=>P=O,O=>y(O),()=>b(P))})}}l.create=_=>new l(_);function t(_){var d;return(d=_??i.v.Promise)!==null&&d!==void 0?d:Promise}function e(_){return _&&(0,f.m)(_.next)&&(0,f.m)(_.error)&&(0,f.m)(_.complete)}function p(_){return _&&_ instanceof s.Lv||e(_)&&(0,o.Nn)(_)}},5557:(E,c,r)=>{r.d(c,{t:()=>a});var s=r(9779),o=r(32069);class a extends s.x{constructor(i=1/0,f=1/0,h=o.l){super(),this._bufferSize=i,this._windowTime=f,this._timestampProvider=h,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=f===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,f)}next(i){const{isStopped:f,_buffer:h,_infiniteTimeWindow:l,_timestampProvider:t,_windowTime:e}=this;f||(h.push(i),!l&&h.push(t.now()+e)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();const f=this._innerSubscribe(i),{_infiniteTimeWindow:h,_buffer:l}=this,t=l.slice();for(let e=0;e<t.length&&!i.closed;e+=h?1:2)i.next(t[e]);return this._checkFinalizedStatuses(i),f}_trimBuffer(){const{_bufferSize:i,_timestampProvider:f,_buffer:h,_infiniteTimeWindow:l}=this,t=(l?1:2)*i;if(i<1/0&&t<h.length&&h.splice(0,h.length-t),!l){const e=f.now();let p=0;for(let _=1;_<h.length&&h[_]<=e;_+=2)p=_;p&&h.splice(0,p+1)}}}},9779:(E,c,r)=>{r.d(c,{u:()=>h,x:()=>f});var s=r(87241),o=r(42948),a=r(62932),u=r(78308),i=r(1519);class f extends s.y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){const e=new h(this,this);return e.operator=t,e}_throwIfClosed(){if(this.closed)throw new a.N}next(t){(0,i.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const e of this.currentObservers)e.next(t)}})}error(t){(0,i.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;const{observers:e}=this;for(;e.length;)e.shift().error(t)}})}complete(){(0,i.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){const{hasError:e,isStopped:p,observers:_}=this;return e||p?o.Lc:(this.currentObservers=null,_.push(t),new o.w0(()=>{this.currentObservers=null,(0,u.P)(_,t)}))}_checkFinalizedStatuses(t){const{hasError:e,thrownError:p,isStopped:_}=this;e?t.error(p):_&&t.complete()}asObservable(){const t=new s.y;return t.source=this,t}}f.create=(l,t)=>new h(l,t);class h extends f{constructor(t,e){super(),this.destination=t,this.source=e}next(t){var e,p;(p=(e=this.destination)===null||e===void 0?void 0:e.next)===null||p===void 0||p.call(e,t)}error(t){var e,p;(p=(e=this.destination)===null||e===void 0?void 0:e.error)===null||p===void 0||p.call(e,t)}complete(){var t,e;(e=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||e===void 0||e.call(t)}_subscribe(t){var e,p;return(p=(e=this.source)===null||e===void 0?void 0:e.subscribe(t))!==null&&p!==void 0?p:o.Lc}}},94021:(E,c,r)=>{r.d(c,{Hp:()=>P,Lv:()=>_});var s=r(35975),o=r(42948),a=r(42046),u=r(34922),i=r(408);const f=(()=>t("C",void 0,void 0))();function h(v){return t("E",void 0,v)}function l(v){return t("N",v,void 0)}function t(v,n,m){return{kind:v,value:n,error:m}}var e=r(84146),p=r(1519);class _ extends o.w0{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,(0,o.Nn)(n)&&n.add(this)):this.destination=I}static create(n,m,S){return new P(n,m,S)}next(n){this.isStopped?M(l(n),this):this._next(n)}error(n){this.isStopped?M(h(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?M(f,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const d=Function.prototype.bind;function b(v,n){return d.call(v,n)}class y{constructor(n){this.partialObserver=n}next(n){const{partialObserver:m}=this;if(m.next)try{m.next(n)}catch(S){O(S)}}error(n){const{partialObserver:m}=this;if(m.error)try{m.error(n)}catch(S){O(S)}else O(n)}complete(){const{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(m){O(m)}}}class P extends _{constructor(n,m,S){super();let C;if((0,s.m)(n)||!n)C={next:n??void 0,error:m??void 0,complete:S??void 0};else{let T;this&&a.v.useDeprecatedNextContext?(T=Object.create(n),T.unsubscribe=()=>this.unsubscribe(),C={next:n.next&&b(n.next,T),error:n.error&&b(n.error,T),complete:n.complete&&b(n.complete,T)}):C=n}this.destination=new y(C)}}function O(v){a.v.useDeprecatedSynchronousErrorHandling?(0,p.O)(v):(0,u.h)(v)}function D(v){throw v}function M(v,n){const{onStoppedNotification:m}=a.v;m&&e.z.setTimeout(()=>m(v,n))}const I={closed:!0,next:i.Z,error:D,complete:i.Z}},42948:(E,c,r)=>{r.d(c,{Lc:()=>i,Nn:()=>f,w0:()=>u});var s=r(35975),o=r(8441),a=r(78308);class u{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;const{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(const d of e)d.remove(this);else e.remove(this);const{initialTeardown:p}=this;if((0,s.m)(p))try{p()}catch(d){t=d instanceof o.B?d.errors:[d]}const{_finalizers:_}=this;if(_){this._finalizers=null;for(const d of _)try{h(d)}catch(b){t=t??[],b instanceof o.B?t=[...t,...b.errors]:t.push(b)}}if(t)throw new o.B(t)}}add(t){var e;if(t&&t!==this)if(this.closed)h(t);else{if(t instanceof u){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}}_hasParent(t){const{_parentage:e}=this;return e===t||Array.isArray(e)&&e.includes(t)}_addParent(t){const{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t}_removeParent(t){const{_parentage:e}=this;e===t?this._parentage=null:Array.isArray(e)&&(0,a.P)(e,t)}remove(t){const{_finalizers:e}=this;e&&(0,a.P)(e,t),t instanceof u&&t._removeParent(this)}}u.EMPTY=(()=>{const l=new u;return l.closed=!0,l})();const i=u.EMPTY;function f(l){return l instanceof u||l&&"closed"in l&&(0,s.m)(l.remove)&&(0,s.m)(l.add)&&(0,s.m)(l.unsubscribe)}function h(l){(0,s.m)(l)?l():l.unsubscribe()}},42046:(E,c,r)=>{r.d(c,{v:()=>s});const s={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},32069:(E,c,r)=>{r.d(c,{l:()=>s});const s={now(){return(s.delegate||Date).now()},delegate:void 0}},84146:(E,c,r)=>{r.d(c,{z:()=>s});const s={setTimeout(o,a,...u){const{delegate:i}=s;return i?.setTimeout?i.setTimeout(o,a,...u):setTimeout(o,a,...u)},clearTimeout(o){const{delegate:a}=s;return(a?.clearTimeout||clearTimeout)(o)},delegate:void 0}},43122:(E,c,r)=>{r.d(c,{L:()=>s});const s=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")()},62932:(E,c,r)=>{r.d(c,{N:()=>o});var s=r(95776);const o=(0,s.d)(a=>function(){a(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"})},8441:(E,c,r)=>{r.d(c,{B:()=>o});var s=r(95776);const o=(0,s.d)(a=>function(i){a(this),this.message=i?`${i.length} errors occurred during unsubscription:
${i.map((f,h)=>`${h+1}) ${f.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=i})},78308:(E,c,r)=>{r.d(c,{P:()=>s});function s(o,a){if(o){const u=o.indexOf(a);0<=u&&o.splice(u,1)}}},95776:(E,c,r)=>{r.d(c,{d:()=>s});function s(o){const u=o(i=>{Error.call(i),i.stack=new Error().stack});return u.prototype=Object.create(Error.prototype),u.prototype.constructor=u,u}},1519:(E,c,r)=>{r.d(c,{O:()=>u,x:()=>a});var s=r(42046);let o=null;function a(i){if(s.v.useDeprecatedSynchronousErrorHandling){const f=!o;if(f&&(o={errorThrown:!1,error:null}),i(),f){const{errorThrown:h,error:l}=o;if(o=null,h)throw l}}else i()}function u(i){s.v.useDeprecatedSynchronousErrorHandling&&o&&(o.errorThrown=!0,o.error=i)}},68330:(E,c,r)=>{r.d(c,{y:()=>s});function s(o){return o}},35975:(E,c,r)=>{r.d(c,{m:()=>s});function s(o){return typeof o=="function"}},408:(E,c,r)=>{r.d(c,{Z:()=>s});function s(){}},17824:(E,c,r)=>{r.d(c,{U:()=>a,z:()=>o});var s=r(68330);function o(...u){return a(u)}function a(u){return u.length===0?s.y:u.length===1?u[0]:function(f){return u.reduce((h,l)=>l(h),f)}}},34922:(E,c,r)=>{r.d(c,{h:()=>a});var s=r(42046),o=r(84146);function a(u){o.z.setTimeout(()=>{const{onUnhandledError:i}=s.v;if(i)i(u);else throw u})}}}]);
