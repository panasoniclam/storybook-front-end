import React from "react";
//component
import Basic from "./Basic";
import DefaultValue from "./DefaultValue";
import CustomTrigger from "./CustomTrigger";
import Hover from "./Hover";
import DisabledOption from "./DisabledOption";
import ChangeOnSelect from "./ChangeOnSelect";
import Size from "./Size";
import CustomRender from "./CustomRender";
import Search from "./Search";
import LoadOptions from "./LoadOptions";
class  Cascader  extends React.Component{
   render(){
     const {basic,
      defaultValue,
      customTrigger,
      hover,
     disabledOption,
      loadOptions ,
      changeOnSelect,
      customRender,
      search,
      size
    } = this.props
     return(
      <div>
      {
        basic ?  <Basic/> : ""  || defaultValue ? <DefaultValue/> : "" ||
      customTrigger ?  <CustomTrigger/> : "" || hover ?  <Hover/> : "" ||
      disabledOption ?  <DisabledOption/> :"" || loadOptions ?  <LoadOptions/> : "" ||   changeOnSelect ?    <ChangeOnSelect/> : "" ||
      customRender ?  <CustomRender/> : "" || search ?  <Search/> : ""  || size ? <Size/> : ""

      }
 
      </div>
       
     )
   }
} 
export default Cascader;
