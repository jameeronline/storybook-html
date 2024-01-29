const _=({isVertical:a,isMultiple:k,label:L,optionsLength:S=1})=>{const o=document.createElement("div");o.className=`form-group ${a?"form-group--vertical-check":"form-group--horizontal-check"}`;let i="";for(let l=0;l<S;l++)i+=`
  <label class="form-check">
    <input class="form-check__control" type="radio" value="own-${l+1}" name="property-ownership"/>
    <span class="form-label form-check__label">${L}</span>
  </label>
`;return o.insertAdjacentHTML("beforeend",i),o},y={title:"Forms/Radio",tags:["autodocs"],render:({...a})=>_({...a}),argTypes:{label:{control:{type:"text"}},isMultiple:{control:"boolean"},optionsLength:{control:"select",options:["2","3","4"],if:{arg:"isMultiple"}},isVertical:{control:"boolean",if:{arg:"isMultiple"}}},args:{label:"label",isMultiple:!1,optionsLength:2,isVertical:!1}},e={args:{isMultiple:!1}},r={args:{isMultiple:!0}},s={args:{isMultiple:!0,optionsLength:4,isVertical:!1}},t={args:{isMultiple:!0,optionsLength:4,isVertical:!0}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isMultiple: false
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,g,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isMultiple: true
  }
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var d,f,M;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isMultiple: true,
    optionsLength: 4,
    isVertical: false
  }
}`,...(M=(f=s.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var h,b,V;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isMultiple: true,
    optionsLength: 4,
    isVertical: true
  }
}`,...(V=(b=t.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};const v=["Single","Multiple","Horizontal","Vertical"];export{s as Horizontal,r as Multiple,e as Single,t as Vertical,v as __namedExportsOrder,y as default};
