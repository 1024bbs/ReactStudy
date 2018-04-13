import React from "react"
import ReactDom,{render} from "react-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class Panel extends React.Component{
    constructor(){
        super();
        this.state={num:0}
    }
    fn=n=>{
        this.setState({
            num:n,
        })
    }
    render(){
        let {title,con}=this.props
        return <div className='panel panel-default'>
            <Header title={title} callback={this.fn}></Header>
            <p style={{fontSize:"30px"}}>计数器的结果是{this.state.num}</p>
        </div>
    }
}
class Header extends React.Component{
    componentDidMount(){
        let {callback}=this.props;
        let n=0;
        setInterval(()=>{
            n++;
            callback(n);
        },1000)
    }
    render(){
        let {title}=this.props;
        return <header className='panel panel-heading'>
            <h2 className='panel-title'>
                {title}
            </h2>
        </header>
    }
}
class Body extends React.Component{
    render(){
        return <main className='panel-body'>

        </main>
    }
}


render(<div>
    <Panel title='警告' con='你是不是喜欢我?'/>
</div>,window.root)


/*
*    复合组件(父组件套子组件)
*
*    父子组件之间的信息传递是单向的(只能父组件把信息传递给子组件),通过属性进行传递
*
*    项目中 除了父组件需要把信息传递给子组件 项目中 子组件也想传递给父组件  我们应该如何处理
*    利用js中的回调函数机制 可以完成这个操作(原理类似jsonp)
*    1.父组件把自己的一个方法通过属性传递给子组件(子组件中就可以获取父组件的这个方法了)
*    2.在子组件中把父组件传递的方法执行,把子组件中的一些信息传递给父组件,基于这套回调机制,完成了组件传递信息给父组件
*
*
*

*   更复杂的信息传递(例如:也有组件想把一些信息传递给孙子组件) 依然是基于属性进行传递,集体操作:爷爷组件先通过属性信息传递给父组件,父组件把接受的信息在传递给孙子组件(也是通过属性传递),以此类推,一层层的进行传递即可
* */
