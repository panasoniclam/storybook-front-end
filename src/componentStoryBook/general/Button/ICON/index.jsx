import React from "react";
import { Button} from "antd";
import 'antd/lib/button/style';
const textDefault = "Search";
class ICON extends React.Component{
    render(){
        const {primary,circle,search,contend,onClick} = this.props
        return(
            <div>
                 <Button type={primary ? "primary" : ""} onClick={onClick}
                 shape={circle ? "circle" :"" }icon={ search ?"search" :""} >
                  {contend ? textDefault : ""}
                </Button>
            </div>
        )
    }
}
export default ICON
