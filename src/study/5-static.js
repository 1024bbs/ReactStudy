import React from "react"
import {render} from "react-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

class Dialog extends React.Component{
    static defaultProps={
        title:"我是默认值1",
        content:"我也是默认值2"
    }
    static propTypes={
        title:PropTypes.string.isRequired,
        content:PropTypes.string,
    };
    constructor(props){
        super(props);
        console.log(this.props);
    }
   render(){
       let {title,content,children} = this.props
       console.log(this.props);
       return <div>
           <h2>{title}</h2>
           <h2>{content}</h2>
           {children}
       </div>;
   }
}


render(<div>
    <Dialog title='这是传入的值1'/>

    <Dialog title='这是传入的值2'>
        {/*组件内部 写的 挂载到了props下面的children*/}
        <footer>
            <button>打开</button>
        </footer>
    </Dialog>
</div>,window.root)

