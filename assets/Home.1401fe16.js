import{p as e,bG as t,bH as a,j as s,u as l,o,c as r,b as n,l as i,E as c,A as u,bI as v,M as d,N as f,r as m,d as p,k}from"./app.2fcd2d2f.js";const h={key:0,class:"home-hero"},y={key:0,class:"figure"},g=["src","alt"],x={key:1,id:"main-title",class:"title"},$={key:2,class:"description"};var I=e({setup(e){const d=t(),f=a(),m=s((()=>f.value.heroImage||p.value||I.value||b.value)),p=s((()=>null!==f.value.heroText)),k=s((()=>f.value.heroText||d.value.title)),I=s((()=>null!==f.value.tagline)),_=s((()=>f.value.tagline||d.value.description)),b=s((()=>f.value.actionLink&&f.value.actionText)),A=s((()=>f.value.altActionLink&&f.value.altActionText));return(e,t)=>l(m)?(o(),r("header",h,[e.$frontmatter.heroImage?(o(),r("figure",y,[n("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,g)])):i("",!0),l(p)?(o(),r("h1",x,c(l(k)),1)):i("",!0),l(I)?(o(),r("p",$,c(l(_)),1)):i("",!0),l(b)?(o(),u(v,{key:3,item:{link:l(f).actionLink,text:l(f).actionText},class:"action"},null,8,["item"])):i("",!0),l(A)?(o(),u(v,{key:4,item:{link:l(f).altActionLink,text:l(f).altActionText},class:"action alt"},null,8,["item"])):i("",!0)])):i("",!0)}});I.__scopeId="data-v-4aeb51c6";const _={key:0,class:"home-features"},b={class:"wrapper"},A={class:"container"},T={class:"features"},L={key:0,class:"title"},j={key:1,class:"details"};var w=e({setup(e){const t=a(),u=s((()=>t.value.features&&t.value.features.length>0)),v=s((()=>t.value.features?t.value.features:[]));return(e,t)=>l(u)?(o(),r("div",_,[n("div",b,[n("div",A,[n("div",T,[(o(!0),r(d,null,f(l(v),((e,t)=>(o(),r("section",{key:t,class:"feature"},[e.title?(o(),r("h2",L,c(e.title),1)):i("",!0),e.details?(o(),r("p",j,c(e.details),1)):i("",!0)])))),128))])])])])):i("",!0)}});w.__scopeId="data-v-793c2722";const B={},C={key:0,class:"footer"},E={class:"container"},G={class:"text"};B.render=function(e,t){return e.$frontmatter.footer?(o(),r("footer",C,[n("div",E,[n("p",G,c(e.$frontmatter.footer),1)])])):i("",!0)},B.__scopeId="data-v-41020908";const H={class:"home","aria-labelledby":"main-title"},M={class:"home-content"};var N=e({setup:e=>(e,t)=>{const a=m("Content");return o(),r("main",H,[p(I),k(e.$slots,"hero"),p(w),n("div",M,[p(a)]),k(e.$slots,"features"),p(B),k(e.$slots,"footer")])}});N.__scopeId="data-v-cc1f894c";export default N;
