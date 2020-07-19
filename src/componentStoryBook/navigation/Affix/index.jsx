import React from "react";
 

import Basic from "./Basic";
import Callback from "./Callback";
import ContainerToScroll from "./ContainerToScroll";


class  Affix  extends React.Component{
   render(){
     const {basic,callback,containerToScroll,onClick} = this.props
     return(
       
          <div>
       {basic ?  <Basic onClick={onClick}/> : "" || callback ? <Callback  onClick={onClick}/> : "" || containerToScroll ? <ContainerToScroll  onClick={onClick}/>:""}
     </div>
       
     )
   }
} 
export default Affix;
