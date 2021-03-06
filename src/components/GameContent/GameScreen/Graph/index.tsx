import "./Graph.scss";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const Graph: React.FC = () => {
  const containerDivRef = React.createRef<HTMLDivElement>();
  const [width, setWidth] = useState(0);

  React.useLayoutEffect(() => {
    if (containerDivRef.current) {
      setWidth(containerDivRef.current.offsetWidth);
    }
  }, [containerDivRef]);

  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          1991,
          1992,
          1993,
          1994,
          1995,
          1996,
          1997,
          1998,
          1999,
          2000,
          2001,
          2002,
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 31, 32, 23, 49, 60, 70, 234, 11, 12, 12],
      },
    ],
  };

  return (
    <div className="graph" ref={containerDivRef}>
      <Chart
        type="line"
        options={state.options}
        series={state.series}
        width={width}
      />
    </div>
  );
};

export default Graph;
