import React from "react";
import {Card, Popconfirm} from "antd";

const LocaleText = () => {

    return (
      <Card title="Locale Text" className="gx-card">
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
          <a href="javascript:void(0);">Delete</a>
        </Popconfirm>
      </Card>
    );
  }
;

export default LocaleText;
