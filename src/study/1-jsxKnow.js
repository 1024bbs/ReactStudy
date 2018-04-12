//入口js文件
//可以导入css/js 文件
//import "./css/style1.css"
import React from "react"
import ReactDom,{render} from "react-dom"
//ReactDom 中的render方法可以单独导出 需要解构 使用的时候可以直接使用
//react分为两部分 react  react-dom


//<h1>hello,world</h1>  JSX语法
/*
 JSX:JavaScript+xml  html是xml的一种 所以可以看成是JavaScript+html语法
 跟我们的html不完全一样 一些区别  例如:<h1 class="title">hello,world</h1>
 在JSX中 <h1 className='title'>hello,world</h1>

 1.使用{ }绑定事件
 2. 一般使用小括号包起来
 3.必须有且只有一个根元素
 4.
* */

//将react-dom元素渲染到页面上

let rDom=(//一般使用小括号包起来
    <div>
        
        {/*注释的写法*/}
        <h1>hello</h1>
        <h2>2018-3-5</h2>
    </div>
);
ReactDom.render(rDom,window.root)

