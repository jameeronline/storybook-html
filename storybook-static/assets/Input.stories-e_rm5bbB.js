import{c as y}from"./Input-nGG2D3p-.js";const h={title:"Forms/Input",tags:["autodocs"],render:({type:f,...b})=>y({type:f,...b}),argTypes:{label:{control:"boolean"},labelText:{control:"text",if:{arg:"label"}},placeholder:{control:"text"},name:{control:"text"},id:{control:"text"},type:{control:"select",description:"Choose the input types from dropdown",options:["text","password","email","tel","search","date"],table:{defaultValue:{summary:"text"}}},size:{control:"select",options:["small","medium","large"]}},args:{placeholder:"Placeholder",type:"text",name:"form-element-name",id:"form-element-id",label:!1,labelText:"label"}},e={args:{type:"text"}},r={args:{size:"small"}},a={args:{size:"medium"}},t={args:{size:"large"}};var s,o,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: "text"
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var n,c,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "medium"
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,g,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "large"
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const S=["Default","Small","Medium","Large"];export{e as Default,t as Large,a as Medium,r as Small,S as __namedExportsOrder,h as default};
