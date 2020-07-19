import React from "react";

import LineIndicator from "./LineIndicator";
import BubbleMap from "./BubbleMap/index";

const Overview = () => {

  return (
    <div className="gx-card-overview">
      <div className="gx-overview-row">
        <div className="gx-line-indicator-col">
          <h3 className="gx-card-title">OVERVIEW</h3>
          <ul className="gx-line-indicator">
            <li>
              <LineIndicator width="45%" title="Europe" color="purple" value="45%"/>
            </li>
            <li>
              <LineIndicator width="30%" title="North America" color="green" value="30%"/>
            </li>
            <li>
              <LineIndicator width="20%" title="Japan, South Koria" color="yellow" value="20%"/>
            </li>
            <li>
              <LineIndicator width="10%" title="Others" color="grey" value="10%"/>
            </li>
          </ul>
        </div>
        <div className="gx-overview-description">
          <div className="gx-revenu gx-revenu-total">
            <h1>$2,650</h1>
            <span className="gx-fs-md">Total Revenu</span>
          </div>

          <div className="gx-revenu">
            <div className="gx-revenu-row">
              <div className="gx-revenu-col">
                <h3>23</h3>
                <span className="gx-fs-sm">Clients</span>
              </div>

              <div className="gx-revenu-col">
                <h3>07</h3>
                <span className="gx-fs-sm">Countries</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gx-map-col">
          <BubbleMap/>
        </div>
      </div>
    </div>

  );
};

export default Overview;
