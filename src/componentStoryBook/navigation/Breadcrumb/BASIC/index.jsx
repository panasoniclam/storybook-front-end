import React from "react";
 
import Basic from "./Basic";
import WithIcon from "./WithIcon";
import ConfiguringSeparator from "./ConfiguringSeparator";


class  Breadcrumb extends React.Component {
  render(){
    const {basic,withicon,configuringSeparator,onClick} = this.props
     return (
        <div>
          {basic ?   <Basic  onClick={onClick}/>  : "" || withicon ? <WithIcon  onClick={onClick}/>  : "" || configuringSeparator ? <ConfiguringSeparator onClick={onClick}/> : ""}
        </div>
          
  );
  }
};
export default Breadcrumb;
