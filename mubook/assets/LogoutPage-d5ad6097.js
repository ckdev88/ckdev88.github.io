import{u,D as r,r as l,C as c,o as g,c as i,a,t as p,f,F as _,H as m}from"./index-4cc52a46.js";const h=a("h1",null,"Logging out...",-1),y={__name:"LogoutPage",setup(d){const t=u(),s=r();let e=l("Just one moment...");async function n(){console.log("logout account");const{error:o}=await m.auth.signOut();return o!==null?(e.value=o,!1):(console.log('loggingout "logoutpage.vue"'),t.setLoginStatus(!1),t.doLogout(),!0)}return c(async()=>{await n(),s.push({name:"login"})}),(o,L)=>(g(),i(_,null,[h,a("p",null,p(f(e)),1)],64))}};export{y as default};