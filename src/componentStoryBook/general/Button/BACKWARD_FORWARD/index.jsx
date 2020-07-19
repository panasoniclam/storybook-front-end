import React from 'react';
import {connect} from 'react-redux'
import {Button,  Icon} from "antd";
 
import "antd/lib/button/style"
import "antd/lib/icon/style"
 
 
const textFORWARD="FORWARD";
const textBACKWARD="BACKWARD";
class BACKWARD_FORWARD extends React.Component{
  // constructor(props){
  //   this.state={
  //     data:'ahahah'
  //   }
  // }
  handlechange = ()=>{
    console.log("handleChange")
    this.props.back()
  }
  // handle = ()=>{
  //   this.setState({
  //     data:'sjsjjs'
  //   })
  // }
    render(){
      const  {FORWARD,onClick,primary,disabled,value,Width} =this.props
      console.log("render")
      return(
        // <div>
        //      {FORWARD ? 
        //     <Button type={ primary ? "primary" :""} onClick={onClick}
        //     disabled={ disabled ?"disabled": ""}
        //     >
        //      {textFORWARD  }
        //      <Icon type= "right" />
        //     </Button>  
        //     :  
        //     <Button type={ primary ? "primary" :""}  onClick={onClick}    disabled={ disabled ?"disabled": ""}>
        //      <Icon type= "left" /> 
        //       {this.props.message}
        //    </Button>
        //    }  
        // </div>
        //   <Button  color={value}>
        //   <Icon type= "left" /> 
        //  kkkk
        // </Button>
        
          
         <div>
           <div style={{backgroundColor:value,width:90,padding:Width}}>
            <h6 >hello word</h6>
           </div>
         </div>
         
      
      )
    }
  }
 

export default (BACKWARD_FORWARD)
 