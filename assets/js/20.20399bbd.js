(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{436:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{attrs:{align:"center"}},[t("h1",[s._v("数据密封/ 冻结")])]),s._v(" "),t("blockquote",[t("p",[s._v("今天的目的主要是分享下在开发过程中，我们如何做到数据不可修改，有哪几种技术方案呢")])]),s._v(" "),t("h3",{attrs:{id:"object-preventextensions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-preventextensions"}},[s._v("#")]),s._v(" Object.preventExtensions")]),s._v(" "),t("hr"),s._v(" "),t("h4",{attrs:{id:"_1-定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义"}},[s._v("#")]),s._v(" 1. 定义")]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("Object.preventExtensions() 方法让一个对象变的不可扩展，永远不能添加新的属性")]),s._v(" "),t("li",[s._v("对象原型上依然可以添加属性")]),s._v(" "),t("li",[s._v("一旦对象设置为不可扩展，就不能设置为可扩展")]),s._v(" "),t("li",[s._v("严格模式下，给一个不可扩展的属性赋值的话，会报错")])])]),s._v(" "),t("h4",{attrs:{id:"_2-判断方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-判断方法"}},[s._v("#")]),s._v(" 2. 判断方法")]),s._v(" "),t("blockquote",[t("p",[s._v("Object.isExtensible 如果是true 表示可以扩展/ 反之就是不可以扩展")])]),s._v(" "),t("h4",{attrs:{id:"_3-代码实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码实例"}},[s._v("#")]),s._v(" 3. 代码实例")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("preventExtensions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lihh'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("age")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("school")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { name: 'lihh', age: 20, school: {} }")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ---- 删除操作 ----")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {age: 20, school: {}}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ---- 修改操作 ----")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {age: 21, school: {}}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ---- 添加操作 ----")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("address "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shandong'")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ❌  {age: 21, school: {}}  添加失败")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// --- 添加更深层的属性 -----")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("school"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'大学'")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {age: 21, school: {name: '大学'}}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("blockquote",[t("ul",[t("li",[s._v("通过上述实例可以得出：")]),s._v(" "),t("li",[s._v("使用API"),t("code",[s._v("Object.preventExtensions")]),s._v(" 的时候，对象不可扩展属性("),t("code",[s._v("无法添加新的属性")]),s._v(")")]),s._v(" "),t("li",[s._v("但是如果是对象中嵌套对象的话，里层对象还是可以添加属性的("),t("code",[s._v("对深层对象没有效果")]),s._v(")")])])]),s._v(" "),t("h3",{attrs:{id:"object-seal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-seal"}},[s._v("#")]),s._v(" Object.seal")]),s._v(" "),t("hr"),s._v(" "),t("h4",{attrs:{id:"_1-定义-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义-2"}},[s._v("#")]),s._v(" 1. 定义")]),s._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[s._v("Object.seal")]),s._v(" 方法封装一个对象，阻止添加新的属性并将现有属性标记为不可配置，当前属性的值只要原来是可写的就可以改变("),t("code",[s._v("不可添加，不可删除")]),s._v(")")]),s._v(" "),t("li",[s._v("不可配置：不可删除/ 一个属性不能被 重新定义为可访问属性")]),s._v(" "),t("li",[t("code",[s._v("__proto__")]),s._v(" 属性也是不能修改")])])]),s._v(" "),t("h4",{attrs:{id:"_2-判断方法-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-判断方法-2"}},[s._v("#")]),s._v(" 2. 判断方法")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("Object.isSealed")]),s._v(" 判断属性是否密封。如果为true表示没有密封。反之就是已经密封")])]),s._v(" "),t("h4",{attrs:{id:"_3-代码实例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码实例-2"}},[s._v("#")]),s._v(" 3. 代码实例")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("seal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lihh'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("age")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("school")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改之前")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { name: 'lihh', age: 20, school: {} }")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 属性删除")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// × 删除失败 { name: 'lihh', age: 20, school: {} }")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 属性修改")]),s._v("\ninfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { name: 'lihh', age: 21, school: {} }")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 属性添加")]),s._v("\ninfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("address "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanxi"')]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加失败 { name: 'lihh', age: 20, school: {} }")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 深层属性添加")]),s._v("\ninfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("school"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'大学'")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { name: 'lihh', age: 20, school: {name: '大学'} }")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("blockquote",[t("ul",[t("li",[s._v("通过上述实例可以得出：")]),s._v(" "),t("li",[s._v("使用API"),t("code",[s._v("Object.seal")]),s._v(" 的时候，对象不可删除/ 不可添加/ 可以修改")]),s._v(" "),t("li",[s._v("但是如果是对象中嵌套对象的话，里层对象还是可以添加/删除 属性的("),t("code",[s._v("对深层对象没有效果")]),s._v(")")])])]),s._v(" "),t("h3",{attrs:{id:"object-freeze"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-freeze"}},[s._v("#")]),s._v(" Object.freeze")]),s._v(" "),t("hr"),s._v(" "),t("h4",{attrs:{id:"_1-定义-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义-3"}},[s._v("#")]),s._v(" 1. 定义")]),s._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[s._v("Object.freeze")]),s._v(" 方法可以冻结一个对象，一个被冻结的对象，不能给其添加新属性/ 修改属性/ 删除属性。")]),s._v(" "),t("li",[s._v("不能修改该对象已有属性的可枚举性，可配置性，可写性，以及不能修改已有属性的值")]),s._v(" "),t("li",[s._v("冻结一个对象后该对象的原型也不能被修改。")])])]),s._v(" "),t("h4",{attrs:{id:"_2-判断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-判断"}},[s._v("#")]),s._v(" 2. 判断")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("Object.isFrozen")]),s._v(" 判断结果如果是true表示没有被冻结，反之表示已经被冻结")])]),s._v(" "),t("h4",{attrs:{id:"_3-代码实例-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码实例-3"}},[s._v("#")]),s._v(" 3. 代码实例")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("freeze")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lihh'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("age")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("school")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 原始属性")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { name: 'lihh', age: 20, school: {} }")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改属性")]),s._v("\ninfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改失败 { name: 'lihh', age: 20, school: {} }")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除属性")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除失败 { name: 'lihh', age: 20, school: {} }")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加属性")]),s._v("\ninfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("address "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加失败 { name: 'lihh', age: 20, school: {} }")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更加深层次添加属性")]),s._v("\ninfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("school"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'大学'")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { name: 'lihh', age: 20, school: {name: '大学'} }")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("blockquote",[t("ul",[t("li",[s._v("通过上述实例可以得出：")]),s._v(" "),t("li",[s._v("使用API"),t("code",[s._v("Object.freeze")]),s._v(" 的时候，对象不可删除/ 不可添加/ 不可修改/ 不可配置")]),s._v(" "),t("li",[s._v("但是如果是对象中嵌套对象的话，里层对象还是可以添加/删除 属性的("),t("code",[s._v("对深层对象没有效果")]),s._v(")")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);