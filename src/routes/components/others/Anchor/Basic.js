import React from "react";
import {Anchor, Card} from "antd";

const {Link} = Anchor;

const Basic = () => {
  return (
    <Card title="Basic" className="gx-card">
      <Anchor>
        <Link href="javascript:void(0);" title="Basic demo"/>
        <Link href="javascript:void(0);" title="Fixed demo"/>
        <Link href="javascript:void(0);" title="API">
          <Link href="javascript:void(0);" title="Anchor Props"/>
          <Link href="javascript:void(0);" title="Link Props"/>
        </Link>
      </Anchor>
    </Card>
  );
};

export default Basic;
