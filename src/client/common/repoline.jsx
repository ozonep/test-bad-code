import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";

const RepoLine = ({ graphData, baseColor, gradient, title, graphKey }) => {
  const margin = { top: 50, right: -50, bottom: 0, left: -40 };

  const theme = {
    axis: {
      ticks: {
        text: {
          fill: "#849fb4",
          fontFamily: "Montserrat-regular",
        },
      },
    },
  };

  const xScale = {
    type: "point",
    type: "time",
    format: "%Y-%m-%d",
    useUTC: false,
    precision: "day",
  };

  const yScale = {
    color: "#ffffff",
    type: "linear",
    min: "auto",
    max: 12,
    stacked: true,
    reverse: false,
  };

  const axisBottom = {
    format: "%b'%d",
    orient: "top",
    tickSize: 0,
    tickPadding: -30,
    tickRotation: 0,
  };

  const axisLeft = {
    orient: "top",
    tickSize: 0,
    tickPadding: -60,
    tickRotation: 0,
    tickValues: [3, 6, 9, 12],
  };

  return (
    <div className="graph">
      <div className="graph-title">{title}</div>
      <ResponsiveLine
        data={graphData}
        margin={margin}
        xScale={xScale}
        xFormat="time:%Y-%m-%d"
        yScale={yScale}
        curve="cardinal"
        axisBottom={axisBottom}
        axisLeft={axisLeft}
        enableGridX={false}
        enableGridY={false}
        colors={baseColor}
        lineWidth={0}
        enablePoints={false}
        enableArea={true}
        areaOpacity={1}
        enableCrosshair={false}
        useMesh={true}
        theme={theme}
        defs={[
          linearGradientDef(graphKey, [
            { offset: 0, color: baseColor },
            { offset: 180, color: gradient, opacity: 0 },
          ]),
        ]}
        fill={[{ match: "*", id: graphKey }]}
      />
    </div>
  );
};

export default RepoLine;
