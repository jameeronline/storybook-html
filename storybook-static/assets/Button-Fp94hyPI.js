const y=({type:o="primary",size:c="medium",varient:n="solid",asChild:e="button",block:i,shadow:m,disabled:r,label:s,onClick:a})=>{const t=document.createElement(e);e=="input"?t.value=s:t.innerText=s,e=="a"?t.href="#":t.type="button",t.addEventListener("click",a);const u=()=>{switch(o){case"primary":return n=="solid"?"btn--primary":"btn--outline-primary";case"secondary":return n=="solid"?"btn--secondary":"btn--outline-secondary";case"ghost":return n=="solid"?"btn--ghost":"btn--outline-ghost";case"link":return"btn--link";default:return"btn--primary"}},b=()=>{switch(c){case"small":return"btn--sm";case"medium":return"btn--md";case"large":return"btn--lg";default:return"btn--md"}},l=r?"btn--disabled":"";t.disabled=r;const d=i?"btn--block":"";return t.className=["btn",u(),b(),d,l].join(" ").trim(),t};export{y as c};