import React from "react";
import "../App.css";
import styled from "styled-components";
import { Box, Flex } from "rebass";
import Entry from "./Entry"; // this is the card for each restaurant
import Reservation from "./Reservation"; // this is the card for each restaurant
import logo from "../images/logo_sq.png";
import animateScrollTo from "animated-scroll-to";
import { isMobile } from "react-device-detect";

const TextSub = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 1em;
  text-align: center;
  color: black;
`;

const TextSub2 = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 0.5em;
  text-align: center;
  color: black;
`;

const instroStyle = {
  padding: "5%",
  height: "100%",
  marginLeft: "5%",
  marginright: "5%"
};

const IntroBox = styled.div`
  justify-content: center;
  alignitems: "center";
  background: white;
  width: 80%;
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

const Button2 = styled.button`
  /* outline: none; */
  border: none;
  background: snow;
  color: "palevioletred";
  font-size: 1em;
  font-weight: 300;
  color: DarkSlateGrey
  margin: 0.1em;
  width: 100%;
  padding: 0.25em 1em;
  border-radius: 10px;
  border: 2px solid Seashell;
  :hover {
    background: Seashell;
  }
`;

const imageStyle = {
  marginBottom: "10%",
  width: "40%",
  opacity: "0.1"
};

const logoStyle = {
  marginBottom: "0%",
  // height: "150px"
  width: "40%"
};

class Discovery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      show: false,
      show_load: true,
      reservation: false, // reservation pressed?
      round: this.props.round
    };
  }

  makeComponents() {
    let components = [];

    console.log(String(this.state.round) + String(this.cycle));

    for (let i = 0; i < 5; i++) {
      let keyname = String(this.state.round) + String(this.cycle) + String(i); //TODO: add round

      let restaurant = this.state.list[i];

      components.push(
        <Entry
          key={keyname}
          index={i}
          prefChange={pref => {
            this.preferences[i] = pref;
          }} // how to store preferences?
          title={restaurant.name}
          cuisine={restaurant.cuisine}
          price_min={restaurant.price_min}
          price_max={restaurant.price_max}
          priceAvg={restaurant.price_avg}
          image={restaurant.z_image}
          specific={[
            restaurant.vegan,
            restaurant.vegetarisch,
            restaurant.alcohol,
            restaurant.outside,
            restaurant.halal,
            restaurant.kosher
          ]}
          type={[
            restaurant.Type_Ontbijt,
            restaurant.Type_Brunch,
            restaurant.Type_Lunch,
            restaurant.Type_Diner
          ]}
          reservation={reserve => {
            this._isMounted && this.setState({ reservation: i, show: false });
          }}
          pref={this.state.show}
        />
      );
    }
    return components;
  }

  componentDidMount() {
    this.preferences = {};
    this._isMounted = true;
    this.cycle = 0;
    this.reservoir = {}; // for storing each restaurant state
    this.makeComponents = this.makeComponents.bind(this);

    // handle click
    this.clickNextRestaurant = this.clickNextRestaurant.bind(this);
    this.clickNextRestaurant();
  }

  componentWillUnmount() {
    console.log("component unmounted");
    this._isMounted = false;
  }

  componentWillUpdate(nextProps, nextState) {
    // check if preference changed
    if (nextState.reservation !== false && this.state.reservation === false) {
      this.reservoir[this.cycle] = this.state.list;

      for (let i = 0; i < this.reservoir[this.cycle].length; i++) {
        // delete images for the reservoir
        // delete this.reservoir[this.cycle][i].z_image; TODO: delete z_image
      }
    }
  }

  clickNextRestaurant() {
    // put preferences into state
    // prepare proper server post with previous restaurants
    var minimalState = [];
    for (let i = 0; i < this.state.list.length; i++) {
      minimalState[i] = {};
      minimalState[i]["id"] = this.state.list[i]["id"];

      minimalState[i]["preference"] = this.preferences[i];
    }

    // skip first cycle, because it's empty (bug)
    if (Object.entries(minimalState).length !== 0) {
      this.reservoir[this.cycle] = minimalState;
      this.cycle += 1;
    }

    this.setState({ reservoir: this.reservoir });

    animateScrollTo(document.querySelector("#cards_view"));

    // jsonify the response
    this.get_response = function(response) {
      if (response.ok) {
        this.setState({ show_load: true });
        return response.json();
      }
      // return response.json();
      console.log("Network response was not ok.");
    };
    // put json into new state
    this.unpack_response = function(restaurants) {
      debugger;
      this.numberRestaurants = restaurants.stats;
      restaurants = restaurants.restaurants;
      var newstate = [];
      // update state
      for (var i in restaurants) {
        if (restaurants.hasOwnProperty(i)) {
          newstate.push(restaurants[i]);
        }
      }

      return newstate;
    };

    // put json into new state
    this.update_state = function(newstate) {
      this.setState({ list: newstate });
      // finally make components
      this.components = this.makeComponents(this.state);

      // set initial preferences for the new round
      for (let i = 0; i < Object.entries(this.state.list).length; i += 1) {
        this.preferences[i] = 1;
      }

      this.setState({ show_load: false });
      this.setState({ show: true });
      animateScrollTo(document.querySelector("#cards_view"));
    };

    var post = {};
    post["filters"] = this.props.filters;
    post["history"] = this.reservoir;

    fetch(
      "http://nomOct2Nr2.863x9hrepg.eu-west-2.elasticbeanstalk.com/restaurant", // "http://locationnomnom.m6r5pgzjxm.eu-west-2.elasticbeanstalk.com/restaurant",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
      }
    ) //this.state.filters
      .then(response => this.get_response(response)) // verify response success
      .then(response => this.unpack_response(response)) // unpack the dictionary
      .then(response => this.update_state(response)); // update the state;
  }

  reactThis(event) {
    this.props.setRound();
    this.props.setFilters(false);
    this.setState({ reservation: false });
    event.preventDefault();
  }

  render() {
    // show filters
    let filter = this.props.filters;
    const maxTime = this.props.filters.maxTime;
    delete filter["show"];

    for (let key in filter) {
      if (filter[key] === 1 && key !== "range") {
        var filter_choice = key;
      }
    }

    return (
      <IntroBox id="introbox" style={instroStyle} className="introBox">
        <Flex
          id="demo"
          flexWrap="wrap"
          width="100%"
          style={{ marginBottom: 50 }}
        >
          {isMobile == false && (
            <Box p={[1]} align="center" width={[1 / 3]}>
              <img src={logo} alt="logo" style={logoStyle} />
            </Box>
          )}
          <Box p={[1]} width={[3 / 3, 1 / 3]}>
            <TextSub>
              Discovering {this.numberRestaurants} <b>{filter_choice}</b> places
              within <b>{maxTime}</b> minutes 🚲
            </TextSub>
            <Button onClick={this.reactThis.bind(this)}> Go Back </Button>
          </Box>

          <Box id="cards_view" p={2} width={1} align="center" ref="umountable">
            <Box p={[1]} width={[1]}>
              {this.state.show_load && (
                <img
                  src={logo}
                  className="fadein"
                  alt="logo"
                  style={imageStyle}
                />
              )}
            </Box>
          </Box>

          {this.state.reservation !== false && (
            <Reservation
              cycle={this.state.round}
              restaurant={this.state.list[this.state.reservation]}
              history={this.state.reservoir}
              filters={this.props.filters}
            />
          )}

          {this.state.show && (
            <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
              {this.components[0]}
            </Box>
          )}

          {this.state.show && (
            <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
              {this.components[1]}
            </Box>
          )}
          {this.state.show && (
            <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
              {this.components[2]}
            </Box>
          )}
          {this.state.show && (
            <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
              {this.components[3]}
            </Box>
          )}
          {this.state.show && (
            <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
              {this.components[4]}
            </Box>
          )}

          {this.state.reservation === false ? (
            <Button2 onClick={this.clickNextRestaurant}>
              👉 Next restaurants 👈
            </Button2>
          ) : (
            " "
          )}

          <Box p={2} width={1} align="center">
            <TextSub>Specify preference with emoji's*</TextSub>
            <TextSub2>
              <i>
                *This trains our algorithms to come up with better matching
                discoveries in the next round
              </i>
            </TextSub2>
          </Box>
        </Flex>
      </IntroBox>
    );
  }
}

export default Discovery;
