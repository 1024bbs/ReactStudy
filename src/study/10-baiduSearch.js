import React from "react"
import ReactDom,{render} from "react-dom"
import jsonp from "jsonp"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
class Temp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:[],
            show:false,
            n:-1,//=>当前选中li的索引  默认-1 谁都不选中
            val:'',
        }
    }
    queryData=ev=>{
        //获取数据 jsonP
        let val=ev.target.value.trim();
        this.setState({val})
        new Promise((resolve,reject)=>{
            jsonp(`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${val}`,{param:'cb'},(err,data)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(data.s);
            })
        }).then(data=>{
            this.setState({
                data, //相当于  data:data
                n:-1,//每一次数据改变  回到初始值 防止上次切换存留的数值对本次最新结果产生影响
                /*  val 不能写在这里  then是异步的 有延迟 最后成了拼接 */
            })
        });
    }
    handKey=ev=>{
        let code=ev.keyCode;//获取按键的键盘码   上38  下40 enter13
        let {n,data}=this.state,
           len=data.length;
        switch (code){
            case 38:
                n--;
                n<0?n=len-1:null;
                break;
            case 40:
                n++;
                n>len-1?n=0:null;
                break
            case 13:
                window.location.href=`https://www.baidu.com/s?wd=${ev.target.value}`
                break
        }
        if (code===38||code===40){
            this.setState({
                n,
                val:data[n]||''
            })
        }

    }
    render(){
        let {data,show,n,val}=this.state;
        return <div className='panel panel-default' style={{width:"800px",margin:'50px auto'}}>
            <header className='panel-heading'>
                <input type="text" className='form-control' placeholder='请输入想要查询的'
                       value={val}
                       onChange={this.queryData}
                       onBlur={ev=> this.setState({show:false})}
                       onFocus={ev=>this.setState({show:true})}
                       onKeyUp={this.handKey}
                       autoFocus
                />
            </header>
            {/*列表通过判断show的状态显示和隐藏*/}
            <main className='list-group' style={{display:show?'block':'none'}}>
                <ul className='list-group'>
                    {
                        data.map((item,index)=>{
                            const active=n===index?'active':'';
                            return <li className={`list-group-item ${active}`} key={index}>{item}</li>
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


