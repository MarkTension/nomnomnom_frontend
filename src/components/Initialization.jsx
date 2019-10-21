import React from "react";
import "../App.css";
import styled from "styled-components";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import MapContainer from "./Map";
import { Box, Flex } from "rebass";
import { Button as Button2 } from "rebass";

import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

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
  paddingBottom: "0%"
};

class Initialization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstTime: true,
      show: false,
      breakfast: -1,
      lunch: -1,
      dinner: -1,
      drinks: -1,
      vegetarian: -1,
      vegan: -1,
      range: 1,
      maxTime: 15,
      latLng: [52.3667, 4.8945],
      priceFilt: 0
    };
    this.maxTime = 15;
    this.range = 1;
    this.priceFilt = 0;
    this.priceFiltName = "Everything goes";
    var myLocation = {};
    myLocation = this.getLocation(this);
    this.labels = { 0: "Low", 1: "Medium", 2: "high" };
  }

  getLocation(arg) {
    const pos = {};
    const geolocation = navigator.geolocation;
    if (geolocation) {
      geolocation.getCurrentPosition(findLocal, showEror);
    }
    function findLocal(position) {
      pos.lat = position.coords.latitude;
      pos.lng = position.coords.longitude;
      // here state is set!
      // this.setState({ latLng: [pos.lat, pos.lng] });
    }
    function showEror() {
      console.log(Error);
    }
    return pos;
  }

  componentDidMount() {
    // if (Object.keys(myLocation).length !== 0) {
    //   this.setState({ latLng: myLocation });
    // }
    // console.log(myLocation);

    console.log("init mounted");
  }

  componentWillUpdate(nextProps, nextState) {}

  // for the range bar
  handleOnChange = value => {
    let rangeShow = 0;
    if (value === 0) {
      this.maxTime = 5;
    }
    if (value === 1) {
      this.maxTime = 15;
    }
    if (value === 2) {
      this.maxTime = 30;
    }
    if (value === 3) {
      this.maxTime = 60;
    }
    this.range = value;
    this.setState({
      range: value,
      maxTime: this.maxTime
    });
  };
  handle2OnChange = value => {
    this.priceFilt = value;
    let rangeShow = 0;
    if (value === 0) {
      this.priceFiltName = "Everything goes";
    }
    if (value === 1) {
      this.priceFiltName = "< €15";
    }
    if (value === 2) {
      this.priceFiltName = "€15 ~ €30";
    }
    if (value === 3) {
      this.priceFiltName = "€30 ~ €60";
    }
    this.setState({
      priceFilt: value
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
        <Title />

        <div style={rangeStyle}>
          <div style={{ width: "50%" }}>
            <Title>
              🚲 ride {this.maxTime != 60 && " < "} {this.maxTime}{" "}
              {this.maxTime == 60 && " + "} minutes
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
            <Title>💶 {this.priceFiltName}</Title>
            <Slider
              min={0}
              max={3}
              step={1}
              value={this.priceFilt}
              orientation="horizontal"
              onChange={this.handle2OnChange}
              tooltip={true}
            />
          </div>
        </div>
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
      </IntroBox>
    );
  }
}

export default Initialization;
