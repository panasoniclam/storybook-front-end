import React, {Component} from "react";
 
import CurrentSubMenu from "./CurrentSubMenu";
 
class index extends Component {

  render() {
    const { onClick,Dark,Light} = this.props
    return (
      
         <CurrentSubMenu
         onClick={onClick}
         
         
          />  
        
    );
  }
}

export default index;
