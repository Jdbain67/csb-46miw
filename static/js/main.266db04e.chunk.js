(this["webpackJsonpsave-me-a-book"]=this["webpackJsonpsave-me-a-book"]||[]).push([[0],{32:function(e,t,a){e.exports=a(77)},37:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(10),c=a.n(r),o=a(9),s=(a(37),a(83)),m=a(84),i=a(87),u=a(82),d=a(85),f=a(12),v=(a(52),a(30)),E=a.n(v),b=a(78),p=a(79),h=a(80),g=a(81),k=a(86),N=function(e){var t=e.thumbnail,a=e.title,r=e.pageCount,c=e.language,s=e.description,m=e.authors,i=e.publisher,d=e.previewLink,f=e.infoLink,v=Object(n.useState)(!1),E=Object(o.a)(v,2),N=E[0],x=E[1],y=function(){return x(!N)};return l.a.createElement(b.a,{style:{width:"233px"},className:"m-auto "},l.a.createElement(p.a,{top:!0,style:{width:"100%",height:"233px"},src:t,alt:a}),l.a.createElement(h.a,null,l.a.createElement(g.a,{className:"card-title"},a),l.a.createElement(u.a,{onClick:y},"More info")),l.a.createElement(k.a,{isOpen:N,toggle:y},l.a.createElement("div",{className:"modal-header d-flex justify-content-center"},l.a.createElement("h5",{className:"modal-title text-center",id:"exampleModalLabel"},a),l.a.createElement("button",{"aria-label":"Close",className:"close",type:"button",onClick:y},l.a.createElement("span",{"aria-hidden":!0},"X"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"d-flex justify-content-between ml-3"},l.a.createElement("img",{src:t,alt:a,style:{height:"233px"}}),l.a.createElement("div",null,l.a.createElement("p",null,"Page Count: ",r),l.a.createElement("p",null,"Language : ",c),l.a.createElement("p",null,"Authors : ",m),l.a.createElement("p",null,"Publisher : ",i))),l.a.createElement("div",{className:"mt-3"},s)),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("div",{className:"left-silde"},l.a.createElement("a",{href:d,className:"btn-link",color:"default",type:"button",target:"_blank",rel:"noopener noreferrer"},"Preview Link")),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"right-silde"},l.a.createElement("a",{href:f,className:"btn-link",color:"default",type:"button",target:"_blank",rel:"noopener noreferrer"},"Info Link")))))};var x=function(){var e=Object(n.useState)(10),t=Object(o.a)(e,2),a=t[0],r=(t[1],Object(n.useState)(1)),c=Object(o.a)(r,2),v=c[0],b=(c[1],Object(n.useState)("")),p=Object(o.a)(b,2),h=p[0],g=p[1],k=Object(n.useState)(!1),x=Object(o.a)(k,2),y=x[0],w=x[1],j=Object(n.useState)([]),I=Object(o.a)(j,2),O=I[0],L=I[1],C=function(){w(!0),a>40||a<1?f.toast.error("max results must be between 1 and 40"):E.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(h,"&maxResults=").concat(a,"&startIndex=").concat(v)).then((function(e){v>=e.data.totalItems||v<1?f.toast.error("max reults must be between 1 and ".concat(e.data.totalItems)):e.data.items.length>0&&(L(e.data.items),w(!1))})).catch((function(e){w(!0),console.log(e.response)}))};return l.a.createElement("div",{className:"w-100 h-100"},l.a.createElement("div",{className:"main-image d-flex justify-content-center align-items-center flex-column"},l.a.createElement("div",{className:"filter"}),l.a.createElement("h1",{className:"display-2 text-center text-white mb-3",style:{zIndex:2}},"Save Me A Book"),l.a.createElement("div",{style:{width:"60%",zIndex:2}},l.a.createElement(s.a,{size:"lg",className:"mb-3"},l.a.createElement(m.a,{placeholder:"Book Search",value:h,onChange:function(e){return g(e.target.value)}}),l.a.createElement(i.a,{addonType:"append"},l.a.createElement(u.a,{color:"secondary",onClick:C},l.a.createElement("i",{className:"fas fa-search"})))),l.a.createElement("div",{className:"d-flex text-white justify-content-center"}))),function(){if(y)return l.a.createElement("div",{className:"d-flex justify-content-center mt-3"},l.a.createElement(d.a,{style:{width:"3rem",height:"3rem"}}));var e=O.map((function(e,t){var a="";return e.volumeInfo.imageLinks&&(a=e.volumeInfo.imageLinks.thumbnail),l.a.createElement("div",{className:"col-lg-4 mb-3",key:e.id},l.a.createElement(N,{thumbnail:a,title:e.volumeInfo.title,pageCount:e.volumeInfo.pageCount,language:e.volumeInfo.language,authors:e.volumeInfo.authors,publisher:e.volumeInfo.publisher,description:e.volumeInfo.description,previewLink:e.volumeInfo.previewLink,infoLink:e.volumeInfo.infoLink}))}));return l.a.createElement("div",{className:"container my-5"},l.a.createElement("div",{className:"row"},e))}(),l.a.createElement(f.ToastContainer,null))};c.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.266db04e.chunk.js.map