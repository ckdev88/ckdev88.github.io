import{u as h,A as b,r as g,B as y,o as f,c as v,a as e,n as $,h as u,v as c,f as d,C as w,D as S,g as C,_ as k,p as U,l as x}from"./index-8d3c037b.js";import{u as _}from"./useCardRotate-2d940a6f.js";const R={class:"card",id:"card-login"},V=e("header",null,"Log in",-1),A=e("label",{for:"email"},"Email",-1),B=e("label",{for:"password"},"Password",-1),E=e("button",null,"Log in",-1),Q={__name:"LoginCard",setup(l){const t=h(),m=b();let s=g(""),a=g("");async function i(){console.log("login account");const{data:n,error:o}=await S.auth.signInWithPassword({email:s.value,password:a.value});o?console.log(o):(t.setLoginStatus(!0),t.setEmail(n.session.user.email),t.setUsername(n.session.user.email),t.setUid(n.session.user.id),t.setScreenname(n.session.user.user_metadata.screenname),m.push("welcome"))}return y(()=>{console.log("loginstatus in loginpage.vue:",t.status)}),(n,o)=>(f(),v("article",R,[V,e("main",null,[e("form",{onSubmit:$(i,["prevent"])},[A,u(e("input",{type:"email",id:"login-email","onUpdate:modelValue":o[0]||(o[0]=r=>w(s)?s.value=r:s=r),required:""},null,512),[[c,d(s)]]),B,u(e("input",{type:"password",id:"login-password","onUpdate:modelValue":o[1]||(o[1]=r=>w(a)?a.value=r:a=r)},null,512),[[c,d(a)]]),E],32)]),e("footer",null,[e("a",{onClick:o[2]||(o[2]=r=>d(_)("login","recover"))},"Forgot password"),e("a",{onClick:o[3]||(o[3]=r=>d(_)("login","signup"))},"New here? Join now.")])]))}},I={class:"card",id:"card-signup"},L=e("header",null,"Create an account",-1),q=e("label",{for:"screenname"},"Screen name",-1),D=e("label",{for:"email"},"Email address: *",-1),M=e("label",{for:"password"},"Password: *",-1),N=e("button",null,"Create",-1),P={class:"content-right"},X={__name:"SignupCard",setup(l){const t=h(),m=b(),s=C({screenname:"",email:"",password:""});async function a(){console.log("create account"),console.log("email,password:",s.email,s.password);const{data:i,error:n}=await S.auth.signUp({email:s.email,password:s.password,options:{data:{screenname:s.screenname}}});n?console.log(n):(console.log("adding user:",i),console.log(" user:",i.user.id),t.setEmail(s.email),t.setScreenname(s.screenname),t.setUid(i.user.id),console.log("Account created, referring..."),m.push({name:"checkmail"}))}return(i,n)=>(f(),v("article",I,[L,e("main",null,[e("form",{onSubmit:$(a,["prevent"])},[q,u(e("input",{type:"text",id:"signup-screenname","onUpdate:modelValue":n[0]||(n[0]=o=>s.screenname=o)},null,512),[[c,s.screenname]]),D,u(e("input",{type:"email",id:"signup-email","onUpdate:modelValue":n[1]||(n[1]=o=>s.email=o),required:""},null,512),[[c,s.email]]),M,u(e("input",{type:"password",id:"signup-password","onUpdate:modelValue":n[2]||(n[2]=o=>s.password=o),required:""},null,512),[[c,s.password]]),N],32)]),e("footer",P,[e("a",{onClick:n[3]||(n[3]=o=>d(_)("signup","login"))},"Already have an account")])]))}},F="/mubook/img/recover-icon.png";const p=l=>(U("data-v-b899ea4d"),l=l(),x(),l),O={class:"card",id:"card-recover"},W=p(()=>e("img",{src:F,width:"82",height:"82",alt:"",class:"recover-icon"},null,-1)),J=p(()=>e("header",null,"Forgot your password? Don't worry. Let's get it back.",-1)),K=p(()=>e("label",{for:"recover-email"},"Email address: *",-1)),T=p(()=>e("p",null,"We'll send a link to this email if it matches an existing MuBOOKS account.",-1)),j=p(()=>e("button",null,"Next",-1)),z={__name:"RecoverCard",setup(l){const t=g("");return(m,s)=>(f(),v("article",O,[W,J,e("main",null,[e("form",null,[K,u(e("input",{type:"email",id:"recover-email","onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),required:""},null,512),[[c,t.value]]),T,j])]),e("footer",null,[e("button",{onClick:s[1]||(s[1]=a=>d(_)("recover","login")),class:"alt"},"Back")])]))}},Y=k(z,[["__scopeId","data-v-b899ea4d"]]);export{Y as R,Q as _,X as a};