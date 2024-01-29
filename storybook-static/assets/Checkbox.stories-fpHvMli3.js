const L=({isVertical:a,isMultiple:S,label:x,optionsLength:V=1})=>{const l=document.createElement("div");l.className=`form-group ${a?"form-group--vertical-check":"form-group--horizontal-check"}`;let c="";for(let e=0;e<V;e++)c+=`
  <label class="form-check">
    <input class="form-check__control" type="checkbox" value="own-${e+1}" name="property-ownership-${e+1}"/>
    <span class="form-label form-check__label">${x}</span>
  </label>
`;return l.insertAdjacentHTML("beforeend",c),l},_={title:"Forms/Checkbox",tags:["autodocs"],render:({...a})=>L({...a}),argTypes:{label:{control:{type:"text"}},isMultiple:{control:"boolean"},optionsLength:{control:"select",options:["2","3","4"],if:{arg:"isMultiple"}},isVertical:{control:"boolean",if:{arg:"isMultiple"}}},args:{label:"label",isMultiple:!1,optionsLength:2,isVertical:!1}},r={args:{isMultiple:!1}},s={args:{isMultiple:!0}},t={args:{isMultiple:!0,optionsLength:4,isVertical:!1}},o={args:{isMultiple:!0,optionsLength:4,isVertical:!0}};var i,n,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isMultiple: false
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var u,g,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isMultiple: true
  }
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var d,h,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isMultiple: true,
    optionsLength: 4,
    isVertical: false
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,M,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isMultiple: true,
    optionsLength: 4,
    isVertical: true
  }
}`,...(k=(M=o.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const y=["Single","Multiple","Horizontal","Vertical"];export{t as Horizontal,s as Multiple,r as Single,o as Vertical,y as __namedExportsOrder,_ as default};
