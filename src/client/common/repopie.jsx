import React from "react";
import { ResponsivePie } from "@nivo/pie";

const RepoPie = ({ pieData, totalValue }) => {
  const margin = { top: 0, right: 0, bottom: 0, left: 0 };

  const styles = {
    root: {
      fontFamily: "Montserrat-medium",
      textAlign: "center",
      position: "relative",
      width: 600,
      height: 600,
    },
    overlay: {
      position: "absolute",
      top: 0,
      right: margin.right,
      bottom: 0,
      left: margin.left,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 36,
      fontFamily: "Montserrat-bold",
      color: "#cccccc",
      textAlign: "center",
      // This is important to preserve the chart interactivity
      pointerEvents: "none",
    },
  };

  const legends = [
    {
      anchor: "bottom",
      direction: "row",
      translateY: 56,
      itemWidth: 100,
      itemHeight: 18,
      itemTextColor: "#999",
      symbolSize: 18,
      symbolShape: "circle",
      effects: [
        {
          on: "hover",
          style: {
            itemTextColor: "#000",
          },
        },
      ],
    },
  ];

  const chartColors = ["#1bfbe4", "#ff56ee"];

  return (
    <div className="pie-box">
      <span className="pie-stats">Total Signups</span>
      <div className="pie-stats2">
        <div>
          <span>Individuals</span>
          <span className="space">284</span>
          <span className="cyan-box"> </span>
        </div>
        <div className="topspace">
          <span>Companies</span>
          <span className="space2">364</span>
          <span className="pink-box"></span>
        </div>
      </div>
      <div className="pie">
        <ResponsivePie
          data={pieData}
          margin={margin}
          sortByValue={true}
          innerRadius={0.85}
          colors={chartColors}
          borderColor={{ from: "color" }}
          enableRadialLabels={false}
          radialLabelsSkipAngle={15}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: "color" }}
          enableSlicesLabels={false}
          slicesLabelsSkipAngle={0}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={legends}
        />
        <div style={styles.overlay}>
          <span>{totalValue}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoPie;
