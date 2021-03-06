import React from "react";
import {Card, Dropdown, Icon, Menu, message} from "antd";

const onClick = function ({key}) {
  message.info(`Click on item ${key}`);
};
const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
const ClickEvent = () => {
  return (
    <Card className="gx-card" title="Click Event">
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link">
          Hover me, Click menu item <Icon type="down"/>
        </a>
      </Dropdown>
    </Card>
  );
};

export default ClickEvent;
