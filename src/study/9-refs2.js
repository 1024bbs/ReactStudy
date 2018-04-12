import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";


class Temp extends React.Component{
    constructor(props){
        super(props)
    }
    // handInp=ev=>{
    //     //文本框内容改变   让span内容跟着变
    //     document.querySelector('span').innerHTML=ev.target.value;
    // }
    handInp=ev=>{
        let {AA,BB}=this.refs;
        AA.innerHTML=BB.value;
    }
    render(){

        return <div>
            <span ref='AA'>李子航啊</span>
            <br/>
            <input type="text" defaultValue='李子航啊'
                   onChange={this.handInp}
                   ref='BB'
            />
        </div>
    }
}

ReactDom.render(
   <div>
       <Temp></Temp>
   </div>

   ,window.root)


/*
*   非受控组件由DOM直接进行操作
*
* */