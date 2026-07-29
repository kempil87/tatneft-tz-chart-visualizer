import{a as e,c as t,d as n,i as r,l as i,n as a,o,r as s,s as c,t as l,u}from"./index-BTa8MkUG.js";n();var d=u();i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`;var f=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,p=i.ul`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  margin: 0;
  padding: 0;
  list-style: none;
`,m=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
  min-width: 0;
`,h=i.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,g=t(),_=e=>new Intl.DateTimeFormat(`ru-RU`,{dateStyle:`short`,timeStyle:`medium`}).format(e),v=()=>{let t=(0,d.c)(15),n=c(r),i=c(e),u=c(o),v=n.length>0,y;t[0]===u?y=t[1]:(y=e=>{u(e)},t[0]=u,t[1]=y);let b=y;if(!v)return null;let x;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,g.jsx)(a,{variant:`h4`,weight:`semibold`,children:`Записи`}),t[2]=x):x=t[2];let S;t[3]===i?S=t[4]:(S=(0,g.jsxs)(f,{children:[x,(0,g.jsx)(s,{variant:`flat`,color:`danger`,onClick:i,children:`Удалить все`})]}),t[3]=i,t[4]=S);let C;if(t[5]!==n||t[6]!==b){let e;t[8]===b?e=t[9]:(e=(e,t)=>(0,g.jsxs)(l,{as:`li`,color:`brand`,padding:`sm`,inlinePadding:`md`,display:`flex`,justify:`space-between`,align:`center`,gap:`xs`,children:[(0,g.jsxs)(m,{children:[(0,g.jsxs)(a,{variant:`label`,weight:`medium`,children:[`Запись #`,t+1]}),(0,g.jsx)(a,{variant:`caption`,color:`secondary`,children:_(e.createdAt)})]}),(0,g.jsxs)(h,{children:[(0,g.jsxs)(a,{variant:`bodySm`,children:[`Parameter 1: `,e.parameter1]}),(0,g.jsxs)(a,{variant:`bodySm`,children:[`Parameter 2: `,e.parameter2]}),(0,g.jsxs)(a,{variant:`bodySm`,children:[`Parameter 3: `,e.parameter3]}),(0,g.jsx)(s,{variant:`flat`,color:`danger`,onClick:()=>b(e.id),children:`Удалить`})]})]},e.id),t[8]=b,t[9]=e),C=n.map(e),t[5]=n,t[6]=b,t[7]=C}else C=t[7];let w;t[10]===C?w=t[11]:(w=(0,g.jsx)(p,{children:C}),t[10]=C,t[11]=w);let T;return t[12]!==S||t[13]!==w?(T=(0,g.jsxs)(l,{type:`raised`,padding:`lg`,display:`flex`,direction:`column`,gap:`md`,children:[S,w]}),t[12]=S,t[13]=w,t[14]=T):T=t[14],T};export{v as EntriesList};