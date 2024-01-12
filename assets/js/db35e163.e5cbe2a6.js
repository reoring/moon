"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51047],{1126:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var r=o(24246),s=o(71670);const t={slug:"proto-v0.27",title:"proto v0.27 - PowerShell profiles, shim regeneration, and more",authors:["milesj"],tags:["proto","shim","bin","shell","profile","windows"]},i=void 0,l={permalink:"/blog/proto-v0.27",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2024-01-04_proto-v0.27.mdx",source:"@site/blog/2024-01-04_proto-v0.27.mdx",title:"proto v0.27 - PowerShell profiles, shim regeneration, and more",description:"This is a small release that improves the overall developer experience.",date:"2024-01-04T00:00:00.000Z",formattedDate:"January 4, 2024",tags:[{label:"proto",permalink:"/blog/tags/proto"},{label:"shim",permalink:"/blog/tags/shim"},{label:"bin",permalink:"/blog/tags/bin"},{label:"shell",permalink:"/blog/tags/shell"},{label:"profile",permalink:"/blog/tags/profile"},{label:"windows",permalink:"/blog/tags/windows"}],readingTime:1.785,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"proto-v0.27",title:"proto v0.27 - PowerShell profiles, shim regeneration, and more",authors:["milesj"],tags:["proto","shim","bin","shell","profile","windows"]},unlisted:!1,prevItem:{title:"What's in store for 2024",permalink:"/blog/2024-roadmap"},nextItem:{title:"moon v1.19 - Improvements to task dependencies, codegen, and more",permalink:"/blog/moon-v1.19"}},a={authorsImageUrls:[void 0]},h=[{value:"PowerShell profile support",id:"powershell-profile-support",level:2},{value:"Regenerate shims &amp; bins",id:"regenerate-shims--bins",level:2},{value:"Better version parsing for TOML plugins",id:"better-version-parsing-for-toml-plugins",level:2},{value:"Other changes",id:"other-changes",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This is a small release that improves the overall developer experience."}),"\n",(0,r.jsx)(n.h2,{id:"powershell-profile-support",children:"PowerShell profile support"}),"\n",(0,r.jsxs)(n.p,{children:["When proto was first launched, we didn't support PowerShell profiles, but did support Windows by\nrunning ",(0,r.jsx)(n.code,{children:"setx"})," commands to inject the ",(0,r.jsx)(n.code,{children:"PROTO_HOME"})," environment variable, and update ",(0,r.jsx)(n.code,{children:"PATH"}),". While\nthis worked, it was not ideal, and unexpected for users. This is our fault and our lack of Windows\nknowledge."]}),"\n",(0,r.jsxs)(n.p,{children:["Starting with v0.27, we now official support PowerShell profiles, and will no longer call ",(0,r.jsx)(n.code,{children:"setx"}),".\nInstead we write the environment variable changes to one of these files, depending on what exists:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Windows","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"~\\Documents\\PowerShell\\Microsoft.PowerShell_profile.ps1"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"~\\Documents\\PowerShell\\Profile.ps1"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Unix","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"~/.config/powershell/Microsoft.PowerShell_profile.ps1"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"~/.config/powershell/profile.ps1"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"regenerate-shims--bins",children:"Regenerate shims & bins"}),"\n",(0,r.jsx)(n.p,{children:"proto has gone through some growing pains, we won't deny that. With the handful of breaking changes,\nthe configuration refactor, and the ground-up rework of how shims/bins are handled, we've hit a few\nsnags. Most of those snags have been around tool execution."}),"\n",(0,r.jsxs)(n.p,{children:["To remedy some of these problems, we're introducing the ",(0,r.jsx)(n.a,{href:"/docs/proto/commands/regen",children:(0,r.jsx)(n.code,{children:"proto regen"})}),"\ncommand. This command will clean the shims (",(0,r.jsx)(n.code,{children:"~/.proto/shims"}),") and optionally bins (",(0,r.jsx)(n.code,{children:"~/.proto/bins"}),")\ndirectory, regenerate shims, and relink bins based on globally pinned versions."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ proto regen\n\n# Include bins\n$ proto regen --bin\n"})}),"\n",(0,r.jsx)(n.p,{children:"This is extremely useful in resetting to a clean state."}),"\n",(0,r.jsx)(n.h2,{id:"better-version-parsing-for-toml-plugins",children:"Better version parsing for TOML plugins"}),"\n",(0,r.jsxs)(n.p,{children:["When our ",(0,r.jsx)(n.a,{href:"/docs/proto/toml-plugin",children:"TOML plugin"})," receives a version, we attempt to parse it into a\nvalid semantic version. However, not all tools follow semver, as they may release without patch or\nminor versions, or use a different pre/build pattern."]}),"\n",(0,r.jsx)(n.p,{children:"To remedy this, we've updated our regex to be more flexible, and to utilize named capture groups.\nWith named groups, we can now piece the version together, fill in missing values, and then parse it."}),"\n",(0,r.jsxs)(n.p,{children:["We've also renamed the field to ",(0,r.jsx)(n.code,{children:"version-pattern"})," from ",(0,r.jsx)(n.code,{children:"git-tag-pattern"}),", as the regex is now also\nused for manifest parsing. The old name is still supported for the time being."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'# Before\n[resolve]\ngit-tag-pattern = "^@protostar/cli@((\\\\d+)\\\\.(\\\\d+)\\\\.(\\\\d+))"\n\n# After\n[resolve]\nversion-pattern = "^@protostar/cli@((?<major>\\\\d+)\\\\.(?<minor>\\\\d+)\\\\.(?<patch>\\\\d+))"\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Jump to the ",(0,r.jsx)(n.a,{href:"/docs/proto/toml-plugin#version-patterns",children:"official documentation"})," for more\ninformation!"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(n.p,{children:["View the ",(0,r.jsx)(n.a,{href:"https://github.com/moonrepo/proto/releases/tag/v0.27.0",children:"official release"})," for a full list\nof changes."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},71670:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>i});var r=o(27378);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);