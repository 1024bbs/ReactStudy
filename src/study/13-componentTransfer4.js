import React from "react"
import ReactDom,{render} from "react-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'


class A extends React.Component{
    componentDidMount(){
        localStorage.removeItem('pubMsg')
        setTimeout(()=>{
            //利用本地存储  名字:pubMsg  值:Hello
            localStorage.setItem('pubMsg',"Hello")
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
        //=>第一次首先记录一下现有的值
        let pubMsg=localStorage.getItem('pubMsg');
        let old_pubMsg=pubMsg;
        setInterval(()=>{
            //=>每间隔一段时间重新从本地获取  和原有进行比较 不同则重新渲染组件
            let pubMsg=localStorage.getItem('pubMsg');
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
*     A组件基于本地存储   +   B组件实时监听   还是耗费性能
*
* */