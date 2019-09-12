import React from "react";
import ReactDOM from "react-dom";
import Discovery from "./Discovery";
import Initialization from "./Initialization";
import "../App.css";
import styled, { keyframes } from "styled-components";
import { Box, Flex, Image } from "rebass";
import Menu from "./Menu";
import logo from "../images/logo_sq.png";

const Text = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-align: center;
  color: black;
`;

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

const Button = styled.button`
  outline: none;
  background: "MistyRose";
  color: "palevioletred";
  font-size: 1em;
  font-weight: 300;
  color: DarkSlateGrey
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 20px;
  :hover {
    background: Seashell;
  }
`;

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-style: slim;
  font-weight: 300;
  font-size: 1em;
  text-align: center;
  color: black;
`;

class Engine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: false
    };
  }

  render() {
    return (
      <IntroBox style={instroStyle}>
        {this.state.filters ? (
          <Discovery
            filters={this.state.filters}
            setFilters={filters => this.setState({ filters })}
          />
        ) : (
          <IntroBox style={instroStyle}>
            <Initialization
              setFilters={filters => this.setState({ filters })}
              tester={this.state.filters}
            />
            // callback function to get info from child
          </IntroBox>
        )}
      </IntroBox>
    );
  }
}

export default Engine;
