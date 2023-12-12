"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88893],{95208:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var t=s(24246),i=s(71670),r=(s(33337),s(39798),s(32189)),o=s(9785),a=s(79022);const l={title:".moon/workspace.yml",toc_max_heading_level:6},c=void 0,d={id:"config/workspace",title:".moon/workspace.yml",description:"The .moon/workspace.yml file configures projects and services in the workspace. This file is",source:"@site/docs/config/workspace.mdx",sourceDirName:"config",slug:"/config/workspace",permalink:"/docs/config/workspace",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/config/workspace.mdx",tags:[],version:"current",frontMatter:{title:".moon/workspace.yml",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Config files",permalink:"/docs/config"},next:{title:".moon/toolchain.yml",permalink:"/docs/config/toolchain"}},h={},p=[{value:"<code>extends</code>",id:"extends",level:2},{value:"<code>projects</code><RequiredLabel></RequiredLabel>",id:"projects",level:2},{value:"Using a map",id:"using-a-map",level:3},{value:"Using globs",id:"using-globs",level:3},{value:"Using a map <em>and</em> globs",id:"using-a-map-and-globs",level:3},{value:"<code>codeowners</code><VersionLabel></VersionLabel>",id:"codeowners",level:2},{value:"<code>globalPaths</code>",id:"globalpaths",level:3},{value:"<code>orderBy</code>",id:"orderby",level:3},{value:"<code>syncOnRun</code>",id:"synconrun",level:3},{value:"<code>constraints</code>",id:"constraints",level:2},{value:"<code>enforceProjectTypeRelationships</code>",id:"enforceprojecttyperelationships",level:3},{value:"<code>tagRelationships</code>",id:"tagrelationships",level:3},{value:"<code>experiments</code><VersionLabel></VersionLabel>",id:"experiments",level:2},{value:"<code>interweavedTaskInheritance</code>",id:"interweavedtaskinheritance",level:3},{value:"<code>taskOutputBoundaries</code>",id:"taskoutputboundaries",level:3},{value:"<code>generator</code>",id:"generator",level:2},{value:"<code>templates</code>",id:"templates",level:3},{value:"<code>hasher</code>",id:"hasher",level:2},{value:"<code>batchSize</code>",id:"batchsize",level:3},{value:"<code>ignoreMissingPatterns</code><VersionLabel></VersionLabel>",id:"ignoremissingpatterns",level:3},{value:"<code>ignorePatterns</code><VersionLabel></VersionLabel>",id:"ignorepatterns",level:3},{value:"<code>optimization</code>",id:"optimization",level:3},{value:"<code>walkStrategy</code>",id:"walkstrategy",level:3},{value:"<code>warnOnMissingInputs</code>",id:"warnonmissinginputs",level:3},{value:"<code>notifier</code>",id:"notifier",level:2},{value:"<code>webhookUrl</code>",id:"webhookurl",level:3},{value:"<code>runner</code>",id:"runner",level:2},{value:"<code>cacheLifetime</code>",id:"cachelifetime",level:3},{value:"<code>archivableTargets</code>",id:"archivabletargets",level:3},{value:"<code>inheritColorsForPipedTasks</code>",id:"inheritcolorsforpipedtasks",level:3},{value:"<code>logRunningCommand</code>",id:"logrunningcommand",level:3},{value:"<code>telemetry</code>",id:"telemetry",level:2},{value:"<code>vcs</code>",id:"vcs",level:2},{value:"<code>defaultBranch</code>",id:"defaultbranch",level:3},{value:"<code>hooks</code><VersionLabel></VersionLabel>",id:"hooks",level:3},{value:"<code>manager</code>",id:"manager",level:3},{value:"<code>provider</code><VersionLabel></VersionLabel>",id:"provider",level:3},{value:"<code>remoteCandidates</code>",id:"remotecandidates",level:3},{value:"<code>syncHooks</code><VersionLabel></VersionLabel>",id:"synchooks",level:3},{value:"<code>versionConstraint</code>",id:"versionconstraint",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".moon/workspace.yml"})," file configures projects and services in the workspace. This file is\n",(0,t.jsx)(n.em,{children:"required"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml"',children:"$schema: 'https://moonrepo.dev/schemas/workspace.json'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"extends",children:(0,t.jsx)(n.code,{children:"extends"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/WorkspaceConfig#extends"}),"\n",(0,t.jsxs)(n.p,{children:["Defines an external ",(0,t.jsx)(n.code,{children:".moon/workspace.yml"})," to extend and inherit settings from. Perfect for\nreusability and sharing configuration across repositories and projects. When defined, this setting\nmust be an HTTPS URL ",(0,t.jsx)(n.em,{children:"or"})," relative file system path that points to a valid YAML document!"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {1}',children:"extends: 'https://raw.githubusercontent.com/organization/repository/master/.moon/workspace.yml'\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Settings will be merged recursively for blocks, with values defined in the local configuration\ntaking precedence over those defined in the extended configuration. However, the ",(0,t.jsx)(n.code,{children:"projects"})," setting\n",(0,t.jsx)(n.em,{children:"does not merge"}),"!"]})}),"\n",(0,t.jsxs)(n.h2,{id:"projects",children:[(0,t.jsx)(n.code,{children:"projects"}),(0,t.jsx)(o.Z,{})]}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/WorkspaceConfig#projects"}),"\n",(0,t.jsxs)(n.p,{children:["Defines the location of all ",(0,t.jsx)(n.a,{href:"../concepts/project",children:"projects"})," within the workspace. Supports either a\nmanual map of projects (default), a list of globs in which to automatically locate projects, ",(0,t.jsx)(n.em,{children:"or"}),"\nboth."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Projects that depend on each other and form a cycle must be avoided! While we do our best to avoid\nan infinite loop and disconnect nodes from each other, there's no guarantee that tasks will run in\nthe correct order."})}),"\n",(0,t.jsx)(n.h3,{id:"using-a-map",children:"Using a map"}),"\n",(0,t.jsxs)(n.p,{children:["When using a map, each project must be ",(0,t.jsx)(n.em,{children:"manually"})," configured and requires a unique\n",(0,t.jsx)(n.a,{href:"../concepts/project#names",children:"name"})," as the map key, where this name is used heavily on the command\nline and within the project graph for uniquely identifying the project amongst all projects. The map\nvalue (known as the project source) is a file system path to the project folder, relative from the\nworkspace root, and must be contained within the workspace boundary."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml"',children:"projects:\n  admin: 'apps/admin'\n  apiClients: 'packages/api-clients'\n  designSystem: 'packages/design-system'\n  web: 'apps/web'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-globs",children:"Using globs"}),"\n",(0,t.jsxs)(n.p,{children:["If manually mapping projects is too tedious or cumbersome, you may provide a list of\n",(0,t.jsx)(n.a,{href:"../concepts/file-pattern#globs",children:"globs"})," to automatically locate all project folders, relative from\nthe workspace root."]}),"\n",(0,t.jsxs)(n.p,{children:["When using this approach, the project name is derived from the project folder name, and is cleaned\nto our ",(0,t.jsx)(n.a,{href:"../concepts/project#names",children:"supported characters"}),", but can be customized with the\n",(0,t.jsx)(n.a,{href:"./project#id",children:(0,t.jsx)(n.code,{children:"id"})})," setting in ",(0,t.jsx)(n.a,{href:"./project",children:(0,t.jsx)(n.code,{children:"moon.yml"})}),". Furthermore, globbing ",(0,t.jsx)(n.strong,{children:"does risk the\nchance of collision"}),", and when that happens, we log a warning and skip the conflicting project from\nbeing configured in the project graph."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml"',children:"projects:\n  - 'apps/*'\n  - 'packages/*'\n  # Only shared folders with a moon configuration\n  - 'shared/*/moon.yml'\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"using-a-map-and-globs",children:["Using a map ",(0,t.jsx)(n.em,{children:"and"})," globs"]}),"\n",(0,t.jsxs)(n.p,{children:["For those situations where you want to use ",(0,t.jsx)(n.em,{children:"both"})," patterns, you can! The list of globs can be\ndefined under a ",(0,t.jsx)(n.code,{children:"globs"})," field, while the map of projects under a ",(0,t.jsx)(n.code,{children:"sources"})," field."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml"',children:"projects:\n  globs:\n    - 'apps/*'\n    - 'packages/*'\n  sources:\n    www: 'www'\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"codeowners",children:[(0,t.jsx)(n.code,{children:"codeowners"}),(0,t.jsx)(a.Z,{version:"1.8.0"})]}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/WorkspaceConfig#codeowners"}),"\n",(0,t.jsxs)(n.p,{children:["Configures code owners (",(0,t.jsx)(n.code,{children:"CODEOWNERS"}),") integration across the entire workspace."]}),"\n",(0,t.jsx)(n.h3,{id:"globalpaths",children:(0,t.jsx)(n.code,{children:"globalPaths"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/CodeownersConfig#globalPaths"}),"\n",(0,t.jsxs)(n.p,{children:["This setting defines file patterns and their owners at the workspace-level, and are applied to any\nmatching path, at any depth, within the entire workspace. This is useful for defining global or\nfallback owners when a granular ",(0,t.jsx)(n.a,{href:"./project#paths",children:"project-level path"})," does not match or exist."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2-5}',children:"codeowners:\n  globalPaths:\n    '*': ['@admins']\n    'config/': ['@infra']\n    '/.github/': ['@infra']\n"})}),"\n",(0,t.jsx)(n.h3,{id:"orderby",children:(0,t.jsx)(n.code,{children:"orderBy"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/CodeownersConfig#orderBy"}),"\n",(0,t.jsxs)(n.p,{children:["The order in which code owners, grouped by project, are listed in the ",(0,t.jsx)(n.code,{children:"CODEOWNERS"}),' file. Accepts\n"file-source" (default) or "project-name".']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"codeowners:\n  orderBy: 'project-name'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"synconrun",children:(0,t.jsx)(n.code,{children:"syncOnRun"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/CodeownersConfig#syncOnRun"}),"\n",(0,t.jsxs)(n.p,{children:["Will automatically generate a ",(0,t.jsx)(n.code,{children:"CODEOWNERS"})," file by aggregating and syncing all project\n",(0,t.jsx)(n.a,{href:"./project#owners",children:(0,t.jsx)(n.code,{children:"owners"})})," in the workspace when a ",(0,t.jsx)(n.a,{href:"../concepts/target",children:"target is run"}),". The format\nand location of the ",(0,t.jsx)(n.code,{children:"CODEOWNERS"})," file is based on the ",(0,t.jsx)(n.a,{href:"#provider",children:(0,t.jsx)(n.code,{children:"vcs.provider"})})," setting. Defaults\nto ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"codeowners:\n  syncOnRun: true\n"})}),"\n",(0,t.jsx)(n.h2,{id:"constraints",children:(0,t.jsx)(n.code,{children:"constraints"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/WorkspaceConfig#constraints"}),"\n",(0,t.jsx)(n.p,{children:"Configures constraints between projects that are enforced during project graph generation. This is\nalso known as project boundaries."}),"\n",(0,t.jsx)(n.h3,{id:"enforceprojecttyperelationships",children:(0,t.jsx)(n.code,{children:"enforceProjectTypeRelationships"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/ConstraintsConfig#enforceProjectTypeRelationships"}),"\n",(0,t.jsxs)(n.p,{children:["Enforces allowed relationships between a project its dependencies based on the project's\n",(0,t.jsx)(n.a,{href:"./project#type",children:(0,t.jsx)(n.code,{children:"type"})})," setting. When a project depends on another project of an invalid type, an\nerror will be thrown when attempting to run a task. The following relationships are enforced when\nthis setting is enabled, which defaults to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Applications can ",(0,t.jsx)(n.em,{children:"only"})," depend on libraries or tools."]}),"\n",(0,t.jsxs)(n.li,{children:["Automation can depend on all types ",(0,t.jsx)(n.em,{children:"except other"})," automation."]}),"\n",(0,t.jsxs)(n.li,{children:["Libraries can ",(0,t.jsx)(n.em,{children:"only"})," depend on other libraries."]}),"\n",(0,t.jsxs)(n.li,{children:["Tools can ",(0,t.jsx)(n.em,{children:"only"})," depend on libraries."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"constraints:\n  enforceProjectTypeRelationships: false\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Projects with an unconfigured or unknown type are ignored during enforcement."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tagrelationships",children:(0,t.jsx)(n.code,{children:"tagRelationships"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/ConstraintsConfig#tagRelationships"}),"\n",(0,t.jsxs)(n.p,{children:["Enforces allowed relationships between a project and its dependencies based on the project's\n",(0,t.jsx)(n.a,{href:"./project#tags",children:(0,t.jsx)(n.code,{children:"tags"})})," setting. This works in a similar fashion to\n",(0,t.jsx)(n.code,{children:"enforceProjectTypeRelationships"}),", but gives you far more control over what these relationships look\nlike."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, let's enforce that Next.js projects using the ",(0,t.jsx)(n.code,{children:"next"})," tag can only depend on React\nprojects using the ",(0,t.jsx)(n.code,{children:"react"})," tag. If a dependency does not have one of the configured required tags,\nin this case ",(0,t.jsx)(n.code,{children:"react"}),", an error will occur."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2,3}',children:"constraints:\n  tagRelationships:\n    next: ['react']\n"})}),"\n",(0,t.jsxs)(n.p,{children:["On the project side, we would configure ",(0,t.jsx)(n.a,{href:"./project#tags",children:(0,t.jsx)(n.code,{children:"moon.yml"})})," like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="app/moon.yml"',children:"tags: ['next']\ndependsOn: ['components']\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="packages/components/moon.yml"',children:"tags: ['react']\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"experiments",children:[(0,t.jsx)(n.code,{children:"experiments"}),(0,t.jsx)(a.Z,{version:"1.11.0"})]}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/WorkspaceConfig#experiments"}),"\n",(0,t.jsx)(n.p,{children:"Enable or disable experiments that alter core functionality."}),"\n",(0,t.jsx)(n.h3,{id:"interweavedtaskinheritance",children:(0,t.jsx)(n.code,{children:"interweavedTaskInheritance"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/ExperimentsConfig#interweavedTaskInheritance"}),"\n",(0,t.jsxs)(n.p,{children:["Enables the new interweaved task inheritance behavior where global and local tasks are interweaved\nthroughout the inheritance and extends chain. The legacy behavior would build global and local tasks\nseparately, then merge them. Defaults to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"experiments:\n  interweavedTaskInheritance: false\n"})}),"\n",(0,t.jsx)(n.h3,{id:"taskoutputboundaries",children:(0,t.jsx)(n.code,{children:"taskOutputBoundaries"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/ExperimentsConfig#taskOutputBoundaries"}),"\n",(0,t.jsxs)(n.p,{children:["Enforces strict boundaries for task outputs and will error when multiple tasks write to the same\noutput location. This includes output globs that overlap with literal output file paths. Defaults to\n",(0,t.jsx)(n.code,{children:"true"}),", and will be fully enabled by default in a future release."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"experiments:\n  taskOutputBoundaries: false\n"})}),"\n",(0,t.jsx)(n.h2,{id:"generator",children:(0,t.jsx)(n.code,{children:"generator"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/WorkspaceConfig#generator"}),"\n",(0,t.jsx)(n.p,{children:"Configures aspects of the template generator."}),"\n",(0,t.jsx)(n.h3,{id:"templates",children:(0,t.jsx)(n.code,{children:"templates"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/GeneratorConfig#templates"}),"\n",(0,t.jsxs)(n.p,{children:["A list of file system paths where templates can be located, relative from the workspace root.\nDefaults to ",(0,t.jsx)(n.code,{children:"./templates"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2-4}',children:"generator:\n  templates:\n    - './templates'\n    - './other/templates'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"hasher",children:(0,t.jsx)(n.code,{children:"hasher"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/WorkspaceConfig#hasher"}),"\n",(0,t.jsx)(n.p,{children:"Configures aspects of the smart hashing layer."}),"\n",(0,t.jsx)(n.h3,{id:"batchsize",children:(0,t.jsx)(n.code,{children:"batchSize"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/HasherConfig#batchSize"}),"\n",(0,t.jsxs)(n.p,{children:["When hashing a list of files, we split the list into batches to help reduce memory footprint and\navoid overloading the configured VCS. This setting controls how many files are in each batch and\ndefaults to ",(0,t.jsx)(n.code,{children:"2500"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If you're running into memory issues, or moon hanging during the file hashing process, lowering this\nnumber may help resolve the issue."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"hasher:\n  batchSize: 1000\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"ignoremissingpatterns",children:[(0,t.jsx)(n.code,{children:"ignoreMissingPatterns"}),(0,t.jsx)(a.Z,{version:"1.10.0"})]}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/HasherConfig#ignoreMissingPatterns"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.a,{href:"#warnonmissinginputs",children:(0,t.jsx)(n.code,{children:"hasher.warnOnMissingInputs"})})," is enabled, moon will log a warning to the\nterminal that an input is missing. This is useful for uncovering misconfigurations, but can be quite\nnoisy when inputs are truly optional."]}),"\n",(0,t.jsxs)(n.p,{children:["To ignore warnings for missing inputs, a list of ",(0,t.jsx)(n.a,{href:"../concepts/file-pattern#globs",children:"glob patterns"})," can\nbe configured to filter and ignore files. Files are matched against workspace relative paths, so\nprefixing patterns with ",(0,t.jsx)(n.code,{children:"**/"})," is suggested."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2-4}',children:"hasher:\n  ignoreMissingPatterns:\n    - '**/.eslintrc.*'\n    - '**/*.config.*'\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"ignorepatterns",children:[(0,t.jsx)(n.code,{children:"ignorePatterns"}),(0,t.jsx)(a.Z,{version:"1.10.0"})]}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/HasherConfig#ignorePatterns"}),"\n",(0,t.jsxs)(n.p,{children:["A list of ",(0,t.jsx)(n.a,{href:"../concepts/file-pattern#globs",children:"glob patterns"})," used to filter and ignore files during the\ninputs hashing process. Files are matched against workspace relative paths, so prefixing patterns\nwith ",(0,t.jsx)(n.code,{children:"**/"})," is suggested."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2,3}',children:"hasher:\n  ignorePatterns:\n    - '**/*.png'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"optimization",children:(0,t.jsx)(n.code,{children:"optimization"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/HasherConfig#optimization"}),"\n",(0,t.jsx)(n.p,{children:"Determines the optimization level to utilize when hashing content before running targets."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"accuracy"})," (default) - When hashing dependency versions, utilize the resolved value in the\nlockfile. This requires parsing the lockfile, which may reduce performance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"performance"})," - When hashing dependency versions, utilize the value defined in the manifest. This\nis typically a version range or requirement."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"hasher:\n  optimization: 'performance'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"walkstrategy",children:(0,t.jsx)(n.code,{children:"walkStrategy"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/HasherConfig#walkStrategy"}),"\n",(0,t.jsx)(n.p,{children:"Defines the file system walking strategy to utilize when discovering inputs to hash."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"glob"})," - Walks the file system using glob patterns."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"vcs"})," (default) - Calls out to the ",(0,t.jsx)(n.a,{href:"#vcs",children:"VCS"})," to extract files from its working tree."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"hasher:\n  walkStrategy: 'glob'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"warnonmissinginputs",children:(0,t.jsx)(n.code,{children:"warnOnMissingInputs"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/HasherConfig#warnOnMissingInputs"}),"\n",(0,t.jsxs)(n.p,{children:["When enabled, will log warnings to the console when attempting to hash an input that does not exist.\nThis is useful in uncovering misconfigured tasks. Defaults to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"hasher:\n  warnOnMissingInputs: false\n"})}),"\n",(0,t.jsx)(n.h2,{id:"notifier",children:(0,t.jsx)(n.code,{children:"notifier"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/WorkspaceConfig#notifier"}),"\n",(0,t.jsx)(n.p,{children:"Configures how moon notifies and interacts with a developer or an external system."}),"\n",(0,t.jsx)(n.h3,{id:"webhookurl",children:(0,t.jsx)(n.code,{children:"webhookUrl"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/NotifierConfig#webhookUrl"}),"\n",(0,t.jsxs)(n.p,{children:["Defines an HTTPS URL that all pipeline events will be posted to. View the\n",(0,t.jsx)(n.a,{href:"../guides/webhooks",children:"webhooks guide for more information"})," on available events."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"notifier:\n  webhookUrl: 'https://api.company.com/some/endpoint'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"runner",children:(0,t.jsx)(n.code,{children:"runner"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/WorkspaceConfig#runner"}),"\n",(0,t.jsx)(n.p,{children:"Configures aspects of the action pipeline."}),"\n",(0,t.jsx)(n.h3,{id:"cachelifetime",children:(0,t.jsx)(n.code,{children:"cacheLifetime"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/RunnerConfig#cacheLifetime"}),"\n",(0,t.jsxs)(n.p,{children:['The maximum lifetime of cached artifacts before they\'re marked as stale and automatically removed by\nthe action pipeline. Defaults to "7 days". This field requires an integer and a timeframe unit that\ncan be ',(0,t.jsx)(n.a,{href:"https://docs.rs/humantime/2.1.0/humantime/fn.parse_duration.html",children:"parsed as a duration"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"runner:\n  cacheLifetime: '24 hours'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"archivabletargets",children:(0,t.jsx)(n.code,{children:"archivableTargets"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/RunnerConfig#archivableTargets"}),"\n",(0,t.jsxs)(n.p,{children:["Defines a list of ",(0,t.jsx)(n.a,{href:"../concepts/target",children:"targets"}),", with or without scope, that will be cached and\narchived within the runner. Tasks that produce ",(0,t.jsx)(n.a,{href:"./project#outputs",children:"outputs"})," are automatically\narchived, and do not need to be defined here. Defaults to an empty list."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2-4}',children:"runner:\n  archivableTargets:\n    - ':test'\n    - 'app:typecheck'\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["This setting primarily exists for ",(0,t.jsx)(n.a,{href:"../guides/remote-cache",children:"remote caching"})," as it will create and\npersist tar archives located in ",(0,t.jsx)(n.code,{children:".moon/cache/outputs"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"inheritcolorsforpipedtasks",children:(0,t.jsx)(n.code,{children:"inheritColorsForPipedTasks"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/RunnerConfig#inheritColorsForPipedTasks"}),"\n",(0,t.jsxs)(n.p,{children:["Force colors to be inherited from the current terminal for all tasks that are ran as a child process\nand their output is piped to the action pipeline. Defaults to ",(0,t.jsx)(n.code,{children:"true"}),".\n",(0,t.jsx)(n.a,{href:"../commands/overview#colors",children:"View more about color handling in moon"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"runner:\n  inheritColorsForPipedTasks: true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"logrunningcommand",children:(0,t.jsx)(n.code,{children:"logRunningCommand"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/RunnerConfig#logRunningCommand"}),"\n",(0,t.jsxs)(n.p,{children:["When enabled, will log the task's command, resolved arguments, and working directory when a target\nis ran. Defaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"runner:\n  logRunningCommand: true\n"})}),"\n",(0,t.jsx)(n.h2,{id:"telemetry",children:(0,t.jsx)(n.code,{children:"telemetry"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/WorkspaceConfig#telemetry"}),"\n",(0,t.jsxs)(n.p,{children:["When enabled, will check for a newer moon version and send anonymous usage data to the moonrepo\nteam. This data is used to improve the quality and reliability of the tool. Defaults to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {1}',children:"telemetry: false\n"})}),"\n",(0,t.jsx)(n.h2,{id:"vcs",children:(0,t.jsx)(n.code,{children:"vcs"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/WorkspaceConfig#vcs"}),"\n",(0,t.jsx)(n.p,{children:"Configures the version control system to utilize within the workspace (and repository). A VCS is\nrequired for determining touched (added, modified, etc) files, calculating file hashes, computing\naffected files, and much more."}),"\n",(0,t.jsx)(n.h3,{id:"defaultbranch",children:(0,t.jsx)(n.code,{children:"defaultBranch"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/VcsConfig#defaultBranch"}),"\n",(0,t.jsx)(n.p,{children:'Defines the default branch in the repository for comparing differences against. For git, this is\ntypically "master" (default) or "main".'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"vcs:\n  defaultBranch: 'master'\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"hooks",children:[(0,t.jsx)(n.code,{children:"hooks"}),(0,t.jsx)(a.Z,{version:"1.9.0"})]}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/VcsConfig#hooks"}),"\n",(0,t.jsx)(n.p,{children:"Defines a mapping of hooks to a list of commands to run when that event is triggered. There are no\nrestrictions to what commands can be run, but the binaries for each command must exist on each\nmachine that will be running hooks."}),"\n",(0,t.jsxs)(n.p,{children:["For Git, each ",(0,t.jsx)(n.a,{href:"https://git-scm.com/docs/githooks#_hooks",children:"hook name"})," must be a valid kebab-cased\nname. ",(0,t.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks",children:"Learn more about Git hooks"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2-5}',children:"vcs:\n  hooks:\n    pre-commit:\n      - 'moon run :lint :format --affected --status=staged'\n      - 'another-command'\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If running ",(0,t.jsx)(n.code,{children:"moon"})," commands directly, the ",(0,t.jsx)(n.code,{children:"moon"})," binary must be installed globally!"]})}),"\n",(0,t.jsx)(n.h3,{id:"manager",children:(0,t.jsx)(n.code,{children:"manager"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/VcsConfig#manager"}),"\n",(0,t.jsx)(n.p,{children:'Defines the VCS tool/binary that is being used for managing the repository. Accepts "git" (default).\nExpect more version control systems in the future!'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"vcs:\n  manager: 'git'\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"provider",children:[(0,t.jsx)(n.code,{children:"provider"}),(0,t.jsx)(a.Z,{version:"1.8.0"})]}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/VcsConfig#provider"}),"\n",(0,t.jsx)(n.p,{children:'Defines the service provider that the repository is hosted on. Accepts "github" (default), "gitlab",\n"bitbucket", or "other".'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',children:"vcs:\n  provider: 'github'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"remotecandidates",children:(0,t.jsx)(n.code,{children:"remoteCandidates"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/VcsConfig#remoteCandidates"}),"\n",(0,t.jsx)(n.p,{children:'(Git only) Defines a list of remote candidates to query agaist to determine merge bases. Defaults to\n"origin" and "upstream".'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {2-4}',children:"vcs:\n  remoteCandidates:\n    - 'origin'\n    - 'upstream'\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"synchooks",children:[(0,t.jsx)(n.code,{children:"syncHooks"}),(0,t.jsx)(a.Z,{version:"1.9.0"})]}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/VcsConfig#syncHooks"}),"\n",(0,t.jsxs)(n.p,{children:["Will automatically generate ",(0,t.jsx)(n.a,{href:"#hooks",children:"hook scripts"})," to ",(0,t.jsx)(n.code,{children:".moon/hooks"})," and sync the scripts to the\nlocal VCS checkout. The hooks format and location is based on the ",(0,t.jsx)(n.a,{href:"#manager",children:(0,t.jsx)(n.code,{children:"vcs.manager"})})," setting.\nDefaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {4}',children:"vcs:\n  hooks:\n    # ...\n  syncHooks: true\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["When enabled, this will sync hooks for ",(0,t.jsx)(n.em,{children:"all"})," users of the repository. For personal or small\nprojects, this may be fine, but for larger projects, this may be undesirable and disruptive!"]})}),"\n",(0,t.jsx)(n.h2,{id:"versionconstraint",children:(0,t.jsx)(n.code,{children:"versionConstraint"})}),"\n",(0,t.jsx)(r.Z,{to:"/api/types/interface/WorkspaceConfig#versionConstraint"}),"\n",(0,t.jsx)(n.p,{children:"Defines a version requirement for the currently running moon binary. This provides a mechanism for\nenforcing that the globally installed moon on every developers machine is using an applicable\nversion."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml" {1}',children:"versionConstraint: '>=0.20.0'\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},39798:(e,n,s)=>{s.d(n,{Z:()=>o});s(27378);var t=s(40624);const i={tabItem:"tabItem_wHwb"};var r=s(24246);function o(e){let{children:n,hidden:s,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i.tabItem,o),hidden:s,children:n})}},33337:(e,n,s)=>{s.d(n,{Z:()=>u});var t=s(27378),i=s(40624),r=s(83457),o=s(35595),a=s(76457);const l={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var c=s(24246);function d(e){let{className:n,block:s,selectedValue:t,selectValue:o,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,r.o5)(),p=e=>{const n=e.currentTarget,s=d.indexOf(n),i=a[s].value;i!==t&&(h(n),o(i))},u=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:u,onClick:p,...r,className:(0,i.Z)("tabs__item",l.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function h(e){let{lazy:n,children:s,selectedValue:i}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function p(e){const n=(0,o.Y)(e);return(0,c.jsxs)("div",{className:(0,i.Z)("tabs-container",l.tabList),children:[(0,c.jsx)(d,{...e,...n}),(0,c.jsx)(h,{...e,...n})]})}function u(e){const n=(0,a.Z)();return(0,c.jsx)(p,{...e,children:(0,o.h)(e.children)},String(n))}},35595:(e,n,s)=>{s.d(n,{Y:()=>u,h:()=>c});var t=s(27378),i=s(3620),r=s(9834),o=s(30654),a=s(70784),l=s(71819);function c(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:i}}=e;return{value:n,label:s,attributes:t,default:i}}))}(s);return function(e){const n=(0,a.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function u(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,o=d(e),[a,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[u,m]=p({queryString:s,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,l.Nk)(s);return[i,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:i}),j=(()=>{const e=u??g;return h({value:e,tabValues:o})?e:null})();(0,r.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),f(e)}),[m,f,o]),tabValues:o}}},32189:(e,n,s)=>{s.d(n,{Z:()=>o});var t=s(83469),i=s(31792),r=s(24246);function o(e){let{to:n}=e;return(0,r.jsx)("a",{href:n,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"},children:(0,r.jsx)(i.Z,{icon:t.dT$})})}},9785:(e,n,s)=>{s.d(n,{Z:()=>r});var t=s(9619),i=s(24246);function r(e){let{text:n="Required"}=e;return(0,i.jsx)(t.Z,{text:n,variant:"failure",className:"ml-2"})}},79022:(e,n,s)=>{s.d(n,{Z:()=>r});var t=s(9619),i=s(24246);function r(e){let{header:n,inline:s,updated:r,version:o}=e;return(0,i.jsx)(t.Z,{text:`v${o}`,variant:r?"success":"info",className:n?"absolute right-0 top-1.5":s?"inline-block":"ml-2"})}},9619:(e,n,s)=>{s.d(n,{Z:()=>a});var t=s(40624),i=s(31792),r=s(24246);const o={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function a(e){let{className:n,icon:s,text:a,variant:l}=e;return(0,r.jsxs)("span",{className:(0,t.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",l?o[l]:"bg-gray-100 text-gray-800",n),children:[s&&(0,r.jsx)(i.Z,{icon:s,className:"mr-1"}),a]})}},71670:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(27378);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);