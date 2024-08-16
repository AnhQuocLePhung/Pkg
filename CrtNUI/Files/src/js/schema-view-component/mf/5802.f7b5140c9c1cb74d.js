(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[5802],{40296:(w,M,d)=>{d.d(M,{Z:()=>g});var x=d(83612),I=d.n(x),v=d(64790),c=d(18872),_=d(24706),m=d.n(_),f=d(21537),T=d(64960);function g(s,o){this._eventBus=s,this._elementRegistry=o}g.$inject=["eventBus","elementRegistry"],g.prototype._getChildrenContainer=function(s){var o=this._elementRegistry.getGraphics(s),a;return s.parent?(a=(0,v.G)(o),a||(a=(0,f.Ue)("g"),(0,f.Sh)(a).add("djs-children"),(0,f.R3)(o.parentNode,a))):a=o,a},g.prototype._clear=function(s){var o=(0,v.s)(s);return(0,_.clear)(o),o},g.prototype._createContainer=function(s,o,a,O){var P=(0,f.Ue)("g");(0,f.Sh)(P).add("djs-group"),typeof a<"u"?N(P,o,o.childNodes[a]):(0,f.R3)(o,P);var E=(0,f.Ue)("g");(0,f.Sh)(E).add("djs-element"),(0,f.Sh)(E).add("djs-"+s),O&&(0,f.Sh)(E).add("djs-frame"),(0,f.R3)(P,E);var B=(0,f.Ue)("g");return(0,f.Sh)(B).add("djs-visual"),(0,f.R3)(E,B),E},g.prototype.create=function(s,o,a){var O=this._getChildrenContainer(o.parent);return this._createContainer(s,O,a,(0,T.He)(o))},g.prototype.updateContainments=function(s){var o=this,a=this._elementRegistry,O;O=(0,x.reduce)(s,function(P,E){return E.parent&&(P[E.parent.id]=E.parent),P},{}),(0,x.forEach)(O,function(P){var E=P.children;if(!!E){var B=o._getChildrenContainer(P);(0,x.forEach)(E.slice().reverse(),function(L){var U=a.getGraphics(L);N(U.parentNode,B)})}})},g.prototype.drawShape=function(s,o){var a=this._eventBus;return a.fire("render.shape",{gfx:s,element:o})},g.prototype.getShapePath=function(s){var o=this._eventBus;return o.fire("render.getShapePath",s)},g.prototype.drawConnection=function(s,o){var a=this._eventBus;return a.fire("render.connection",{gfx:s,element:o})},g.prototype.getConnectionPath=function(s){var o=this._eventBus;return o.fire("render.getConnectionPath",s)},g.prototype.update=function(s,o,a){if(!!o.parent){var O=this._clear(a);if(s==="shape")this.drawShape(O,o),(0,c.Iu)(a,o.x,o.y);else if(s==="connection")this.drawConnection(O,o);else throw new Error("unknown type: "+s);o.hidden?(0,f.Lj)(a,"display","none"):(0,f.Lj)(a,"display","block")}},g.prototype.remove=function(s){var o=this._elementRegistry.getGraphics(s);(0,f.Od)(o.parentNode)};function N(s,o,a){var O=a||o.firstChild;s!==O&&o.insertBefore(s,O)}},42893:(w,M,d)=>{d.d(M,{Z:()=>v});var x=d(83612),I=d.n(x);function v(c){this._eventBus=c,this._selectedElements=[];var _=this;c.on(["shape.remove","connection.remove"],function(m){var f=m.element;_.deselect(f)}),c.on(["diagram.clear"],function(m){_.select(null)})}v.$inject=["eventBus"],v.prototype.deselect=function(c){var _=this._selectedElements,m=_.indexOf(c);if(m!==-1){var f=_.slice();_.splice(m,1),this._eventBus.fire("selection.changed",{oldSelection:f,newSelection:_})}},v.prototype.get=function(){return this._selectedElements},v.prototype.isSelected=function(c){return this._selectedElements.indexOf(c)!==-1},v.prototype.select=function(c,_){var m=this._selectedElements,f=m.slice();(0,x.isArray)(c)||(c=c?[c]:[]),_?(0,x.forEach)(c,function(T){m.indexOf(T)===-1&&m.push(T)}):this._selectedElements=m=c.slice(),this._eventBus.fire("selection.changed",{oldSelection:f,newSelection:m})}},71709:(w,M,d)=>{d.d(M,{Fb:()=>H,I6:()=>W,ju:()=>b});var x=d(83612),I=d.n(x),v=d(86463),c=d(41741),_=20,m=5,f=Math.round,T=20,g={"h:h":20,"v:v":20,"h:v":-10,"v:h":-10};function N(e,n){return!{t:/top/,r:/right/,b:/bottom/,l:/left/,h:/./,v:/./}[n].test(e)}function s(e,n){return{t:/top/,r:/right/,b:/bottom/,l:/left/,h:/left|right/,v:/top|bottom/}[e].test(n)}function o(e,n,t){var r=(0,v.T8)(n,e,m),u=t.split(":")[0],i=f((n.x-e.x)/2+e.x),y=f((n.y-e.y)/2+e.y),p,l,S=s(u,r),h=/h|r|l/.test(u),C=!1,D=!1;return S?(p=h?{x:i,y:e.y}:{x:e.x,y},l=h?"h:h":"v:v"):(C=N(r,u),l=h?"h:v":"v:h",C?h?(D=y===e.y,p={x:e.x+_*(/l/.test(u)?-1:1),y:D?y+_:y}):(D=i===e.x,p={x:D?i+_:i,y:e.y+_*(/t/.test(u)?-1:1)}):p={x:i,y}),{waypoints:L(e,p,l).concat(p),directions:l,turnNextDirections:D}}function a(e,n,t){return o(e,n,t)}function O(e,n,t){var r=o(n,e,E(t));return{waypoints:r.waypoints.slice().reverse(),directions:E(r.directions),turnNextDirections:r.turnNextDirections}}function P(e,n){var t=e.directions.split(":")[1],r=n.directions.split(":")[0];e.turnNextDirections&&(t=t=="h"?"v":"h"),n.turnNextDirections&&(r=r=="h"?"v":"h");var u=t+":"+r,i=L(e.waypoints[e.waypoints.length-1],n.waypoints[0],u);return{waypoints:i,directions:u}}function E(e){return e.split(":").reverse().join(":")}function B(e,n,t){var r=f((n.x-e.x)/2+e.x),u=f((n.y-e.y)/2+e.y);if(t==="h:v")return[{x:n.x,y:e.y}];if(t==="v:h")return[{x:e.x,y:n.y}];if(t==="h:h")return[{x:r,y:e.y},{x:r,y:n.y}];if(t==="v:v")return[{x:e.x,y:u},{x:n.x,y:u}];throw new Error("invalid directions: can only handle varians of [hv]:[hv]")}function L(e,n,t){if(t=t||"h:h",!J(t))throw new Error("unknown directions: <"+t+">: must be specified as <start>:<end> with start/end in { h,v,t,r,b,l }");if(K(t)){var r=a(e,n,t),u=O(e,n,t),i=P(r,u);return[].concat(r.waypoints,i.waypoints,u.waypoints)}return B(e,n,t)}function U(e,n,t){var r=L(e,n,t);return r.unshift(e),r.push(n),H(r)}function W(e,n,t,r,u){var i=u&&u.preferredLayouts||[],y=(0,x.without)(i,"straight")[0]||"h:h",p=g[y]||0,l=(0,v.T8)(e,n,p),S=V(l,y);t=t||(0,v.wS)(e),r=r||(0,v.wS)(n);var h=S.split(":"),C=j(t,e,h[0],Q(l)),D=j(r,n,h[1],l);return U(C,D,S)}function b(e,n,t,r,u,i){(0,x.isArray)(t)&&(u=t,i=r,t=(0,v.wS)(e),r=(0,v.wS)(n)),i=(0,x.assign)({preferredLayouts:[]},i),u=u||[];var y=i.preferredLayouts,p=y.indexOf("straight")!==-1,l;return l=p&&Z(e,n,t,r,i),l||(l=i.connectionEnd&&F(n,e,r,u),l)||(l=i.connectionStart&&z(e,n,t,u),l)?l:!i.connectionStart&&!i.connectionEnd&&u&&u.length?u:W(e,n,t,r,i)}function $(e,n,t){return e>=n&&e<=t}function G(e,n,t){var r={x:"width",y:"height"};return $(n[e],t[e],t[e]+t[r[e]])}function Z(e,n,t,r,u){var i={},y,p;return p=(0,v.T8)(e,n),/^(top|bottom|left|right)$/.test(p)?(/top|bottom/.test(p)&&(y="x"),/left|right/.test(p)&&(y="y"),u.preserveDocking==="target"?G(y,r,e)?(i[y]=r[y],[{x:i.x!==void 0?i.x:t.x,y:i.y!==void 0?i.y:t.y,original:{x:i.x!==void 0?i.x:t.x,y:i.y!==void 0?i.y:t.y}},{x:r.x,y:r.y}]):null:G(y,t,n)?(i[y]=t[y],[{x:t.x,y:t.y},{x:i.x!==void 0?i.x:r.x,y:i.y!==void 0?i.y:r.y,original:{x:i.x!==void 0?i.x:r.x,y:i.y!==void 0?i.y:r.y}}]):null):null}function z(e,n,t,r){return A(e,n,t,r)}function F(e,n,t,r){var u=r.slice().reverse();return u=A(e,n,t,u),u?u.reverse():null}function A(e,n,t,r){function u(h){return h.length<3?!0:h.length>4?!1:!!(0,x.find)(h,function(C,D){var R=h[D-1];return R&&(0,c.tW)(C,R)<3})}function i(h,C,D){var R=(0,c.Or)(C,h);switch(R){case"v":return{x:D.x,y:h.y};case"h":return{x:h.x,y:D.y}}return{x:h.x,y:h.y}}function y(h,C,D){var R;for(R=h.length-2;R!==0;R--)if((0,c.qr)(h[R],C,T)||(0,c.qr)(h[R],D,T))return h.slice(R);return h}if(u(r))return null;var p=r[0],l=r.slice(),S;return l[0]=t,l[1]=i(l[1],p,t),S=y(l,e,n),S!==l&&(l=A(e,n,t,S)),l&&(0,c.Or)(l)?null:l}function V(e,n){if(K(n))return n;switch(e){case"intersect":return"t:t";case"top":case"bottom":return"v:v";case"left":case"right":return"h:h";default:return n}}function J(e){return e&&/^h|v|t|r|b|l:h|v|t|r|b|l$/.test(e)}function K(e){return e&&/t|r|b|l/.test(e)}function Q(e){return{top:"bottom",bottom:"top",left:"right",right:"left","top-left":"bottom-right","bottom-right":"top-left","top-right":"bottom-left","bottom-left":"top-right"}[e]}function j(e,n,t,r){if(t==="h"&&(t=/left/.test(r)?"l":"r"),t==="v"&&(t=/top/.test(r)?"t":"b"),t==="t")return{original:e,x:e.x,y:n.y};if(t==="r")return{original:e,x:n.x+n.width,y:e.y};if(t==="b")return{original:e,x:e.x,y:n.y+n.height};if(t==="l")return{original:e,x:n.x,y:e.y};throw new Error("unexpected dockingDirection: <"+t+">")}function H(e){return e.reduce(function(n,t,r){var u=n[n.length-1],i=e[r+1];return(0,c.ZS)(u,i,t,0)||n.push(t),n},[])}},64790:(w,M,d)=>{d.d(M,{G:()=>I,s:()=>x});function x(v){return v.childNodes[0]}function I(v){return v.parentNode.childNodes[1]}}}]);
