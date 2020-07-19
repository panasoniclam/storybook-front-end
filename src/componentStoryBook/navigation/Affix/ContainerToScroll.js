import React from "react";
import {Affix, Button, Card} from "antd";

import "./containerToScroll.less";

class ContainerToScroll extends React.Component {
  render() {
    const {onClick} = this.props
    return (
      <Card className="gx-card" title="Fixed at the top of container">
        <div className="scrollable-container" ref={(node) => {
          this.container = node;
        }}>
          <div className="background">
            <Affix target={() => this.container}>
              <Button type="primary" onClick={onClick}>
                Fixed at the top of container
              </Button>
            </Affix>
          </div>
        </div>
      </Card>
    );
  }
}

export default ContainerToScroll;
