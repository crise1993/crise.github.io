(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{574:function(e,v,_){"use strict";_.r(v);var a=_(65),s=Object(a.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"nodejs-package包管理指南"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-package包管理指南"}},[e._v("#")]),e._v(" Nodejs package包管理指南")]),e._v(" "),_("p",[e._v("在开发"),_("code",[e._v("Node.js")]),e._v("项目时，包管理是至关重要的。它有助于我们管理依赖项，确保项目的可维护性和稳定性。在 Node.js 的包管理系统中，有三种主要的依赖关系："),_("code",[e._v("dependencies")]),e._v("、"),_("code",[e._v("devDependencies")]),e._v(" 和 "),_("code",[e._v("peerDependencies")]),e._v("。")]),e._v(" "),_("p",[e._v("本文一开始将详细解释"),_("code",[e._v("npm版本")]),e._v("的格式和符号，然后围绕"),_("code",[e._v("dependencies")]),e._v("、"),_("code",[e._v("devDependencies")]),e._v("、"),_("code",[e._v("peerDependencies")]),e._v("，深入分析每种依赖的作用、使用场景、安装方式和版本号使用说明。")]),e._v(" "),_("h2",{attrs:{id:"npm、yarn、pnpm包管理工具"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#npm、yarn、pnpm包管理工具"}},[e._v("#")]),e._v(" npm、yarn、pnpm包管理工具")]),e._v(" "),_("h2",{attrs:{id:"package-lock-json、yarn-lock、pnpm-lock-yaml作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#package-lock-json、yarn-lock、pnpm-lock-yaml作用"}},[e._v("#")]),e._v(" package-lock.json、yarn.lock、pnpm-lock.yaml作用")]),e._v(" "),_("h2",{attrs:{id:"npm版本号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#npm版本号"}},[e._v("#")]),e._v(" npm版本号")]),e._v(" "),_("h3",{attrs:{id:"版本格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本格式"}},[e._v("#")]),e._v(" 版本格式")]),e._v(" "),_("p",[e._v("版本格式：主版本号.次版本号.修订号，版本号递增规则如下：")]),e._v(" "),_("ul",[_("li",[e._v("主版本号（Major）：当你做了不兼容的 API 修改")]),e._v(" "),_("li",[e._v("次版本号（MINOR）：当你做了向下兼容的功能性新增")]),e._v(" "),_("li",[e._v("修订号（PATCH）：当你做了向下兼容的问题修正")])]),e._v(" "),_("p",[e._v("先行版本号及版本编译信息可以加到“主版本号.次版本号.修订号”的后面，作为延伸。")]),e._v(" "),_("h3",{attrs:{id:"版本符号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本符号"}},[e._v("#")]),e._v(" 版本符号")]),e._v(" "),_("p",[e._v("版本符号属于"),_("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("语义化版本规范（Semantic Versioning，也称为 SemVer）"),_("OutboundLink")],1),e._v("的一部分。")]),e._v(" "),_("p",[_("code",[e._v("package.json")]),e._v(" 中包括版本范围的符号有：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("^")]),e._v(" 符号表示接受与指定版本相同主版本下的所有次版本和修订版本更新，但不包括新的主版本。")]),e._v(" "),_("li",[_("code",[e._v("~")]),e._v(" 符号表示接受与指定版本号相同的主版本和次版本，但允许修订版本更新。")]),e._v(" "),_("li",[_("code",[e._v(">")]),e._v(" 符号表示接受比指定版本号更高的任何版本。")]),e._v(" "),_("li",[_("code",[e._v(">=")]),e._v(" 符号表示接受等于或高于指定版本号的任何版本。")]),e._v(" "),_("li",[_("code",[e._v("<")]),e._v(" 符号表示接受比指定版本号更低的任何版本。")]),e._v(" "),_("li",[_("code",[e._v("<=")]),e._v(" 符号表示接受等于或低于指定版本号的任何版本。")]),e._v(" "),_("li",[_("code",[e._v("=")]),e._v(" 符号用于精确指定特定版本号。")])]),e._v(" "),_("p",[_("code",[e._v("^")]),e._v(" 符号指定的版本范围不包括 "),_("code",[e._v("预发布版本（prerelease）")]),e._v("。\n"),_("code",[e._v("~")]),e._v("有助于确保您的项目不会在次要更新时遇到不兼容的更改，但可以获得修复和改进的更新。\n"),_("code",[e._v(">")]),e._v("和"),_("code",[e._v(">=")]),e._v("有助于确保您的项目不会安装低于指定版本的包，从而确保您在使用依赖包时至少具有某个最低功能或修复。\n"),_("code",[e._v("<")]),e._v("和"),_("code",[e._v("<=")]),e._v("确保您的项目不会安装具有更高版本的包，以避免可能引入的不兼容性或更改。\n"),_("code",[e._v("=")]),e._v("确保您的项目使用特定版本的包。")]),e._v(" "),_("h2",{attrs:{id:"dependencies-生产依赖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-生产依赖"}},[e._v("#")]),e._v(" dependencies（生产依赖）")]),e._v(" "),_("p",[_("code",[e._v("dependencies")]),e._v(" 中列出的包是项目在生产环境中所需的依赖项。这些包是项目的核心构建块，它们负责项目的主要功能。")]),e._v(" "),_("h3",{attrs:{id:"使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[e._v("#")]),e._v(" 使用场景")]),e._v(" "),_("p",[e._v("常见的应用程序或项目的核心依赖应该列在 dependencies 中。")]),e._v(" "),_("p",[e._v("例如：如果你正在构建一个 Web 服务器，Express.js 可能是一个重要的生产依赖，因为它用于处理路由和 HTTP 请求。")]),e._v(" "),_("h3",{attrs:{id:"安装方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装方式"}},[e._v("#")]),e._v(" 安装方式")]),e._v(" "),_("p",[e._v("默认情况下，"),_("code",[e._v("npm install")]),e._v(" 命令会安装 "),_("code",[e._v("dependencies")]),e._v(" 和 "),_("code",[e._v("devDependencies")]),e._v(" 中列出的所有依赖项。这包括在生产环境和开发环境中使用的所有依赖。")]),e._v(" "),_("p",[e._v("如果您希望只安装生产环境所需的依赖项，可以使用"),_("code",[e._v("--production")]),e._v(" 或 "),_("code",[e._v("--only=prod")]),e._v("选项来排除"),_("code",[e._v("devDependencies")]),e._v("。")]),e._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 仅安装生产依赖 (dependencies)")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --production\n"),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --only"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("prod\n")])])]),_("h3",{attrs:{id:"版本号使用说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本号使用说明"}},[e._v("#")]),e._v(" 版本号使用说明")]),e._v(" "),_("p",[e._v("大多数情况下，"),_("code",[e._v("dependencies")]),e._v("中使用 "),_("code",[e._v("^")]),e._v(" 或 "),_("code",[e._v("~")]),e._v(" 符号来指定版本范围比较常见。")]),e._v(" "),_("p",[e._v("但是针对特定项目，比如 "),_("code",[e._v("项目")]),e._v(" 和 "),_("code",[e._v("项目所依赖的npm包")]),e._v(" 都依赖某个npm包，这时候为了统一npm版本号，避免不同依赖使用不同版本，导致构建输出多份代码的情况，通常便需要使用"),_("code",[e._v("=")]),e._v("或者不加符号来固定版本号。")]),e._v(" "),_("h2",{attrs:{id:"devdependencies-开发依赖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#devdependencies-开发依赖"}},[e._v("#")]),e._v(" devDependencies（开发依赖）")]),e._v(" "),_("p",[_("code",[e._v("devDependencies")]),e._v(" 中列出的包是仅用于开发、测试和构建项目的依赖项。它们在生产构建中不会被包含。")]),e._v(" "),_("h3",{attrs:{id:"使用场景-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-2"}},[e._v("#")]),e._v(" 使用场景")]),e._v(" "),_("p",[e._v("这些依赖用于项目的开发和维护，如测试库、代码规范检查工具、构建工具等。")]),e._v(" "),_("p",[e._v("例如，"),_("code",[e._v("Mocha")]),e._v(" 或 "),_("code",[e._v("Jest")]),e._v(" 可能是测试的开发依赖，而 "),_("code",[e._v("Babel")]),e._v(" 可能是构建工具的开发依赖。")]),e._v(" "),_("h3",{attrs:{id:"安装方式-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装方式-2"}},[e._v("#")]),e._v(" 安装方式")]),e._v(" "),_("p",[e._v("您可以使用"),_("code",[e._v("npm install --only=dev")]),e._v(" 或 "),_("code",[e._v("npm install --dev")]),e._v("命令来安装"),_("code",[e._v("devDependencies")]),e._v("。这将确保只安装开发依赖，而不会包含生产依赖。")]),e._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 仅安装开发依赖 (devDependencies)")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --dev\n"),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --only"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("dev\n")])])]),_("h3",{attrs:{id:"版本号使用说明-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本号使用说明-2"}},[e._v("#")]),e._v(" 版本号使用说明")]),e._v(" "),_("p",[e._v("对于 "),_("code",[e._v("devDependencies")]),e._v("，通常使用宽松的版本范围，以便允许在开发期间更新依赖，但不升级到不兼容的版本。这通常使用 "),_("code",[e._v("^")]),e._v(" 或 "),_("code",[e._v("~")]),e._v(" 前缀来指定版本范围。")]),e._v(" "),_("h2",{attrs:{id:"peerdependencies-对等依赖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#peerdependencies-对等依赖"}},[e._v("#")]),e._v(" peerDependencies（对等依赖）")]),e._v(" "),_("p",[_("code",[e._v("peerDependencies")]),e._v("用于指定与您的包一起使用的其他包的版本依赖关系。这有助于确保您的包与特定版本的其他包兼容。")]),e._v(" "),_("h3",{attrs:{id:"使用场景-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-3"}},[e._v("#")]),e._v(" 使用场景")]),e._v(" "),_("ul",[_("li",[e._v("通常在创建一个公开可用的library时使用（比如npm包）。您可以指定您的包依赖于另一个包的特定版本，以确保其他开发人员在使用您的包时不会遇到不兼容的问题。")]),e._v(" "),_("li",[e._v("也可用于解决包的多版本共存问题，确保只有特定版本的依赖被使用。")])]),e._v(" "),_("h3",{attrs:{id:"安装方式-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装方式-3"}},[e._v("#")]),e._v(" 安装方式")]),e._v(" "),_("p",[_("code",[e._v("peerDependencies")]),e._v("不会自动安装。当其他开发人员安装您的包时，"),_("code",[e._v("npm")]),e._v(" 会提醒他们安装与 "),_("code",[e._v("peerDependencies")]),e._v(" 中指定的包版本匹配的包。")]),e._v(" "),_("h3",{attrs:{id:"版本号使用说明-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本号使用说明-3"}},[e._v("#")]),e._v(" 版本号使用说明")]),e._v(" "),_("p",[e._v("在 "),_("code",[e._v("peerDependencies")]),e._v(" 中，通常会指定精确的版本号"),_("code",[e._v("=")]),e._v("或允许某个范围的版本。这是因为您希望确保与其他包的特定版本兼容。")])])}),[],!1,null,null,null);v.default=s.exports}}]);