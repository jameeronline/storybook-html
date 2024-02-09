import{c as O}from"./Button-Fp94hyPI.js";const j={title:"Components/Button",description:"Spruce comes with basic button variations like size, width, color, state and can also generate your custom color variants.",tags:["autodocs"],render:({label:G,...E})=>O({label:G,...E}),argTypes:{disabled:Boolean,block:Boolean,shadow:Boolean,label:{control:"text"},onClick:{action:"onClick"},asChild:{control:{type:"select"},defaultValue:"button",description:"Change button element",options:["a","button","input"]},type:{control:{type:"select"},description:"Button types",defaultValue:"primary",options:["primary","secondary","ghost","link"]},size:{control:{type:"select"},description:"Size varients",options:["small","medium","large"]},varient:{control:{type:"inline-radio"},defaultValue:"solid",options:["solid","outline"]}},args:{label:"Button",block:!1,disabled:!1,shadow:!1,varient:"solid"},parameters:{backgrounds:{default:"light"}}},e={args:{type:"Primary"}},r={args:{type:"Primary",varient:"solid"}},a={args:{type:"secondary"}},s={args:{type:"ghost"}},o={args:{type:"link"}},t={args:{size:"small"}},n={args:{size:"large"}},c={name:"Block",args:{block:!0}};var i,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: "Primary"
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: "Primary",
    varient: "solid"
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,y,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: "secondary"
  }
}`,...(k=(y=a.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var b,S,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: "ghost"
  }
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var B,f,v;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: "link"
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var z,P,C;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...(C=(P=t.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var w,L,x;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "large"
  }
}`,...(x=(L=n.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var V,_,D;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Block",
  args: {
    block: true
  }
}`,...(D=(_=c.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const q=["Default","Primary","Secondary","Ghost","Link","Small","Large","Block"];export{c as Block,e as Default,s as Ghost,n as Large,o as Link,r as Primary,a as Secondary,t as Small,q as __namedExportsOrder,j as default};
