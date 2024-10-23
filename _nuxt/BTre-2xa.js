import{u as h,r as g,o as v,a as e,c as i,b as o,w as r,d,e as a,f as s,_ as R,g as n,t as u,F as B,h as S,i as x,j as z,k as U}from"./DFqPqEGO.js";import{b as D,_ as L,a as A}from"./Ct4VeaSh.js";import{_ as N}from"./FUxr0XOf.js";import{f as V}from"./DOGEOkQ0.js";const j={key:0},E={class:"flex justify-center w-full select-none"},I=["src"],C={key:1,class:"relative text-center max-h-[700px] w-full mt-12 mb-16"},F={class:"absolute text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"},T={class:"text-2xl md:text-4xl text-center font-bold mb-4"},$={class:"mb-4 text-center"},H={key:0,class:"opacity-70 font-bold text-center"},K={key:2,class:"flex flex-row gap-4 items-center justify-center mt-2"},M={key:0,class:"mb-4 text-md md:text-lg font-bold w-full"},P={class:"whitespace-pre-line"},W={class:"pt-8 flex gap-4 flex-wrap"},Z={key:0,class:"text-sm rounded-md bg-gray-200 py-4 px-6 italic my-6"},q={class:"pt-8 flex gap-4 flex-wrap"},G={class:"flex items-center mb-8"},J={class:"py-8"},O={key:0,class:"italic text-sm"},Q={key:4,class:"mb-12"},X={key:1},Y={class:"min-h-screen grid place-items-center"},ee={class:"flex flex-col items-center"},re={__name:"[id]",setup(te){const y=h().params.id,t=g();t.value=D.find(c=>c.id==y);const b=g(!1);return v(()=>{t.value||(b.value=!0)}),(c,l)=>{const m=z,_=A,p=N,f=R,k=U;return e(t)&&!e(b)?(n(),i("div",j,[o(p,{class:"bg-gray-100"},{default:r(()=>[s("div",E,[e(t).img?(n(),i("img",{key:0,src:e(t).img,class:"mx-auto mt-12 max-h-[700px] shadow-2xl rounded-xl mb-16"},null,8,I)):(n(),i("div",C,[l[1]||(l[1]=s("img",{class:"shadow-xl mx-auto rounded-xl mb-12 max-h-[700px] hover:shadow-2xl transition-shadow",src:L},null,-1)),s("div",F,[o(m,{name:"tabler:clock",class:"w-8 h-8"}),l[0]||(l[0]=s("p",null,"Work in progress",-1))])]))]),s("h1",T,u(e(t).title),1),s("h2",$,u(e(t).subtitle),1),e(t).published?(n(),i("h3",H,u(("formatDate"in c?c.formatDate:e(V))(e(t).published)),1)):a("",!0),e(t).wip?a("",!0):(n(),d(_,{key:1,rating:e(t).rating,class:"text-center mt-8"},null,8,["rating"])),e(t).wip?(n(),i("div",K,[o(m,{name:"tabler:info-circle"}),l[2]||(l[2]=s("p",null,"An diesem Buch wird gearbeitet.",-1))])):a("",!0)]),_:1}),o(p,{class:"!pb-6"},{default:r(()=>[l[3]||(l[3]=s("h3",{class:"mb-4 text-lg md:text-xl font-bold w-full"},"Beschreibung",-1)),s("p",null,u(e(t).description),1)]),_:1}),e(t).wip&&e(t).excerpt?(n(),d(p,{key:0,class:"!pt-6"},{default:r(()=>[l[4]||(l[4]=s("h3",{class:"mb-4 text-lg md:text-xl font-bold w-full"},"Auszug",-1)),e(t).excerpt.title?(n(),i("h4",M,u(e(t).excerpt.title),1)):a("",!0),s("p",P,u(e(t).excerpt.text),1)]),_:1})):a("",!0),e(t).pdfReadingSample||e(t).epubReadingSample?(n(),d(p,{key:1,class:"!py-6"},{default:r(()=>[l[7]||(l[7]=s("h3",{class:"text-lg md:text-xl mb-4 font-bold w-full"},"Leseprobe",-1)),l[8]||(l[8]=s("p",null,"Die ersten 20% des Buches als Leseprobe.",-1)),s("div",W,[e(t).pdfReadingSample?(n(),d(f,{key:0,variant:"black",download:e(t).pdfReadingSample},{default:r(()=>[o(m,{class:"mr-4 w-5 h-5",name:"tabler:download"}),l[5]||(l[5]=s("p",null,"Download .pdf",-1))]),_:1},8,["download"])):a("",!0),e(t).epubReadingSample?(n(),d(f,{key:1,variant:"black",download:e(t).epubReadingSample},{default:r(()=>[o(m,{class:"mr-4 w-5 h-5",name:"tabler:download"}),l[6]||(l[6]=s("p",null,"Download .epub",-1))]),_:1},8,["download"])):a("",!0)])]),_:1})):a("",!0),e(t).amazonUrl||e(t).otherLinks&&e(t).otherLinks.length>0?(n(),d(p,{key:2,class:"!py-6"},{default:r(()=>[l[11]||(l[11]=s("h3",{class:"text-lg md:text-xl mb-4 font-bold w-full whitespace-normal"},"Kauflinks",-1)),!e(t).wip&&e(t).orderInformation?(n(),i("div",Z,[s("p",null,u(e(t).orderInformation),1)])):a("",!0),l[12]||(l[12]=s("p",null,"Als eBook, gebundenes Buch und Taschenbuch erhältlich.",-1)),s("div",q,[e(t).amazonUrl?(n(),d(f,{key:0,variant:"black",link:e(t).amazonUrl},{default:r(()=>[o(m,{class:"mr-4 w-5 h-5",name:"tabler:brand-amazon"}),l[9]||(l[9]=s("p",null,"Amazon",-1))]),_:1},8,["link"])):a("",!0),e(t).playUrl?(n(),d(f,{key:1,variant:"black",link:e(t).playUrl},{default:r(()=>[o(m,{class:"mr-4 w-5 h-5",name:"tabler:brand-google-play"}),l[10]||(l[10]=s("p",null,"Play Store",-1))]),_:1},8,["link"])):a("",!0),e(t).otherLinks&&e(t).otherLinks.length>0?(n(!0),i(B,{key:2},S(e(t).otherLinks,w=>(n(),d(f,{variant:"black",link:w.url},{default:r(()=>[o(m,{class:"mr-4 w-5 h-5",name:"tabler:link"}),s("p",null,u(w.label),1)]),_:2},1032,["link"]))),256)):a("",!0)])]),_:1})):a("",!0),e(t).wip?(n(),i("p",Q)):(n(),d(p,{key:3,class:"!pt-6 pb-32"},{default:r(()=>[l[17]||(l[17]=s("h3",{class:"text-lg md:text-xl mb-4 font-bold w-full whitespace-normal"},"Rezensionen",-1)),s("div",G,[o(m,{class:"mr-4 w-5 h-5",name:"tabler:info-circle"}),s("p",null,[l[14]||(l[14]=x("von ")),o(k,{class:"underline",to:e(t).reviewsUrl},{default:r(()=>l[13]||(l[13]=[x("goodreads.com")])),_:1},8,["to"])])]),o(_,{rating:e(t).rating,url:e(t).reviewsUrl},null,8,["rating","url"]),s("div",J,[!e(t).reviews||e(t).reviews.length==0?(n(),i("p",O,[l[16]||(l[16]=x(" Es existieren noch keine Rezensionen. ")),o(k,{to:e(t).reviewsUrl,class:"underline"},{default:r(()=>l[15]||(l[15]=[x("Schreibe das erste Review")])),_:1},8,["to"])])):a("",!0)])]),_:1}))])):e(b)?(n(),i("div",X,[s("div",Y,[s("div",ee,[l[19]||(l[19]=s("h1",{class:"font-bold text-[3rem]"},"Hmm...",-1)),l[20]||(l[20]=s("h2",{class:"mb-8"},"Etwas stimmt nicht.",-1)),o(f,{link:"/",variant:"outline"},{default:r(()=>[o(m,{name:"tabler:arrow-left",class:"w-5 h-5 mr-4"}),l[18]||(l[18]=s("p",null," Zurück ",-1))]),_:1})])])])):a("",!0)}}};export{re as default};