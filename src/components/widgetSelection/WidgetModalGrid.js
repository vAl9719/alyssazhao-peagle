import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";

import { Dropdown, Button, Row, Col } from "antd";

import { ThemeContext } from "../context/ThemeContext";

// import widgets
import WidgetModal from "../widgetSelection/WidgetModal";
import SimpleLineChart from "../widgets/SimpleLineChart";
import SimpleBarChart from "../widgets/SimpleBarChart";
import BubbleChart from "../widgets/BubbleChart";
import SimpleAreaChart from "../widgets/SimpleAreaChart";
import SimplePieChart from "../widgets/SimplePieChart";
import SimpleRadarChart from "../widgets/SimpleRadarChart";
import SimpleScatterChart from "../widgets/SimpleScatterChart";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const widgets = [
  {
    key: "SimpleLineChart",
    text: "Simple line chart",
    value: "Simple line chart",
    widget: <SimpleLineChart />
  },
  {
    key: "SimpleBarChart",
    value: "Simple bar chart",
    text: "Simple bar chart",
    widget: <SimpleBarChart />
  },
  {
    key: "BubbleChart",
    text: "Bubble chart",
    value: "Bubble chart",
    widget: <BubbleChart />
  },
  {
    key: "SimpleAreaChart",
    text: "Simple area chart",
    value: "Simple area chart",
    widget: <SimpleAreaChart />
  },
  {
    key: "SimplePieChart",
    text: "Simple pie chart",
    value: "Simple pie chart",
    widget: <SimplePieChart />
  },
  {
    key: "SimpleRadarChart",
    text: "Simple radar chart",
    value: "Simple radar chart",
    widget: <SimpleRadarChart />
  },
  {
    key: "SimpleScatterChart",
    text: "Simple scatter chart",
    value: "Simple scatter chart",
    widget: <SimpleScatterChart />
  }
];

class WidgetModalGrid extends React.PureComponent {
  state = { selected: "" };

  static contextType = ThemeContext;

  handleSelectWidget = type => {
    this.setState({ selected: type }, () => this.props.onSelectWidget(type));
  };

  render() {
    const { theme, dispatch } = this.context;
    const { selectedWidgetBackgroundColor, widgetBackgroundColor } = theme;

    return (
      <Row gutter={[16, 16]}>
        {widgets.map((w, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            style={{
              backgroundColor:
                this.state.selected === w.value
                  ? selectedWidgetBackgroundColor
                  : widgetBackgroundColor,
              cursor: "pointer",
              borderRadius: "1rem"
            }}
          >
            <div
              className="widget-grid-item"
              onClick={() => this.handleSelectWidget(w.value)}
            >
              <div className="widget-header">
                <center>{w.value}</center>
              </div>
              <br />
              {w.widget}
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}

export default WidgetModalGrid;
