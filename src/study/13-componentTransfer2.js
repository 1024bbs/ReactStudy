import React from "react"
import ReactDom,{render} from "react-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class P extends React.Component{
    constructor(){
        super();
        this.state={
            msg:''
        }
    }
    fn=msg=>{
        this.setState({
            msg
        })
    }
    render(){
        return <div>
            <A callback={this.fn}/>
            <B msg={this.state.msg}/>
        </div>
    }
}
class A extends React.Component{
    componentDidMount(){
        //第一次组件渲染完成
        setTimeout(()=>{
            let {callback}=this.props
            callback &&callback("我是B   我的内容是A传过来的")
        },2000)
    }
    render(){
        return <div>我是AAAAA</div>
    }
}
class B extends React.Component{
    render(){
        return <div>
            {this.props.msg}
        </div>
    }
}

render(<div>
    <P/>
</div>,window.root)

/*
*    平行组件之间的信息传递
*    所谓平行组件,不像父子组件一样存在嵌套关系,两个组件是独立的,没有必然的联系.此时就不能像父子组件一样,基于属性进行信息传递了.那么平行组件之间想要实现信息传递,该如何处理呢
*
*
*  第一种方案: 让平行组件拥有共同的父级组件
*  例如:有A/B两个平行组件  我们创建一个共同的父组件P , A想把信息传递给B,我们按照如下步骤完成:
*  1>. A先把信息传递给P (基于父子组件之间回调函数机制)
*  2>. P把A传递的信息 传递给B即可
*
*  这种方案有自己的弊端
*  1.嵌套一个父组件  信息传递的步骤过于繁琐
*  2.项目中很多时候两个平级组件之间我们很难找到共同的父组件
* */