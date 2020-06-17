import React from "react";
import { Modal, Button } from "antd";

import WidgetModalGrid from "./WidgetModalGrid";
import WidgetDataEntry from "./WidgetDataEntry";

import GridDisplay from "../layout/GridDisplay";
import SimpleLineChart from "../widgets/SimpleLineChart";
import SimpleBarChart from "../widgets/SimpleBarChart";
import BubbleChart from "../widgets/BubbleChart";
import SimpleAreaChart from "../widgets/SimpleAreaChart";
import SimplePieChart from "../widgets/SimplePieChart";
import SimpleRadarChart from "../widgets/SimpleRadarChart";
import SimpleScatterChart from "../widgets/SimpleScatterChart";

// Array of modal content views indexed by step number in the widget selection process
const widgetSteps = [WidgetModalGrid, WidgetDataEntry];
const stepTitles = ["Select Widget", "Enter Data"];

class WidgetModal extends React.Component {
  state = { visible: false, widget: "", step: 0, errorMessage: "" };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(this.state);
    if (this.state.step === 1) {
      // last step, ready to add the widget
      this.props.onAddWidget(this.state.widget, this.state.dataProps);
      this.setState({
        widget: "",
        step: 0,
        visible: false,
        errorMessage: ""
      });
    } else {
      // continue to next step
      if (this.state.step === 0 && !this.state.widget) {
        this.setState({
          errorMessage: "You must select a widget type before continuing."
        });
      } else {
        this.setState({ step: this.state.step + 1, errorMessage: "" });
      }
    }
  };

  handleCancel = e => {
    this.setState(
      {
        visible: false
      },
      () => {
        this.setState({ widget: "", errorMessage: "", step: 0 });
      }
    );
  };

  handleSelectWidget = type => {
    this.setState({ widget: type });
    console.log(type);
  };

  handleReceiveDataProps = props => {
    this.setState({ dataProps: props });
  };

  render() {
    const CurrentView = widgetSteps[this.state.step];
    const okText = this.state.step === 1 ? "Add Widget" : "Next";
    return (
      <span>
        <Button
          className="modal-button"
          type="primary"
          onClick={this.showModal}
        >
          Add Widget
        </Button>
        <Modal
          title={stepTitles[this.state.step]}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText={okText}
          width="50rem"
          bodyStyle={{
            overflowY: "scroll",
            height: "50rem",
            maxWidth: "90vw",
            maxHeight: "70vh",
            padding: "2rem 3rem"
          }}
        >
          {this.state.errorMessage ? (
            <div style={{ height: "4rem" }}>{this.state.errorMessage}</div>
          ) : (
            ""
          )}
          <CurrentView
            widget={this.state.widget}
            onSelectWidget={type => this.handleSelectWidget(type)}
            onReceiveDataProps={this.handleReceiveDataProps}
          />
        </Modal>
      </span>
    );
  }
}

export default WidgetModal;
