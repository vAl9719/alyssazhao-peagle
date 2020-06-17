import React from "react";
import "../../index.css";
import {Layout} from "antd";
import { UserOutlined } from '@ant-design/icons';
const { Header } = Layout;

const NavBar = (props) => {
   return (
    <Layout>
    <Header className="header">
      <div className="title">{props.title}</div>
      <div className="user">Welcome, {props.user}</div>
      <div className="user-icon"><UserOutlined style={{color: "#FFF", fontSize: "35px", position: "absolute", left: "94.1%", right: 
    "3.19%", top: "24.44%", bottom: "93.95%", backgroundColor:"#FFF"}}/></div>
    </Header>
    </Layout>
   );
};

export default NavBar;
