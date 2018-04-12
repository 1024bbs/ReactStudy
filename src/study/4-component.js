import React from "react"
import {render} from "react-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

//组件 能够被重复使用 都可以被称为组件 react设计的初衷就是组件开发
// 1.函数声明式
// 2.基于react component组件类创建组件
//

class Dialog extends React.Component{
    static defaultProps={
        title:"我是默认值1",
        content:"我也是默认值2"
    }
    static propTypes={
        title:PropTypes.string.isRequired,
        content:PropTypes.string,
    };
    constructor(props){
        super(props);
        console.log(this.props);
    }
    /*  render必须写 并且此方法必须返回一个jsx元素 */
   render(){
       let{title,content}=this.props
       return <div>
           <h2>{title}</h2>
           <h2>{content}</h2>
       </div>;
   }
}


render(<div>
    <Dialog title='这是传入的值'/>
    <Dialog />
</div>,window.root)

