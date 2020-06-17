import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { ThemeContext } from "../context/ThemeContext";

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 }
];

class SimpleScatterChart extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { theme, dispatch } = this.context;
    const { primary, secondary } = theme;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart>
          <CartesianGrid />
          <XAxis
            dataKey={this.props.x || "x"}
            type="number"
            name={this.props.xName || "stature"}
            unit={this.props.xUnit || "cm"}
          />
          <YAxis
            dataKey={this.props.y || "y"}
            type="number"
            name={this.props.yName || "weight"}
            unit={this.props.yUnit || "kg"}
          />
          <Scatter
            name={this.props.name || "A school"}
            data={this.props.data || data}
            fill={primary}
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}

export default SimpleScatterChart;
