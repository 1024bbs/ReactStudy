import React from "react"
import ReactDom,{render} from "react-dom"


let obj={color:'red'}
ReactDom.render(<div>
    <div id='box' className='box' style={obj}>
        <h2>hello,world</h2>
        <ul className='newsItem'>
            <li key='1'>1111</li>
            <li key='2'>2222</li>
            <li key='3'>333</li>
            <li key='4'>4444</li>
        </ul>
    </div>
</div>,window.root)