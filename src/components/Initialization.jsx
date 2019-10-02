import React from "react";
import "../App.css";
import styled from "styled-components";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import MapContainer from "./Map";
import { Box, Flex } from "rebass";
import { Button as Button2 } from "rebass";

const Text = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-align: center;
  color: black;
  padding: 20px;
`;

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-style: slim;
  font-weight: 300;
  font-size: 1em;
  text-align: center;
  color: black;
`;

const IntroBox = styled.div`
  justify-content: center;
  alignitems: "center";
  background: white;
  width: 100%;
`;

const Button = styled.button`
  outline: none;
  background: snow;
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

const mapStyle = {
  marginBottom: "420px"
};
const rangeStyle = {
  marginLeft: "35%",
  paddingBottom: "5%"
};

class Initialization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      breakfast: -1,
      lunch: -1,
      dinner: -1,
      drinks: -1,
      range: 1,
      maxTime: 10,
      latLng: [52.3667, 4.8945]
    };
    this.maxTime = 10;
    this.range = 1;
  }

  // for the range bar
  handleOnChange = value => {
    let rangeShow = 0;
    if (value === 0) {
      this.maxTime = 5;
    }
    if (value === 1) {
      this.maxTime = 10;
    }
    if (value === 2) {
      this.maxTime = 20;
    }
    if (value === 3) {
      this.maxTime = 50;
    }
    this.range = value;
    this.setState({
      range: value,
      maxTime: this.maxTime
    });
  };

  handleSubmit(event) {
    this.props.setFilters(this.state);
    event.preventDefault();
  }

  render() {
    let { range } = this.state;

    return (
      <IntroBox>
        <Text> Welcome to NOMNOMNOM restaurant discovery</Text>
        <Title>
          <em>What do you feel like?</em>
        </Title>
        <Button
          onClick={() =>
            this.setState({
              breakfast: this.state.breakfast * -1,
              lunch: -1,
              dinner: -1,
              drinks: -1
            })
          }
          style={{
            transform: this.state.breakfast === 1 ? "scale(1.3)" : "scale(1)",
            background: this.state.breakfast === 1 ? "DarkOrange" : "snow"
          }}
        >
          breakfast
        </Button>
        <Button
          onClick={() =>
            this.setState({
              lunch: this.state.lunch * -1,
              breakfast: -1,
              dinner: -1,
              drinks: -1
            })
          }
          style={{
            transform: this.state.lunch === 1 ? "scale(1.3)" : "scale(1)",
            background: this.state.lunch === 1 ? "LightGreen" : "snow"
          }}
        >
          lunch
        </Button>
        <Button
          onClick={() =>
            this.setState({
              dinner: this.state.dinner * -1,
              lunch: -1,
              breakfast: -1,
              drinks: -1
            })
          }
          style={{
            transform: this.state.dinner === 1 ? "scale(1.3)" : "scale(1)",
            background: this.state.dinner === 1 ? "LightSkyBlue" : "snow"
          }}
        >
          dinner
        </Button>
        <Button
          onClick={() =>
            this.setState({
              drinks: this.state.drinks * -1,
              lunch: -1,
              dinner: -1,
              breakfast: -1
            })
          }
          style={{
            transform: this.state.drinks === 1 ? "scale(1.3)" : "scale(1)",
            background: this.state.drinks === 1 ? "Plum" : "snow"
          }}
        >
          drinks
        </Button>
        <div>
          <Button
            style={{ background: "white" }}
            onClick={this.handleSubmit.bind(this)}
          >
            Submit
          </Button>
        </div>
        <div style={mapStyle}>
          <center>
            <MapContainer
              latLng={this.state.latLng}
              latLngChange={latLng => {
                this.setState({ latLng: latLng });
              }}
            />
          </center>
        </div>
        <div style={rangeStyle}>
          <div style={{ width: "50%" }}>
            <Title>
              🚲 ride {"<"} {this.maxTime} minutes
            </Title>

            <Slider
              min={0}
              max={3}
              step={1}
              value={this.range}
              orientation="horizontal"
              onChange={this.handleOnChange}
              tooltip={false}
            />
          </div>
        </div>
      </IntroBox>
    );
  }
}

export default Initialization;
