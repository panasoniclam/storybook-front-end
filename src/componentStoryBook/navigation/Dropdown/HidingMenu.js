import React, {Component} from "react";
import {Card, Dropdown, Icon, Menu} from "antd";

class HidingMenu extends Component {


  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
      </Menu>
    );
    return (
      <Card className="gx-card" title="Hiding Menu">
        <Dropdown 
        
        >
          <a className="ant-dropdown-link" href="javascript:void(0);">
            Hover me <Icon type="down"/>
          </a>
        </Dropdown>
      </Card>
    );
  }

}


export default HidingMenu;
