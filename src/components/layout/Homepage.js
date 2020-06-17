import React from "react";
import GridDisplay from "./GridDisplay";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div className="page-title">
          <center>DAML Dashboard</center>
        </div>

        <div>
          <GridDisplay />
        </div>
      </div>
    );
  }
}

export default Homepage;
