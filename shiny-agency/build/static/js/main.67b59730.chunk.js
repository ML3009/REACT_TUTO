(this["webpackJsonpshiny-agency"]=this["webpackJsonpshiny-agency"]||[]).push([[0],{19:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(9),s=n.n(c),o=n(6),a=n(2);var l={primary:"#5843E4",secondary:"#8186A0",backgroundLight:"#F9F9FC"},d=n(5);const j=Object(d.a)(o.b)`
  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${e=>e.$isFullLink&&`color: white; \n    border-radius: 30px; \n    background-color: ${l.primary};`}
`;var x=n.p+"static/media/home-illustration.3c3e6fa7.svg",p=n(3);const b=d.a.div`
  display: flex;
  justify-content: center;
`,u=d.a.div`
  margin: 30px;
  background-color: ${l.background};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`,h=d.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${j} {
    max-width: 250px;
  }
`,O=d.a.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`,m=d.a.img`
  flex: 1;
`;var f=function(){return Object(p.jsx)(b,{children:Object(p.jsxs)(u,{children:[Object(p.jsxs)(h,{children:[Object(p.jsx)(O,{children:"Rep\xe9rez vos besoins, on s\u2019occupe du reste, avec les meilleurs talents"}),Object(p.jsx)(j,{to:"/survey/1",$isFullLink:!0,children:"Faire le test"})]}),Object(p.jsx)(m,{src:x})]})})};var g=function(){const{questionNumber:e}=Object(a.o)(),t=parseInt(e),n=1===t?1:t-1,i=t+1;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Questionnaire \ud83e\uddee"}),Object(p.jsxs)("h2",{children:["Question ",e]}),Object(p.jsx)(o.b,{to:`/survey/${n}`,children:"Pr\xe9c\xe9dent"}),10===t?Object(p.jsx)(o.b,{to:"/results",children:"R\xe9sultat"}):Object(p.jsx)(o.b,{to:`/survey/${i}`,children:"Suivant"})]})};var v=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Results \ud83e\uddfe "})})},y=n.p+"static/media/profile.d4c5c7c6.png";const $=d.a.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`,k=d.a.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`,w=d.a.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${l.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;function F(e){let{label:t,title:n,picture:i}=e;return Object(p.jsxs)(w,{children:[Object(p.jsx)($,{children:t}),Object(p.jsx)(k,{src:i,alt:"freelance"}),Object(p.jsx)("span",{children:n})]})}F.defaultProps={title:"ML",label:"En recherche active d' un stage",picture:y};var z=F;const L=d.a.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`,T=d.a.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`,D=d.a.h2`
  font-size: 20px;
  color: ${l.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`,J=[{name:"Jane Doe",jobTitle:"Devops",picture:y},{name:"John Doe",jobTitle:"Developpeur Frontend",picture:y},{name:"Jeanne Biche",jobTitle:"D\xe9veloppeuse Fullstack",picture:y}];var S=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(T,{children:"Trouvez votre prestataire \ud83d\udcab"}),Object(p.jsx)(D,{children:"Chez Shiny nous r\xe9unissions les meilleurs profils pour vous."}),Object(p.jsx)(L,{children:J.map(((e,t)=>Object(p.jsx)(z,{label:`${e.jobTitle}`,picture:e.picture,title:e.name},`${e.name}-${t}`)))})]})};const C=Object(d.a)(o.b)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${e=>e.$isFullLink&&`color: white; border-radius: 30px; background-color: ${l.primary};`}
`;var E=function(){return Object(p.jsxs)("nav",{children:[Object(p.jsx)(C,{to:"/",children:"Accueil"}),Object(p.jsx)(C,{to:"/freelances",children:"Profils"}),Object(p.jsx)(C,{to:"/survey/1",$isFullLink:!0,children:"Faire le test"})]})};var M=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:" Oups \ud83d\ude48 Cette page n'existe pas"})})};const P=d.a`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
      margin: 0;
    }
`;s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)(P,{}),Object(p.jsx)(E,{}),Object(p.jsxs)(a.c,{children:[Object(p.jsx)(a.a,{path:"/",element:Object(p.jsx)(f,{})}),Object(p.jsx)(a.a,{path:"/survey/:questionNumber",element:Object(p.jsx)(g,{})}),Object(p.jsx)(a.a,{path:"/results",element:Object(p.jsx)(v,{})}),Object(p.jsx)(a.a,{path:"/freelances",element:Object(p.jsx)(S,{})}),Object(p.jsx)(a.a,{path:"*",element:Object(p.jsx)(M,{})})]})]})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.67b59730.chunk.js.map