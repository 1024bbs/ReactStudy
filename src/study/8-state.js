import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";


class Temp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'李子航'
        }
        console.log(this.state);
    }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({
    //             name:'李子航真丑'
    //         })
    //     },1000);
    // }
    handInf=ev=>{
        this.setState({
            name:ev.target.value
        })
        console.log(ev.target);
    }
    render(){
        let {name}=this.state;
        return <div>
            <span>{name}</span>
            <br/>
            <input type="text" value={name}
               onChange={this.handInf}
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
*   我们把组件视图中的数据是通过state状态来管控的  称之为受控组件
*   MVVM  双向数据交互的思想
*
* */