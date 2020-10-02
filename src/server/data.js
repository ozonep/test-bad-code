const graphData = [
  {
    id: 0,
    data: [
      { x: "2019-05-01", y: 0 },
      { x: "2019-06-01", y: 3 },
      { x: "2019-07-01", y: 9 },
      { x: "2019-08-01", y: 3 },
      { x: "2019-09-01", y: 4 },
      { x: "2019-10-01", y: 3 },
      { x: "2019-11-01", y: 4 },
      { x: "2019-12-01", y: 10 },
      { x: "2020-01-01", y: 0 },
    ],
  },
  {
    id: 1,
    data: [
      { x: "2019-05-01", y: 0 },
      { x: "2019-06-01", y: 7 },
      { x: "2019-07-01", y: 3 },
      { x: "2019-08-01", y: 10 },
      { x: "2019-09-01", y: 7 },
      { x: "2019-10-01", y: 8 },
      { x: "2019-11-01", y: 2 },
      { x: "2019-12-01", y: 10 },
      { x: "2020-01-01", y: 3 },
    ],
  },
];

const pieData = [
  {
    id: "Individuals",
    label: "Individuals",
    value: 284,
    color: "#1bfbe4",
  },
  {
    id: "Companies",
    label: "Companies",
    value: 364,
    color: "#ff56ee",
  },
];

function getPieData() {
  return pieData;
}

function getGraphData() {
  return graphData;
}

//unused
function getSelectedData(data_id) {
  return graphData.find((graph) => graph.id === data_id);
}

module.exports = { getPieData, getGraphData, getSelectedData };
