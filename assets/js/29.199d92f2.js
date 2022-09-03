(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{407:function(t,a,s){"use strict";s.r(a);var c=s(1),i=Object(c.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{attrs:{align:"center"}},[a("h1",[t._v("String 类型")])]),t._v(" "),a("h2",{attrs:{id:"string-本质是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-本质是什么"}},[t._v("#")]),t._v(" String 本质是什么？？？")]),t._v(" "),a("ul",[a("li",[t._v("String 类型 在"),a("code",[t._v("java.lang")]),t._v(" 导出的。在"),a("code",[t._v("java.lang")]),t._v("语言包中的变量以及方法 无需显式导入\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/bebb6cbd8bf64c1f83ba0a6560027a33.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("li",[t._v("字符串就是由多个字符拼接而成的。所以可以理解为字符串\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/e284ad4a78c6418ea92c1da58b3cdd33.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("li",[t._v("以及任何字符串 都是 String 类型的实例\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/d07cbf324ab44aa2b040fa89d8087f07.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("li",[t._v("字符串是不可变的，他们的值被创建后是无法再次修改的。就是因为字符串对象不可变的，所以在常量池中是可以共享的")]),t._v(" "),a("li",[t._v("字符串本质上就是一个字符数组，就是由多个字符组成的\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/b1805b85723c4ede89dd6a5c678512f4.png",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/1640606314ca43f6a7e828de0515599d.png",alt:"在这里插入图片描述"}})])]),t._v(" "),a("h2",{attrs:{id:"刨析equals方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刨析equals方法"}},[t._v("#")]),t._v(" 刨析"),a("code",[t._v("equals")]),t._v("方法")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/b450d5e10f9d478d8dda5b70f957c14e.png#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"刨析comparto方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刨析comparto方法"}},[t._v("#")]),t._v(" 刨析"),a("code",[t._v("comparTo")]),t._v("方法")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/46d489cfba7c4efe905c24568a7e338f.png#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"string-类型声明的-内存分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-类型声明的-内存分析"}},[t._v("#")]),t._v(" String 类型声明的 内存分析")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/1b397c2ea4f148c6ac98a23c603baa62.png#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"stringbuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringbuilder"}},[t._v("#")]),t._v(" StringBuilder")]),t._v(" "),a("blockquote",[a("p",[t._v("字符串分为可变以及非可变的。例如:"),a("code",[t._v("String s = '';")]),t._v("就是非可变的")])]),t._v(" "),a("h3",{attrs:{id:"空构造函数过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空构造函数过程"}},[t._v("#")]),t._v(" 空构造函数过程")]),t._v(" "),a("ul",[a("li",[a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/f48c64deb1454475b05a90f2f0327b4d.png",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/d661d66b9466417baf4f589039ec5d02.png",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/b687359bdee2417d96f8d778c2445dcd.png",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[t._v("通过上述实例 可以看到。其实"),a("code",[t._v("StringBuilder")]),t._v(" 的本质就是"),a("code",[t._v("new char")]),t._v("的过程")])])]),t._v(" "),a("h3",{attrs:{id:"传递-int-参数的-构造函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传递-int-参数的-构造函数"}},[t._v("#")]),t._v(" 传递 int 参数的 构造函数")]),t._v(" "),a("ul",[a("li",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/e728e1b7de334d5a98e0c16104f84847.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("li",[t._v("跟上述图例 2 中内容保持一致")])]),t._v(" "),a("h3",{attrs:{id:"传递-string-参数的-构造函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传递-string-参数的-构造函数"}},[t._v("#")]),t._v(" 传递 string 参数的 构造函数")]),t._v(" "),a("ul",[a("li",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/a53ae51e129c4c368396d5720dea41e6.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("li",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/81a4c3b7e0124c17ab0edd7621cfd1ba.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("li",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/45e27bcda24c4fe1a6ad31ab27c142df.png",alt:"在这里插入图片描述"}})])])])}),[],!1,null,null,null);a.default=i.exports}}]);