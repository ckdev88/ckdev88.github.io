import{u,A as r,r as l,G as c,o as g,c as i,a as e,t as p,f,F as _,B as m}from"./index-fd4401b7.js";const h=e("h1",null,"Logging out...",-1),y={__name:"LogoutPage",setup(d){const s=u(),a=r();let t=l("Just one moment...");async function n(){console.log("logout account");const{error:o}=await m.auth.signOut();return o!==null?(t.value=o,!1):(console.log('loggingout "logoutpage.vue"'),s.setLoginStatus(!1),!0)}return c(async()=>{await n(),a.push("login")}),(o,B)=>(g(),i(_,null,[h,e("p",null,p(f(t)),1)],64))}};export{y as default};