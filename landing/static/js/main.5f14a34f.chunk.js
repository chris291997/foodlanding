/*! For license information please see main.5f14a34f.chunk.js.LICENSE.txt */
(this.webpackJsonpfoodlanding=this.webpackJsonpfoodlanding||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(14),i=c.n(n),l=(c(20),c(2)),r=(c(21),c(45),c(22),"http://54.179.204.51/dev_tech/admin/"),o=c(4),j=c.n(o),d=c(0),b=function(){var e=new URLSearchParams(window.location.search).get("store_code");Object(s.useEffect)((function(){j.a.get(r+"index.php/store_management/loadStoredata?store_code=".concat(e)).then((function(e){n(e.data.store_category),N(e.data.store_product),u(e.data.store_product);var t=[{product_detail:e.data.store_product}];k(t)})).catch((function(e){console.log(e)}))}),[]);var t=Object(s.useState)([]),c=Object(l.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(0),o=Object(l.a)(i,2),b=o[0],h=o[1],m=Object(s.useState)([]),_=Object(l.a)(m,2),O=_[0],u=_[1],x=Object(s.useState)([]),p=Object(l.a)(x,2),v=p[0],N=p[1],f=Object(s.useState)([]),g=Object(l.a)(f,2),S=g[0],k=g[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{class:"categories",children:Object(d.jsxs)("section",{class:"category-section",children:[Object(d.jsx)("button",{class:"category black",onClick:function(){N(O)},children:Object(d.jsx)("span",{children:"All"})}),a.map((function(e){return Object(d.jsx)("button",{class:b==e.category_id?"category active":"category",onClick:function(){return function(e){var t=S[0].product_detail.filter((function(t){var c="".concat(t.store_product_cat_id),s=e;return c.indexOf(s)>-1}));N(t),h(e)}(e.category_id)},"data-filter":"",children:e.category_name},e.category_id)}))]})}),Object(d.jsx)("div",{className:"menu__container bd-grid",children:v.map((function(e){return Object(d.jsxs)("div",{className:"menu__content",children:[Object(d.jsx)("img",{src:r+e.location,alt:"",className:"menu__img"}),Object(d.jsx)("h3",{className:"menu__name",children:e.store_product_name}),Object(d.jsxs)("span",{className:"menu__preci",children:["Php",e.price]}),Object(d.jsx)("a",{href:"#app",className:"button menu__button",children:Object(d.jsx)("i",{className:"bx bx-cloud-download"})})]})}))})]})})},h=c(15),m=function(){function e(){document.getElementById("nav-menu").classList.remove("show-menu")}document.querySelectorAll(".nav__link").forEach((function(t){return t.addEventListener("click",e)}));var t=document.querySelectorAll("section[id]");window.addEventListener("scroll",(function(){var e=window.pageYOffset;t.forEach((function(t){var c=t.offsetHeight,s=t.offsetTop-50,a=t.getAttribute("id");e>s&&e<=s+c?document.querySelector(".nav__menu a[href*="+a+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+a+"]").classList.remove("active-link")}))})),window.addEventListener("scroll",(function(){var e=document.getElementById("header");this.scrollY>=200?e.classList.add("scroll-header"):e.classList.remove("scroll-header")})),window.addEventListener("scroll",(function(){var e=document.getElementById("scroll-top");this.scrollY>=560?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}));var c=new URLSearchParams(window.location.search).get("store_code");Object(s.useEffect)((function(){j.a.get(r+"index.php/store_management/loadStoredata?store_code=".concat(c)).then((function(e){i(e.data.store_info);var t=e.data.store_info[0],c=e.data.store_about[0];I(r+c.location),O(t.store_name),v(t.store_code),S(t.store_tagline),L(r+t.location),T(t.store_description),M(t.store_street+", "+t.store_brgy+", "+t.store_city+", "+t.store_province),J(t.store_hour_start+"-"+t.store_hour_end),V(t.store_tel),Z(t.store_email),je(t.store_twitter),ce(t.store_facebook),ie(t.store_instagram)})).catch((function(e){console.log(e)}))}),[]);var a=Object(s.useState)([]),n=Object(l.a)(a,2),i=(n[0],n[1]),o=Object(s.useState)("Store Name"),m=Object(l.a)(o,2),_=m[0],O=m[1],u=Object(s.useState)("Store Name"),x=Object(l.a)(u,2),p=x[0],v=x[1],N=Object(s.useState)("Store Tagline"),f=Object(l.a)(N,2),g=f[0],S=f[1],k=Object(s.useState)("./home.png"),w=Object(l.a)(k,2),y=w[0],L=w[1],C=Object(s.useState)("./about.jpg"),A=Object(l.a)(C,2),E=A[0],I=A[1],B=Object(s.useState)("Store Description"),F=Object(l.a)(B,2),P=F[0],T=F[1],D=Object(s.useState)(""),q=Object(l.a)(D,2),H=q[0],M=q[1],U=Object(s.useState)(""),Y=Object(l.a)(U,2),z=Y[0],J=Y[1],R=Object(s.useState)(""),W=Object(l.a)(R,2),G=W[0],V=W[1],K=Object(s.useState)(""),Q=Object(l.a)(K,2),X=Q[0],Z=Q[1],$=Object(s.useState)(""),ee=Object(l.a)($,2),te=ee[0],ce=ee[1],se=Object(s.useState)(""),ae=Object(l.a)(se,2),ne=ae[0],ie=ae[1],le=Object(s.useState)(""),re=Object(l.a)(le,2),oe=re[0],je=re[1],de=Object(s.useState)("copy"),be=Object(l.a)(de,2),he=be[0],me=be[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("a",{href:"#",className:"scrolltop",id:"scroll-top",children:Object(d.jsx)("i",{className:"bx bx-chevron-up scrolltop__icon"})}),Object(d.jsx)("header",{className:"l-header",id:"header",children:Object(d.jsxs)("nav",{className:"nav bd-container",children:[Object(d.jsx)("a",{href:"#",className:"nav__logo",children:_}),Object(d.jsx)("div",{className:"nav__menu",id:"nav-menu",children:Object(d.jsxs)("ul",{className:"nav__list",children:[Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)("a",{href:"#home",className:"nav__link active-link",children:"Home"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)("a",{href:"#about",className:"nav__link",children:"About"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)("a",{href:"#app",className:"nav__link",children:"Download App"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)("a",{href:"#services",className:"nav__link",children:"Services"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)("a",{href:"#menu",className:"nav__link",children:"Menu"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)("a",{href:"#contact",className:"nav__link",children:"Contact us"})})]})}),Object(d.jsx)("div",{className:"nav__toggle",title:"Double tap",onClick:function(){!function(e,t){var c=document.getElementById(e),s=document.getElementById(t);c&&s&&c.addEventListener("click",(function(){s.classList.toggle("show-menu")}))}("nav-toggle","nav-menu")},id:"nav-toggle",children:Object(d.jsx)("i",{className:"bx bx-menu"})})]})}),Object(d.jsxs)("main",{className:"l-main",children:[Object(d.jsx)("section",{className:"home",id:"home",children:Object(d.jsxs)("div",{className:"home__container bd-container bd-grid",children:[Object(d.jsxs)("div",{className:"home__data",children:[Object(d.jsx)("h1",{className:"home__title",children:_}),Object(d.jsx)("h2",{className:"home__subtitle",children:g}),Object(d.jsx)("a",{href:"#menu",className:"button",children:"View Our Menu"})]}),Object(d.jsx)("img",{src:y,alt:"",className:"home__img"})]})}),Object(d.jsx)("section",{className:"about section bd-container",id:"about",children:Object(d.jsxs)("div",{className:"about__container  bd-grid",children:[Object(d.jsxs)("div",{className:"about__data",children:[Object(d.jsx)("span",{className:"section-subtitle about__initial",children:"About us"}),Object(d.jsx)("h2",{className:"section-title about__initial",children:g}),Object(d.jsx)("p",{className:"about__description",children:P}),Object(d.jsx)("a",{href:"#home",className:"button",children:"home"})]}),Object(d.jsx)("img",{src:E,alt:"",className:"about__img"})]})}),Object(d.jsxs)("section",{className:"services section bd-container",id:"services",children:[Object(d.jsx)("span",{className:"section-subtitle",children:"Here's"}),Object(d.jsx)("h2",{className:"section-title",children:"Our Store Information"}),Object(d.jsxs)("div",{className:"services__container  bd-grid",children:[Object(d.jsxs)("div",{className:"services__content",children:[Object(d.jsx)("img",{src:"./time.png",alt:"",className:"services__img"}),Object(d.jsx)("h3",{className:"services__title",children:z}),Object(d.jsx)("p",{className:"services__description",children:" Our Store Hours"})]}),Object(d.jsxs)("div",{className:"services__content",children:[Object(d.jsx)("img",{src:"./call.png",alt:"",className:"services__img"}),Object(d.jsx)("h3",{className:"services__title",children:G}),Object(d.jsx)("p",{className:"services__description",children:"Call us here"})]}),Object(d.jsxs)("div",{className:"services__content",children:[Object(d.jsx)("img",{src:"./map.png",alt:"",className:"services__img"}),Object(d.jsx)("h3",{className:"services__title",children:H}),Object(d.jsx)("p",{className:"services__description",children:"Get Directions"})]})]})]}),Object(d.jsxs)("section",{className:"menu section bd-container",id:"menu",children:[Object(d.jsx)("span",{className:"section-subtitle",children:"Take a look !"}),Object(d.jsx)("h2",{className:"section-title",children:"Our Menu"}),Object(d.jsx)(b,{})]}),Object(d.jsx)("section",{className:"app section bd-container",id:"app",children:Object(d.jsxs)("div",{className:"app__container bd-grid",children:[Object(d.jsxs)("div",{className:"app__data",children:[Object(d.jsx)("span",{className:"section-subtitle app__initial",children:"App"}),Object(d.jsx)("h2",{className:"section-title app__initial",children:"App is avaible"}),Object(d.jsx)("p",{className:"app__description",children:"Find our application and download it food orders, see your deliveries on the way and much more."}),Object(d.jsx)("pre",{children:"Step1:"}),Object(d.jsx)("p",{children:"Copy Store Subscription Code"}),Object(d.jsx)("code",{className:"appstep2",children:p}),Object(d.jsx)(h.CopyToClipboard,{text:p,children:Object(d.jsx)("button",{className:"cclip round-icon",onClick:function(){me("copied!")},children:he})}),Object(d.jsx)("pre",{children:"Step2:"}),Object(d.jsxs)("p",{children:["Click AWS to ",Object(d.jsx)("a",{href:"https://bananabucketapps.s3-ap-southeast-1.amazonaws.com/Sarappy.apk",children:"Download"})]}),Object(d.jsx)("div",{className:"app__stores",children:Object(d.jsx)("a",{href:"https://bananabucketapps.s3-ap-southeast-1.amazonaws.com/Sarappy.apk",children:Object(d.jsx)("img",{src:"./AWS.png",alt:"",className:"app__store"})})}),Object(d.jsx)("pre",{children:"Step3:"}),Object(d.jsx)("p",{children:"Once Installed, paste the subscription code on the app."})]}),Object(d.jsx)("img",{src:"./movil-app.png",alt:"",className:"app__img"})]})}),Object(d.jsx)("section",{className:"contact section bd-container",id:"contact",children:Object(d.jsxs)("div",{className:"contact__container bd-grid",children:[Object(d.jsxs)("div",{className:"contact__data",children:[Object(d.jsx)("span",{className:"section-subtitle contact__initial",children:"Let's talk"}),Object(d.jsx)("h2",{className:"section-title contact__initial",children:"Contact us"}),Object(d.jsx)("p",{className:"contact__description",children:"If you want to reserve a table in our restaurant, contact us and we will attend you quickly."})]}),Object(d.jsx)("div",{className:"contact__button",children:Object(d.jsx)("a",{href:"#services",className:"button",children:"Contact us now"})})]})})]}),Object(d.jsxs)("footer",{className:"footer section bd-container",children:[Object(d.jsxs)("div",{className:"footer__container bd-grid",children:[Object(d.jsxs)("div",{className:"footer__content",children:[Object(d.jsx)("a",{href:"#",className:"footer__logo",children:_}),Object(d.jsx)("span",{className:"footer__description",children:"@fudsApp"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("a",{href:te,className:"footer__social",children:Object(d.jsx)("i",{className:"bx bxl-facebook"})}),Object(d.jsx)("a",{href:ne,className:"footer__social",children:Object(d.jsx)("i",{className:"bx bxl-instagram"})}),Object(d.jsx)("a",{href:oe,className:"footer__social",children:Object(d.jsx)("i",{className:"bx bxl-twitter"})})]})]}),Object(d.jsxs)("div",{className:"footer__content",children:[Object(d.jsx)("h3",{className:"footer__title",children:"Services"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#services",className:"footer__link",children:z})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#services",className:"footer__link",children:G})})]})]}),Object(d.jsxs)("div",{className:"footer__content",children:[Object(d.jsx)("h3",{className:"footer__title",children:"Information"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#about",className:"footer__link",children:"About Us"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#services",className:"footer__link",children:"Contact us"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",className:"footer__link",children:"Privacy policy"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",className:"footer__link",children:"Terms of services"})})]})]}),Object(d.jsxs)("div",{className:"footer__content",children:[Object(d.jsx)("h3",{className:"footer__title",children:"Adress"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:H}),Object(d.jsx)("li",{children:"Philippines"}),Object(d.jsx)("li",{children:G}),Object(d.jsx)("li",{children:X})]})]})]}),Object(d.jsx)("p",{className:"footer__copy",children:"\xa9 2021 Banana. All right reserved"})]})]})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),_()}},[[46,1,2]]]);
//# sourceMappingURL=main.5f14a34f.chunk.js.map