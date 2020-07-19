import React from "react";
import {VictoryPie} from "victory";

const chartData = [
  {x: " ", y: 70},
  {x: " ", y: 30},
];

const EmailCampaign = () => {

  return (
    <div>

      <VictoryPie height={400}
                  innerRadius={60}
                  data={chartData}
                  colorScale={["#4C97F3", "#FF8680"]}
                  padAngle={2}
                  animate={{
                    duration: 2000
                  }}
      />
    </div>
  );
};

export default EmailCampaign;
