import React, {Component} from "react";
 
import CollapsedMenu from "./CollapsedMenu";
 
class index extends Component {

  render() {
    const {collapsed,
      a ,
      onClick,
      inline,
      dark} = this.props
    return (
         <CollapsedMenu 
         collapsed={collapsed} 
         a={a} 
         onClick={onClick}
         inline={inline}
         dark={dark}
         />  
    );
  }
}

export default index;
