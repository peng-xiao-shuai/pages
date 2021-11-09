var z=Object.defineProperty;var N=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var C=(e,t,d)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[t]=d,F=(e,t)=>{for(var d in t||(t={}))R.call(t,d)&&C(e,d,t[d]);if(N)for(var d of N(t))j.call(t,d)&&C(e,d,t[d]);return e};import{d as w,r as D,o as n,c as o,k as a,x as m,a as h,w as b,F as c,G as u,v as V,M as B,y as T,h as U,z as S,i as E,O as L,D as $,L as O,H as x,I as G,E as A,j as H,J}from"./vendor.bb11fbc5.js";import{b as q,d as K,r as P,t as Q,a as W}from"./destination.96a043ea.js";import{_ as M}from"./index.7c511629.js";const X=w({props:{modelValue:Number,bgColor:{type:String,default:"#fff"},recommends:{type:Array,default:()=>[]},title:{type:String,default:""}},setup(e,{emit:t}){}}),Y={class:"title"},Z=["onMouseover"];function ee(e,t,d,f,p,k){const _=D("el-space");return n(),o("div",{class:"padding",style:T({background:e.bgColor})},[a("div",Y,m(e.title),1),h(_,{size:20,spacer:"|",class:"switch-box",style:{color:"#ddd"}},{default:b(()=>[(n(!0),o(c,null,u(e.recommends,(v,s)=>(n(),o("span",{onMouseover:l=>e.$emit("update:modelValue",s),key:s,class:V({active:e.modelValue==s})},m(v),43,Z))),128))]),_:1}),B(e.$slots,"default",{},void 0,!0)],4)}var se=M(X,[["render",ee],["__scopeId","data-v-3c0d7053"]]);const te=w({components:{Recommend:se},setup(e,{emit:t}){const d=U(),f=S({searchVal:"",city:[],image:"",title:"",describe:""}),p=S({destinations:[],destinationNames:[],destinationsIndex:0,recommends:[],recommendNames:[],recommendsIndex:0,themes:[],themeNames:[],themeIndex:0}),k=E([]),_=()=>{d.push({path:"/destination/"+Math.ceil(Math.random()*1e3)})},v=()=>{q().then(r=>{Object.assign(f,r.data)})},s=()=>{K().then(r=>{p.destinationNames=r.data.list.map(y=>y.name),p.destinations=r.data.list})},l=()=>{P().then(r=>{p.recommendNames=r.data.list.map(y=>y.name+"\u6708"),p.recommends=r.data.list})},i=()=>{Q().then(r=>{p.themeNames=r.data.list.map(y=>y.name),p.themes=r.data.list})},g=()=>{W().then(r=>{k.value=r.data})};return v(),s(),l(),i(),g(),F({bannerDetails:f,allDestination:k,navTo:_},L(p))}}),I=e=>(x("data-v-067046ac"),e=e(),G(),e),ne={class:"banner-box"},oe={class:"banner-content"},ae={class:"search-box"},ie=I(()=>a("span",{style:{"font-size":"1.5rem"}},"Don't fear the unknown",-1)),le={class:"search"},de=I(()=>a("i",{class:"el-icon-search"},null,-1)),re={class:"text-box"},me={class:"text-box-top"},ce={class:"text-box-top-title cursor line-2"},ue={class:"text-box-top-desc"},pe=I(()=>a("div",{class:"text-box-look cursor"},"\u9605\u8BFB\u5168\u6587",-1)),ve=I(()=>a("i",{class:"el-icon-arrow-down"},null,-1)),he={class:"content"},_e={class:"destination grid grid-c-2"},ge={class:"provinces"},ye={class:"city"},be={class:"recommend-item-title"},fe={class:"theme-item-title"},ke={class:"name"},Ve={class:"grid grid-c-3"},Ie={class:"letter"},De={class:"regions"},$e={class:"en"};function Ne(e,t,d,f,p,k){const _=D("el-image"),v=D("Recommend");return n(),o("div",null,[a("div",ne,[h(_,{style:{width:"100%",height:"100%"},src:e.bannerDetails.image,fit:"cover"},null,8,["src"]),a("div",oe,[a("div",ae,[ie,a("div",le,[$(a("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>e.bannerDetails.searchVal=s),placeholder:"\u6211\u60F3\u53BB..."},null,512),[[O,e.bannerDetails.searchVal]]),de]),a("div",null,[(n(!0),o(c,null,u(e.bannerDetails.city,s=>(n(),o("span",{key:s,class:"cursor",style:{"font-size":"1.1rem"}},m(s),1))),128))])]),a("div",re,[a("div",me,[a("span",ce,m(e.bannerDetails.title),1),a("span",ue,m(e.bannerDetails.describe),1)]),pe])]),ve]),a("div",he,[h(v,{title:"\u70ED\u95E8\u76EE\u7684\u5730",modelValue:e.destinationsIndex,"onUpdate:modelValue":t[3]||(t[3]=s=>e.destinationsIndex=s),recommends:e.destinationNames},{default:b(()=>[a("div",_e,[(n(!0),o(c,null,u(e.destinations[e.destinationsIndex]&&e.destinations[e.destinationsIndex].list,s=>(n(),o("div",{key:s,class:"destination-item"},[a("div",ge,[(n(!0),o(c,null,u(s.provinces,l=>(n(),o("span",{onClick:t[1]||(t[1]=(...i)=>e.navTo&&e.navTo(...i)),key:s+"-"+l,class:V({"not-active":s.isMunicipality})},m(l.replace(/特别行政区|自治区/,"")),3))),128))]),a("div",ye,[(n(!0),o(c,null,u(s.citys,l=>(n(),o("span",{onClick:t[2]||(t[2]=(...i)=>e.navTo&&e.navTo(...i)),key:s+"-"+l},m(l),1))),128))])]))),128))])]),_:1},8,["modelValue","recommends"]),h(v,{title:"\u5F53\u5B63\u63A8\u8350",modelValue:e.recommendsIndex,"onUpdate:modelValue":t[5]||(t[5]=s=>e.recommendsIndex=s),bgColor:"#FAFAFA",recommends:e.recommendNames},{default:b(()=>[(n(!0),o(c,null,u(e.recommends,(s,l)=>$((n(),o("div",{class:"recommend",key:s.name},[(n(!0),o(c,null,u(s.list,(i,g)=>(n(),o("div",{onClick:t[4]||(t[4]=(...r)=>e.navTo&&e.navTo(...r)),key:i.city,class:V(["recommend-item-"+(g+1),"recommend-item"])},[h(_,{style:{width:"100%",height:"100%"},src:i.image,fit:"cover"},null,8,["src"]),a("div",be,m(i.city),1)],2))),128))],512)),[[A,e.recommendsIndex==l]])),128))]),_:1},8,["modelValue","recommends"]),h(v,{title:"\u4E3B\u9898\u7CBE\u9009",modelValue:e.themeIndex,"onUpdate:modelValue":t[6]||(t[6]=s=>e.themeIndex=s),recommends:e.themeNames},{default:b(()=>[(n(!0),o(c,null,u(e.themes,(s,l)=>$((n(),o("div",{class:"theme grid grid-c-4",key:s.name},[(n(!0),o(c,null,u(s.list,i=>(n(),o("div",{key:i,class:"theme-item"},[h(_,{style:{width:"100%",height:"100%"},src:i.image,fit:"cover"},null,8,["src"]),a("div",fe,m(i.city),1)]))),128))],512)),[[A,e.themeIndex==l]])),128))]),_:1},8,["modelValue","recommends"]),h(v,{title:"\u5168\u7403\u76EE\u7684\u5730",bgColor:"#FAFAFA"},{default:b(()=>[(n(!0),o(c,null,u(e.allDestination,s=>(n(),o("div",{class:"all-destination",key:s.name},[a("div",ke,m(s.name),1),a("div",Ve,[(n(!0),o(c,null,u(s.list,l=>(n(),o("div",{key:l.letter,class:"all-item"},[a("span",Ie,m(l.letter),1),a("div",De,[(n(!0),o(c,null,u(l.regions,i=>(n(),o("div",{key:i.region,onClick:t[7]||(t[7]=(...g)=>e.navTo&&e.navTo(...g))},[H(m(i.region)+" ",1),a("span",$e,"\xA0\xA0"+m(i.character),1),i.tag&&i.tag.type?(n(),o("span",{key:0,class:V(["label",i.tag.type==1?"hot":"text"]),style:T({background:i.tag&&(i.tag.color||"var(--color-primary)")})},m(i.tag.label),7)):J("",!0)]))),128))])]))),128))])]))),128))]),_:1})])])}var Se=M(te,[["render",Ne],["__scopeId","data-v-067046ac"]]);export{Se as default};
