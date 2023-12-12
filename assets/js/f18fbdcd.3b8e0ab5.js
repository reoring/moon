"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15050],{22864:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var o=t(24246),r=t(71670),s=t(27915),i=t(9634);const c={title:"Setup workspace"},a=void 0,l={id:"setup-workspace",title:"Setup workspace",description:"Once moon has been installed, we must setup the workspace,",source:"@site/docs/setup-workspace.mdx",sourceDirName:".",slug:"/setup-workspace",permalink:"/docs/setup-workspace",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/setup-workspace.mdx",tags:[],version:"current",frontMatter:{title:"Setup workspace"},sidebar:"docs",previous:{title:"Action graph",permalink:"/docs/how-it-works/action-graph"},next:{title:"Create a project",permalink:"/docs/create-project"}},d={},p=[{value:"Initializing the repository",id:"initializing-the-repository",level:2},{value:"Configuring a version control system",id:"configuring-a-version-control-system",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{text:"2 min"}),"\n",(0,o.jsxs)(n.p,{children:["Once moon has been ",(0,o.jsx)(n.a,{href:"./install",children:"installed"}),", we must setup the ",(0,o.jsx)(n.a,{href:"./concepts/workspace",children:"workspace"}),",\nwhich is denoted by the ",(0,o.jsx)(n.code,{children:".moon"})," folder \u2014 this is known as the workspace root. The workspace is in\ncharge of:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Integrating with a version control system."}),"\n",(0,o.jsx)(n.li,{children:"Defining configuration that applies to its entire tree."}),"\n",(0,o.jsxs)(n.li,{children:["Housing ",(0,o.jsx)(n.a,{href:"./concepts/project",children:"projects"})," to build a ",(0,o.jsx)(n.a,{href:"./how-it-works/project-graph",children:"project graph"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Running tasks."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"initializing-the-repository",children:"Initializing the repository"}),"\n",(0,o.jsxs)(n.p,{children:["Let's scaffold and initialize moon in a repository with the ",(0,o.jsx)(n.a,{href:"./commands/init",children:(0,o.jsx)(n.code,{children:"moon init"})})," command.\nThis should typically be ran at the root, but can be nested within a directory."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ moon init\n"})}),"\n",(0,o.jsx)(n.p,{children:"When executed, the following operations will be applied."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Creates a ",(0,o.jsx)(n.code,{children:".moon"})," folder with a ",(0,o.jsx)(n.a,{href:"./config/workspace",children:(0,o.jsx)(n.code,{children:".moon/workspace.yml"})})," configuration file."]}),"\n",(0,o.jsxs)(n.li,{children:["Appends necessary ignore patterns to the relative ",(0,o.jsx)(n.code,{children:".gitignore"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Infers the version control system from the environment."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["If you're investigating moon, or merely want to prototype, you can use ",(0,o.jsx)(n.code,{children:"moon init --minimal"})," to\nquickly initialize and create minimal configuration files."]})}),"\n",(0,o.jsx)(n.h2,{id:"configuring-a-version-control-system",children:"Configuring a version control system"}),"\n",(0,o.jsxs)(n.p,{children:["moon requires a version control system (VCS) to be present for functionality like file diffing,\nhashing, and revision comparison. The VCS and its default branch can be configured through the\n",(0,o.jsx)(n.a,{href:"./config/workspace#vcs",children:(0,o.jsx)(n.code,{children:"vcs"})})," setting."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml"',children:"vcs:\n  manager: 'git'\n  defaultBranch: 'master'\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["moon defaults to ",(0,o.jsx)(n.code,{children:"git"})," and the settings above, so feel free to skip this."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsx)(i.Z,{links:[{icon:"new-project",label:"Create a project",url:"./create-project"},{icon:"workspace-config",label:(0,o.jsxs)(n.span,{children:["Configure ",(0,o.jsx)(n.code,{children:".moon/workspace.yml"})," further"]}),url:"./config/workspace"},{icon:"workspace",label:"Learn about the workspace",url:"./concepts/workspace"}]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},27915:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(83469),r=t(9619),s=t(24246);function i(e){let{text:n}=e;return(0,s.jsx)(r.Z,{text:n,icon:o.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},9634:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81884),r=t(9928),s=t(83469),i=t(31792),c=t(24246);const a={discord:r.omb,github:r.zhw,moon:s.Gp0,"new-project":s.g6h,"new-task":s.EQ8,project:s.pL1,"project-config":s.dhu,"project-config-global":s.YdP,"project-graph":s.Bkj,"run-task":s.sl_,task:s.diR,"task-config":s.o$R,token:s.BwA,toolchain:s.AlB,"toolchain-config":s.eDR,twitter:r.mdU,workspace:s.emM,"workspace-config":s.cRF};function l(e){let{name:n,...t}=e;return(0,c.jsx)(i.Z,{...t,icon:a[n]})}function d(e){let{links:n}=e;return(0,c.jsx)("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2",children:n.map((e=>(0,c.jsx)(o.default,{href:e.url,className:"focus:outline-none",children:(0,c.jsxs)("div",{className:"relative rounded-lg px-3 py-3 flex items-center space-x-2 border-solid border border-t-0 border-b-2 bg-gray-50 hover:bg-gray-100/90 border-gray-200/75 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-900/75",children:[(0,c.jsx)("div",{className:"flex-shrink-0",children:(0,c.jsx)(l,{size:"lg",name:e.icon})}),(0,c.jsx)("div",{className:"flex-1 min-w-0 text-gray-900 dark:text-gray-100",children:e.label})]})},e.url)))})}},9619:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(40624),r=t(31792),s=t(24246);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function c(e){let{className:n,icon:t,text:c,variant:a}=e;return(0,s.jsxs)("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",a?i[a]:"bg-gray-100 text-gray-800",n),children:[t&&(0,s.jsx)(r.Z,{icon:t,className:"mr-1"}),c]})}},71670:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(27378);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);