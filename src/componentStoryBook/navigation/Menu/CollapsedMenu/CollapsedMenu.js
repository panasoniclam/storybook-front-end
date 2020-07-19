import React, {Component} from "react";
import {Button, Card, Icon, Menu} from "antd";

const SubMenu = Menu.SubMenu;

class CollapsedMenu extends Component {
  render() {
    const {collapsed,a,onClick,inline,dark} = this.props
    return (
       <Card className="gx-card" title="Collapsed Menu" style={{width: a ? 600 : 300}}>  
        <Button type="primary" style={{marginBottom:16}} onClick={onClick} >
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'}/>
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode= "inline"  
          theme= "dark"  
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1"  onClick={onClick} >
            <Icon type="pie-chart"/>
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={onClick}>
            <Icon type="desktop"/>
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={onClick}>
            <Icon type="inbox"/>
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
            <Menu.Item key="5" onClick={onClick}>Option 5</Menu.Item>
            <Menu.Item key="6" onClick={onClick}>Option 6</Menu.Item>
            <Menu.Item key="7" onClick={onClick}>Option 7</Menu.Item>
            <Menu.Item key="8" onClick={onClick}>Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
            <Menu.Item key="9"onClick={onClick}> Option 9</Menu.Item>
            <Menu.Item key="10" onClick={onClick}>Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11"onClick={onClick}> Option 11</Menu.Item>
              <Menu.Item key="12"onClick={onClick}>Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
          
        </Menu>
        
        </Card>  
       
      
    );
  }
}
export default CollapsedMenu;
