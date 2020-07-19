import React from 'react'
import {Button, Card, Icon, Radio} from "antd";
import "antd/lib/button/style";
import "antd/lib/icon/style";
class ButtonSize extends React.Component {
  render() {
    const { size , circle, 
      download,  primary,
      contend,round,
      onClick ,dashed,
      danger,ghost,
      Default,link}= this.props;
    return (
      <div>
        <Button type={ primary ? "primary": "" || dashed  ? "dashed" : ""
             || danger ? "danger" : "" 
             || ghost ? "ghost" : ""  || Default ? "Default" : "" || link ? "link" : ""  } 
          shape={circle ? "circle" : "" || round ? "round" : ""}   
          icon={download ? "download" : ""} 
          size={size}
          onClick={onClick}
           >
          {contend}
          
        </Button>
      </div>
    );
  }
}

export default ButtonSize