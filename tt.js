/*!
 * @license
 * TradingView Lightweight Charts v3.6.0-dev+202108241702
 * Copyright (c) 2020 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
!function(){"use strict";var t,i;function n(t,i){var n,h=((n={})[0]=[],n[1]=[t.lineWidth,t.lineWidth],n[2]=[2*t.lineWidth,2*t.lineWidth],n[3]=[6*t.lineWidth,6*t.lineWidth],n[4]=[t.lineWidth,4*t.lineWidth],n)[i];t.setLineDash(h)}function h(t,i,n,h){t.beginPath();var s=t.lineWidth%2?.5:0;t.moveTo(n,i+s),t.lineTo(h,i+s),t.stroke()}!function(t){t[t.Simple=0]="Simple",t[t.WithSteps=1]="WithSteps"}(t||(t={})),function(t){t[t.Solid=0]="Solid",t[t.Dotted=1]="Dotted",t[t.Dashed=2]="Dashed",t[t.LargeDashed=3]="LargeDashed",t[t.SparseDotted=4]="SparseDotted"}(i||(i={}));var s=function(t,i){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])})(t,i)};function r(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=t}s(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}var e=function(){return(e=Object.assign||function(t){for(var i,n=1,h=arguments.length;n<h;n++)for(var s in i=arguments[n])Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);return t}).apply(this,arguments)};function u(t,i){for(var n=0,h=i.length,s=t.length;n<h;n++,s++)t[s]=i[n];return t}function a(t,i){if(!t)throw new Error("Assertion failed"+(i?": "+i:""))}function o(t){if(void 0===t)throw new Error("Value is undefined");return t}function l(t){if(null===t)throw new Error("Value is null");return t}function f(t){return l(o(t))}function c(t){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];for(var h=0,s=i;h<s.length;h++){var r=s[h];for(var e in r)void 0!==r[e]&&("object"!=typeof r[e]||void 0===t[e]?t[e]=r[e]:c(t[e],r[e]))}return t}function v(t){return"number"==typeof t&&isFinite(t)}function _(t){return"number"==typeof t&&t%1==0}function d(t){return"string"==typeof t}function w(t){return"boolean"==typeof t}function M(t){var i,n,h,s=t;if(!s||"object"!=typeof s)return s;for(n in i=Array.isArray(s)?[]:{},s)s.hasOwnProperty(n)&&(h=s[n],i[n]=h&&"object"==typeof h?M(h):h);return i}function b(t){return null!==t}function m(t){return null===t?void 0:t}var g=function(){function t(){this.t=[]}return t.prototype.i=function(t){this.t=t},t.prototype.h=function(t,i,n,h){this.t.forEach((function(s){t.save(),s.h(t,i,n,h),t.restore()}))},t}(),p=function(){function t(){}return t.prototype.h=function(t,i,n,h){t.save(),t.scale(i,i),this.u(t,n,h),t.restore()},t.prototype.o=function(t,i,n,h){t.save(),t.scale(i,i),this.l(t,n,h),t.restore()},t.prototype.l=function(t,i,n){},t}(),y=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.v=null,i}return r(i,t),i.prototype._=function(t){this.v=t},i.prototype.u=function(t){if(null!==this.v&&null!==this.v.M){var i=this.v.M,n=this.v,h=function(h){t.beginPath();for(var s=i.to-1;s>=i.from;--s){var r=n.m[s];t.moveTo(r.g,r.p),t.arc(r.g,r.p,h,0,2*Math.PI)}t.fill()};t.fillStyle=n.k,h(n.N+2),t.fillStyle=n.S,h(n.N)}},i}(p);var k={from:0,to:1},x=function(){function t(t,i){this.C=new g,this.D=[],this.T=[],this.L=new Map,this.B=t,this.A=i,this.C.i(this.D)}return t.prototype.V=function(t){var i=this,n=this.B.O();n.length!==this.D.length&&(this.T=n.map((function(){return{m:[{g:0,p:0,P:0,F:0}],S:"",k:i.B.I().layout.backgroundColor,N:0,M:null}})),this.D=this.T.map((function(t){var i=new y;return i._(t),i})),this.C.i(this.D)),this.L.clear()},t.prototype.W=function(t,i,n,h){var s=this.L.get(n);if(!s){s=this.R(n),this.L.set(n,s);var r=new g;return r.i(s),r}var e=new g;return e.i(s),e},t.prototype.R=function(t){var i=this,n=this.B.O().map((function(t,i){return[t,i]})).filter((function(i){return t.j().includes(i[0])})),h=this.A.U(),s=this.B.q();return n.map((function(t){var n=t[0],r=t[1],e=i.T[r],u=n.H(h);if(null!==u&&n.Y()){var a=l(n.K());e.S=u.$,e.k=u.X,e.N=u.N,e.m[0].F=u.F,e.m[0].p=n.J().Z(u.F,a.G),e.m[0].P=h,e.m[0].g=s.tt(h),e.M=k}else e.M=null;return i.D[r]}))},t}(),N=function(){function t(t){this.it=t}return t.prototype.h=function(t,i,s,r){if(null!==this.it){var e=this.it.nt.Y,u=this.it.ht.Y;if(e||u){t.save();var a=Math.round(this.it.g*i),o=Math.round(this.it.p*i),l=Math.ceil(this.it.st*i),f=Math.ceil(this.it.rt*i);t.lineCap="butt",e&&a>=0&&(t.lineWidth=Math.floor(this.it.nt.et*i),t.strokeStyle=this.it.nt.ut,t.fillStyle=this.it.nt.ut,n(t,this.it.nt.at),function(t,i,n,h){t.beginPath();var s=t.lineWidth%2?.5:0;t.moveTo(i+s,n),t.lineTo(i+s,h),t.stroke()}(t,a,0,f)),u&&o>=0&&(t.lineWidth=Math.floor(this.it.ht.et*i),t.strokeStyle=this.it.ht.ut,t.fillStyle=this.it.ht.ut,n(t,this.it.ht.at),h(t,o,0,l)),t.restore()}}},t}(),S=function(){function t(t){this.L=new Map,this.ot={nt:{et:1,at:0,ut:"",Y:!1},ht:{et:1,at:0,ut:"",Y:!1},st:0,rt:0,g:0,p:0},this.lt=new N(this.ot),this.ft=t}return t.prototype.V=function(){this.L.clear()},t.prototype.W=function(t,i,n){return this.R(n),this.lt},t.prototype.R=function(t){var i=this.ft.Y(),n=l(this.ft.vt()).ct().I().crosshair,h=this.ot;h.ht.Y=i&&this.ft._t(t),h.nt.Y=i&&this.ft.dt(),h.ht.et=n.horzLine.width,h.ht.at=n.horzLine.style,h.ht.ut=n.horzLine.color,h.nt.et=n.vertLine.width,h.nt.at=n.vertLine.style,h.nt.ut=n.vertLine.color,h.st=t.wt(),h.rt=t.Mt(),h.g=this.ft.bt(),h.p=this.ft.gt()},t}(),C={khaki:"#f0e68c",azure:"#f0ffff",aliceblue:"#f0f8ff",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",gray:"#808080",green:"#008000",honeydew:"#f0fff0",floralwhite:"#fffaf0",lightblue:"#add8e6",lightcoral:"#f08080",lemonchiffon:"#fffacd",hotpink:"#ff69b4",lightyellow:"#ffffe0",greenyellow:"#adff2f",lightgoldenrodyellow:"#fafad2",limegreen:"#32cd32",linen:"#faf0e6",lightcyan:"#e0ffff",magenta:"#f0f",maroon:"#800000",olive:"#808000",orange:"#ffa500",oldlace:"#fdf5e6",mediumblue:"#0000cd",transparent:"#0000",lime:"#0f0",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",midnightblue:"#191970",orchid:"#da70d6",mediumorchid:"#ba55d3",mediumturquoise:"#48d1cc",orangered:"#ff4500",royalblue:"#4169e1",powderblue:"#b0e0e6",red:"#f00",coral:"#ff7f50",turquoise:"#40e0d0",white:"#fff",whitesmoke:"#f5f5f5",wheat:"#f5deb3",teal:"#008080",steelblue:"#4682b4",bisque:"#ffe4c4",aquamarine:"#7fffd4",aqua:"#0ff",sienna:"#a0522d",silver:"#c0c0c0",springgreen:"#00ff7f",antiquewhite:"#faebd7",burlywood:"#deb887",brown:"#a52a2a",beige:"#f5f5dc",chocolate:"#d2691e",chartreuse:"#7fff00",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cadetblue:"#5f9ea0",tomato:"#ff6347",fuchsia:"#f0f",blue:"#00f",salmon:"#fa8072",blanchedalmond:"#ffebcd",slateblue:"#6a5acd",slategray:"#708090",thistle:"#d8bfd8",tan:"#d2b48c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",blueviolet:"#8a2be2",black:"#000",darkmagenta:"#8b008b",darkslateblue:"#483d8b",darkkhaki:"#bdb76b",darkorchid:"#9932cc",darkorange:"#ff8c00",darkgreen:"#006400",darkred:"#8b0000",dodgerblue:"#1e90ff",darkslategray:"#2f4f4f",dimgray:"#696969",deepskyblue:"#00bfff",firebrick:"#b22222",forestgreen:"#228b22",indigo:"#4b0082",ivory:"#fffff0",lavenderblush:"#fff0f5",feldspar:"#d19275",indianred:"#cd5c5c",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightskyblue:"#87cefa",lightslategray:"#789",lightslateblue:"#8470ff",snow:"#fffafa",lightseagreen:"#20b2aa",lightsalmon:"#ffa07a",darksalmon:"#e9967a",darkviolet:"#9400d3",mediumpurple:"#9370d8",mediumaquamarine:"#66cdaa",skyblue:"#87ceeb",lavender:"#e6e6fa",lightsteelblue:"#b0c4de",mediumvioletred:"#c71585",mintcream:"#f5fffa",navajowhite:"#ffdead",navy:"#000080",olivedrab:"#6b8e23",palevioletred:"#d87093",violetred:"#d02090",yellow:"#ff0",yellowgreen:"#9acd32",lawngreen:"#7cfc00",pink:"#ffc0cb",paleturquoise:"#afeeee",palegoldenrod:"#eee8aa",darkolivegreen:"#556b2f",darkseagreen:"#8fbc8f",darkturquoise:"#00ced1",peachpuff:"#ffdab9",deeppink:"#ff1493",violet:"#ee82ee",palegreen:"#98fb98",mediumseagreen:"#3cb371",peru:"#cd853f",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",purple:"#800080",seagreen:"#2e8b57",seashell:"#fff5ee",papayawhip:"#ffefd5",mediumslateblue:"#7b68ee",plum:"#dda0dd",mediumspringgreen:"#00fa9a"};function D(t){return t<0?0:t>255?255:Math.round(t)||0}var T=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,E=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,L=/^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,B=/^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;function A(t){var i,n=function(t){var i;if((t=t.toLowerCase())in C&&(t=C[t]),i=B.exec(t)||L.exec(t))return[D(parseInt(i[1],10)),D(parseInt(i[2],10)),D(parseInt(i[3],10))];if(i=E.exec(t))return[D(parseInt(i[1],16)),D(parseInt(i[2],16)),D(parseInt(i[3],16))];if(i=T.exec(t))return[D(17*parseInt(i[1],16)),D(17*parseInt(i[2],16)),D(17*parseInt(i[3],16))];throw new Error("Cannot parse color: "+t)}(t);return{yt:"rgb("+n[0]+", "+n[1]+", "+n[2]+")",kt:(i=n,.199*i[0]+.687*i[1]+.114*i[2]>160?"black":"white")}}function V(t,i,n,h,s,r){t.fillRect(i+r,n,h-2*r,r),t.fillRect(i+r,n+s-r,h-2*r,r),t.fillRect(i,n,r,s),t.fillRect(i+h-r,n,r,s)}function O(t,i,n){t.save(),t.scale(i,i),n(),t.restore()}function z(t,i,n,h,s,r){t.save(),t.globalCompositeOperation="copy",t.fillStyle=r,t.fillRect(i,n,h,s),t.restore()}var P,F=function(){function t(t,i){this._(t,i)}return t.prototype._=function(t,i){this.it=t,this.xt=i},t.prototype.h=function(t,i,n,h,s,r){if(this.it.Y){t.font=i.Nt;var e=this.it.St||!this.it.Ct?i.Dt:0,u=i.Tt,a=i.Et,o=i.Lt,l=i.Bt,f=i.At,c=this.it.Vt,v=Math.ceil(n.Ot(t,c)),_=i.zt,d=i.Pt+a+o,w=Math.ceil(.5*d),M=u+v+l+f+e,b=this.xt.Ft;this.xt.It&&(b=this.xt.It);var m,g,p=(b=Math.round(b))-w,y=p+d,k="right"===s,x=k?h:0,N=Math.ceil(h*r),S=x;if(t.fillStyle=this.xt.yt,t.lineWidth=1,t.lineCap="butt",c){k?(m=x-e,g=(S=x-M)+f):(S=x+M,m=x+e,g=x+u+e+l);var C=Math.max(1,Math.floor(r)),D=Math.max(1,Math.floor(u*r)),T=k?N:0,E=Math.round(p*r),L=Math.round(S*r),B=Math.round(b*r)-Math.floor(.5*r),A=B+C+(B-E),V=Math.round(m*r);t.save(),t.beginPath(),t.moveTo(T,E),t.lineTo(L,E),t.lineTo(L,A),t.lineTo(T,A),t.fill(),t.fillStyle=this.it.X,t.fillRect(k?N-D:0,E,D,A-E),this.it.St&&(t.fillStyle=this.xt.ut,t.fillRect(T,B,V-T,C)),t.textAlign="left",t.fillStyle=this.xt.ut,O(t,r,(function(){t.fillText(c,g,y-o-_)})),t.restore()}}},t.prototype.Mt=function(t,i){return this.it.Y?t.Pt+t.Et+t.Lt:0},t}(),I=function(){function t(t){this.Wt={Ft:0,ut:"#FFF",yt:"#000"},this.Rt={Vt:"",Y:!1,St:!0,Ct:!1,X:""},this.jt={Vt:"",Y:!1,St:!1,Ct:!0,X:""},this.Ut=!0,this.qt=new(t||F)(this.Rt,this.Wt),this.Ht=new(t||F)(this.jt,this.Wt)}return t.prototype.Vt=function(){return this.Rt.Vt},t.prototype.Ft=function(){return this.Yt(),this.Wt.Ft},t.prototype.V=function(){this.Ut=!0},t.prototype.Mt=function(t,i){return void 0===i&&(i=!1),Math.max(this.qt.Mt(t,i),this.Ht.Mt(t,i))},t.prototype.Kt=function(){return this.Wt.It||0},t.prototype.$t=function(t){this.Wt.It=t},t.prototype.Xt=function(){return this.Yt(),this.Rt.Y||this.jt.Y},t.prototype.Zt=function(){return this.Yt(),this.Rt.Y},t.prototype.W=function(t){return this.Yt(),this.Rt.St=this.Rt.St&&t.I().drawTicks,this.jt.St=this.jt.St&&t.I().drawTicks,this.qt._(this.Rt,this.Wt),this.Ht._(this.jt,this.Wt),this.qt},t.prototype.Jt=function(){return this.Yt(),this.qt._(this.Rt,this.Wt),this.Ht._(this.jt,this.Wt),this.Ht},t.prototype.Yt=function(){this.Ut&&(this.Rt.St=!0,this.jt.St=!1,this.Gt(this.Rt,this.jt,this.Wt))},t}(),W=function(t){function i(i,n,h){var s=t.call(this)||this;return s.ft=i,s.Qt=n,s.ti=h,s}return r(i,t),i.prototype.Gt=function(t,i,n){t.Y=!1;var h=this.ft.I().horzLine;if(h.labelVisible){var s=this.Qt.K();if(this.ft.Y()&&!this.Qt.ii()&&null!==s){var r=A(h.labelBackgroundColor);n.yt=r.yt,n.ut=r.kt;var e=this.ti(this.Qt);n.Ft=e.Ft,t.Vt=this.Qt.ni(e.F,s),t.Y=!0}}},i}(I),R=/[1-9]/g,j=function(){function t(){this.it=null}return t.prototype._=function(t){this.it=t},t.prototype.h=function(t,i,n){var h=this;if(null!==this.it&&!1!==this.it.Y&&0!==this.it.Vt.length){t.font=i.Nt;var s=Math.round(i.hi.Ot(t,this.it.Vt,R));if(!(s<=0)){t.save();var r=i.si,e=s+2*r,u=e/2,a=this.it.wt,o=this.it.Ft,f=Math.floor(o-u)+.5;f<0?(o+=Math.abs(0-f),f=Math.floor(o-u)+.5):f+e>a&&(o-=Math.abs(a-(f+e)),f=Math.floor(o-u)+.5);var c=f+e,v=0+i.Tt+i.Et+i.Pt+i.Lt;t.fillStyle=this.it.yt;var _=Math.round(f*n),d=Math.round(0*n),w=Math.round(c*n),M=Math.round(v*n);t.fillRect(_,d,w-_,M-d);var b=Math.round(this.it.Ft*n),m=d,g=Math.round((m+i.Tt+i.Dt)*n);t.fillStyle=this.it.ut;var p=Math.max(1,Math.floor(n)),y=Math.floor(.5*n);t.fillRect(b-y,m,p,g-m);var k=v-i.zt-i.Lt;t.textAlign="left",t.fillStyle=this.it.ut,O(t,n,(function(){t.fillText(l(h.it).Vt,f+r,k)})),t.restore()}}},t}(),U=function(){function t(t,i,n){this.Ut=!0,this.lt=new j,this.ot={Y:!1,yt:"#4c525e",ut:"white",Vt:"",wt:0,Ft:NaN},this.A=t,this.ri=i,this.ti=n}return t.prototype.V=function(){this.Ut=!0},t.prototype.W=function(){return this.Ut&&(this.R(),this.Ut=!1),this.lt._(this.ot),this.lt},t.prototype.R=function(){var t=this.ot;t.Y=!1;var i=this.A.I().vertLine;if(i.labelVisible){var n=this.ri.q();if(!n.ii()){var h=n.ei(this.A.U());t.wt=n.wt();var s=this.ti();if(s.P){t.Ft=s.Ft,t.Vt=n.ui(l(h)),t.Y=!0;var r=A(i.labelBackgroundColor);t.yt=r.yt,t.ut=r.kt}}}},t}(),q=function(){function t(){this.ai=null,this.oi=0}return t.prototype.li=function(){return this.oi},t.prototype.fi=function(t){this.oi=t},t.prototype.J=function(){return this.ai},t.prototype.ci=function(t){this.ai=t},t.prototype.vi=function(t,i){return[]},t.prototype._i=function(t){return[]},t.prototype.di=function(){return[]},t.prototype.Y=function(){return!0},t}();!function(t){t[t.Normal=0]="Normal",t[t.Magnet=1]="Magnet"}(P||(P={}));var H=function(t){function i(i,n){var h=t.call(this)||this;h.wi=null,h.Mi=NaN,h.bi=0,h.mi=!0,h.gi=new Map,h.pi=!1,h.yi=NaN,h.ki=NaN,h.xi=NaN,h.Ni=NaN,h.ri=i,h.Si=n,h.Ci=new x(i,h);var s,r;h.Di=(s=function(){return h.Mi},r=function(){return h.ki},function(t){var i=r(),n=s();if(t===l(h.wi).Ti())return{F:n,Ft:i};var e=l(t.K());return{F:t.Ei(i,e),Ft:i}});var e=function(t,i){return function(){return{P:h.ri.q().ei(t()),Ft:i()}}}((function(){return h.bi}),(function(){return h.bt()}));return h.Li=new U(h,i,e),h.Bi=new S(h),h}return r(i,t),i.prototype.I=function(){return this.Si},i.prototype.Ai=function(t,i){this.xi=t,this.Ni=i},i.prototype.Vi=function(){this.xi=NaN,this.Ni=NaN},i.prototype.Oi=function(){return this.xi},i.prototype.zi=function(){return this.Ni},i.prototype.Pi=function(t,i,n){this.pi||(this.pi=!0),this.mi=!0,this.Fi(t,i,n)},i.prototype.U=function(){return this.bi},i.prototype.bt=function(){return this.yi},i.prototype.gt=function(){return this.ki},i.prototype.Y=function(){return this.mi},i.prototype.Ii=function(){this.mi=!1,this.Wi(),this.Mi=NaN,this.yi=NaN,this.ki=NaN,this.wi=null,this.Vi()},i.prototype._i=function(t){return null!==this.wi?[this.Bi,this.Ci]:[]},i.prototype._t=function(t){return t===this.wi&&this.Si.horzLine.visible},i.prototype.dt=function(){return this.Si.vertLine.visible},i.prototype.vi=function(t,i){this.mi&&this.wi===t||this.gi.clear();var n=[];return this.wi===t&&n.push(this.Ri(this.gi,i,this.Di)),n},i.prototype.di=function(){return this.mi?[this.Li]:[]},i.prototype.vt=function(){return this.wi},i.prototype.ji=function(){this.Bi.V(),this.gi.forEach((function(t){return t.V()})),this.Li.V(),this.Ci.V()},i.prototype.Ui=function(t){return t&&!t.Ti().ii()?t.Ti():null},i.prototype.Fi=function(t,i,n){this.qi(t,i,n)&&this.ji()},i.prototype.qi=function(t,i,n){var h=this.yi,s=this.ki,r=this.Mi,e=this.bi,u=this.wi,a=this.Ui(n);this.bi=t,this.yi=isNaN(t)?NaN:this.ri.q().tt(t),this.wi=n;var o=null!==a?a.K():null;return null!==a&&null!==o?(this.Mi=i,this.ki=a.Z(i,o)):(this.Mi=NaN,this.ki=NaN),h!==this.yi||s!==this.ki||e!==this.bi||r!==this.Mi||u!==this.wi},i.prototype.Wi=function(){var t=this.ri.O().map((function(t){return t.Yi().Hi()})).filter(b),i=0===t.length?null:Math.max.apply(Math,t);this.bi=null!==i?i:NaN},i.prototype.Ri=function(t,i,n){var h=t.get(i);return void 0===h&&(h=new W(this,i,n),t.set(i,h)),h},i}(q),Y=".";function K(t,i){if(!v(t))return"n/a";if(!_(i))throw new TypeError("invalid length");if(i<0||i>16)throw new TypeError("invalid length");if(0===i)return t.toString();return("0000000000000000"+t.toString()).slice(-i)}var $=function(){function t(t,i){if(i||(i=1),v(t)&&_(t)||(t=100),t<0)throw new TypeError("invalid base");this.Qt=t,this.Ki=i,this.$i()}return t.prototype.format=function(t){var i=t<0?"−":"";return t=Math.abs(t),i+this.Xi(t)},t.prototype.$i=function(){if(this.Zi=0,this.Qt>0&&this.Ki>0)for(var t=this.Qt;t>1;)t/=10,this.Zi++},t.prototype.Xi=function(t){var i=this.Qt/this.Ki,n=Math.floor(t),h="",s=void 0!==this.Zi?this.Zi:NaN;if(i>1){var r=+(Math.round(t*i)-n*i).toFixed(this.Zi);r>=i&&(r-=i,n+=1),h=Y+K(+r.toFixed(this.Zi)*this.Ki,s)}else n=Math.round(n*i)/i,s>0&&(h=Y+K(0,s));return n.toFixed(0)+h},t}(),X=function(t){function i(i){return void 0===i&&(i=100),t.call(this,i)||this}return r(i,t),i.prototype.format=function(i){return t.prototype.format.call(this,i)+"%"},i}($),Z=function(){function t(){this.Ji=[]}return t.prototype.Gi=function(t,i,n){var h={Qi:t,tn:i,nn:!0===n};this.Ji.push(h)},t.prototype.hn=function(t){var i=this.Ji.findIndex((function(i){return t===i.Qi}));i>-1&&this.Ji.splice(i,1)},t.prototype.sn=function(t){this.Ji=this.Ji.filter((function(i){return i.tn===t}))},t.prototype.rn=function(t,i){var n=u([],this.Ji);this.Ji=this.Ji.filter((function(t){return!t.nn})),n.forEach((function(n){return n.Qi(t,i)}))},t.prototype.en=function(){return this.Ji.length>0},t.prototype.un=function(){this.Ji=[]},t}(),J=function(){function t(t,i){this.an=t,this.on=i}return t.prototype.ln=function(t){return null!==t&&(this.an===t.an&&this.on===t.on)},t.prototype.fn=function(){return new t(this.an,this.on)},t.prototype.cn=function(){return this.an},t.prototype.vn=function(){return this.on},t.prototype._n=function(){return this.on-this.an},t.prototype.ii=function(){return this.on===this.an||Number.isNaN(this.on)||Number.isNaN(this.an)},t.prototype.dn=function(i){return null===i?this:new t(Math.min(this.cn(),i.cn()),Math.max(this.vn(),i.vn()))},t.prototype.wn=function(t){if(v(t)&&0!==this.on-this.an){var i=.5*(this.on+this.an),n=this.on-i,h=this.an-i;n*=t,h*=t,this.on=i+n,this.an=i+h}},t.prototype.Mn=function(t){v(t)&&(this.on+=t,this.an+=t)},t.prototype.bn=function(){return{minValue:this.an,maxValue:this.on}},t.mn=function(i){return null===i?null:new t(i.minValue,i.maxValue)},t}();function G(t,i,n){return Math.min(Math.max(t,i),n)}function Q(t,i,n){return i-t<=n}function tt(t){return t<=0?NaN:Math.log(t)/Math.log(10)}function it(t){var i=Math.ceil(t);return i%2!=0?i-1:i}function nt(t){var i=Math.ceil(t);return i%2==0?i-1:i}function ht(t,i){var n=100*(t-i)/i;return i<0?-n:n}function st(t,i){var n=ht(t.cn(),i),h=ht(t.vn(),i);return new J(n,h)}function rt(t,i){var n=100*(t-i)/i+100;return i<0?-n:n}function et(t,i){var n=rt(t.cn(),i),h=rt(t.vn(),i);return new J(n,h)}function ut(t){var i=Math.abs(t);if(i<1e-8)return 0;var n=tt(i+1e-4)+4;return t<0?-n:n}function at(t){var i=Math.abs(t);if(i<1e-8)return 0;var n=Math.pow(10,i-4)-1e-4;return t<0?-n:n}function ot(t){if(null===t)return null;var i=ut(t.cn()),n=ut(t.vn());return new J(i,n)}var lt,ft=function(){function t(t,i){if(this.gn=t,this.pn=i,function(t){if(t<0)return!1;for(var i=t;i>1;i/=10)if(i%10!=0)return!1;return!0}(this.gn))this.yn=[2,2.5,2];else{this.yn=[];for(var n=this.gn;1!==n;){if(n%2==0)this.yn.push(2),n/=2;else{if(n%5!=0)throw new Error("unexpected base");this.yn.push(2,2.5),n/=5}if(this.yn.length>100)throw new Error("something wrong with base")}}}return t.prototype.kn=function(t,i,n){for(var h,s,r,e=0===this.gn?0:1/this.gn,u=1e-9,a=Math.pow(10,Math.max(0,Math.ceil(tt(t-i)))),o=0,l=this.pn[0];;){var f=Q(a,e,u)&&a>e+u,c=Q(a,n*l,u),v=Q(a,1,u);if(!(f&&c&&v))break;a/=l,l=this.pn[++o%this.pn