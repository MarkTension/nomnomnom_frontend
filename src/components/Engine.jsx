import React from "react";
import Discovery from "./Discovery";
import Initialization from "./Initialization";
import "../App.css";
import styled from "styled-components";

const instroStyle = {
  justifyContent: "center",
  marginTop: "5%",
  marginLeft: "0%",
  marginright: "0%",
  paddingTop: "0%",
  paddingLeft: "0%",
  paddingTight: "0%",
  height: "100%"
};

const IntroBox = styled.div`
  justify-content: center;
  alignitems: "center";
  background: white;
  width: 100%;
`;

class Engine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: false,
      round: 0
    };
  }

  render() {
    return (
      <IntroBox style={instroStyle}>
        {this.state.filters ? (
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
          <IntroBox style={instroStyle}>
            <Initialization
              setFilters={filters => this.setState({ filters })}
              tester={this.state.filters}
            />
          </IntroBox>
        )}
      </IntroBox>
    );
  }
}

export default Engine;
