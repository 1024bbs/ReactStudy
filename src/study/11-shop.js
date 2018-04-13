import React from "react"
import ReactDom,{render} from "react-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class Shop extends React.Component{
    constructor(){
        super();
        this.state={
            n:1
        }
    }
    render(){
        console.log("render执行");
        let {n}=this.state
        return <div className='panel panel-default'>
            <div className='panel-heading'>
                单价:¥100.00 <br/>
                总价:¥{n*100}
            </div>
            <div className='panel-body'>
                <a href="javascript:;" className='btn btn-success' onClick={ev=>{
                    if(n===0){
                        //如果在这里重新设置setState  render会重新执行  所以 可以直接 return
                        return;
                    }else{
                        this.setState({
                            n:--n
                        })
                    }
                }
                }>-</a>&nbsp;&nbsp;&nbsp;
                <input type="text" value={n} onChange={ev=>{
                    let val=ev.target.value.trim(),
                       reg=/^\d+(\.\d*)?$/;
                    if(val.length>0){
                        if(!reg.test(val)){
                            val=0
                        }
                    }
                    this.setState({
                        n:val
                    })
                }}/>
                {/*当输入过程中 文本框的内容跟着改变 我们需要修改state中n的值 只修改了 组件重新渲染  文本框中的值也是渲染后最新的值*/}
                &nbsp;&nbsp;&nbsp;
                <a href="javascript:;" className='btn btn-success' onClick={ev=>{
                    this.setState({
                        n:++n
                    },()=>{
                        //setState第二个参数
                        //执行完成render 触发的回调函数   很少用 因为生命周期可以替代
                        console.log("render执行完了");
                    })//=>setState 异步操作  执行它并没有立即执行  而是先把同步任务完成  再去执行render
                    console.log('ok');
                }}>+</a>
            </div>
        </div>
    }
}
render(<div>
    <Shop></Shop>
</div>,window.root)