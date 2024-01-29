const P=({type:c="primary",size:l="medium",label:L})=>{const n=document.createElement("span");return n.innerText=L,n.className=["badge","text-bg-danger"].join(" "),n},T={title:"Components/Badge",tags:["autodocs"],render:({label:c,...l})=>P({label:c,...l}),argTypes:{label:{control:"text"},type:{control:{type:"select"},options:["primary","secondary","ghost"]},size:{control:{type:"select"},options:["small","medium","large","xlarge"]}}},e={args:{type:"primary",label:"New"}},r={args:{type:"secondary",label:"New"}},a={args:{type:"ghost",label:"New"}},s={args:{size:"large",label:"New"}},o={args:{size:"small",label:"New"}},t={args:{size:"xlarge",label:"New"}};var p,m,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "primary",
    label: "New"
  }
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var d,i,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: "secondary",
    label: "New"
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var y,b,N;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: "ghost",
    label: "New"
  }
}`,...(N=(b=a.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var w,S,x;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "New"
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var z,h,B;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "New"
  }
}`,...(B=(h=o.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var _,E,G;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: "xlarge",
    label: "New"
  }
}`,...(G=(E=t.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};const X=["Primary","Secondary","Ghost","Large","Small","Xlarge"];export{a as Ghost,s as Large,e as Primary,r as Secondary,o as Small,t as Xlarge,X as __namedExportsOrder,T as default};
