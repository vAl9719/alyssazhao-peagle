import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/layout/Homepage";
import WidgetDataEntry from "./components/widgetSelection/WidgetDataEntry";
import SideBar from "./components/layout/SideBar";
import NavBar from "./components/layout/NavBar";
// Import context
import { ThemeProvider } from "./components/context/ThemeContext";

import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function App() {
  return (
    
      <ThemeProvider>
      <Homepage/>
      <SideBar />
      <NavBar 
      title="Peagle"
      user="DAML"/>
  </ThemeProvider>
  );
}

export default App;
