"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,3893],{2214:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_e});var a=n(7378),l=n(8944),o=n(1123),r=n(5484),c=n(3149),i=n(5161),s=n(5611),d=n(2095),m=n(8199),u=n(9213),b=n(9169);const p="backToTopButton_iEvu",h="backToTopButtonShow_DO8w";function E(){const{shown:e,scrollToTop:t}=(0,b.a)({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",r.k.common.backToTopButton,p,e&&h),type:"button",onClick:t})}var f=n(5331),g=n(8357),v=n(624),k=n(898),_=n(5773);function C(e){return a.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_oTwn",N="collapseSidebarButtonIcon_pMEX";function S(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",I),onClick:t},a.createElement(C,{className:N}))}var Z=n(10),T=n(3457),x=n(6666),y=n(1763),w=n(376),L=n(8862),A=n(1884),M=n(6457);function B(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){let{item:t,onItemClick:n,activePath:o,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,v.L)(),f=function(e){const t=(0,M.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),g=(0,i._F)(t,o),k=(0,L.Mg)(h,o),{collapsed:C,setCollapsed:I}=(0,w.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:N,setExpandedItem:S}=(0,x.f)(),Z=function(e){void 0===e&&(e=!C),S(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,y.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:g,collapsed:C,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&null!=N&&N!==s&&E&&I(!0)}),[b,N,s,I,E]),a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},a.createElement(A.default,(0,_.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{null==n||n(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{null==n||n(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!C:void 0,href:b?null!=f?f:"#":f},d),u),h&&b&&a.createElement(B,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(O,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:o,level:c+1})))}var P=n(5626),H=n(6125);const D="menuExternalLink_BiEj";function R(e){let{item:t,onItemClick:n,activePath:o,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,o),E=(0,P.Z)(m);return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(A.default,(0,_.Z)({className:(0,l.Z)("menu__link",!E&&D,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(H.Z,null)))}const W="menuHtmlItem_OniL";function Y(e){let{item:t,level:n,index:o}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),i&&[W,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:c}})}function z(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(F,(0,_.Z)({item:t},n));case"html":return a.createElement(Y,(0,_.Z)({item:t},n));default:return a.createElement(R,(0,_.Z)({item:t},n))}}function j(e){let{items:t,...n}=e;return a.createElement(x.D,null,t.map(((e,t)=>a.createElement(z,(0,_.Z)({key:t,item:e,index:t},n)))))}const O=(0,a.memo)(j),U="menu_jmj1",V="menuWithAnnouncementBar_YufC";function G(e){let{path:t,sidebar:n,className:o}=e;const c=function(){const{isActive:e}=(0,Z.nT)(),[t,n]=(0,a.useState)(e);return(0,T.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",U,c&&V,o)},a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(O,{items:n,activePath:t,level:1})))}const K="sidebar_CUen",q="sidebarWithHideableNavbar_w4KB",J="sidebarHidden_k6VE",Q="sidebarLogo_CYvI";function X(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,v.L)();return a.createElement("div",{className:(0,l.Z)(K,c&&q,r&&J)},c&&a.createElement(k.Z,{tabIndex:-1,className:Q}),a.createElement(G,{path:t,sidebar:n}),i&&a.createElement(S,{onClick:o}))}const $=a.memo(X);var ee=n(3471),te=n(5536);const ne=e=>{let{sidebar:t,path:n}=e;const o=(0,te.e)();return a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(O,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ae(e){return a.createElement(ee.Zo,{component:ne,props:e})}const le=a.memo(ae);function oe(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement($,e),l&&a.createElement(le,e))}const re="expandButton_YOoA",ce="expandButtonIcon_GZLG";function ie(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:re,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:ce}))}const se="docSidebarContainer_y0RQ",de="docSidebarContainerHidden_uArb";function me(e){var t;let{children:n}=e;const l=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},n)}function ue(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,f.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),o((e=>!e))}),[o,i]);return a.createElement("aside",{className:(0,l.Z)(r.k.docs.docSidebarContainer,se,n&&de),onTransitionEnd:e=>{e.currentTarget.classList.contains(se)&&n&&s(!0)}},a.createElement(me,null,a.createElement(oe,{sidebar:t,path:c,onCollapse:d,isHidden:i})),i&&a.createElement(ie,{toggleSidebar:d}))}const be={docMainContainer:"docMainContainer_sTIZ",docMainContainerEnhanced:"docMainContainerEnhanced_iSjt",docItemWrapperEnhanced:"docItemWrapperEnhanced_PxMR"};function pe(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(be.docMainContainer,(t||!o)&&be.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",be.docItemWrapper,t&&be.docItemWrapperEnhanced)},n))}const he="docPage_KLoz",Ee="docsWrapper_ct1J";function fe(e){let{children:t}=e;const n=(0,d.V)(),[l,o]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:Ee},a.createElement(E,null),a.createElement("div",{className:he},n&&a.createElement(ue,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(pe,{hiddenSidebarContainer:l},t)))}var ge=n(3893),ve=n(505);function ke(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ve.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function _e(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(ge.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(ke,e),a.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(fe,null,c)))))}},3893:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(7378),l=n(9213),o=n(1123),r=n(8199);function c(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},6666:(e,t,n)=>{n.d(t,{D:()=>c,f:()=>i});var a=n(7378),l=n(1763);const o=Symbol("EmptyContext"),r=a.createContext(o);function c(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(r.Provider,{value:o},t)}function i(){const e=(0,a.useContext)(r);if(e===o)throw new l.i6("DocSidebarItemsExpandedStateProvider");return e}},9169:(e,t,n)=>{n.d(t,{a:()=>r});var a=n(7378),l=n(3457),o=n(4993);function r(e){let{threshold:t}=e;const[n,r]=(0,a.useState)(!1),c=(0,a.useRef)(!1),{startScroll:i,cancelScroll:s}=(0,l.Ct)();return(0,l.RF)(((e,n)=>{let{scrollY:a}=e;const l=null==n?void 0:n.scrollY;l&&(c.current?c.current=!1:a>=l?(s(),r(!1)):a<t?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,o.S)((e=>{e.location.hash&&(c.current=!0,r(!1))})),{shown:n,scrollToTop:()=>i(0)}}}}]);