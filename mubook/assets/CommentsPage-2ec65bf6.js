import{K as d,o as n,c as o,l as f,t as s,f as h,F as m,a as i,d as l,b as C,w as c,S as x,e as y}from"./index-d42d1c64.js";const g={__name:"CommentsList",async setup(_){let e,a;const u=([e,a]=d(()=>fetch("https://jsonplaceholder.typicode.com/comments").then(t=>t.json())),e=await e,a(),e).filter(t=>t.email.includes(".tv"));return(t,B)=>(n(!0),o(m,null,f(h(u),(r,p)=>(n(),o("li",{key:p},s(r.name)+" ("+s(r.postId)+", "+s(r.id)+") ",1))),128))}},k=i("br",null,null,-1),b={__name:"CommentsPage",props:{title:{type:String,required:!1}},setup(_){return(e,a)=>(n(),o(m,null,[i("h1",null,"Comments ("+s(this.$route.name)+")",1),l(" Comments hier"),k,(n(),C(x,null,{fallback:c(()=>[l("Loading...")]),default:c(()=>[y(g)]),_:1}))],64))}};export{b as default};