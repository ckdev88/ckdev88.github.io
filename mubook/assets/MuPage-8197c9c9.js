import{g as a,u as i,x as r,o as l,c as g,d as _,t as f,e as t,F as h}from"./index-816914e0.js";import{B as v}from"./MuBooksOverview-6eb60b5d.js";const M={name:"MuBooksUserCard",data(){return{tmpname:"Sjoerd"}},props:{user:{type:Object,required:!0}},emits:["change-name"]};function B(e,u,c,m,s,o){return null}const $=a(M,[["render",B]]),n=i(),k={name:"MuPage",components:{MuUserCard:$,MuBooksOverview:v},data(){return{user:{firstname:"Jan",age:23}}},methods:{changeFirstName(){console.log("useAuthStore:",n),console.log("useAuthStore:",n.status),this.user.firstname="Klaas"}}};function C(e,u,c,m,s,o){const p=r("MuUserCard"),d=r("MuBooksOverview");return l(),g(h,null,[_(f(e.loggedInStatus)+" ",1),t(p,{user:s.user,onChangeName:o.changeFirstName},null,8,["user","onChangeName"]),t(d)],64)}const x=a(k,[["render",C]]);export{x as default};