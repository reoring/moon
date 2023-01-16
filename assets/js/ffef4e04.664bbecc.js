"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6027],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),k=r,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(5773),r=(n(7378),n(5318));const o={title:"migrate from-package-json",sidebar_label:"from-package-json"},i=void 0,p={unversionedId:"commands/migrate/from-package-json",id:"commands/migrate/from-package-json",title:"migrate from-package-json",description:"Use the moon migrate from-package-json  sub-command to migrate a project's package.json",source:"@site/docs/commands/migrate/from-package-json.mdx",sourceDirName:"commands/migrate",slug:"/commands/migrate/from-package-json",permalink:"/docs/commands/migrate/from-package-json",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/migrate/from-package-json.mdx",tags:[],version:"current",frontMatter:{title:"migrate from-package-json",sidebar_label:"from-package-json"},sidebar:"docs",previous:{title:"migrate",permalink:"/docs/commands/migrate"},next:{title:"from-turborepo",permalink:"/docs/commands/migrate/from-turborepo"}},s={},l=[{value:"Arguments",id:"arguments",level:3},{value:"Caveats",id:"caveats",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"moon migrate from-package-json <project>")," sub-command to migrate a project's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\nto our ",(0,r.kt)("a",{parentName:"p",href:"../../config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml"))," format. When ran, the following changes are made:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Converts ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," scripts to ",(0,r.kt)("inlineCode",{parentName:"li"},"moon.yml")," ",(0,r.kt)("a",{parentName:"li",href:"../../config/project#tasks"},"tasks"),". Scripts and\ntasks are not 1:1, so we'll convert as close as possible while retaining functionality."),(0,r.kt)("li",{parentName:"ul"},"Updates ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," by removing all converted scripts. If all scripts were converted, the\nentire block is removed."),(0,r.kt)("li",{parentName:"ul"},"Links ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," dependencies as ",(0,r.kt)("inlineCode",{parentName:"li"},"moon.yml")," ",(0,r.kt)("a",{parentName:"li",href:"../../config/project#dependson"},"dependencies"),"\n(",(0,r.kt)("inlineCode",{parentName:"li"},"dependsOn"),"). Will map a package's name to their moon project name.")),(0,r.kt)("p",null,"This command is ran ",(0,r.kt)("em",{parentName:"p"},"per project"),", and for this to operate correctly, requires all\n",(0,r.kt)("a",{parentName:"p",href:"../../config/workspace#projects"},"projects to be configured in the workspace"),". There's also a\nhandful of ",(0,r.kt)("a",{parentName:"p",href:"#caveats"},"requirements and caveats")," to be aware of!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon --log debug migrate from-package-json app\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"moon does its best to infer the ",(0,r.kt)("a",{parentName:"p",href:"../../config/project#local"},(0,r.kt)("inlineCode",{parentName:"a"},"local"))," option, given the small amount\nof information available to use. When this option is incorrectly set, it'll result in CI\nenvironments hanging for tasks that are long-running or never-ending (development servers, etc), or\nwon't run builds that should be. Be sure to audit each task after migration!")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<project>")," - Name of a project, as defined in ",(0,r.kt)("a",{parentName:"li",href:"../../config/workspace#projects"},(0,r.kt)("inlineCode",{parentName:"a"},"projects")),".")),(0,r.kt)("h2",{id:"caveats"},"Caveats"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When running a script within another script, the full invocation of ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run ..."),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run ..."),",\nor ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn run ...")," must be used. Shorthand variants are ",(0,r.kt)("strong",{parentName:"p"},"not")," supported, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test"),"\nor ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn lint")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm format"),". We cannot guarantee that moon will parse these correctly\notherwise."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="package.json"',title:'"package.json"'},'{\n    // ...\n    "scripts": {\n        "lint": "eslint .",\n-       "lint:fix": "yarn lint --fix",\n+       "lint:fix": "yarn run lint --fix",\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Scripts that run multiple commands with the AND operator (",(0,r.kt)("inlineCode",{parentName:"p"},"&&"),") will create an individual\ntransient task for each command, with all tasks linked ",(0,r.kt)("em",{parentName:"p"},"in-order")," using task\n",(0,r.kt)("a",{parentName:"p",href:"../../config/project#deps"},(0,r.kt)("inlineCode",{parentName:"a"},"deps")),". These commands ",(0,r.kt)("em",{parentName:"p"},"will not")," run in parallel. For example, given\nthe following script:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  // ...\n  "scripts": {\n    // ...\n    "check": "yarn run lint && yarn run test && yarn run typecheck"\n  }\n}\n')),(0,r.kt)("p",{parentName:"li"},"Would create 3 tasks that create the dependency chain:\n",(0,r.kt)("inlineCode",{parentName:"p"},"check-dep1 (lint) -> check-dep2 (test) -> check (typecheck)"),", instead of the expected parallel\nexecution of ",(0,r.kt)("inlineCode",{parentName:"p"},"lint | test | typecheck -> check"),". If you would prefer these commands to run in\nparallel, then you'll need to craft your tasks manually.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Scripts that change directory (",(0,r.kt)("inlineCode",{parentName:"p"},"cd ..."),"), use pipes (",(0,r.kt)("inlineCode",{parentName:"p"},"|"),"), redirects (",(0,r.kt)("inlineCode",{parentName:"p"},">"),"), or the OR operator\n(",(0,r.kt)("inlineCode",{parentName:"p"},"||"),") are ",(0,r.kt)("strong",{parentName:"p"},"not")," supported and will be skipped. Tasks and scripts are not 1:1 in functionality,\nas tasks represent that state of a single command execution. However, you can wrap this\nfunctionality in a\n",(0,r.kt)("a",{parentName:"p",href:"../../faq#how-to-pipe-or-redirect-tasks"},"custom script that executes it on the task's behalf"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/using-npm/scripts#life-cycle-scripts"},"Life cycle scripts")," are\n",(0,r.kt)("strong",{parentName:"p"},"not")," converted to tasks and will remain in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," since they're required by npm (and\nother package managers). However, their commands ",(0,r.kt)("em",{parentName:"p"},"will")," be updated to execute moon commands when\napplicable."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="package.json"',title:'"package.json"'},'{\n    // ...\n    "scripts": {\n-       "preversion": "yarn run lint && yarn run test",\n+       "preversion": "moon run project:lint && moon run project:test",\n    }\n}\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"This ",(0,r.kt)("em",{parentName:"p"},"does not")," apply to ",(0,r.kt)("inlineCode",{parentName:"p"},"run"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"stop"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," life cycles."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"Post" life cycles for\n',(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/using-npm/scripts#npm-run-user-defined"},"user defined scripts"),' do\nnot work, as moon tasks have no concept of "run this after the task completes", so we suggest\n',(0,r.kt)("em",{parentName:"p"},"against using these entirely"),". However, we still convert the script and include the base script\nas a task dependency."),(0,r.kt)("p",{parentName:"li"},"For example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"posttest")," script would be converted into a ",(0,r.kt)("inlineCode",{parentName:"p"},"posttest")," task, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," task\nincluded in ",(0,r.kt)("a",{parentName:"p",href:"../../config/project#deps"},(0,r.kt)("inlineCode",{parentName:"a"},"deps")),". For this to actually run correctly, you'll need\nto use ",(0,r.kt)("inlineCode",{parentName:"p"},"moon run <project>:posttest")," AND NOT ",(0,r.kt)("inlineCode",{parentName:"p"},"moon run <project>:test"),"."))))}m.isMDXComponent=!0}}]);