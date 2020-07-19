import React from "react";
import {Card, Dropdown, Icon, Menu} from "antd";

const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

const CascadingMenu = () => {
  return (
    <Card className="gx-card" title="Cascading Menu">
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="javascript:void(0);">
          Cascading menu <Icon type="down"/>
        </a>
      </Dropdown>
    </Card>
  );
};

export default CascadingMenu;
