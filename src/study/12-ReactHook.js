import React from "react"
import ReactDom,{render} from "react-dom"

/*  REACT组件的生命周期
*  static defaultProps={}  处理组件传递的属性 (传值/默认值/设置属性值规则)
*
*  //=>第一次调用组件
*  constructor
*  componentWillMount  渲染之前
*  render 组件渲染
*  componentDidMount   渲染之后
*
*  //=>状态更新 组件重新渲染
*  shouldComponentWillMount  设置是否允许组件重新渲染  当组件的属性或者状态发生修改 就会触发这个钩子函数执行  nextProps nextState => boolen
*  componentWillUpdata
*  render
*  componentDidUpdata
*
*  //=>组件卸载
*  componentWillUnmount 卸载之前
*
*  //=>组件的属性发生改变(组件内部无法修改自己的属性信息,只有重新调取组件的时候传递不同的信息过来)
*  componentWillReceiveProps
*
* */

class Temp extends React.Component{
    constructor(){
        super();
        this.state={msg:'hello world'}
        console.log(`1=>执行构造函数`);
    }
    componentWillMount(){
        console.log(`2=>第一次渲染之前`);
    }
    componentDidMount(){
        console.log(`4=>第一次渲染之后`);
        //=>2000ms后重新渲染组件
        // setTimeout(()=>{
        //     this.setState({
        //         msg:'我真帅'
        //     })
        // },2000)
    }
    /* shouldComponentUpdate/componentWillUpdate
     *  通过this.state获取的值还是之前的状态值
     *  但是真实项目当中 我们在这个两个钩子函数当中  更想获取的是即将修改的状态值   而不是原来的状态值
     *  这种情况下 react提供钩子函数的参数 这些参数就是最新的值
      */
    shouldComponentUpdate(nextProps,nextState){
        console.log(`5=>是否允许更新,返回TRUE是允许,返回FALSE是不允许`, this.state.msg,nextProps,nextState);
        if(this.state.msg===nextState.msg){
            //=>重新设置的属性值和之前的属性值是一样的此时就不需要重新渲染更新
        }
        return true
    }
    componentWillUpdate(){
        console.log(`6=>更新之前`, this.state.msg);
    }
    componentDidUpdate(){
        console.log(`7=>更新之后`, this.state.msg);
    }
    //=>属性改变
    componentWillReceiveProps(nextProps,nextState){
        //优先于shouldComponentUpdate执行(它控制的是属性已经修改了  should控制的是是否允许组件重新渲染)
        //此时获取的props是之前的
        console.log(`属性更改了`,nextProps);
    }
    render(){
        console.log(`3=>渲染组件`);
        return <h2>
            {this.state.msg}
        </h2>
    }
}
class Box extends React.Component{
    constructor(){
        super()
        this.state={
            n:10
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                n:++this.state.n
            })
        },2000)
    }
    render(){
        return <div>
            <h2>请说:</h2>
            <Temp n={this.state.n}/>{/*父组件把自己的状态信息当做属性值传递给子组件*/}
        </div>
    }
}
render(<div>
    <Box/>
</div>,window.root)