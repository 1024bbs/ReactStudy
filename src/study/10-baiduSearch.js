import React from "react"
import ReactDom,{render} from "react-dom"
import jsonp from "jsonp"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
class Temp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    queryData=ev=>{
        //获取数据 jsonP
        new Promise((resolve,reject)=>{
            let val=ev.target.value.trim();
            jsonp(`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${val}`,{param:'cb'},(err,data)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(data.s);
            })
        }).then(data=>{
            this.setState({
                data //相当于  data:data
            })
        });
    }
    render(){
        let {data}=this.state;
        return <div className='panel panel-default' style={{width:"800px",margin:'50px auto'}}>
            <header className='panel-heading'>
                <input type="text" className='form-control' placeholder='请输入想要查询的' onChange={this.queryData}/>
            </header>
            <main className='list-group'>
                <ul className='list-group'>
                    {
                        data.map((item,index)=>{
                            return <li className='list-group-item' key={index}>{item}</li>
                        })
                    }

                </ul>
            </main>
        </div>
    }
}

render(<div>
    <Temp/>
</div>,window.root)
/*
*    百度请求接口 https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=qqq
*
*
*    如何根据输入的关键词去获取匹配的信息
*    =>获取用户输入的关键词 向百度的服务器发送一个请求,百度会返回匹配的结果
*    wd=xxx   传递的内容就是用户输入的关键词
*
*    1.跨域请求  不能使用AJAX   百度支持的请求是jsonP
*
*    基于第三方模块  yarn add jsonp   实现跨域请求
*
*    2.把获取的数据赋值给组件内部的state 不直接操作dom 由state去触发视图的重新刷新
* */


