import React from 'react'
import { Button } from 'antd';
import "antd/lib/button/style";
class Loading extends React.Component {
  state = {
    loading: true,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true ,
    });
  };

  render() {
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

        loading,

        icon,

        circle,
        circle_outline ,
        round

      } = this.props
    return (
      <div>
        <Button

         type={primary  ? "primary" : "" || dashed  ? "dashed" : ""
         || danger ? "danger" : "" 
         || ghost ? "ghost" : ""  || Default ? "Default" : "" || link ? "link" : ""}   
        onClick={onClick}
        submit={submit}
        disabled={ disabled}
         
         
        loading ={loading ?  this.state.loading : ""}
        icon={icon ? "poweroff" : ""}
        
        onClick={onClick}

         
        shape={circle ? "circle" : "" 
        || circle_outline ? "circle-outline " : " " 
        || round ? "round" : " "} 
         > 
        {contend}

        
        </Button>
      </div>
    );
  }
}
export default Loading