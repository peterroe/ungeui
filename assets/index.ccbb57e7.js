import{o as e,c as t,b as a,f as l,g as o,h as i,i as u,u as s,j as n,d,k as r,n as p,l as c,m as v,p as f,q as m,s as b,t as y,v as g,x as h,y as x}from"./app.d8f844c6.js";const S={name:"UClose"},z={width:"1em",height:"1em",viewBox:"0 0 32 32"},B=[a("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"},[a("path",{d:"M2 30L30 2m0 28L2 2"})],-1)];S.render=function(a,l,o,i,u,s){return e(),t("svg",z,B)};const k={props:{type:{type:String,default:"default",validator:e=>["default","success","info","danger","warning"].includes(e)},size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},closable:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},round:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},disabled:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},color:{type:String}},emits:["close"],setup(v,{emit:f}){const m=v;l(),o();let b=i(!0);const y=e=>{b.value=!1,f("close",e)},g=u((()=>"u-tag-"+m.type)),h=u((()=>"u-tag-size__"+m.size)),x=u((()=>m.round&&"u-tag-round")),z=u((()=>m.disabled&&"u-tag-disabled")),B=u((()=>{if(m.color)return{color:"#fff",backgroundColor:m.color,border:`1px solid ${m.color}`}}));return(l,o)=>s(b)?(e(),t("div",{key:0,class:p(["u-tag",s(g),s(h),s(x),s(z)]),style:c(s(B))},[a("div",null,[n(l.$slots,"default")]),v.closable?(e(),t("i",{key:0,class:"u-tag-close",onClick:y},[d(S)])):r("",!0)],6)):r("",!0)},name:"UTag",install:e=>{e.component(k.name,k)}};var w=v({name:"resizeObserver",props:{onResize:{type:Function}},setup(e,{slots:t,emit:a}){const l=f({width:0,height:0}),o=(t,a)=>{const{width:o,height:i}=t[0].contentRect,{onResize:u}=e,s=Math.floor(o),n=Math.floor(i);if(l.width!==s||l.height!==n){const e={width:s,height:n};Object.assign(l,e),u&&u(l)}},i=g();let u=null;return m((()=>{(()=>{var e;let t=null==(e=null==i?void 0:i.vnode)?void 0:e.el;!u&&t&&(u=new y(o),u.observe(t))})()})),b((()=>{u&&u.disconnect()})),()=>{var e;return null==(e=t.default)?void 0:e.call(t)[0]}}});const R=v({name:"Avatar",props:{size:{type:String,default:"medium",validator:e=>["small","medium","large","huge"].includes(e)},src:{type:String},round:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e}},setup(e,{slots:t}){const a=i(null),l=i(null),o=u((()=>"u-avatar-size__"+e.size)),s=u((()=>e.round?"u-avatar-round":""));return{textRef:a,selfRef:l,setScaleParam:({width:e,height:t})=>{const{value:o}=a,{offsetWidth:i,offsetHeight:u}=a.value,{offsetWidth:s,offsetHeight:n}=l.value,d=Math.min(s/i*.9,n/u*.9,1);o.style.transform=`translateX(-50%) translateY(-50%) scale(${d})`},avatarSize:o,round:s}},render(){const{textRef:e,selfRef:t,setScaleParam:a,avatarSize:l,round:o,src:i,size:u,$slots:s}=this;return d("div",{ref:"selfRef",class:["u-avatar",l,o]},[!s.default&&i?d("img",{class:"u-avatar-size__"+u,src:i},null):d(w,{onResize:a},{default:()=>{var e;return[d("span",{ref:"textRef",class:"u-avatar-text"},[null==(e=s.default)?void 0:e.call(s)])]}})])}});R.name="UAvatar",R.install=e=>{e.component(R.name,R)};const C=v({name:"Icon",props:{color:String,size:{type:[Number,String]}},setup(e,{slots:t}){let a=u((()=>({display:"inline-flex","align-items":"center","line-height":1,color:e.color,"font-size":"string"==typeof e.size?e.size:e.size+"px"})));return()=>{var e;return d("i",{style:a.value},[null==(e=t.default)?void 0:e.call(t)])}}}),_=v({name:"Button",props:{size:{type:String,default:"medium",validator:e=>["small","medium","large","huge"].includes(e)},type:{type:String,default:"default",validator:e=>["default","success","danger","warning","info"].includes(e)},deep:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},dashed:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},size:{type:String,default:"medium",validator:e=>["small","medium","large","huge"].includes(e)},text:{type:Boolean,validator:e=>"boolean"==typeof e},onClick:{type:Function},disabled:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},icon:{type:String},round:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},prefix:{type:String},suffix:{type:String}},setup(e,{slots:t}){let a=i(!1);i(null);return{waveState:a,onClick:async()=>{var t;e.disabled||(null==(t=e.onClick)||t.call(e),a.value=!0,setTimeout((()=>{a.value=!1}),300))},activeName:u((()=>e.type&&"u-button-wave-"+e.type)),isDeep:u((()=>e.deep&&"u-button-deep")),isDashed:u((()=>e.dashed&&"u-button-dashed")),isDisabled:u((()=>e.disabled&&"u-button-disabled")),isText:u((()=>e.text&&"u-button-text")),isRound:u((()=>e.round&&"u-button-round")),iconType:u((()=>(t.prefix||t.suffix)&&!t.default&&`u-button-icon-${e.size}`)),buttonType:u((()=>"u-button-"+e.type)),buttonSize:u((()=>"u-button-size-"+e.size))}},render(){var e,t,a;const{buttonType:l,buttonSize:o,isDeep:i,isDashed:u,isText:s,isRound:n,isDisabled:r,iconType:p,prefix:c,suffix:v,waveState:f,activeName:m,onClick:b,$slots:y}=this;return d("div",{class:["u-button",s,o,l,i,u,r,p,n,{[m]:f}],onClick:b},[null==(e=y.prefix)?void 0:e.call(y),y.default&&d("span",{class:[{"u-button-prefix":y.prefix},{"u-button-suffix":y.suffix}]},[null==(t=y.default)?void 0:t.call(y)]),null==(a=y.suffix)?void 0:a.call(y)])}}),N=v({name:"divider",props:{type:{type:String,default:"solid",validator:e=>["solid","dashed","dotted"].includes(e)},bold:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},height:{type:Number},color:{type:String}},setup:e=>({type:u((()=>"u-divider-"+e.type)),bound:u((()=>e.bold&&"u-divider-bold")),dividerStyle:u((()=>({"border-top-color":e.color,"border-top-width":e.height+"px"})))}),render(){const{type:e,bound:t,dividerStyle:a,$slots:l}=this;return d("div",{class:["u-divider",e,t],style:a},null)}}),T=v({name:"Input",props:{size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},type:{type:String,default:"text",validator:e=>["text","password","textarea"].includes(e)},disabled:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},value:String,placeholder:String,rows:{type:Number,default:4},cols:Number},emits:["update:value"],setup(e,{emit:t,slots:a}){const l=u((()=>"u-input-size-"+e.size));let o=i(!1);const s=()=>{o.value=!0},n=()=>{o.value=!1},r=u((()=>"password"==e.type?"password":"")),p=i(e.value),c=e=>{p.value=e.target.value,t("update:value",e.target.value)};return()=>{var t,i;return d("div",{class:["u-input",{"u-input-focus":o.value},{"u-input-disabled":e.disabled}]},["textarea"!=e.type?d("div",{class:["u-input-wrapper",l.value]},[a.prefix&&d("div",{class:["u-input-prefix"]},[null==(t=a.prefix)?void 0:t.call(a)]),d("div",{class:["u-input-input"]},[d("input",{placeholder:e.placeholder,class:"u-input__input-el",type:r.value,onFocus:s,onBlur:n,onInput:c,value:p.value,disabled:e.disabled},null)]),a.prefix&&d("div",{class:["u-input-suffix"]},[a.suffix&&(null==(i=a.suffix)?void 0:i.call(a))])]):null,"textarea"==e.type?d("div",{class:["u-input-textarea"]},[d("textarea",{placeholder:e.placeholder,class:"u-input__textarea-el",onFocus:s,onBlur:n,onInput:c,rows:e.rows,cols:e.cols,value:p.value,disabled:e.disabled},null)]):null])}}}),$=v({name:"Radio",props:{value:[String,Number,Boolean],checked:{type:Boolean,defalut:!1,validator:e=>"boolean"==typeof e},disabled:Boolean},emits:[],setup(e,{slots:t}){const a=h("radioGroupContext",void 0);let l=u((()=>{var t;return e.checked||e.value==(null==(t=null==a?void 0:a.props)?void 0:t.value)}));return()=>{var o;return d("div",{class:["u-radio",{"u-radio-disabled":e.disabled}],onClick:()=>{e.disabled||a.onRadioChange(null==e?void 0:e.value)}},[d("input",{class:["u-radio-input"],value:e.value},null),d("div",{class:["u-radio-dot",{"u-radio-dot-checked":l.value}]},null),d("div",{class:["u-radio-label"]},[null==(o=t.default)?void 0:o.call(t)])])}}}),D=v({name:"RadioGroup",props:["value"],emits:["update:value"],setup:(e,{slots:t,emit:a})=>(x("radioGroupContext",f({onRadioChange:e=>{a("update:value",e)},props:e})),()=>{var e;return d("div",{class:"u-radio-group"},[null==(e=t.default)?void 0:e.call(t)])})}),U=v({name:"RadioButton",props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},value:[String,Number,Boolean]},setup(e,{slots:t}){const a=h("radioGroupContext",void 0),l=u((()=>{var t;return(null==e?void 0:e.checked)||(null==e?void 0:e.value)==(null==(t=null==a?void 0:a.props)?void 0:t.value)}));return()=>{var o;return d("div",{onClick:()=>{e.disabled||a.onRadioChange(null==e?void 0:e.value)},class:["u-radio-button",{"u-radio-button-disabled":e.disabled},{"u-radio-button-checked":l.value}]},[null==(o=t.default)?void 0:o.call(t)])}}});$.name="URadio",D.name="URadioGroup",U.name="URadioButton",$.install=e=>{e.component($.name,$)},D.install=e=>{e.component(D.name,D)},U.install=e=>{e.component(U.name,U)};export{k as _,R as a,_ as b,T as c,N as d,U as e,$ as f,C as i,D as r};
