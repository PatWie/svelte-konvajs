var W=Object.defineProperty;var q=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var v=(r,t,s)=>t in r?W(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,w=(r,t)=>{for(var s in t||(t={}))A.call(t,s)&&v(r,s,t[s]);if(q)for(var s of q(t))B.call(t,s)&&v(r,s,t[s]);return r};import{S as b,i as k,s as y,H as E,I as F,J as H,q as o,o as c,l as h,g as _,n as N,p as I,d as u,L,r as J,M as O,v as Q,N as R,u as T,O as U,C as S,P as V,F as j,w as g,x as $,y as p,Q as z,B as d,e as G,k as X,c as Y,a as Z,m as x,b as ee,R as M,T as te,t as se,h as ae}from"../../../chunks/vendor-aa054ecc.js";import{c as ne,l as re,S as le,L as ie,D as oe}from"../../../chunks/_demo_layout-c678f87a.js";function D(r){let t;const s=r[2].default,e=j(s,r,r[1],null);return{c(){e&&e.c()},l(a){e&&e.l(a)},m(a,n){e&&e.m(a,n),t=!0},p(a,n){e&&e.p&&(!t||n&2)&&E(e,s,a,a[1],t?H(s,a[1],n,null):F(a[1]),null)},i(a){t||(o(e,a),t=!0)},o(a){c(e,a),t=!1},d(a){e&&e.d(a)}}}function ce(r){let t,s,e=r[0]&&D(r);return{c(){e&&e.c(),t=h()},l(a){e&&e.l(a),t=h()},m(a,n){e&&e.m(a,n),_(a,t,n),s=!0},p(a,[n]){a[0]?e?(e.p(a,n),n&1&&o(e,1)):(e=D(a),e.c(),o(e,1),e.m(t.parentNode,t)):e&&(N(),c(e,1,1,()=>{e=null}),I())},i(a){s||(o(e),s=!0)},o(a){c(e),s=!1},d(a){e&&e.d(a),a&&u(t)}}}function fe(r,t,s){const e=["node"];let a=L(t,e),{$$slots:n={},$$scope:l}=t,{node:i=void 0}=t;J(ne,{getCircle:()=>i});const{getLayer:f}=O(re),P=f(),C=a;return Q(async()=>{s(0,i=new R.Circle(w({},C))),P.add(i)}),T(()=>{i.setAttrs(C)}),U(()=>{i&&i.remove()}),r.$$set=m=>{t=S(S({},t),V(m)),s(6,a=L(t,e)),"node"in m&&s(0,i=m.node),"$$scope"in m&&s(1,l=m.$$scope)},[i,l,n]}class ue extends b{constructor(t){super();k(this,t,fe,ce,y,{node:0})}}function K(r){let t,s,e;function a(l){r[3](l)}let n={width:500,height:500,container:r[0],$$slots:{default:[_e]},$$scope:{ctx:r}};return r[1]!==void 0&&(n.stage=r[1]),t=new le({props:n}),M.push(()=>te(t,"stage",a)),{c(){g(t.$$.fragment)},l(l){$(t.$$.fragment,l)},m(l,i){p(t,l,i),e=!0},p(l,i){const f={};i&1&&(f.container=l[0]),i&18&&(f.$$scope={dirty:i,ctx:l}),!s&&i&2&&(s=!0,f.stage=l[1],z(()=>s=!1)),t.$set(f)},i(l){e||(o(t.$$.fragment,l),e=!0)},o(l){c(t.$$.fragment,l),e=!1},d(l){d(t,l)}}}function me(r){let t,s;return t=new ue({props:{x:r[1].width()/2,y:r[1].height()/2,radius:70,fill:"red",stroke:"black",strokeWidth:4}}),{c(){g(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){p(t,e,a),s=!0},p(e,a){const n={};a&2&&(n.x=e[1].width()/2),a&2&&(n.y=e[1].height()/2),t.$set(n)},i(e){s||(o(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function _e(r){let t,s;return t=new ie({props:{$$slots:{default:[me]},$$scope:{ctx:r}}}),{c(){g(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){p(t,e,a),s=!0},p(e,a){const n={};a&18&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i(e){s||(o(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ge(r){let t,s,e,a,n=r[0]&&K(r);return{c(){t=G("div"),s=X(),n&&n.c(),e=h(),this.h()},l(l){t=Y(l,"DIV",{class:!0}),Z(t).forEach(u),s=x(l),n&&n.l(l),e=h(),this.h()},h(){ee(t,"class","container")},m(l,i){_(l,t,i),r[2](t),_(l,s,i),n&&n.m(l,i),_(l,e,i),a=!0},p(l,[i]){l[0]?n?(n.p(l,i),i&1&&o(n,1)):(n=K(l),n.c(),o(n,1),n.m(e.parentNode,e)):n&&(N(),c(n,1,1,()=>{n=null}),I())},i(l){a||(o(n),a=!0)},o(l){c(n),a=!1},d(l){l&&u(t),r[2](null),l&&u(s),n&&n.d(l),l&&u(e)}}}function $e(r,t,s){let e,a;function n(i){M[i?"unshift":"push"](()=>{e=i,s(0,e)})}function l(i){a=i,s(1,a)}return[e,a,n,l]}class pe extends b{constructor(t){super();k(this,t,$e,ge,y,{})}}function de(r){let t;return{c(){t=se("circle.svelte")},l(s){t=ae(s,"circle.svelte")},m(s,e){_(s,t,e)},d(s){s&&u(t)}}}function he(r){let t,s;return t=new pe({}),{c(){g(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){p(t,e,a),s=!0},i(e){s||(o(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function be(r){let t,s;return t=new oe({props:{code:r[0],$$slots:{example:[he],title:[de]},$$scope:{ctx:r}}}),{c(){g(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){p(t,e,a),s=!0},p(e,[a]){const n={};a&2&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i(e){s||(o(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function ke(r){return[`&lt;script lang=&quot;ts&quot;&gt;
	import Stage from &#039;$lib/stage.svelte&#039;;
	import Layer from &#039;$lib/layer.svelte&#039;;
	import Circle from &#039;$lib/shapes/circle.svelte&#039;;

	let container;
	let stage;
&lt;/script&gt;

&lt;div bind:this={container} class=&quot;container&quot; /&gt;

{#if container}
	&lt;Stage width={500} height={500} {container} bind:stage&gt;
		&lt;Layer&gt;
			&lt;Circle
				x={stage.width() / 2}
				y={stage.height() / 2}
				radius={70}
				fill=&quot;red&quot;
				stroke=&quot;black&quot;
				strokeWidth={4}
			/&gt;
		&lt;/Layer&gt;
	&lt;/Stage&gt;
{/if}
`]}class ve extends b{constructor(t){super();k(this,t,ke,be,y,{})}}export{ve as default};
