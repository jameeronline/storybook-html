import{c as n}from"./Button-Fp94hyPI.js";const r=({user:o,onLogout:a,onLogin:d,onCreateAccount:c})=>{const t=document.createElement("header"),l=document.createElement("div");l.className="storybook-header",l.insertAdjacentHTML("afterbegin",`<div>
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
          fill="#FFF" />
        <path
          d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
          fill="#555AB9" />
        <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />
      </g>
    </svg>
    <h1>Storybook HTML</h1>
  </div>`);const e=document.createElement("div");if(o){const i=`<span class="welcome">Welcome, <b>${o.name}</b>!</span>`;e.innerHTML=i,e.appendChild(n({label:"Log out",type:"secondary",onClick:a}))}else e.appendChild(n({label:"Log in",onClick:d})),e.appendChild(n({label:"Sign up",type:"secondary",onClick:c}));return l.appendChild(e),t.appendChild(l),t};export{r as c};
