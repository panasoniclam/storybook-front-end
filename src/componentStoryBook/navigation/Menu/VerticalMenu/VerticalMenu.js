import React from "react";
import {Card, Icon, Menu} from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function handleClick(e) {
  console.log('click', e);
}

const VerticalMenu = ({onClick}) => {
  return (
    <Card className="gx-card"  title="Vertical Menu">
      <Menu onClick={handleClick} style={{width: 256}} mode="vertical" >
        <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="1" onClick={onClick}>Option 1</Menu.Item>
            <Menu.Item key="2"  onClick={onClick}>Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Iteom 2">
            <Menu.Item key="3"  onClick={onClick}>Option 3</Menu.Item>
            <Menu.Item key="4"  onClick={onClick}>Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
          <Menu.Item key="5"  onClick={onClick}>Option 5</Menu.Item>
          <Menu.Item key="6"  onClick={onClick}>Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7"  onClick={onClick}>Option 7</Menu.Item>
            <Menu.Item key="8"  onClick={onClick}>Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting"/><span>Navigation Three</span></span>}>
          <Menu.Item key="9"  onClick={onClick}>Option 9</Menu.Item>
          <Menu.Item key="10"  onClick={onClick}>Option 10</Menu.Item>
          <Menu.Item key="11"  onClick={onClick}>Option 11</Menu.Item>
          <Menu.Item key="12"  onClick={onClick}>Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </Card>
  );
};

export default VerticalMenu;
