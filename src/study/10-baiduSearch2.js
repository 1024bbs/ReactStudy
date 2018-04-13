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
            n:-1,// 列表索引   默认不选中
            val:''
        }
    }
    queryData=ev=>{
        let val=ev.target.value.trim();
        this.setState({val})
        new Promise((resolve,reject)=>{
            jsonp(`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${val}`,{param:'cb'},(err,data)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(data.s)
            })
        }).then(data=>{
            this.setState({
                data,// 相当于data:data
            })
        });
    }
    handKey=ev=>{
        let code=ev.keyCode;//获取键盘按键
        let {n,data}=this.state,
           len=data.length;
        switch(code){
            case 38:
                n--;
                n<0?n=len-1:null;
                break;
            case 40:
                n++;
                n>len-1?n=0:null;
                break;
            case 13:
                window.location.href=`https://www.baidu.com/s?wd=${ev.target.value}`
                break;
        }
        if(code===38||code===40){
            this.setState({
                n,
                val:data[n]
            })
        }
    }
    render(){
        let {data,show,n,val}=this.state
        return <div className='panel panel-default' style={{width:"800px",margin:'50px auto'}}>
            <header className='panel-heading'>
                <input type="text" className='form-control' placeholder='请输入想要查询的'
                       value={val}
                       onChange={this.queryData}
                       onBlur={ev=>this.setState({show:false})}
                       onFocus={ev=>this.setState({show:true})}
                       onKeyUp={this.handKey}
                />
            </header>
            {/*  控制列表显示隐藏*/}
            <main className='list-group' style={{display:show?'block':'none'}}>
                <ul className='list-group'>
                    {
                        data.map((item,index)=>{
                            const active=n===index?'active':''
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

