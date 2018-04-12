import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";


class Temp extends React.Component{
    constructor(props){
        super(props)
    }
    handInp=ev=>{
        this.AA.innerHTML=this.BB.value;
    }
    render(){

        return <div>
            {/*把元素挂载到当前实例上 以后使用的时候直接通过实例获取*/}
            <span ref={x=>this.AA=x}>李子航啊啊</span>
            <br/>
            <input type="text" defaultValue='李子航啊'
                   onChange={this.handInp}
                   ref={
                       x=>{
                           this.BB=x
                       }
                   }
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