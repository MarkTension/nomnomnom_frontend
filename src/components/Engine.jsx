import React from "react";
import Discovery from "./Discovery";
import Initialization from "./Initialization";
import Instructions from "./Instructions";
import "../App.css";
import styled from "styled-components";

const instroStyle = {
  justifyContent: "center",
  marginTop: "5%",
  marginLeft: "0%",
  marginright: "0%",
  paddingTop: "0%",
  paddingLeft: "0%",
  paddingRight: "0%",
  height: "100%"
};
const Text = styled.h6`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  text-align: center;
  color: black;
  font-size: 0.5em;
  height: 5em;
`;

const IntroBox = styled.div`
  justify-content: "center";
  alignitems: "center";
  background: white;
  width: 100%;
`;

class Engine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: false,
      instructionsDone: false,
      round: 0
    };
  }

  render() {
    return (
      <IntroBox style={instroStyle}>
        {this.state.filters ? (
          this.state.instructionsDone ? (
            <Discovery
              key={this.state.round}
              filters={this.state.filters}
              setRound={() =>
                this.setState({
                  round: this.state.round + 1
                })
              }
              setFilters={filters => this.setState({ filters })}
              round={this.state.round}
            />
          ) : (
            <Instructions
              instructionsDone={() => this.setState({ instructionsDone: true })}
            />
          )
        ) : (
          <div>
            <Initialization
              setFilters={filters => this.setState({ filters })}
              tester={this.state.filters}
            />
          </div>
        )}
      </IntroBox>
    );
  }
}

export default Engine;
