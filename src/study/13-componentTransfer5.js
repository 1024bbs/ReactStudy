import React from "react"
import ReactDom,{render} from "react-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'


//创建一个容器
let store=[];
class A extends React.Component{
    componentDidMount(){
        let {store}=this.props
        localStorage.removeItem('pubMsg')
        setTimeout(()=>{
            //重新设置
            localStorage.setItem('pubMsg',"最新的值:修改成功了");
            store.forEach(item=>item())
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
        let {store}=this.props;
        store.push(()=>{
            //=>获取本地最新的pubMsg  赋值给组件的state状态
            this.setState({msg:localStorage.getItem('pubMsg')})
        })
    }
    render(){
        return <div>
            我是BBBBBBB
            <span style={{color:'red'}}>{this.state.msg}</span>
        </div>
    }
}

render(<div>
    <A store={store}/>
    <B store={store}/>
</div>,window.root)

/*
*     基于本地存储 +   发布订阅
*     1.创建一个容器(store)  调取A/B 组件的时候 把容器通过属性传递给每一个组件
*     2.在A组件中 我们在指定条件下 把需要传递给B组件的信息 存储到本地(基于localStorage/cookie),同时通知Store容器中存储的方法依次执行
*     3.B组件中把一个后续执行的方法放到STORE中 而这个方法的目的:获取本地最新存储的信息,通过修改组件的状态,完成信息的重新渲染
*     
* */