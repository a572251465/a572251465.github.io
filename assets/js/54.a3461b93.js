(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{449:function(l,e,t){"use strict";t.r(e);var _=t(1),v=Object(_.a)({},(function(){var l=this,e=l._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[e("div",{attrs:{align:"center"}},[e("h1",[l._v("小顶堆")])]),l._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/ceb186972f3a46d490a102ef26e87a7d.png#pic_center",alt:"小顶堆"}})]),l._v(" "),e("ul",[e("li",[e("p",[l._v("完全二叉树：")]),l._v(" "),e("ul",[e("li",[l._v("一棵深度为 k 的有 n 个结点的二叉树，对树中的结点按从上至下、从左到右的顺序进行编号，如果编号为 i（1≤i≤n）的结点与满二叉树中编号为 i 的结点在二叉树中的位置相同，则这棵二叉树称为完全二叉树")]),l._v(" "),e("li",[l._v("一棵深度为 k 且有个结点的二叉树称为满二叉树")]),l._v(" "),e("li",[l._v("叶子结点只能出现在最下层和次下层，且最下层的叶子结点集中在树的左部")]),l._v(" "),e("li",[l._v("如果完全二叉树缺少节点，那一定在右侧\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/21b8f1c887d844c4ad541488b1c68c80.png#pic_center",alt:"完全二叉树"}})])])]),l._v(" "),e("li",[e("p",[l._v("小顶堆：")]),l._v(" "),e("ul",[e("li",[l._v("必须是一个完全二叉树(满足二叉树的所有的性质)")]),l._v(" "),e("li",[l._v("任何子树中必须满足父元素小于任何子元素的值")])])]),l._v(" "),e("li",[e("p",[l._v("需要实现的方法：")]),l._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[l._v("peek(): T | boolean")]),l._v(" 查询堆顶的数据，但是不修改数据")]),l._v(" "),e("li",[e("code",[l._v("poll(): T | boolean")]),l._v(" 从堆顶弹出一个元素，调整结构(堆尾元素添加到堆顶，并且开始下调整)")]),l._v(" "),e("li",[e("code",[l._v("offer(value: T): boolean")]),l._v(" 从堆底添加一个元素，调整结构(上调整)")]),l._v(" "),e("li",[e("code",[l._v("isEmpty(): boolean")]),l._v(" 判断堆是否为空")]),l._v(" "),e("li",[e("code",[l._v("size(): number")]),l._v(" 返回堆的长度")])])])]),l._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/a572251465/w-hooks/blob/main/packages/src/useHeap/SmallHeap.ts",target:"_blank",rel:"noopener noreferrer"}},[l._v("实现案例"),e("OutboundLink")],1)]),l._v(" "),e("ul",[e("li",[l._v("求最值 场景使用最多(比如：获取前 5 个最大值)")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);