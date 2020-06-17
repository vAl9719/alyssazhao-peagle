import React from "react";
import { Modal, Button, Input, Row, Col } from "antd";
import { ThemeContext } from "../context/ThemeContext";

import { SketchPicker } from "react-color";

const themeProperties = {
  widgetBackgroundColor: "Widget background color",
  gridBackGroundColor: "Grid background color",
  primary: "Primary color",
  secondary: "Secondary color"
};

class ThemingModal extends React.Component {
  state = { visible: false, color: "#fff", theme: {}, activeSetting: "" };

  static contextType = ThemeContext;

  componentDidMount = () => {
    const { theme, dispatch } = this.context;
    this.setState({ theme: theme });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleChangeActiveSetting = setting => {
    this.setState({ activeSetting: setting });
  };

  handleColorChange = color => {
    this.setState({
      color: color,
      theme: { ...this.state.theme, [this.state.activeSetting]: color.hex }
    });
  };

  handleOk = e => {
    const { theme, dispatch } = this.context;
    dispatch({ type: "CHANGE THEME", payload: this.state.theme });

    this.setState({ visible: false, activeSetting: "" });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleManualColorChange = (key, value) => {
    if (this.state.color.length < 7 || value.length < this.state.color.length) {
      this.setState({
        color: value,
        theme: { ...this.state.theme, [key]: value }
      });
    }
  };

  render() {
    const { theme, dispatch } = this.context;

    const themeSettings = Object.keys(themeProperties).map((key, index) => (
      <div
        key={index}
        className="widget-header"
        style={{
          cursor: "pointer",
          backgroundColor:
            this.state.activeSetting === key ? theme.primary + "30" : "",
          padding: "0.5rem"
        }}
        onClick={() => this.handleChangeActiveSetting(key)}
      >
        {themeProperties[key]}:{" "}
        <span>
          <Input
            value={this.state.theme[key]}
            onFocus={() => this.handleChangeActiveSetting(key)}
            onChange={e => this.handleManualColorChange(key, e.target.value)}
            style={{ backgroundColor: this.state.theme[key], width: "7rem" }}
          />
        </span>
      </div>
    ));

    return (
      <span>
        <Button
          className="modal-button"
          type="primary"
          onClick={this.showModal}
        >
          Customize Theming
        </Button>
        <Modal
          title={"Customize Theming"}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="Ok"
          width="50rem"
          bodyStyle={{
            overflowY: "scroll",
            padding: "2rem 3rem"
          }}
        >
          {this.state.errorMessage ? (
            <div style={{ height: "4rem" }}>{this.state.errorMessage}</div>
          ) : (
            ""
          )}
          <Row>
            <Col span={10}>
              <SketchPicker
                color={this.state.color}
                onChange={this.handleColorChange}
              />
            </Col>
            <Col span={14}>{themeSettings}</Col>
          </Row>
        </Modal>
      </span>
    );
  }
}

export default ThemingModal;
