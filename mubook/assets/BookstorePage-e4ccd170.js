import{g as B,s as w,o as l,c as r,e as f,w as p,d as u,t as i,i as k,y as g,a,F as d,k as y,z as C,l as _,p as m,m as b}from"./index-4884afb9.js";const F={data(){return{homepage:"http://localhost:8080",showButtons:!0,showBooks:!0,imgprefix:"./img/",books:[{author:"Jan D. Arte",authorAge:96,title:"Booku",year:1984,cover:"booku.jpg",active:!1,isFav:!0},{author:"Carla C. Conte",authorAge:26,title:"Cooking with the book",year:2e3,cover:"cookbook.jpg",isFav:!0},{author:"Pete Zekes",authorAge:46,title:"Deke, Creak the Leek in the Beak",year:1922,cover:"creek.jpg",isFav:!1}]}},methods:{changeTitle(e,t){t.title=e},toggleShowBooks(){this.showBooks=!this.showBooks},toggleShowButtons(){this.showButtons=!this.showButtons},handleEvent(e,t){console.log("e:",e),console.log("e.type:",e.type),t&&console.log("greet:",t)},handleMousemove(e){this.book.x=e.offsetX,this.book.y=e.offsetY,console.log("this.x:",this.book.x),console.log("this.y:",this.book.y)},toggleFavBook(e){this.books[e].isFav=!this.books[e].isFav},toggleFav(e){e.isFav=!e.isFav},checkOldies(e){return e.year<1990}},computed:{filteredBooks(){return this.books.filter(e=>e.year<1990)}}},S=e=>(m("data-v-4fda86a1"),e=e(),b(),e),A=S(()=>a("br",null,null,-1)),x={key:0},D={key:1},I={class:"books"},L=["src","alt"],N={class:"book-title"},P={class:"buttons"},V=["onClick"],j=["onClick"],E=["disabled","onClick"],H=["disabled","onClick"],T=["onClick"];function q(e,t,z,M,n,s){const v=w("RouterLink");return l(),r(d,null,[f(v,{to:{name:"dashboard",params:"title",query:{title:"lekkeerrrrrr"}}},{default:p(()=>[u("HOME")]),_:1}),A,u(" "+i(s.filteredBooks)+" ",1),n.showBooks?(l(),r("button",{key:0,onClick:t[0]||(t[0]=(...o)=>s.toggleShowBooks&&s.toggleShowBooks(...o))},"Hide books")):(l(),r("button",{key:1,onClick:t[1]||(t[1]=(...o)=>s.toggleShowBooks&&s.toggleShowBooks(...o))},"Show books")),k(a("div",null,[a("button",{onClick:t[2]||(t[2]=(...o)=>s.toggleShowButtons&&s.toggleShowButtons(...o))},[n.showButtons?(l(),r("span",x,"Hide")):(l(),r("span",D,"Show")),u(" buttons ")]),a("ul",I,[(l(!0),r(d,null,y(s.filteredBooks,(o,c)=>(l(),r("li",{key:c,class:C(["book",{fav:o.isFav}])},[a("img",{src:n.imgprefix+o.cover,alt:o.title,class:"bookcover"},null,8,L),a("h3",N,i(o.title)+" ("+i(o.year)+")",1),u(" "+i(o.author)+", "+i(o.authorAge)+" ",1),k(a("div",P,[a("button",{onClick:h=>s.toggleFavBook(c)},"Fav?",8,V),a("button",{onClick:h=>s.toggleFav(o)},"Fav?",8,j),o.authorAge<101?(l(),r("button",{key:0,disabled:o.authorAge>99,onClick:h=>o.authorAge++}," + ",8,E)):_("",!0),o.authorAge>0?(l(),r("button",{key:1,disabled:o.authorAge<2,onClick:h=>o.authorAge--}," - ",8,H)):_("",!0),a("button",{onClick:h=>s.changeTitle("Cursus Pottenbakken, the sequel",o)}," Ander? ",8,T)],512),[[g,n.showButtons]])],2))),128))])],512),[[g,n.showBooks]])],64)}const R=B(F,[["render",q],["__scopeId","data-v-4fda86a1"]]);export{R as default};