!function(t){function e(e){for(var s,r,c=e[0],l=e[1],o=e[2],v=0,d=[];v<c.length;v++)r=c[v],n[r]&&d.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);for(u&&u(e);d.length;)d.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={1:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;i.push([65,0]),a()}([,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2);e.default={name:"Resume",computed:(0,s.mapState)(["resumeData"])}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Contact"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Project",computed:{project:function(){var t=this.$route.params.index;return this.$store.getters.getProject(t-1)}},methods:{topBtnClick:function(t){var e=this;t&&t.preventDefault();var a=document.getElementById("project-page"),s=document.body.scrollTop,n=a.offsetTop+20;this.interval=setInterval(function(){(s=document.body.scrollTop)>n?(window.scrollTo(0,s-14),console.log("Interval called")):(window.clearInterval(e.interval),console.log("cleared"))},1)}},mounted:function(){var t=void 0,e=document.getElementsByClassName("project-page-images"),a=window.innerWidth;console.log(e);var s=function(t){Array.prototype.forEach.call(e,function(e){e.style.width=t})};a<992||window.addEventListener("scroll",function(){t=document.body.scrollTop,s(t>200?"100%":"60%")})},beforeDestroy:function(){window.clearInterval(this.interval),window.removeEventListener("scroll")}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ProjectLinkItem",props:["project","index"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=a(54),i=(s=n)&&s.__esModule?s:{default:s},r=a(2);e.default={name:"Work",components:{ProjectLinkItem:i.default},computed:(0,r.mapState)(["projects"]),methods:{log:function(){console.log(this.projects)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2);e.default={name:"About",computed:(0,s.mapState)({intro:function(t){return t.aboutData.intro},mySkills:function(t){return t.aboutData.mySkills},skillSummary:function(t){return t.aboutData.skillSummary}}),mounted:function(){var t=document.getElementById("scroll-down-btn"),e=document.getElementById("refreshSkills"),a=(document.getElementById("about-content").offsetTop-document.getElementById("main").offsetTop)/2;window.addEventListener("scroll",function(){document.body.scrollTop>a?(t.style.opacity="0",e.style.opacity="0"):(t.style.opacity="1",e.style.opacity="1")})},methods:{toggle:function(){console.log("Toggle called")},scrollDown:function(){var t=this,e=document.getElementById("about-content"),a=document.body.scrollTop,s=e.offsetTop;this.interval=setInterval(function(){(a=document.body.scrollTop)<s?window.scrollTo(0,a+10):window.clearInterval(t.interval)},1)}},destroyed:function(){window.removeEventListener("scroll"),window.clearInterval(this.interval)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SideBar"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=a(58),i=(s=n)&&s.__esModule?s:{default:s};e.default={name:"App",components:{SideBar:i.default},created:function(){this.$store.dispatch("getStateData")}}},,,,function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("div",{staticClass:"content-wrapper resume-section container-fluid"},[a("div",{staticClass:"col-md-11 col-sm-12 col-centered"},[t._m(0),t._v(" "),t._l(t.resumeData,function(e,s){return a("div",{key:s,staticClass:"row resume-row"},[a("div",{staticClass:"col-md-3 col-sm-12"},[a("p",{staticClass:"title heading-2"},[t._v(t._s(e.heading))])]),t._v(" "),a("div",{staticClass:"col-md-9 col-sm-12 "},[e.description?a("div",{staticClass:"resume-section-description"},[t._v(t._s(e.description))]):t._e(),t._v(" "),t._l(e.repeatable,function(s,n){return e.repeatable?a("div",{key:n,staticClass:"resume-section-content"},[s.title||s.institutionName?a("div",{staticClass:"header"},[a("p",{staticClass:"title heading-4"},[t._v(t._s(s.institutionName))]),t._v(" "),a("p",{staticClass:"name title heading-5"},[t._v(t._s(s.title))])]):t._e(),t._v(" "),s.duration||s.location?a("div",{staticClass:"details"},[a("p",{staticClass:"duration title heading-5"},[t._v(t._s(s.duration))]),t._v(" "),a("p",{staticClass:"location title heading-5"},[t._v(t._s(s.location))])]):t._e(),t._v(" "),s.text?a("div",{staticClass:"description"},[a("p",[t._v(t._s(s.text))])]):t._e(),t._v(" "),s.listItems?a("div",[a("p",{staticClass:"description-title"},[t._v(t._s(s.listTitle))]),t._v(" "),t._l(s.listItems,function(e,s){return a("p",{key:s,staticClass:"list-item"},[t._v(t._s(e))])})],2):t._e()]):t._e()})],2)])})],2)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row heading-wrapper"},[a("div",{staticClass:"name-heading-wrapper"},[a("h1",{staticClass:"title heading-1"},[a("strong",[t._v("A")]),t._v("mninder "),a("strong",[t._v("C")]),t._v("hahal")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v(" +1 (519) 722-1603   "),a("strong",[t._v("•")]),t._v("   amninderchahal101@gmail.com   "),a("strong",[t._v("•")]),t._v("   Kitchener, ON, Canada")])])])}]},function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[t._m(0),t._v(" "),a("div",{staticClass:"content-wrapper container-fluid"},[a("div",{staticClass:"col-md-9 col-centered"},[t._m(1),t._v(" "),a("div",{staticClass:"contact-section"},[t._m(2),t._v(" "),a("div",{staticClass:"social-media-links"},[a("div",{staticClass:"link-wrapper"},[a("div",{staticClass:"link"},[a("a",{attrs:{href:"https://github.com/amninderchahal",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 0C3.6 0 0 3.6 0 8 0 11.5 2.3 14.5 5.5 15.6 5.9 15.7 6 15.4 6 15.2 6 15 6 14.4 6 13.7 4 14.1 3.5 13.2 3.3 12.8 3.2 12.6 2.8 11.8 2.5 11.7 2.2 11.5 1.8 11.1 2.5 11.1 3.1 11.1 3.6 11.7 3.7 11.9 4.4 13.2 5.6 12.8 6.1 12.6 6.1 12.1 6.3 11.7 6.6 11.5 4.8 11.3 2.9 10.6 2.9 7.6 2.9 6.7 3.2 6 3.7 5.4 3.7 5.2 3.4 4.4 3.8 3.3 3.8 3.3 4.5 3.1 6 4.1 6.7 4 7.3 3.9 8 3.9 8.7 3.9 9.4 4 10 4.1 11.6 3.1 12.2 3.3 12.2 3.3 12.7 4.4 12.4 5.2 12.3 5.4 12.8 6 13.1 6.7 13.1 7.6 13.1 10.7 11.3 11.3 9.5 11.5 9.8 11.8 10 12.3 10 13 10 14.1 10 14.9 10 15.2 10 15.4 10.2 15.7 10.6 15.6 13.7 14.5 16 11.5 16 8 16 3.6 12.4 0 8 0L8 0Z"}})])])]),t._v(" "),a("div",{staticClass:"link"},[a("a",{attrs:{href:"https://www.linkedin.com/in/amninderchahal/",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 76 76"}},[a("path",{staticClass:"st0",attrs:{d:"M68.3 1H7.7C4 1 1 4 1 7.7v60.6C1 72 4 75 7.7 75h60.6c3.7 0 6.7-3 6.7-6.7V7.7C75 4 72 1 68.3 1zM23.9 64.9c0 1.1-0.9 1.9-1.9 1.9h-8.3c-1.1 0-1.9-0.9-1.9-1.9V30.1c0-1.1 0.9-1.9 1.9-1.9H22c1.1 0 1.9 0.9 1.9 1.9V64.9zM17.8 24.9c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9S22.2 24.9 17.8 24.9zM67.2 65.1c0 1-0.8 1.8-1.8 1.8h-8.9c-1 0-1.8-0.8-1.8-1.8V48.7c0-2.4 0.7-10.7-6.4-10.7 -5.5 0-6.6 5.6-6.8 8.2v18.8c0 1-0.8 1.8-1.8 1.8h-8.6c-1 0-1.8-0.8-1.8-1.8V30c0-1 0.8-1.8 1.8-1.8h8.6c1 0 1.8 0.8 1.8 1.8v3c2-3.1 5.1-5.4 11.5-5.4 14.2 0 14.2 13.3 14.2 20.6L67.2 65.1 67.2 65.1z"}})])])]),t._v(" "),a("div",{staticClass:"link"},[a("a",{attrs:{href:"https://www.facebook.com/Chahal.Amninder",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 1000"}},[a("path",{attrs:{d:"M990 500c0-270.6-219.4-490-490-490C229.4 10 10 229.4 10 500c0 270.6 219.4 490 490 490C770.6 990 990 770.6 990 500zM368.4 500v-93.8h57.5v-56.7c0-76.5 22.9-131.6 106.6-131.6h99.6v93.5H562c-35.1 0-43.1 23.3-43.1 47.8v47h108.1L612.2 500h-93.3v282.8h-93V500H368.4z"}})])])])])])]),t._v(" "),t._m(3)])])])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row heading-wrapper"},[e("h1",{staticClass:"title heading-1"},[this._v("Contact")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-section"},[e("p",{staticClass:"status-txt heading-5"},[e("strong",[this._v("Availability:")]),this._v(" Currently building websites with awesome developers at Cloud DX, Kitchener\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-info"},[e("a",{staticClass:"contact-item",attrs:{href:"mailto:amninderchahal101@gmail.com"}},[e("i",{staticClass:"material-icons"},[this._v("email")]),this._v(" "),e("p",[this._v("amninderchahal101@gmail.com")])]),this._v(" "),e("a",{staticClass:"contact-item",attrs:{href:"tel:5197221603"}},[e("i",{staticClass:"material-icons"},[this._v("phone")]),this._v(" "),e("p",[this._v("+1 (519) 722-1603")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-section"},[e("div",{staticClass:"mail-btn-wrapper"},[e("a",{staticClass:"mail-btn btn btn-primary",attrs:{href:"mailto:amninderchahal101@gmail.com"}},[this._v("Send An Email")])])])}]},function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section project-page",attrs:{id:"project-page"}},[t.project?a("div",{staticClass:"project-div"},[a("div",{staticClass:"project-close-icon"},[a("router-link",{staticClass:"close-icon-wrapper",attrs:{to:"/work"}},[a("div",{staticClass:"lr"}),t._v(" "),a("div",{staticClass:"rl"})])],1),t._v(" "),a("h3",{staticClass:"title heading-1"},[t._v(t._s(t.project.title))]),t._v(" "),a("p",{staticClass:"project-labels"},t._l(t.project.labels,function(e,s){return a("span",{key:s,staticClass:"label label-primary"},[t._v(t._s(e))])})),t._v(" "),a("div",{staticClass:"project-wrapper"},[a("div",{staticClass:"project-section"},[a("div",{staticClass:"project-description"},[a("p",[t._v(t._s(t.project.description))]),t._v(" "),t.project.features?a("ul",t._l(t.project.features,function(e,s){return a("li",{key:s},[t._v(t._s(e))])})):t._e()]),t._v(" "),t.project.github||t.project.website?a("div",{staticClass:"project-links"},[t.project.github?a("a",{staticClass:"project-github",attrs:{href:t.project.github,target:"_blank"}},[a("i",{staticClass:"project-github-icon"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 0C3.6 0 0 3.6 0 8 0 11.5 2.3 14.5 5.5 15.6 5.9 15.7 6 15.4 6 15.2 6 15 6 14.4 6 13.7 4 14.1 3.5 13.2 3.3 12.8 3.2 12.6 2.8 11.8 2.5 11.7 2.2 11.5 1.8 11.1 2.5 11.1 3.1 11.1 3.6 11.7 3.7 11.9 4.4 13.2 5.6 12.8 6.1 12.6 6.1 12.1 6.3 11.7 6.6 11.5 4.8 11.3 2.9 10.6 2.9 7.6 2.9 6.7 3.2 6 3.7 5.4 3.7 5.2 3.4 4.4 3.8 3.3 3.8 3.3 4.5 3.1 6 4.1 6.7 4 7.3 3.9 8 3.9 8.7 3.9 9.4 4 10 4.1 11.6 3.1 12.2 3.3 12.2 3.3 12.7 4.4 12.4 5.2 12.3 5.4 12.8 6 13.1 6.7 13.1 7.6 13.1 10.7 11.3 11.3 9.5 11.5 9.8 11.8 10 12.3 10 13 10 14.1 10 14.9 10 15.2 10 15.4 10.2 15.7 10.6 15.6 13.7 14.5 16 11.5 16 8 16 3.6 12.4 0 8 0L8 0Z"}})])]),t._v(" "),a("p",{staticClass:"title heading-3"},[t._v("github")])]):t._e(),t._v(" "),t.project.website?a("a",{staticClass:"project-website",attrs:{href:t.project.website,target:"_blank"}},[t._v("Visit Website")]):t._e()]):t._e()]),t._v(" "),a("div",{staticClass:"image-wrapper"},t._l(t.project.img,function(t,e){return a("img",{key:e,staticClass:"project-page-images",attrs:{id:"img-index+1",src:t,alt:"Image"}})}))]),t._v(" "),a("a",{staticClass:"btn btn-success",attrs:{href:"#"},on:{click:t.topBtnClick}},[a("span",{staticClass:"glyphicon glyphicon-chevron-up"}),t._v(" Top\n        ")])]):t._e()])},n=[]},function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section work-page"},[a("div",{staticClass:"content-wrapper work-section container-fluid"},[a("div",{staticClass:"row heading-wrapper"},[a("h1",{staticClass:"heading-1 title",on:{click:function(e){t.log()}}},[t._v("Personal Projects")])]),t._v(" "),t._l(t.projects,function(t,e){return a("div",{key:e,staticClass:"col-sm-6 project-container"},[a("project-link-item",{attrs:{project:t,index:e}})],1)}),t._v(" "),a("div",{staticClass:"learn-more"},[t._m(0),t._v(" "),a("div",{staticClass:"learn-more-links"},[a("div",{staticClass:"link-wrapper"},[a("div",{staticClass:"link"},[a("a",{attrs:{href:"https://github.com/amninderchahal",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 0C3.6 0 0 3.6 0 8 0 11.5 2.3 14.5 5.5 15.6 5.9 15.7 6 15.4 6 15.2 6 15 6 14.4 6 13.7 4 14.1 3.5 13.2 3.3 12.8 3.2 12.6 2.8 11.8 2.5 11.7 2.2 11.5 1.8 11.1 2.5 11.1 3.1 11.1 3.6 11.7 3.7 11.9 4.4 13.2 5.6 12.8 6.1 12.6 6.1 12.1 6.3 11.7 6.6 11.5 4.8 11.3 2.9 10.6 2.9 7.6 2.9 6.7 3.2 6 3.7 5.4 3.7 5.2 3.4 4.4 3.8 3.3 3.8 3.3 4.5 3.1 6 4.1 6.7 4 7.3 3.9 8 3.9 8.7 3.9 9.4 4 10 4.1 11.6 3.1 12.2 3.3 12.2 3.3 12.7 4.4 12.4 5.2 12.3 5.4 12.8 6 13.1 6.7 13.1 7.6 13.1 10.7 11.3 11.3 9.5 11.5 9.8 11.8 10 12.3 10 13 10 14.1 10 14.9 10 15.2 10 15.4 10.2 15.7 10.6 15.6 13.7 14.5 16 11.5 16 8 16 3.6 12.4 0 8 0L8 0Z"}})])])]),t._v(" "),a("div",{staticClass:"link"},[a("a",{attrs:{href:"https://www.linkedin.com/in/amninderchahal/",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 76 76"}},[a("path",{staticClass:"st0",attrs:{d:"M68.3 1H7.7C4 1 1 4 1 7.7v60.6C1 72 4 75 7.7 75h60.6c3.7 0 6.7-3 6.7-6.7V7.7C75 4 72 1 68.3 1zM23.9 64.9c0 1.1-0.9 1.9-1.9 1.9h-8.3c-1.1 0-1.9-0.9-1.9-1.9V30.1c0-1.1 0.9-1.9 1.9-1.9H22c1.1 0 1.9 0.9 1.9 1.9V64.9zM17.8 24.9c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9S22.2 24.9 17.8 24.9zM67.2 65.1c0 1-0.8 1.8-1.8 1.8h-8.9c-1 0-1.8-0.8-1.8-1.8V48.7c0-2.4 0.7-10.7-6.4-10.7 -5.5 0-6.6 5.6-6.8 8.2v18.8c0 1-0.8 1.8-1.8 1.8h-8.6c-1 0-1.8-0.8-1.8-1.8V30c0-1 0.8-1.8 1.8-1.8h8.6c1 0 1.8 0.8 1.8 1.8v3c2-3.1 5.1-5.4 11.5-5.4 14.2 0 14.2 13.3 14.2 20.6L67.2 65.1 67.2 65.1z"}})])])]),t._v(" "),a("div",{staticClass:"link"},[a("a",{attrs:{href:"https://www.facebook.com/Chahal.Amninder",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 1000"}},[a("path",{attrs:{d:"M990 500c0-270.6-219.4-490-490-490C229.4 10 10 229.4 10 500c0 270.6 219.4 490 490 490C770.6 990 990 770.6 990 500zM368.4 500v-93.8h57.5v-56.7c0-76.5 22.9-131.6 106.6-131.6h99.6v93.5H562c-35.1 0-43.1 23.3-43.1 47.8v47h108.1L612.2 500h-93.3v282.8h-93V500H368.4z"}})])])])])])])],2)])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you'd like to find out more about my work experience, feel free to "),e("a",{attrs:{href:"#/contact"}},[this._v("contact me")]),this._v(".")])}]},function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project"},[a("router-link",{staticClass:"project-link",attrs:{to:"/work/project/"+(t.index+1)}},[a("div",{staticClass:"project-link-img-wrapper"},[a("img",{staticClass:"project-img",attrs:{src:t.project.img[0]}}),t._v(" "),a("div",{staticClass:"overlay"}),t._v(" "),a("div",{staticClass:"text"},[a("i",{staticClass:"material-icons"},[t._v("zoom_in")])])]),t._v(" "),a("p",{staticClass:"project-title title heading-3"},[t._v(t._s(t.project.title))])])],1)},n=[]},function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section page-about"},[a("div",{staticClass:"container-fluid"},[a("button",{staticClass:"btn btn-primary",attrs:{id:"refreshSkills",type:"button"},on:{click:function(e){t.toggle(e)}}},[a("span",{staticClass:"glyphicon glyphicon-pause"})]),t._v(" "),a("div",{staticClass:"bg-container"}),t._v(" "),a("button",{attrs:{id:"scroll-down-btn",type:"button"},on:{click:t.scrollDown}},[a("span",{staticClass:"glyphicon glyphicon-chevron-down"})]),t._v(" "),a("div",{staticClass:"about-page-content",attrs:{id:"about-content"}},[a("div",{staticClass:"row about-heading-wrapper heading-wrapper"},[t._m(0),t._v(" "),a("div",{staticClass:"resume-links"},[a("router-link",{attrs:{to:"/about/resume"}},[a("span",{staticClass:"glyphicon glyphicon-file"}),t._v("\n                            Resume\n                        ")]),t._v(" "),a("a",{attrs:{href:"https://github.com/amninderchahal",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 0C3.6 0 0 3.6 0 8 0 11.5 2.3 14.5 5.5 15.6 5.9 15.7 6 15.4 6 15.2 6 15 6 14.4 6 13.7 4 14.1 3.5 13.2 3.3 12.8 3.2 12.6 2.8 11.8 2.5 11.7 2.2 11.5 1.8 11.1 2.5 11.1 3.1 11.1 3.6 11.7 3.7 11.9 4.4 13.2 5.6 12.8 6.1 12.6 6.1 12.1 6.3 11.7 6.6 11.5 4.8 11.3 2.9 10.6 2.9 7.6 2.9 6.7 3.2 6 3.7 5.4 3.7 5.2 3.4 4.4 3.8 3.3 3.8 3.3 4.5 3.1 6 4.1 6.7 4 7.3 3.9 8 3.9 8.7 3.9 9.4 4 10 4.1 11.6 3.1 12.2 3.3 12.2 3.3 12.7 4.4 12.4 5.2 12.3 5.4 12.8 6 13.1 6.7 13.1 7.6 13.1 10.7 11.3 11.3 9.5 11.5 9.8 11.8 10 12.3 10 13 10 14.1 10 14.9 10 15.2 10 15.4 10.2 15.7 10.6 15.6 13.7 14.5 16 11.5 16 8 16 3.6 12.4 0 8 0L8 0Z"}})]),t._v("\n                            Github\n                        ")])],1)]),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"about-section skills-section col-md-9 col-centered"},[a("div",{staticClass:"skills-text"},[t.skillSummary?a("p",[t._v(t._s(t.skillSummary))]):t._e()]),t._v(" "),t._l(t.mySkills,function(e,s){return a("div",{key:s,staticClass:"skills-wrapper"},[a("p",{staticClass:"heading-4 skills-header"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.skills,function(e,s){return a("div",{key:s,staticClass:"skill"},[a("img",{staticClass:"skill-img",attrs:{src:e.img}}),t._v(" "),a("p",{staticClass:"title skill-title"},[t._v(t._s(e.title))])])})],2)})],2),t._v(" "),a("div",{staticClass:"learn-more"},[a("p",[t._v("If you'd like to find out more about my skills and my work process, feel free to "),a("router-link",{attrs:{to:"/contact"}},[t._v("contact me")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"learn-more-links"},[a("div",{staticClass:"link-wrapper"},[a("div",{staticClass:"link"},[a("a",{attrs:{href:"https://github.com/amninderchahal",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 0C3.6 0 0 3.6 0 8 0 11.5 2.3 14.5 5.5 15.6 5.9 15.7 6 15.4 6 15.2 6 15 6 14.4 6 13.7 4 14.1 3.5 13.2 3.3 12.8 3.2 12.6 2.8 11.8 2.5 11.7 2.2 11.5 1.8 11.1 2.5 11.1 3.1 11.1 3.6 11.7 3.7 11.9 4.4 13.2 5.6 12.8 6.1 12.6 6.1 12.1 6.3 11.7 6.6 11.5 4.8 11.3 2.9 10.6 2.9 7.6 2.9 6.7 3.2 6 3.7 5.4 3.7 5.2 3.4 4.4 3.8 3.3 3.8 3.3 4.5 3.1 6 4.1 6.7 4 7.3 3.9 8 3.9 8.7 3.9 9.4 4 10 4.1 11.6 3.1 12.2 3.3 12.2 3.3 12.7 4.4 12.4 5.2 12.3 5.4 12.8 6 13.1 6.7 13.1 7.6 13.1 10.7 11.3 11.3 9.5 11.5 9.8 11.8 10 12.3 10 13 10 14.1 10 14.9 10 15.2 10 15.4 10.2 15.7 10.6 15.6 13.7 14.5 16 11.5 16 8 16 3.6 12.4 0 8 0L8 0Z"}})])])]),t._v(" "),a("div",{staticClass:"link"},[a("a",{attrs:{href:"https://www.linkedin.com/in/amninderchahal/",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 76 76"}},[a("path",{staticClass:"st0",attrs:{d:"M68.3 1H7.7C4 1 1 4 1 7.7v60.6C1 72 4 75 7.7 75h60.6c3.7 0 6.7-3 6.7-6.7V7.7C75 4 72 1 68.3 1zM23.9 64.9c0 1.1-0.9 1.9-1.9 1.9h-8.3c-1.1 0-1.9-0.9-1.9-1.9V30.1c0-1.1 0.9-1.9 1.9-1.9H22c1.1 0 1.9 0.9 1.9 1.9V64.9zM17.8 24.9c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9S22.2 24.9 17.8 24.9zM67.2 65.1c0 1-0.8 1.8-1.8 1.8h-8.9c-1 0-1.8-0.8-1.8-1.8V48.7c0-2.4 0.7-10.7-6.4-10.7 -5.5 0-6.6 5.6-6.8 8.2v18.8c0 1-0.8 1.8-1.8 1.8h-8.6c-1 0-1.8-0.8-1.8-1.8V30c0-1 0.8-1.8 1.8-1.8h8.6c1 0 1.8 0.8 1.8 1.8v3c2-3.1 5.1-5.4 11.5-5.4 14.2 0 14.2 13.3 14.2 20.6L67.2 65.1 67.2 65.1z"}})])])]),t._v(" "),a("div",{staticClass:"link"},[a("a",{attrs:{href:"https://www.facebook.com/Chahal.Amninder",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 1000"}},[a("path",{attrs:{d:"M990 500c0-270.6-219.4-490-490-490C229.4 10 10 229.4 10 500c0 270.6 219.4 490 490 490C770.6 990 990 770.6 990 500zM368.4 500v-93.8h57.5v-56.7c0-76.5 22.9-131.6 106.6-131.6h99.6v93.5H562c-35.1 0-43.1 23.3-43.1 47.8v47h108.1L612.2 500h-93.3v282.8h-93V500H368.4z"}})])])])])])])])])])])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"name-heading-wrapper"},[e("h1",{staticClass:"title heading-1"},[this._v("Amninder Chahal")]),this._v(" "),e("p",{staticClass:"subtitle"},[this._v("Building pixel perfect websites and exceptional user experience")])])}]},function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("SideBar"),this._v(" "),e("div",{staticClass:"main",attrs:{id:"main"}},[e("transition",{attrs:{name:"animate"}},[e("router-view")],1)],1)],1)},n=[]},function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"sidebar animateEaseInOut"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[a("h4",{staticClass:"nav-link-text"},[t._v("About")]),t._v(" "),a("span",{staticClass:"nav-link-icon-span"},[a("hr",{staticClass:"nav-link-line"}),t._v(" "),a("p",{staticClass:"nav-link-icon"},[a("i",{staticClass:"material-icons"},[t._v("account_box")])])]),t._v(" "),a("p",{staticClass:"nav-link-subtitle"},[t._v("Who I Am")])]),t._v(" "),a("router-link",{staticClass:"nav-link",attrs:{to:"/work"}},[a("h4",{staticClass:"nav-link-text"},[t._v("Work")]),t._v(" "),a("span",{staticClass:"nav-link-icon-span"},[a("hr",{staticClass:"nav-link-line"}),t._v(" "),a("p",{staticClass:"nav-link-icon"},[a("i",{staticClass:"material-icons"},[t._v("desktop_mac")])])]),t._v(" "),a("p",{staticClass:"nav-link-subtitle"},[t._v("View Projects")])]),t._v(" "),a("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[a("h4",{staticClass:"nav-link-text"},[t._v("Contact")]),t._v(" "),a("span",{staticClass:"nav-link-icon-span"},[a("hr",{staticClass:"nav-link-line"}),t._v(" "),a("p",{staticClass:"nav-link-icon"},[a("i",{staticClass:"material-icons"},[t._v("contact_phone")])])]),t._v(" "),a("p",{staticClass:"nav-link-subtitle"},[t._v("Get In Touch")])])],1)])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-toggle animateEaseInOut"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[e("span",{staticClass:"glyphicon glyphicon-menu-hamburger"})])])}]},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return i.default.all([i.default.get("/assets/json/resume.json"),i.default.get("/assets/json/about.json"),i.default.get("/assets/json/projects.json")])};var s,n=a(13),i=(s=n)&&s.__esModule?s:{default:s}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=c(a(3)),n=c(a(2)),i=c(a(49)),r=c(a(13));function c(t){return t&&t.__esModule?t:{default:t}}s.default.use(n.default),e.default=new n.default.Store({state:{resumeData:[],aboutData:{},projects:[]},getters:{getProject:function(t){return function(e){return t.projects[e]}}},mutations:{setData:function(t,e){t.resumeData=e.resumeData,t.aboutData=e.aboutData,t.projects=e.projects}},actions:{getStateData:function(t){(0,i.default)().then(r.default.spread(function(e,a,s){var n={resumeData:e.data,aboutData:a.data,projects:s.data};t.commit("setData",n)}))}}})},function(t,e,a){"use strict";a.r(e);var s=a(4),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a(15),c=a(0),l=Object(c.a)(n.a,r.a,r.b,!1,null,null,null);e.default=l.exports},function(t,e,a){"use strict";a.r(e);var s=a(5),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a(16),c=a(0),l=Object(c.a)(n.a,r.a,r.b,!1,null,null,null);e.default=l.exports},function(t,e,a){"use strict";a.r(e);var s=a(6),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a(17),c=a(0),l=Object(c.a)(n.a,r.a,r.b,!1,null,null,null);e.default=l.exports},function(t,e,a){"use strict";a.r(e);var s=a(7),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a(19),c=a(0),l=Object(c.a)(n.a,r.a,r.b,!1,null,null,null);e.default=l.exports},function(t,e,a){"use strict";a.r(e);var s=a(8),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a(18),c=a(0),l=Object(c.a)(n.a,r.a,r.b,!1,null,null,null);e.default=l.exports},function(t,e,a){"use strict";a.r(e);var s=a(9),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a(20),c=a(0),l=Object(c.a)(n.a,r.a,r.b,!1,null,null,null);e.default=l.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=u(a(3)),n=u(a(28)),i=u(a(56)),r=u(a(55)),c=u(a(53)),l=u(a(52)),o=u(a(51));function u(t){return t&&t.__esModule?t:{default:t}}s.default.use(n.default);var v=new n.default({mode:"history",routes:[{path:"/",redirect:"/about"},{path:"/about",meta:{title:"About - Amninder Chahal"},component:i.default},{path:"/about/resume",meta:{title:"Resume - Amninder Chahal"},component:o.default},{path:"/work",meta:{title:"Work - Amninder Chahal"},component:r.default},{path:"/work/project/:index",meta:{title:"Personal Projects - Amninder Chahal"},component:c.default},{path:"/contact",meta:{title:"Contact - Amninder Chahal"},component:l.default}],scrollBehavior:function(t,e,a){return{x:0,y:0}}});v.beforeEach(function(t,e,a){document.title=t.meta.title,a()}),e.default=v},function(t,e,a){"use strict";a.r(e);var s=a(10),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a(22),c=a(0),l=Object(c.a)(n.a,r.a,r.b,!1,null,null,null);e.default=l.exports},,function(t,e,a){(t.exports=a(59)(!1)).push([t.i,"",""])},function(t,e,a){var s=a(60);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(30).default)("70dceb1d",s,!0,{})},function(t,e,a){"use strict";a.r(e);var s=a(11),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a(21),c=a(0);var l=function(t){a(61)},o=Object(c.a)(n.a,r.a,r.b,!1,l,null,null);e.default=o.exports},,,function(t,e,a){"use strict";var s=c(a(3)),n=c(a(62)),i=c(a(57)),r=c(a(50));function c(t){return t&&t.__esModule?t:{default:t}}new s.default({el:"#app",router:i.default,store:r.default,components:{App:n.default},template:"<App/>"})}]);