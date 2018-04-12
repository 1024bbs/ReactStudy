function ReactDom(type,props) {
    this.type=type;
    this.props=props;
}
function createElement(type,props,...children) {
    //将 传进来的一堆值变成一个对象
    //type 类型
    //props 一个对象 里面是属性
    // children数组
    //处理children 如果只有一项 说明没有此元素 直接等于一个字符串
    if(children.length===1)children=children[0];
    return new ReactDom(type,{...props,children})
}
function render(ele,container) {
    //console.log(ele);
    //container.appendChild(ele)
    let {type,props}=ele;
    let element=document.createElement(type);
    //循环遍历对象props 根据属性名做对应 处理
    for(let key in props){
        if (key==="child"){
            //children key 可能是数组或者字符串
            if(typeof props[key]==="object"){
                //数组 遍历数组  根据数组每一项的类型做相应的处理
                props[key].forEach((item)=>{
                    if(typeof item==="object"){
                        //一个对象 再执行一次render方法
                        //render(当前item对象,容器)
                        render(item,element);
                    }else{
                        //一个字符串
                        element.appendChild(document.createTextNode(item))
                    }
                })
            }else{
                //字符串  说明内容是一个纯文本
                //创建一个文本节点
                element.appendChild(document.createTextNode(props[key]))
            }
        }else{
            element[key]=props[key]
        }
    }
    container.appendChild(element)
}
var rDom =createElement(
    "div",
    { className: "box" },
    "今天是",
    createElement(
        "h1",
        { id: "data" },
        "2018-3-6"
    )
);
/*
{
   type:"div"
   props:{
   className:"box",
   children:["今天是",type:"h1",props:{id:"data",children}]
   }
}
* */
render(rDom,window.root)