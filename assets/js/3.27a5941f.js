(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{315:function(t,e,s){},316:function(t,e,s){},317:function(t,e,s){},319:function(t,e,s){},321:function(t,e,s){"use strict";var a=s(10),o={props:{pageInfo:{type:Object,default:()=>({})},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},data:()=>({numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"}}),filters:{formatDateValue(t){if(!t)return"";t=t.replace("T"," ").slice(0,t.lastIndexOf("."));const e=Number(t.substr(11,2)),s=Number(t.substr(14,2)),o=Number(t.substr(17,2));return e>0||s>0||o>0?Object(a.e)(t):Object(a.e)(t,"yyyy-MM-dd")}},methods:{goTags(t){this.$route.path!==`/tag/${t}/`&&this.$router.push({path:`/tag/${t}/`})}}},r=(s(323),s(1)),n=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title?e("i",{staticClass:"iconfont reco-account"},[e("span",[t._v(t._s(t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title))])]):t._e(),t._v(" "),t.pageInfo.frontmatter.date?e("i",{staticClass:"iconfont reco-date"},[e("span",[t._v(t._s(t._f("formatDateValue")(t.pageInfo.frontmatter.date)))])]):t._e(),t._v(" "),!0===t.showAccessNumber?e("i",{staticClass:"iconfont reco-eye"},[e("AccessNumber",{attrs:{idVal:t.pageInfo.path,numStyle:t.numStyle}})],1):t._e(),t._v(" "),t.pageInfo.frontmatter.tags?e("i",{staticClass:"iconfont reco-tag tags"},t._l(t.pageInfo.frontmatter.tags,(function(s,a){return e("span",{key:a,staticClass:"tag-item",class:{active:t.currentTag==s},on:{click:function(e){return e.stopPropagation(),t.goTags(s)}}},[t._v(t._s(s))])})),0):t._e()])}),[],!1,null,"3b7f5bdf",null);e.a=n.exports},323:function(t,e,s){"use strict";s(315)},324:function(t,e,s){"use strict";s(316)},325:function(t,e,s){"use strict";s(317)},326:function(t,e,s){"use strict";e.a={methods:{_getStoragePage(){const t=window.location.pathname,e=JSON.parse(sessionStorage.getItem("currentPage"));return null===e||t!==e.path?(sessionStorage.setItem("currentPage",{page:1,path:""}),1):parseInt(e.page)},_setStoragePage(t){const e=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:t,path:e}))}}}},327:function(t,e,s){"use strict";var a={components:{PageInfo:s(321).a},props:["item","currentPage","currentTag"]},o=(s(324),s(1)),r={components:{NoteAbstractItem:Object(o.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"abstract-item",on:{click:function(e){return t.$router.push(t.item.path)}}},[t.item.frontmatter.sticky?e("i",{staticClass:"iconfont reco-sticky"}):t._e(),t._v(" "),e("div",{staticClass:"title"},[t.item.frontmatter.keys?e("i",{staticClass:"iconfont reco-lock"}):t._e(),t._v(" "),e("router-link",{attrs:{to:t.item.path}},[t._v(t._s(t.item.title))])],1),t._v(" "),e("div",{staticClass:"abstract",domProps:{innerHTML:t._s(t.item.excerpt)}}),t._v(" "),e("PageInfo",{attrs:{pageInfo:t.item,currentTag:t.currentTag}})],1)}),[],!1,null,"88899192",null).exports},props:["data","currentPage","currentTag"],computed:{currentPageData(){const t=10*this.currentPage-10,e=10*this.currentPage;return this.data.slice(t,e)}}},n=(s(325),Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"abstract-wrapper"},t._l(t.currentPageData,(function(s){return e("NoteAbstractItem",{key:s.path,attrs:{item:s,currentPage:t.currentPage,currentTag:t.currentTag}})})),1)}),[],!1,null,"b014bc36",null));e.a=n.exports},329:function(t,e,s){"use strict";s(319)},331:function(t,e,s){"use strict";var a=s(54),o={props:{currentTag:{type:String,default:""}},computed:{tags(){return[{name:this.$recoLocales.tag.all,path:"/tag/"},...this.$tags.list]}},methods:{tagClick(t){this.$emit("getCurrentTag",t)},getOneColor:a.a}},r=(s(329),s(1)),n=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tags"},t._l(t.tags,(function(s,a){return e("span",{key:a,class:{active:s.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(e){return t.tagClick(s)}}},[t._v(t._s(s.name))])})),0)}),[],!1,null,"bb4232a6",null);e.a=n.exports},352:function(t,e,s){},353:function(t,e,s){},354:function(t,e,s){},355:function(t,e,s){},356:function(t,e,s){},357:function(t,e,s){},387:function(t,e,s){"use strict";s(352)},388:function(t,e,s){"use strict";s(353)},389:function(t,e,s){t.exports=s.p+"assets/img/bg.2cfdbb33.svg"},390:function(t,e,s){"use strict";s(354)},391:function(t,e,s){"use strict";s(355)},392:function(t,e,s){"use strict";s(356)},393:function(t){t.exports=JSON.parse('{"a":"1.5.7"}')},394:function(t,e,s){"use strict";s(357)},399:function(t,e,s){"use strict";s.r(e);var a=s(332),o=s(320),r=s(318),n={mixins:[r.a],components:{NavLink:a.a,ModuleTransition:o.a},computed:{actionLink(){return{link:this.$frontmatter.actionLink,text:this.$frontmatter.actionText}},heroImageStyle(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}}},i=(s(387),s(1)),c=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"hero"},[e("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?e("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?e("h1",[t._v(t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco"))]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?e("p",{staticClass:"description"},[t._v("\n        "+t._s(t.$frontmatter.tagline||t.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&t.$frontmatter.actionText&&t.$frontmatter.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&t.$frontmatter.features&&t.$frontmatter.features.length?e("div",{staticClass:"features"},t._l(t.$frontmatter.features,(function(s,a){return e("div",{key:a,staticClass:"feature"},[e("h2",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.details))])])})),0):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.32"}},[e("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports,l=s(331),u=s(346),h=s.n(u),d=s(54),p={data:()=>({popupWindowStyle:{},isPC:!0}),mounted(){/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?this.isPC=!1:this.isPC=!0},computed:{dataAddColor(){let{friendLink:t}=this.$themeConfig;return t&&t.length>0?(t=t.map(t=>({...t,color:Object(d.a)()})),t):[]}},methods:{getMd5:t=>h()(t),showDetail(t){const e=t.target,s=e.querySelector(".popup-window-wrapper"),a=e.querySelector(".popup-window"),o=document.querySelector(".info-wrapper");s.style.display="block";const{clientWidth:r}=e,{clientWidth:n,clientHeight:i}=a;if(this.isPC)this.popupWindowStyle={left:(r-n)/2+"px",top:-i+"px"},o.style.overflow="visible",this.$nextTick(()=>{this._adjustPosition(e.querySelector(".popup-window"))});else{const t=function(t){const e=document,s=t.getBoundingClientRect();let a=s.left,o=s.top;return a+=e.documentElement.scrollLeft||e.body.scrollLeft,o+=e.documentElement.scrollTop||e.body.scrollTop,{left:a,top:o}};o.style.overflow="hidden";const s=t(e).left-t(o).left;this.popupWindowStyle={left:-s+(o.clientWidth-a.clientWidth)/2+"px",top:-i+"px"}}},hideDetail(t){t.target.querySelector(".popup-window-wrapper").style.display="none"},getImgUrl(t){const{logo:e,email:s}=t;return e&&/^http/.test(e)?e:e&&!/^http/.test(e)?this.$withBase(e):`//1.gravatar.com/avatar/${this.getMd5(s||"")}?s=50&amp;d=mm&amp;r=x`},_adjustPosition(t){const{offsetWidth:e}=document.body,{x:s,width:a}=t.getBoundingClientRect(),o=e-(s+a);if(o<0){const{offsetLeft:e}=t;this.popupWindowStyle={...this.popupWindowStyle,left:e+o+"px"}}}}},g=(s(388),Object(i.a)(p,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"friend-link-wrapper"},t._l(t.dataAddColor,(function(s,a){return e("div",{key:a,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(e){return t.showDetail(e)},mouseleave:function(e){return t.hideDetail(e)}}},[e("span",{staticClass:"list-style",style:{backgroundColor:s.color}}),t._v("\n    "+t._s(s.title)+"\n    "),e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"popup-window-wrapper"},[e("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:t.popupWindowStyle},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.getImgUrl(s)}})]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("h4",[t._v(t._s(s.title))]),t._v(" "),e("a",{staticClass:"btn-go",style:{backgroundColor:s.color},attrs:{href:s.link,target:"_blank"}},[t._v("GO")])]),t._v(" "),s.desc?e("p",[t._v(t._s(s.desc))]):t._e()])])])])],1)})),0)}),[],!1,null,"00d18f84",null).exports),m=s(327),f=s(326),v=s(363),_={mixins:[f.a,r.a],components:{NoteAbstract:m.a,TagList:l.a,FriendLink:g,ModuleTransition:o.a,PersonalInfo:v.a},data:()=>({recoShow:!1,currentPage:1,tags:[]}),computed:{homeBlogCfg(){return this.$recoLocales.homeBlog},actionLink(){const{actionLink:t,actionText:e}=this.$frontmatter;return{link:t,text:e}},heroImageStyle(){return this.$frontmatter.heroImageStyle||{}},bgImageStyle(){const t={textAlign:"center",overflow:"hidden",background:`\n          url(${this.$frontmatter.bgImage?this.$withBase(this.$frontmatter.bgImage):s(389)}) center/cover no-repeat\n        `},{bgImageStyle:e}=this.$frontmatter;return e?{...t,...e}:t},heroHeight:()=>document.querySelector(".hero").clientHeight},mounted(){this.recoShow=!0,this._setPage(this._getStoragePage())},methods:{getCurrentPage(t){this._setPage(t),setTimeout(()=>{window.scrollTo(0,this.heroHeight)},100)},getPages(){let t=this.$site.pages;t=t.filter(t=>{const{home:e,date:s}=t.frontmatter;return!(1==e||void 0===s)}),this.pages=0==t.length?[]:t},getPagesByTags(t){this.$router.push({path:t.path})},_setPage(t){this.currentPage=t,this.$page.currentPage=t,this._setStoragePage(t)},getOneColor:d.a}},C=(s(390),Object(i.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-blog"},[e("div",{staticClass:"hero",style:{...t.bgImageStyle}},[e("div",[e("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?e("img",{staticClass:"hero-img",style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?e("h1",[t._v("\n          "+t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco")+"\n        ")]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?e("p",{staticClass:"description"},[t._v("\n          "+t._s(t.$frontmatter.tagline||t.$description||"Welcome to your vuePress-theme-reco site")+"\n        ")]):t._e()])],1)]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.16"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper"},[e("div",{staticClass:"blog-list"},[e("note-abstract",{attrs:{data:t.$recoPosts,currentPage:t.currentPage}}),t._v(" "),e("pagation",{staticClass:"pagation",attrs:{total:t.$recoPosts.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],1),t._v(" "),e("div",{staticClass:"info-wrapper"},[e("PersonalInfo"),t._v(" "),e("h4",[e("i",{staticClass:"iconfont reco-category"}),t._v(" "+t._s(t.homeBlogCfg.category))]),t._v(" "),e("ul",{staticClass:"category-wrapper"},t._l(this.$categories.list,(function(s,a){return e("li",{key:a,staticClass:"category-item"},[e("router-link",{attrs:{to:s.path}},[e("span",{staticClass:"category-name"},[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"post-num",style:{backgroundColor:t.getOneColor()}},[t._v(t._s(s.pages.length))])])],1)})),0),t._v(" "),e("hr"),t._v(" "),0!==t.$tags.list.length?e("h4",[e("i",{staticClass:"iconfont reco-tag"}),t._v(" "+t._s(t.homeBlogCfg.tag))]):t._e(),t._v(" "),e("TagList",{on:{getCurrentTag:t.getPagesByTags}}),t._v(" "),t.$themeConfig.friendLink&&0!==t.$themeConfig.friendLink.length?e("h4",[e("i",{staticClass:"iconfont reco-friend"}),t._v(" "+t._s(t.homeBlogCfg.friendLink))]):t._e(),t._v(" "),e("FriendLink")],1)])]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.24"}},[e("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),w=s(321),$=s(10),b={computed:{headers(){return this.$showSubSideBar?this.$page.headers:[]}},methods:{isLinkActive(t){const e=Object($.f)(this.$route,this.$page.path+"#"+t.slug);return e&&setTimeout(()=>{document.querySelector(".reco-"+t.slug).scrollIntoView()},300),e}},render(t){return t("ul",{class:{"sub-sidebar-wrapper":!0},style:{width:this.headers.length>0?"12rem":"0"}},[...this.headers.map(e=>t("li",{class:{active:this.isLinkActive(e),["level-"+e.level]:!0},attr:{key:e.title}},[t("router-link",{class:{"sidebar-link":!0,["reco-"+e.slug]:!0},props:{to:`${this.$page.path}#${e.slug}`}},e.title)]))])}},y=(s(391),Object(i.a)(b,void 0,void 0,!1,null,"b30493d8",null).exports);function S(t,e,s){const a=[];!function t(e,s){for(let a=0,o=e.length;a<o;a++)"group"===e[a].type?t(e[a].children||[],s):s.push(e[a])}(e,a);for(let e=0;e<a.length;e++){const o=a[e];if("page"===o.type&&o.path===decodeURIComponent(t.path))return a[e+s]}}var k={mixins:[r.a],components:{PageInfo:w.a,ModuleTransition:o.a,SubSidebar:y},props:["sidebarItems"],data:()=>({isHasKey:!0}),computed:{shouldShowComments(){const{isShowComments:t}=this.$frontmatter,{showComment:e}=this.$themeConfig.valineConfig||{showComment:!0};return!1!==e&&!1!==t||!1===e&&!0===t},showAccessNumber(){const{$themeConfig:{valineConfig:t},$themeLocaleConfig:{valineConfig:e}}=this,s=e||t;return!(!s||0==s.visitor)},lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$themeConfig.lastUpdated?this.$themeConfig.lastUpdated:"Last Updated"},prev(){const t=this.$frontmatter.prev;return!1===t?void 0:t?Object($.l)(this.$site.pages,t,this.$route.path):(e=this.$page,s=this.sidebarItems,S(e,s,-1));var e,s},next(){const t=this.$frontmatter.next;return!1===t?void 0:t?Object($.l)(this.$site.pages,t,this.$route.path):(e=this.$page,s=this.sidebarItems,S(e,s,1));var e,s},editLink(){if(!1===this.$frontmatter.editLink)return!1;const{repo:t,editLinks:e,docsDir:s="",docsBranch:a="master",docsRepo:o=t}=this.$themeConfig;return o&&e&&this.$page.relativePath?this.createEditLink(t,o,s,a,this.$page.relativePath):""},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$themeConfig.editLinkText||"Edit this page"},pageStyle(){return this.$showSubSideBar?{}:{paddingRight:"0"}}},methods:{createEditLink(t,e,s,a,o){if(/bitbucket.org/.test(t)){return($.j.test(e)?e:t).replace($.c,"")+"/src"+`/${a}/`+(s?s.replace($.c,"")+"/":"")+o+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}return($.j.test(e)?e:"https://github.com/"+e).replace($.c,"")+"/edit"+`/${a}/`+(s?s.replace($.c,"")+"/":"")+o}}},x=(s(392),Object(i.a)(k,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"page",style:t.pageStyle},[e("ModuleTransition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule&&t.$page.title,expression:"recoShowModule && $page.title"}],staticClass:"page-title"},[e("h1",{staticClass:"title"},[t._v(t._s(t.$page.title))]),t._v(" "),e("PageInfo",{attrs:{pageInfo:t.$page,showAccessNumber:t.showAccessNumber}})],1)]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.08"}},[e("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"theme-reco-content"})],1),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.16"}},[e("footer",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&(t.prev||t.next)?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n          ←\n          "),t.prev?e("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n            "+t._s(t.prev.title||t.prev.path)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},[t.next?e("router-link",{attrs:{to:t.next.path}},[t._v("\n            "+t._s(t.next.title||t.next.path)+"\n          ")]):t._e(),t._v("\n          →\n        ")],1):t._e()])]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.32"}},[t.recoShowModule?e("Comments",{attrs:{isShowComments:t.shouldShowComments}}):t._e()],1),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule?e("SubSidebar",{staticClass:"side-bar"}):t._e()],1)],1)}),[],!1,null,null,null).exports),T=s(393),P={data:()=>({version:T.a}),computed:{showAccessNumber(){const{$themeConfig:{valineConfig:t},$themeLocaleConfig:{valineConfig:e}}=this,s=e||t;return!(!s||0==s.visitor)}}},I=(s(394),Object(i.a)(P,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-wrapper"},[e("span",[e("i",{staticClass:"iconfont reco-theme"}),t._v(" "),e("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[t._v(t._s("vuepress-theme-reco@"+t.version))])]),t._v(" "),t.$themeConfig.record?e("span",[e("i",{staticClass:"iconfont reco-beian"}),t._v(" "),e("a",{attrs:{href:t.$themeConfig.recordLink||"#"}},[t._v(t._s(t.$themeConfig.record))])]):t._e(),t._v(" "),e("span",[e("i",{staticClass:"iconfont reco-copyright"}),t._v(" "),e("a",[t.$themeConfig.author||t.$site.title?e("span",[t._v(t._s(t.$themeConfig.author||t.$site.title))]):t._e(),t._v("\n        \n      "),t.$themeConfig.startYear&&t.$themeConfig.startYear!=(new Date).getFullYear()?e("span",[t._v(t._s(t.$themeConfig.startYear)+" - ")]):t._e(),t._v("\n      "+t._s((new Date).getFullYear())+"\n    ")])]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.showAccessNumber,expression:"showAccessNumber"}]},[e("i",{staticClass:"iconfont reco-eye"}),t._v(" "),e("AccessNumber",{attrs:{idVal:"/"}})],1),t._v(" "),t.$themeConfig.cyberSecurityRecord?e("p",{staticClass:"cyber-security"},[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),t._v(" "),e("a",{attrs:{href:t.$themeConfig.cyberSecurityLink||"#"}},[t._v(t._s(t.$themeConfig.cyberSecurityRecord))])]):t._e(),t._v(" "),e("Comments",{attrs:{isShowComments:!1}})],1)}),[],!1,null,"125ceb1c",null).exports),M={components:{HomeBlog:C,Home:c,Page:x,Common:s(330).a,Footer:I},computed:{sidebarItems(){return Object($.m)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},homeCom(){const{type:t}=this.$themeConfig;return void 0!==t?"blog"==t?"HomeBlog":t:"Home"}}},L=(s(322),Object(i.a)(M,(function(){var t=this._self._c;return t("Common",{attrs:{sidebarItems:this.sidebarItems}},[this.$frontmatter.home?t(this.homeCom,{tag:"component"}):t("Page",{attrs:{"sidebar-items":this.sidebarItems}}),this._v(" "),this.$frontmatter.home?t("Footer",{staticClass:"footer"}):this._e()],1)}),[],!1,null,null,null));e.default=L.exports}}]);