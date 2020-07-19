import React from "react";
import {Col, Row} from "antd";
//component
import Basic from "./Basic";
// import HorizontalLoginForm from "./HorizontalLoginForm";
import Registration from "./Registration";
import AdvancedSearch from "./AdvancedSearch";
import DynamicFormItem from "./DynamicFormItem";
import TimeRelatedControls from "./TimeRelatedControls";
import CustomizedFormControls from "./CustomizedFormControls";
import StoreFormData from "./StoreFormData";
import CustomizedValidation from "./CustomizedValidation";
import CoordinatedControls from "./CoordinatedControls";
import FormLayout from "./FormLayout";
import DynamicRules from "./DynamicRules";
import OtherFormControls from "./OtherFormControls";


class Form extends React.Component{
  render(){
    const { 
      basic,
      // horizontalLoginForm,
      registration,
      advancedSearch,
      dynamicFormItem,
      timeRelatedControls,
      customizedFormControls,
      storeFormData,
      customizedValidation,
      formLayout,
      dynamicRules,
      otherFormControls,
      coordinatedControls ,
      
    } = this.props;
    return(
      <div>
         {
           basic ? <Basic/> : ""  
           ||
           registration ? <Registration/> : "" || advancedSearch ? <AdvancedSearch/> : "" ||
           dynamicFormItem ? <DynamicFormItem/> : "" || timeRelatedControls ? <TimeRelatedControls/> : "" ||
           customizedFormControls ? <CustomizedFormControls/> : "" || storeFormData ? <StoreFormData/> : "" ||
           customizedValidation ? <CustomizedValidation/> : "" || formLayout ? <FormLayout/> : "" ||
           dynamicRules ? <DynamicRules/> : "" || otherFormControls ? <OtherFormControls/> : "" ||
           coordinatedControls ? <CoordinatedControls/> : "" 
          //  ||   horizontalLoginForm ? <HorizontalLoginForm/> : "" 
         }
      </div>
    )
  }
}
 
export default (Form);
