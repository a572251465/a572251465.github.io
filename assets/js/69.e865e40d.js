(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{464:function(t,e,a){"use strict";a.r(e);var s=a(1),c=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("hr"),t._v(" "),e("h2",{attrs:{id:"theme-channing-cyan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#theme-channing-cyan"}},[t._v("#")]),t._v(" theme: channing-cyan")]),t._v(" "),e("h3",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言：")]),t._v(" "),e("p",[t._v("最近也把手上的几个项目都做了自动化部署操作，把流程简单的以图文形式记录下来。")]),t._v(" "),e("h3",{attrs:{id:"_1-jenkins安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-jenkins安装"}},[t._v("#")]),t._v(" 1.jenkins安装")]),t._v(" "),e("h5",{attrs:{id:"linux安装jenkins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux安装jenkins"}},[t._v("#")]),t._v(" Linux安装jenkins：")]),t._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"https://juejin.cn/post/6940841823036243982",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考上篇文章"),e("OutboundLink")],1)])]),t._v(" "),e("h1",{attrs:{id:"直接上自动化工作流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#直接上自动化工作流"}},[t._v("#")]),t._v(" 直接上自动化工作流")]),t._v(" "),e("h3",{attrs:{id:"流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[t._v("#")]),t._v(" 流程")]),t._v(" "),e("p",[t._v("gitlab 提交代码-> jenkins 触发,执行相应的 shell")]),t._v(" "),e("h3",{attrs:{id:"步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("gitlab建个项目仓库...(已有跳过)")])]),t._v(" "),e("li",[e("p",[t._v("打开 jenkins,登录,按 jenkins 按要求的创建一个项目")]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("1).点击左侧 "),e("code",[t._v("新建item")])]),e("div",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09d7c00445f0491cad8846d33453a3e3~tplv-k3u1fbpfcp-watermark.image",height:"200",width:"200"}})]),e("p")])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("2).输入任务名称(按要求创建), 点击确认\n")]),e("div",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0069fbe70e7f47efa78affcfe6e27cff~tplv-k3u1fbpfcp-watermark.image",height:"150",width:"200"}})]),e("p")])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("3).在 General 下勾选 "),e("code",[t._v("Discard old builds")]),t._v(", 保持构建的天数填入 5,最大个数填 3 (看个人需求)\n")]),e("div",[e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9933fb92e2fc43ff9fcfae59558b089a~tplv-k3u1fbpfcp-watermark.image",height:"150",width:"200"}})]),e("p")])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("4).进入配置界面=> 源码管理处选择 "),e("code",[t._v("Git")]),t._v("-> 填入 git clone 的地址（直接gitlab上复制）\n")]),e("div",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c0705afe7e84c278da8391f09c417d5~tplv-k3u1fbpfcp-watermark.image",height:"150",width:"200"}})]),e("p")])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("5).Credentials 点击添加(添加过的直接左侧选择即可).将自己的 gitlab 账号密码添加进去,完成以后左侧选择你的 git 账号密码")])])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("6).Additional Behaviours 点击新增,选中 Clean before checkout")])])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("7).找到 构建触发器,勾选 "),e("code",[t._v("Build when a change is pushed to GitLab. GitLab webhook URL")]),t._v(", 右侧地址 这个假设为变量 URL\n7和8两步骤在下面的gitlab配置webhook需要用到")])])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("8). 勾选以后,点击高级,点击下方的 Generate,生成 Secret token,")])])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("9). 复制第 7 步的 变量 URL, 和第 8 步的 token,然后执行下面第 3 点,"),e("code",[t._v("gitlab触发jenkins,")])])])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("10). 在下面"),e("code",[t._v("构建")]),t._v(" 处,点击新增构建步骤,先添加 "),e("code",[t._v("Execute Shell")]),t._v(",在命令处填入命令\n")]),e("div",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ddde08382d944fca36445ccd3429276~tplv-k3u1fbpfcp-watermark.image",height:"150",width:"200"}})]),t._v("\n这里命令要根据你部署的项目写相应的命令 我这是简单的安装、打包、替换然后把dist剪切到目标文件夹下\n"),e("div",[e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4c0b17473094208980a39a3c1993a76~tplv-k3u1fbpfcp-watermark.image",height:"150",width:"200"}})]),e("p")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处命令可以自由发挥,可以在代码提交后进行打包,然后部署等等... 这里只做代码打包部署例子")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("$"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yarn"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin\nnvm use "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.16")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("\nyarn cache clean\nyarn install\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("blockquote",[e("blockquote",[e("p",[t._v("11). 点击保存即可, 跳到下方第 4 步")])])])]),t._v(" "),e("li",[e("p",[t._v("gitlab 触发 jenkins,")]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("1). 找到你的 gitlab 项目,点击 settings=>webhooks")])])]),t._v(" "),e("div",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2c26211b21c410c9ff5280c3470f1eb~tplv-k3u1fbpfcp-watermark.image",height:"150",width:"200"}})]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("2). 右侧 URL 填入上面第7步的变量 URL, Secret Token 填入第 8 步生成的生成 Secret token")])])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("3). 勾选 Push events,这个代表你代码 push 上去就会触发 jenkins")])])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("4). 点击 add webhook 会在下方生成一个列表项")])])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("5). 点击下方列表项你方才配置列表项,点击 Test=>Push event 出现 "),e("code",[t._v("Hook executed successfully: HTTP 200")]),t._v(" 即可\n")]),e("div",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b06e03787eb943d9aee51647d5eb7981~tplv-k3u1fbpfcp-watermark.image",height:"150",width:"200"}})]),t._v("\n成功添加webhook,可以点击test，如果成功可以在jenkins看见构建任务执行\n"),e("div",[e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7120f69ef3554176bf94fd030773b9da~tplv-k3u1fbpfcp-watermark.image",height:"150",width:"200"}})]),e("p")])])]),t._v(" "),e("li",[e("p",[t._v("测试")])])]),t._v(" "),e("p",[t._v("回到jenkins首页,进入刚才创建的项目,点击 build-now,下方会出现构建进度,第一次构建可能比较慢\n")]),e("div",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24644496cce749d1a59dc774f68d5007~tplv-k3u1fbpfcp-watermark.image",height:"160",width:"200"}})]),e("p"),t._v(" "),e("p",[t._v("如果出现红色,则代表构建失败,可以点击相关任务,查看控制台输出看是哪里错了,\n")]),e("div",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72b10c96c3384803b56862da25ca69f3~tplv-k3u1fbpfcp-watermark.image",height:"160",width:"200"}})]),t._v("\n如果出现蓝色,则代表成功"),e("p"),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("代码提交测试")])]),t._v(" "),e("p",[t._v("提交新的代码到 gitlab, 提交成功后看下 jenkins 是否有自动进行构建,如果有,则代表整个自动化代码质量测试完成\n")]),e("div",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5dcb5536c304e2f87ce02c281c699dd~tplv-k3u1fbpfcp-watermark.image",height:"160",width:"200"}})]),t._v(" "),e("div",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9184c600f57245c6bb259ebad92d22c8~tplv-k3u1fbpfcp-watermark.image",height:"160",width:"200"}})]),t._v("\n然后外网访问部署地址 发现代码改动的地方确实都变了 说明成功。"),e("p"),t._v(" "),e("h3",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),e("p",[t._v("持续集成是一种软件开发实践，即团队开发成员经常集成他们的工作，通常每个成员至少集成一次，也就意味着每天可能会发生多次集成。每次集成都通过自动化的构建（包括编译，发布，自动化测试）来验证，从而尽快地发现集成错误。许多团队发现这个过程可以大大减少集成的问题，让团队能够更快的开发内聚的软件。")]),t._v(" "),e("p",[t._v("其实我想说 "),e("em",[e("strong",[t._v("亲自动手试试！亲自动手试试！亲自动手试试！")])]),t._v("\n自己去试试 多试几次就会了")])])}),[],!1,null,null,null);e.default=c.exports}}]);