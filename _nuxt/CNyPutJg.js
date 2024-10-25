import{o as n,c as i,w as a,a as s,b as o,r as D,T as I,d as u,F as h,e as B,n as R,t as c,_ as S,S as j,f as z,g as L,M as C,h as M,u as H,i as y,j as l,k as r,l as N,m as v}from"./CrcIC6du.js";import{b as $,_ as F,a as T}from"./CZxNxsHW.js";import{_ as V}from"./DiyE_6EO.js";import{f as E}from"./DOGEOkQ0.js";const K={class:"flex"},O={__name:"NDropdown",props:{menuItems:{type:Array,default:[]}},setup(k){return(g,b)=>{const t=S,x=j,f=z,e=L,d=C,_=M;return n(),i(_,{as:"div",class:"relative block text-left"},{default:a(()=>[s("div",null,[o(x,{class:"flex text-white w-full justify-center gap-4 rounded-md bg-black px-4 py-2 border-2 text-sm border-black"},{default:a(()=>[s("div",K,[D(g.$slots,"default")]),o(t,{name:"tabler:chevron-down",class:"h-5 w-5 -mr-1","aria-hidden":"true"})]),_:3})]),o(I,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[o(d,{class:"absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md overflow-hidden bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:a(()=>[b[0]||(b[0]=s("p",{class:"text-sm px-6 py-4 border-b-[1px] border-gray-20 bg-black text-white"},"Ausgabe wählen",-1)),(n(!0),u(h,null,B(k.menuItems,m=>(n(),i(e,null,{default:a(({active:p})=>[o(f,{to:m.url,class:R([p?"bg-gray-200 text-black":"bg-white text-black","px-6 py-4 gap-x-3 text-sm flex items-center justify-between"])},{default:a(()=>[s("p",null,c(m.label),1),o(t,{name:"tabler:arrow-bar-right",class:"w-5 h-5"})]),_:2},1032,["to","class"])]),_:2},1024))),256))]),_:1})]),_:1})]),_:3})}}},P={key:0},W={class:"flex justify-center w-full select-none"},Z=["src"],q=["src"],G={key:1,class:"relative text-center max-h-[700px] w-full mt-12 mb-16"},J={class:"absolute text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"},Q={class:"text-2xl md:text-4xl text-center font-bold mb-4"},X={class:"mb-4 text-center"},Y={key:0,class:"opacity-70 font-bold text-center"},ee={key:2,class:"flex flex-row gap-4 items-center justify-center mt-2"},te={key:0,class:"mb-4 text-md md:text-lg font-bold w-full"},le={class:"whitespace-pre-line"},se={class:"pt-8 flex gap-4 flex-wrap"},ne={key:0,class:"text-sm rounded-md max-w-[600px] bg-gray-200 py-4 px-6 italic my-6"},oe={class:"flex gap-4 flex-wrap"},ae={class:"flex gap-4 flex-wrap"},re={class:"flex items-center mb-8"},ie={key:4,class:"mb-12"},de={key:1},ue={class:"min-h-screen grid place-items-center"},me={class:"flex flex-col items-center"},xe={__name:"[id]",setup(k){const b=H().params.id,t=y();t.value=$.find(f=>f.id==b);const x=y(!t.value);return(f,e)=>{const d=S,_=T,m=V,p=N,U=O,A=z;return l(t)&&!l(x)?(n(),u("div",P,[o(m,{class:"bg-gray-100"},{default:a(()=>[s("div",W,[l(t).cover?(n(),u("div",{key:0,class:"relative mb-12 group mx-auto mt-12 w-auto rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow",onClick:e[0]||(e[0]=(...w)=>f.flipBook&&f.flipBook(...w))},[s("img",{class:"max-h-[700px]",src:"/covers/"+l(t).id+"/front.jpg",alt:"Front Cover"},null,8,Z),s("img",{class:"max-h-[700px] absolute top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100",src:"/covers/"+l(t).id+"/back.jpg",alt:"Back Cover"},null,8,q)])):(n(),u("div",G,[e[2]||(e[2]=s("img",{class:"shadow-xl mx-auto rounded-xl mb-12 max-h-[700px] hover:shadow-2xl transition-shadow",src:F},null,-1)),s("div",J,[o(d,{name:"tabler:clock",class:"w-8 h-8"}),e[1]||(e[1]=s("p",null,"Work in progress",-1))])]))]),s("h1",Q,c(l(t).title),1),s("h2",X,c(l(t).subtitle),1),l(t).published?(n(),u("h3",Y,c(("formatDate"in f?f.formatDate:l(E))(l(t).published)),1)):r("",!0),l(t).wip?r("",!0):(n(),i(_,{key:1,rating:l(t).rating,class:"text-center mt-8"},null,8,["rating"])),l(t).wip?(n(),u("div",ee,[o(d,{name:"tabler:info-circle"}),e[3]||(e[3]=s("p",null,"An diesem Buch wird gearbeitet.",-1))])):r("",!0)]),_:1}),o(m,{class:"!pb-6"},{default:a(()=>[e[4]||(e[4]=s("h3",{class:"mb-4 text-lg md:text-xl font-bold w-full"},"Beschreibung",-1)),s("p",null,c(l(t).description),1)]),_:1}),l(t).wip&&l(t).excerpt?(n(),i(m,{key:0,class:"!pt-6"},{default:a(()=>[e[5]||(e[5]=s("h3",{class:"mb-4 text-lg md:text-xl font-bold w-full"},"Auszug",-1)),l(t).excerpt.title?(n(),u("h4",te,c(l(t).excerpt.title),1)):r("",!0),s("p",le,c(l(t).excerpt.text),1)]),_:1})):r("",!0),l(t).pdfReadingSample||l(t).epubReadingSample?(n(),i(m,{key:1,class:"!py-6"},{default:a(()=>[e[8]||(e[8]=s("h3",{class:"text-lg md:text-xl mb-4 font-bold w-full"},"Leseprobe",-1)),e[9]||(e[9]=s("p",null,"Die ersten 20% des Buches als Leseprobe.",-1)),s("div",se,[l(t).pdfReadingSample?(n(),i(p,{key:0,variant:"black",download:l(t).pdfReadingSample},{default:a(()=>[o(d,{class:"mr-4 w-5 h-5",name:"tabler:download"}),e[6]||(e[6]=s("p",null,"Download .pdf",-1))]),_:1},8,["download"])):r("",!0),l(t).epubReadingSample?(n(),i(p,{key:1,variant:"black",download:l(t).epubReadingSample},{default:a(()=>[o(d,{class:"mr-4 w-5 h-5",name:"tabler:download"}),e[7]||(e[7]=s("p",null,"Download .epub",-1))]),_:1},8,["download"])):r("",!0)])]),_:1})):r("",!0),l(t).amazonUrl||l(t).otherLinks&&l(t).otherLinks.length>0?(n(),i(m,{key:2,class:"!py-6"},{default:a(()=>[e[14]||(e[14]=s("h3",{class:"text-lg md:text-xl mb-4 font-bold w-full whitespace-normal"},"Kauflinks",-1)),!l(t).wip&&l(t).orderInformation?(n(),u("div",ne,[s("p",null,c(l(t).orderInformation),1)])):r("",!0),e[15]||(e[15]=s("p",{class:"mb-8"},"Als eBook, gebundenes Buch und Taschenbuch erhältlich.",-1)),e[16]||(e[16]=s("p",{class:"font-bold mt-4 mb-2"},"Empfohlen",-1)),s("div",oe,[l(t).orellfuessli?(n(),i(U,{key:0,"menu-items":l(t).orellfuessli},{default:a(()=>[o(d,{class:"mr-4 w-5 h-5",name:"tabler:book"}),e[10]||(e[10]=s("p",null,"Orell Füssli",-1))]),_:1},8,["menu-items"])):r("",!0),l(t).amazonUrl?(n(),i(p,{key:1,variant:"black",link:l(t).amazonUrl},{default:a(()=>[o(d,{class:"mr-4 w-5 h-5",name:"tabler:brand-amazon"}),e[11]||(e[11]=s("p",null,"Amazon",-1))]),_:1},8,["link"])):r("",!0)]),e[17]||(e[17]=s("p",{class:"font-bold mt-4 mb-2"},"Andere",-1)),s("div",ae,[l(t).playUrl?(n(),i(p,{key:0,variant:"outline",link:l(t).playUrl},{default:a(()=>[o(d,{class:"mr-4 w-5 h-5",name:"tabler:brand-google-play"}),e[12]||(e[12]=s("p",null,"Play Store",-1))]),_:1},8,["link"])):r("",!0),l(t).appleUrl?(n(),i(p,{key:1,variant:"outline",link:l(t).appleUrl},{default:a(()=>[o(d,{class:"mr-4 w-5 h-5",name:"tabler:brand-appstore"}),e[13]||(e[13]=s("p",null,"Apple Books",-1))]),_:1},8,["link"])):r("",!0),l(t).otherLinks&&l(t).otherLinks.length>0?(n(!0),u(h,{key:2},B(l(t).otherLinks,w=>(n(),i(p,{variant:"outline",link:w.url},{default:a(()=>[o(d,{class:"mr-4 w-5 h-5",name:"tabler:link"}),s("p",null,c(w.label),1)]),_:2},1032,["link"]))),256)):r("",!0)])]),_:1})):r("",!0),l(t).wip?(n(),u("p",ie)):(n(),i(m,{key:3,class:"!pt-6 pb-32"},{default:a(()=>[e[20]||(e[20]=s("h3",{class:"text-lg md:text-xl mb-4 font-bold w-full whitespace-normal"},"Rezensionen",-1)),s("div",re,[o(d,{class:"mr-4 w-5 h-5",name:"tabler:info-circle"}),s("p",null,[e[19]||(e[19]=v("von ")),o(A,{class:"underline",to:l(t).reviewsUrl},{default:a(()=>e[18]||(e[18]=[v("goodreads.com")])),_:1},8,["to"])])]),o(_,{rating:l(t).rating,url:l(t).reviewsUrl},null,8,["rating","url"])]),_:1}))])):l(x)?(n(),u("div",de,[s("div",ue,[s("div",me,[e[22]||(e[22]=s("h1",{class:"font-bold text-[3rem]"},"Hmm...",-1)),e[23]||(e[23]=s("h2",{class:"mb-8"},"Etwas stimmt nicht.",-1)),o(p,{link:"/",variant:"outline"},{default:a(()=>[o(d,{name:"tabler:arrow-left",class:"w-5 h-5 mr-4"}),e[21]||(e[21]=s("p",null," Zurück ",-1))]),_:1})])])])):r("",!0)}}};export{xe as default};