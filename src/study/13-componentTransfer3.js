import React from "react"
import ReactDom,{render} from "react-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

let pubMsg=''
class A extends React.Component{

    componentDidMount(){
        setTimeout(()=>{
            pubMsg='hello world'
        },2000)
    }
    render(){
        return <div>我是AAAAA</div>
    }
}
class B extends React.Component{
    constructor(){
        super();
        this.state={
            msg:''
        }
    }
    componentDidMount(){
        let old_pubMsg=pubMsg;
        setInterval(()=>{
            if(pubMsg!==old_pubMsg){
                old_pubMsg=pubMsg;
                this.setState({msg:pubMsg})
            }
        },0)
    }
    render(){
        return <div>
            我是BBBBBBB
            <span style={{color:'red'}}>{this.state.msg}</span>
        </div>
    }
}

render(<div>
    <A/>
    <B/>
</div>,window.root)

/*
*   定义一个变量
*   A组件修改变量
*   B组件需要实时箭头 一旦变量改变 就去重新设置
*
*   但是通常我们把组件写在component文件夹中   只能将变量挂载到全局window  但是这样会可能会造成全局变量的冲突
* */