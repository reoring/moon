"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1477],{4556:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"v0.14","metadata":{"permalink":"/blog/v0.14","editUrl":"https://github.com/moonrepo/moon/tree/master/website/blog/2022-09-13_v0.14.mdx","source":"@site/blog/2022-09-13_v0.14.mdx","title":"v0.14 - Code generation and implicit dependencies","description":"With this release, we\'ve landed some new features that have been requested multiple times since","date":"2022-09-13T00:00:00.000Z","formattedDate":"September 13, 2022","tags":[{"label":"generator","permalink":"/blog/tags/generator"},{"label":"project-graph","permalink":"/blog/tags/project-graph"},{"label":"ci","permalink":"/blog/tags/ci"}],"readingTime":1.74,"hasTruncateMarker":true,"authors":[{"name":"Miles Johnson","title":"Founder, developer","url":"https://github.com/milesj","imageURL":"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg","key":"milesj"}],"frontMatter":{"slug":"v0.14","title":"v0.14 - Code generation and implicit dependencies","authors":["milesj"],"tags":["generator","project-graph","ci"]},"nextItem":{"title":"v0.13 - Hashing and toolchain improvements","permalink":"/blog/v0.13"}},"content":"import Image from \'@site/src/components/Image\';\\n\\nWith this release, we\'ve landed some new features that have been requested multiple times since\\nlaunch. A code generation and template scaffolding layer, as well as implicit dependency scanning\\nfor the project graph!\\n\\n\x3c!--truncate--\x3e\\n\\n## New `moon generate` command\\n\\nCode generation is the staple of any large company or repository. Want to spin up a new application?\\nWhat about an npm package? Or maybe third-party integrations? Avoid copy-and-pasting existing code,\\nand instead generate it with the new `moon generate` command, which is powered by our new generator\\nsystem.\\n\\nThe generator will locate a template by name on the file system (\\"npm-package\\" in the example\\nbelow), prompt and interpolate variables, render the files with [Tera](https://tera.netlify.app/) (a\\nRust based template engine), and write the files to the target destination.\\n\\n```shell\\n# Generate code from a template to a target directory\\n$ moon generate npm-package ./packages/example\\n```\\n\\nLearn more about [code generation in the official guide](../docs/guides/codegen)!\\n\\n## Implicit dependency scanning\\n\\nThis has been a request since moon\'s official release, and it\'s finally here! Up until now, if you\\nwanted project-to-project dependency relationships, you had to explicitly declare them with\\n[`dependsOn`](../docs/config/project#dependson). But thanks to a\\n[ton of](https://github.com/moonrepo/moon/pull/288)\\n[infrastructure](https://github.com/moonrepo/moon/pull/249) and\\n[platform](https://github.com/moonrepo/moon/pull/277) changes, we can now infer implicit\\ndependencies automatically!\\n\\nWe still suggest using explicit dependencies, as it provides more\\n[automation like project syncing](../docs/concepts/project#dependencies), but implicit is great for\\nadoption and migration purposes.\\n\\n## Report CI runs on pull requests\\n\\nWe\'re fans of continuous and easily accessible feedback, and as such, have released a new GitHub\\naction, [`moonrepo/run-report-action`](https://github.com/marketplace/actions/moon-ci-run-reports),\\nwhich reports the results of [`moon ci`](../docs/commands/ci) as a pull request comment. The report\\nlooks something like the following:\\n\\n<Image src={require(\'../static/img/github/run-report.png\')} width=\\"60%\\" />\\n\\n## Other changes\\n\\nView the\\n[official release](https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.14.0) for a\\nfull list of changes.\\n\\n- When running in a Docker container, caching is disabled in an effort to greatly reduce the size of\\n  the image.\\n- Updated `moon setup` to also install Node.js dependencies.\\n\\n## What\'s next?\\n\\nExpect the following in the v0.15 release!\\n\\n- Webhooks! Receive messages for all events in the action runner.\\n- Major Docker workflow improvements!"},{"id":"v0.13","metadata":{"permalink":"/blog/v0.13","editUrl":"https://github.com/moonrepo/moon/tree/master/website/blog/2022-09-01_v0.13.mdx","source":"@site/blog/2022-09-01_v0.13.mdx","title":"v0.13 - Hashing and toolchain improvements","description":"With this release, we\'ve landed some improvements to our smart hashing, and paved the road for","date":"2022-09-01T00:00:00.000Z","formattedDate":"September 1, 2022","tags":[{"label":"hasher","permalink":"/blog/tags/hasher"},{"label":"toolchain","permalink":"/blog/tags/toolchain"}],"readingTime":2.995,"hasTruncateMarker":true,"authors":[{"name":"Miles Johnson","title":"Founder, developer","url":"https://github.com/milesj","imageURL":"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg","key":"milesj"}],"frontMatter":{"slug":"v0.13","title":"v0.13 - Hashing and toolchain improvements","authors":["milesj"],"tags":["hasher","toolchain"]},"prevItem":{"title":"v0.14 - Code generation and implicit dependencies","permalink":"/blog/v0.14"}},"content":"With this release, we\'ve landed some improvements to our smart hashing, and paved the road for\\nadditional languagues and tooling.\\n\\n\x3c!--truncate--\x3e\\n\\n## Node.js is now optional\\n\\nTitle may seem confusing at first, but don\'t worry, everything is fine! For some context, moon has\\nbeen designed to be language agnostic as we plan to support more than JavaScript in the future.\\nHowever, some aspects of the codebase were hard-coded for JavaScript and made the assumption that\\nJavaScript will always be used, with one such aspect being the\\n[`node`](../docs/config/workspace#node) setting in\\n[`.moon/workspace.yml`](../docs/config/workspace).\\n\\nWe\'ve reworked this setting to be optional, which allows a repository to opt out of JavaScript.\\nRight now, this basically does nothing as we do not support other languages yet, but we felt it\\nnecessary to report it anyways! A side-effect of this change is that actions in the runner have been\\nrenamed, for example, `SetupToolchain` -> `SetupNodeToolchain`.\\n\\n## Improved hashing accuracy\\n\\nOur [smart hashing layer](../docs/concepts/cache#hashing) is pretty powerful, but was not entirely\\naccurate. Up until now, when hashing a Node.js project, we\'d include the `dependencies`,\\n`devDependencies`, and `peerDependencies` versions located within the project\'s `package.json` as\\nhash inputs. This was great, because if a dependency was explicitly upgraded in the `package.json`,\\nit would invalidate the previous hashes as the version number changed.\\n\\nHowever, what if the dependency was implicitly upgraded by another project, but the `package.json`\\nwas not modified? These kind of transitive changes were currently ignored by moon, but no longer, as\\nmoon will now resolve all `package.json` dependencies to the resolved version found in the root\\nlockfile (`package-lock.json`, `yarn.lock`, etc)!\\n\\nAt moon, we believe in providing consumers with the ability to configure to their needs, and as\\nsuch, have added a new [`hasher`](../docs/config/workspace#hasher) setting to\\n[`.moon/workspace.yml`](../docs/config/workspace). This setting will allow you to choose between the\\n2 hashing patterns above!\\n\\n## New `moon check` command\\n\\nIf you\'re like us, you\'re constantly testing, linting, typechecking, so on and so forth, a project\\nwhile developing. This was rather cumbersome, as you either had to use separate run commands\\n(`moon run project:test`, `moon run project:lint`, etc), or use the multi-run approach\\n(`moon run project:test project:lint`). Both approaches were not ideal for rapid development.\\n\\nTo simplify this process, we\'ve added a new [`moon check`](../docs/commands/check) command, that\\nwill automatically run _all_ build and test tasks for a project (or many projects)! Local and non-CI\\ntasks will _not_ be ran.\\n\\n```shell\\n# Check project at current working directory\\n$ moon check\\n\\n# Check project by name\\n$ moon check app\\n\\n# Check multiple projects by name\\n$ moon check client server\\n```\\n\\n## New `@moonrepo/types` package\\n\\nWe have many ideas for moon specific npm packages that we plan to release, but before we do that, we\\nneed to ensure all of them are built with the correct interfaces. To solve this, we are shipping a\\nnew package, [@moonrepo/types](https://www.npmjs.com/package/@moonrepo/types), that simply publishes\\nTypeScript declarations. It contains everything from project and task shapes, configuration\\nstructures, runner information, and more.\\n\\n```ts\\nimport type { ProjectConfig } from \'@moonrepo/types\';\\n```\\n\\n## Other changes\\n\\nView the\\n[official release](https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.13.0) for a\\nfull list of changes.\\n\\n- The runner will now fail with an error if a task has defined `outputs` but an output was not\\n  created after the task is executed. This change was made so that artifacts are deterministic.\\n- The `actionRunner` setting in [`.moon/workspace.yml`](../docs/config/workspace) was renamed to\\n  `runner`.\\n\\n## What\'s next?\\n\\nExpect the following in the v0.14 release!\\n\\n- A `moon generate` command to generate new projects, files, scaffolding, and more from pre-defined\\n  templates.\\n- Implicit dependency discovery. moon will now scan manifest files and determine project\\n  relationships."}]}')}}]);