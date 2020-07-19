import React from "react";
import {Button} from "antd";

import "antd/lib/button/style";
import "antd/lib/card/style";

class Basic extends React.Component{
    render(){
        const {
            contend,
            submit,
            disabled,
            onClick, 

            primary,
            dashed,
            danger,
            ghost,
            Default,
            link,

            left,
            right
        
           } = this.props
        return(
            <Button 
            type={primary  ? "primary" : "" || dashed  ? "dashed" : ""
             || danger ? "danger" : "" 
             || ghost ? "ghost" : ""  || Default ? "Default" : "" || link ? "link" : ""  }    
            onClick={onClick}
            submit={submit}
            disabled={ disabled}
            > 
            {contend}
            </Button>
        )
    }
}

export default Basic;
