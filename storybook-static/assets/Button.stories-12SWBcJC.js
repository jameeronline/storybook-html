import{c as G}from"./Button-2yV2IObj.js";const w={title:"Components/Button",description:"Spruce comes with basic button variations like size, width, color, state and can also generate your custom color variants.",tags:["autodocs"],render:({label:P,...C})=>G({label:P,...C}),argTypes:{disabled:Boolean,block:Boolean,shadow:Boolean,label:{control:"text"},onClick:{action:"onClick"},asChild:{control:{type:"select"},defaultValue:"button",description:"Change button element",options:["a","button","input"]},type:{control:{type:"select"},description:"Button types",options:["Primary","Secondary","Ghost","Link"]},size:{control:{type:"select"},description:"Size varients",options:["Small","Medium","Large"]},varient:{control:{type:"inline-radio"},options:["Solid","Outline"]}},args:{label:"Button",type:"Primary",size:"Medium",block:!1,disabled:!1,shadow:!1},parameters:{backgrounds:{default:"light"}}},e={args:{type:"Primary"}},r={args:{type:"Secondary"}},a={args:{type:"Ghost"}},s={args:{type:"Link"}},o={args:{size:"Small"}},t={args:{size:"Large"}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: "Primary"
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: "Secondary"
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: "Ghost"
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,S,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: "Link"
  }
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,k,L;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "Small"
  }
}`,...(L=(k=o.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var z,B,f;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: "Large"
  }
}`,...(f=(B=t.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const x=["Primary","Secondary","Ghost","Link","Small","Large"];export{a as Ghost,t as Large,s as Link,e as Primary,r as Secondary,o as Small,x as __namedExportsOrder,w as default};
