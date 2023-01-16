"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5911],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4903:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7378),o=n(8944),r=n(5484),i=n(9213);const l="admonition_uH4V",c="admonitionHeading_P5_N",s="admonitionIcon_MF44",p="admonitionContent_yySL";const m={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},u={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}function f(e){const{children:t,type:n,title:i,icon:f}=d(e),g=function(e){const t=u[e]??e;return m[t]||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),m.info)}(n),h=i??g.label,{iconComponent:b}=g,k=f??a.createElement(b,null);return a.createElement("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${g.infimaClassName}`,l)},a.createElement("div",{className:c},a.createElement("span",{className:s},k),h),a.createElement("div",{className:p},t))}},9798:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7378),o=n(8944);const r="tabItem_wHwb";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},3337:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(5773),o=n(7378),r=n(8944),i=n(6457),l=n(784),c=n(9947),s=n(3457);const p="tabList_J5MA",m="tabItem_l0OV";function u(e){var t;const{lazy:n,block:i,defaultValue:u,values:d,groupId:f,className:g}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,c.U)(),[j,N]=(0,o.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==j&&b.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==j&&(x(t),N(a),null!=f&&w(f,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>E.push(e),onKeyDown:T,onClick:C},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":j===t})}),n??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function d(e){const t=(0,i.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},7915:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7378),o=n(3469),r=n(9619);function i(e){let{text:t}=e;return a.createElement(r.Z,{text:t,icon:o.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},2921:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7378),o=n(4903),r=n(3828);const i={bun:"Buno",deno:"Deno",go:"Go",node:"Node.js",php:"PHP",python:"Python",ruby:"Ruby",rust:"Rust"};function l(e){let{children:t,noError:n}=e;const l=(0,r.gE)(),c=a.Children.toArray(t).find((e=>!!a.isValidElement(e)&&("string"==typeof e.key&&e.key.endsWith(l))));return c?a.createElement(a.Fragment,null,c):n?null:a.createElement(o.Z,{type:"danger"},"Sorry, there's no example for ",i[l]||l,". Try switching to another language for the time being!")}},3828:(e,t,n)=>{n.d(t,{ZP:()=>l,gE:()=>i});var a=n(7378);function o(){return"undefined"!=typeof window&&"localStorage"in window}function r(){return o()&&localStorage.getItem("moonrepo.language")||"node"}function i(){const[e,t]=(0,a.useState)(r());return(0,a.useEffect)((()=>{const e=e=>{t(e.detail)};return window.addEventListener("onMoonrepoChangeLanguage",e),()=>{window.removeEventListener("onMoonrepoChangeLanguage",e)}})),e}function l(){const[e,t]=(0,a.useState)(r()),n=(0,a.useCallback)((e=>{let{target:n}=e;const a=n.value;if(t(a),o())try{localStorage.setItem("moonrepo.language",a)}catch{}window.dispatchEvent(new CustomEvent("onMoonrepoChangeLanguage",{bubbles:!0,detail:a}))}),[]);return a.createElement("select",{value:e,onChange:n,className:"outline-none min-w-0 bg-white border border-solid border-gray-400 dark:border-transparent rounded-md p-0.5 text-sm text-gray-800 placeholder-gray-600 h-full font-sans"},a.createElement("option",{value:"go"},"Go"),a.createElement("option",{value:"node"},"Node.js"),a.createElement("option",{value:"php"},"PHP"),a.createElement("option",{value:"python"},"Python"),a.createElement("option",{value:"ruby"},"Ruby"),a.createElement("option",{value:"rust"},"Rust"))}},9634:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7378),o=n(1884),r=n(5773),i=n(9928),l=n(3469),c=n(1792);const s={discord:i.omb,github:i.zhw,moon:l.Gp0,"new-project":l.g6h,"new-task":l.EQ8,project:l.pL1,"project-config":l.dhu,"project-config-global":l.YdP,"project-graph":l.Bkj,"run-task":l.sl_,task:l.diR,"task-config":l.o$R,token:l.BwA,toolchain:l.AlB,"toolchain-config":l.eDR,twitter:i.mdU,workspace:l.emM,"workspace-config":l.cRF};function p(e){let{name:t,...n}=e;return a.createElement(c.Z,(0,r.Z)({},n,{icon:s[t]}))}function m(e){let{links:t}=e;return a.createElement("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2"},t.map((e=>a.createElement(o.default,{key:e.url,href:e.url,className:"focus:outline-none"},a.createElement("div",{className:"relative rounded-lg px-3 py-3 flex items-center space-x-2 border-solid border border-t-0 border-b-2 bg-gray-50 hover:bg-gray-100/90 border-gray-200/75 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-900/75"},a.createElement("div",{className:"flex-shrink-0"},a.createElement(p,{size:"lg",name:e.icon})),a.createElement("div",{className:"flex-1 min-w-0 text-gray-900 dark:text-gray-100"},e.label))))))}},9619:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7378),o=n(8944),r=n(1792);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){let{className:t,icon:n,text:l,variant:c}=e;return a.createElement("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",c?i[c]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(r.Z,{icon:n,className:"mr-1"}),l)}},3052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>k,frontMatter:()=>u,metadata:()=>f,toc:()=>h});var a=n(5773),o=(n(7378),n(5318)),r=n(3337),i=n(9798),l=n(7915),c=n(9634),s=n(2921);const p={toc:[]};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," names? Enable the\n",(0,o.kt)("a",{parentName:"p",href:"./config/toolchain#aliaspackagenames"},(0,o.kt)("inlineCode",{parentName:"a"},"node.aliasPackageNames"))," setting!")))}m.isMDXComponent=!0;const u={title:"Create a project"},d=void 0,f={unversionedId:"create-project",id:"create-project",title:"Create a project",description:"With a workspace, we can now house one or many projects,",source:"@site/docs/create-project.mdx",sourceDirName:".",slug:"/create-project",permalink:"/docs/create-project",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/create-project.mdx",tags:[],version:"current",frontMatter:{title:"Create a project"},sidebar:"docs",previous:{title:"Setup toolchain",permalink:"/docs/setup-toolchain"},next:{title:"Create a task",permalink:"/docs/create-task"}},g={},h=[{value:"Declaring a project in the workspace",id:"declaring-a-project-in-the-workspace",level:2},{value:"Configuring a project",id:"configuring-a-project",level:2},{value:"Adding optional metadata",id:"adding-optional-metadata",level:3},{value:"Next steps",id:"next-steps",level:2}],b={toc:h};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{text:"3 min",mdxType:"HeaderLabel"}),(0,o.kt)("p",null,"With a ",(0,o.kt)("a",{parentName:"p",href:"./setup-workspace"},"workspace"),", we can now house one or many ",(0,o.kt)("a",{parentName:"p",href:"./concepts/project"},"projects"),",\nwith a project being an application, library, or tool. In the end, each project will have its own\nbuild layer, personal tasks, and custom configuration."),(0,o.kt)("h2",{id:"declaring-a-project-in-the-workspace"},"Declaring a project in the workspace"),(0,o.kt)("p",null,"Although a project may exist in your repository, it's not accessible from moon until it's been\nmapped in the ",(0,o.kt)("a",{parentName:"p",href:"./config/workspace#projects"},(0,o.kt)("inlineCode",{parentName:"a"},"projects"))," setting found in\n",(0,o.kt)("a",{parentName:"p",href:"./config/workspace"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),". When mapping a project, we require a unique name for\nthe project, and a project source location (path relative from the workspace root)."),(0,o.kt)("p",null,'Let\'s say we have a frontend web application called "client", and a backend application called\n"server", our ',(0,o.kt)("inlineCode",{parentName:"p"},"projects")," setting would look like the following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"projects:\n    client: 'apps/client'\n    server: 'apps/server'\n")),(0,o.kt)("p",null,"We can now run ",(0,o.kt)("a",{parentName:"p",href:"./commands/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon project client"))," and\n",(0,o.kt)("a",{parentName:"p",href:"./commands/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon project server"))," to display information about each project. If these\nprojects were not mapped, or were pointing to an invalid source, the command would throw an error."),(0,o.kt)("admonition",{type:"success"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"./config/workspace#projects"},(0,o.kt)("inlineCode",{parentName:"a"},"projects"))," setting also supports a list of globs, if you'd prefer\nto not manually curate the projects list!")),(0,o.kt)(s.Z,{noError:!0,mdxType:"LangPartials"},(0,o.kt)(m,{key:"node",mdxType:"AliasesNode"})),(0,o.kt)("h2",{id:"configuring-a-project"},"Configuring a project"),(0,o.kt)("p",null,"A project can be configured in 1 of 2 ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Through the ",(0,o.kt)("a",{parentName:"li",href:"./config/global-project"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/project.yml"))," config file, which defines file groups\nand tasks that are inherited by ",(0,o.kt)("em",{parentName:"li"},"all")," projects within the workspace. Perfect for standardizing\ncommon tasks like linting, typechecking, and code formatting."),(0,o.kt)("li",{parentName:"ul"},"Through the ",(0,o.kt)("a",{parentName:"li",href:"./config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml"))," config file, found at the root of each project, which\ndefines files groups, tasks, dependencies, and more that are unique to that project.")),(0,o.kt)("p",null,"Both config files are optional, and can be used separately or together, the choice is yours!"),(0,o.kt)("p",null,"Now let's continue with our client and server example above. If we wanted to configure both\nprojects, and define config that's also shared between the 2, we could do something like the\nfollowing:"),(0,o.kt)(r.Z,{groupId:"project-config",defaultValue:"client",values:[{label:"Client",value:"client"},{label:"Server",value:"server"},{label:"Both (inherited)",value:"inherit"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"client",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="apps/client/moon.yml"',title:'"apps/client/moon.yml"'},"tasks:\n    build:\n        command:\n            - 'webpack'\n            - 'build'\n            - '--mode'\n            - 'production'\n            - '--entry'\n            - 'src/index.tsx'\n            - '--output-path'\n            - 'build'\n        inputs:\n            - 'src/**/*'\n        outputs:\n            - 'build'\n"))),(0,o.kt)(i.Z,{value:"server",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="apps/server/moon.yml"',title:'"apps/server/moon.yml"'},"tasks:\n    build:\n        command: 'babel src --out-dir build'\n        inputs:\n            - 'src/**/*'\n        outputs:\n            - 'build'\n"))),(0,o.kt)(i.Z,{value:"inherit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"tasks:\n    format:\n        command: 'prettier --check .'\n    lint:\n        command: 'eslint --no-error-on-unmatched-pattern .'\n    test:\n        command: 'jest --passWithNoTests .'\n    typecheck:\n        command: 'tsc --build'\n")))),(0,o.kt)("h3",{id:"adding-optional-metadata"},"Adding optional metadata"),(0,o.kt)("p",null,"When utilizing moon in a large monorepo or organization, ownership becomes very important, but also\ndifficult to maintain. To combat this problem, moon supports the\n",(0,o.kt)("a",{parentName:"p",href:"./config/project#project"},(0,o.kt)("inlineCode",{parentName:"a"},"project"))," field within a project's ",(0,o.kt)("a",{parentName:"p",href:"./config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml")),"\nconfig."),(0,o.kt)("p",null,"This field is ",(0,o.kt)("em",{parentName:"p"},"optional")," by default, but when defined it provides metadata about the project,\nspecifically around team ownership, which developers maintain the project, where to discuss it, and\nmore!"),(0,o.kt)("p",null,"Furthermore, we also support the ",(0,o.kt)("a",{parentName:"p",href:"./config/project#type"},(0,o.kt)("inlineCode",{parentName:"a"},"type"))," and\n",(0,o.kt)("a",{parentName:"p",href:"./config/project#language"},(0,o.kt)("inlineCode",{parentName:"a"},"language"))," settings for a more granular breakdown of what exists in the\nrepository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"type: 'tool'\nlanguage: 'typescript'\n\nproject:\n  name: 'moon'\n  description: 'A repo management tool.'\n  channel: '#moon'\n  owner: 'infra.platform'\n  maintainers: ['miles.johnson']\n")),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)(c.Z,{links:[{icon:"new-task",label:"Create a task",url:"./create-task"},{icon:"workspace-config",label:(0,o.kt)("span",null,"Configure ",(0,o.kt)("code",null,".moon/workspace.yml")," further"),url:"./config/workspace"},{icon:"project-config-global",label:(0,o.kt)("span",null,"Configure ",(0,o.kt)("code",null,".moon/project.yml")," further"),url:"./config/global-project"},{icon:"project-config",label:(0,o.kt)("span",null,"Configure ",(0,o.kt)("code",null,"moon.yml")," further"),url:"./config/project"},{icon:"project",label:"Learn about projects",url:"./concepts/project"}],mdxType:"NextSteps"}))}k.isMDXComponent=!0}}]);