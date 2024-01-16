const X=({type:e="primary",size:c="medium",label:P})=>{const l=document.createElement("span");l.innerText=P;const T=e==="primary"?"storybook-badge--primary":e==="secondary"?"storybook-badge--secondary":"storybook-badge--ghost";return l.className=["storybook-badge",`storybook-badge--${c}`,T].join(" "),l},f={title:"Example/Badge",tags:["autodocs"],render:({label:e,...c})=>X({label:e,...c}),argTypes:{backgroundColor:{control:"color"},label:{control:"text"},type:{control:{type:"select"},options:["primary","secondary","ghost"]},size:{control:{type:"select"},options:["small","medium","large","xlarge"]}}},r={args:{type:"primary",label:"Button"}},a={args:{type:"secondary",label:"Button"}},o={args:{type:"ghost",label:"Button"}},s={args:{size:"large",label:"Button"}},t={args:{size:"small",label:"Button"}},n={args:{size:"xlarge",label:"Button"}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: "primary",
    label: "Button"
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,u,i;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: "secondary",
    label: "Button"
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var y,b,B;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: "ghost",
    label: "Button"
  }
}`,...(B=(b=o.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var S,x,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(z=(x=s.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var h,k,E;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(E=(k=t.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var _,G,L;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: "xlarge",
    label: "Button"
  }
}`,...(L=(G=n.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const j=["Primary","Secondary","Ghost","Large","Small","Xlarge"];export{o as Ghost,s as Large,r as Primary,a as Secondary,t as Small,n as Xlarge,j as __namedExportsOrder,f as default};
