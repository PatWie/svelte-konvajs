var P=Object.defineProperty;var L=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var S=(a,t,r)=>t in a?P(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,x=(a,t)=>{for(var r in t||(t={}))W.call(t,r)&&S(a,r,t[r]);if(L)for(var r of L(t))A.call(t,r)&&S(a,r,t[r]);return a};import{S as w,i as q,s as R,H as E,I as F,J as H,q as i,o as f,l as h,g as m,n as N,p as I,d as c,L as C,r as J,M as O,v as U,N as V,u as j,O as z,C as D,P as G,F as Q,w as $,x as g,y as p,B as _,e as T,k as b,c as X,a as Y,m as k,b as Z,R as ee,K as te,t as re,h as se}from"../../../chunks/vendor-aa054ecc.js";import{r as ne,l as le,S as ae,L as oe,D as ie}from"../../../chunks/_demo_layout-c678f87a.js";function K(a){let t;const r=a[2].default,e=Q(r,a,a[1],null);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,n){e&&e.m(s,n),t=!0},p(s,n){e&&e.p&&(!t||n&2)&&E(e,r,s,s[1],t?H(r,s[1],n,null):F(s[1]),null)},i(s){t||(i(e,s),t=!0)},o(s){f(e,s),t=!1},d(s){e&&e.d(s)}}}function fe(a){let t,r,e=a[0]&&K(a);return{c(){e&&e.c(),t=h()},l(s){e&&e.l(s),t=h()},m(s,n){e&&e.m(s,n),m(s,t,n),r=!0},p(s,[n]){s[0]?e?(e.p(s,n),n&1&&i(e,1)):(e=K(s),e.c(),i(e,1),e.m(t.parentNode,t)):e&&(N(),f(e,1,1,()=>{e=null}),I())},i(s){r||(i(e),r=!0)},o(s){f(e),r=!1},d(s){e&&e.d(s),s&&c(t)}}}function ce(a,t,r){const e=["node"];let s=C(t,e),{$$slots:n={},$$scope:o}=t,{node:l=void 0}=t;J(ne,{getRect:()=>l});const{getLayer:u}=O(le),M=u(),v=s;return U(async()=>{r(0,l=new V.Rect(x({},v))),M.add(l)}),j(()=>{l.setAttrs(v)}),z(()=>{l&&l.remove()}),a.$$set=d=>{t=D(D({},t),G(d)),r(6,s=C(t,e)),"node"in d&&r(0,l=d.node),"$$scope"in d&&r(1,o=d.$$scope)},[l,o,n]}class y extends w{constructor(t){super();q(this,t,ce,fe,R,{node:0})}}function B(a){let t,r;return t=new ae({props:{width:500,height:500,container:a[0],$$slots:{default:[me]},$$scope:{ctx:a}}}),{c(){$(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){p(t,e,s),r=!0},p(e,s){const n={};s&1&&(n.container=e[0]),s&4&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){r||(i(t.$$.fragment,e),r=!0)},o(e){f(t.$$.fragment,e),r=!1},d(e){_(t,e)}}}function ue(a){let t,r,e,s,n,o;return t=new y({props:{x:20,y:20,width:100,height:50,fill:"green",stroke:"black",strokeWidth:4}}),e=new y({props:{x:150,y:40,width:100,height:50,fill:"red",shadowBlur:10,cornerRadius:4}}),n=new y({props:{x:50,y:120,width:100,height:100,fill:"blue",cornerRadius:[0,10,20,30]}}),{c(){$(t.$$.fragment),r=b(),$(e.$$.fragment),s=b(),$(n.$$.fragment)},l(l){g(t.$$.fragment,l),r=k(l),g(e.$$.fragment,l),s=k(l),g(n.$$.fragment,l)},m(l,u){p(t,l,u),m(l,r,u),p(e,l,u),m(l,s,u),p(n,l,u),o=!0},p:te,i(l){o||(i(t.$$.fragment,l),i(e.$$.fragment,l),i(n.$$.fragment,l),o=!0)},o(l){f(t.$$.fragment,l),f(e.$$.fragment,l),f(n.$$.fragment,l),o=!1},d(l){_(t,l),l&&c(r),_(e,l),l&&c(s),_(n,l)}}}function me(a){let t,r;return t=new oe({props:{$$slots:{default:[ue]},$$scope:{ctx:a}}}),{c(){$(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){p(t,e,s),r=!0},p(e,s){const n={};s&4&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){r||(i(t.$$.fragment,e),r=!0)},o(e){f(t.$$.fragment,e),r=!1},d(e){_(t,e)}}}function $e(a){let t,r,e,s,n=a[0]&&B(a);return{c(){t=T("div"),r=b(),n&&n.c(),e=h(),this.h()},l(o){t=X(o,"DIV",{class:!0}),Y(t).forEach(c),r=k(o),n&&n.l(o),e=h(),this.h()},h(){Z(t,"class","container")},m(o,l){m(o,t,l),a[1](t),m(o,r,l),n&&n.m(o,l),m(o,e,l),s=!0},p(o,[l]){o[0]?n?(n.p(o,l),l&1&&i(n,1)):(n=B(o),n.c(),i(n,1),n.m(e.parentNode,e)):n&&(N(),f(n,1,1,()=>{n=null}),I())},i(o){s||(i(n),s=!0)},o(o){f(n),s=!1},d(o){o&&c(t),a[1](null),o&&c(r),n&&n.d(o),o&&c(e)}}}function ge(a,t,r){let e;function s(n){ee[n?"unshift":"push"](()=>{e=n,r(0,e)})}return[e,s]}class pe extends w{constructor(t){super();q(this,t,ge,$e,R,{})}}function _e(a){let t;return{c(){t=re("rect.svelte")},l(r){t=se(r,"rect.svelte")},m(r,e){m(r,t,e)},d(r){r&&c(t)}}}function de(a){let t,r;return t=new pe({}),{c(){$(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){p(t,e,s),r=!0},i(e){r||(i(t.$$.fragment,e),r=!0)},o(e){f(t.$$.fragment,e),r=!1},d(e){_(t,e)}}}function he(a){let t,r;return t=new ie({props:{code:a[0],$$slots:{example:[de],title:[_e]},$$scope:{ctx:a}}}),{c(){$(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){p(t,e,s),r=!0},p(e,[s]){const n={};s&2&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){r||(i(t.$$.fragment,e),r=!0)},o(e){f(t.$$.fragment,e),r=!1},d(e){_(t,e)}}}function ye(a){return[`&lt;script lang=&quot;ts&quot;&gt;
	import Stage from &#039;$lib/stage.svelte&#039;;
	import Layer from &#039;$lib/layer.svelte&#039;;
	import Rect from &#039;$lib/shapes/rect.svelte&#039;;

	let container;
&lt;/script&gt;

&lt;div bind:this={container} class=&quot;container&quot; /&gt;

{#if container}
	&lt;Stage width={500} height={500} {container}&gt;
		&lt;Layer&gt;
			&lt;Rect
				x={20}
				y={20}
				width={100}
				height={50}
				fill=&quot;green&quot;
				stroke=&quot;black&quot;
				strokeWidth={4}
			/&gt;
			&lt;Rect
				x={150}
				y={40}
				width={100}
				height={50}
				fill=&quot;red&quot;
				shadowBlur={10}
				cornerRadius={4}
			/&gt;
			&lt;Rect
				x={50}
				y={120}
				width={100}
				height={100}
				fill=&quot;blue&quot;
				cornerRadius={[0, 10, 20, 30]}
			/&gt;
		&lt;/Layer&gt;
	&lt;/Stage&gt;
{/if}
`]}class qe extends w{constructor(t){super();q(this,t,ye,he,R,{})}}export{qe as default};
