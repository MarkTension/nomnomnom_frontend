import React from "react";
import "../App.css";
import styled from "styled-components";
import { Flex, Box } from "rebass";
import Entry from "./Entry"; // this is the card for each restaurant

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-style: slim;
  font-weight: 300;
  font-size: 1em;
  text-align: center;
  color: black;
  min-height: 2em;
  max-height: 2em;
`;

const Text = styled.h6`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  text-align: center;
  color: black;
  font-size: 0.7em;
  height: 5em;
`;

class Reservation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // jsonify the response

    const restaurant = this.props.restaurant;

    var winner = {};
    winner["reservation"] = restaurant.name;

    this.get_response = function(response) {
      if (response.ok) {
        console.log(response.json());
      }
      // return response.json();
      console.log("Network response was not ok.");
    };
    fetch(
      "http://nomnomSept23.amzrhepk86.eu-west-2.elasticbeanstalk.com/feedback", // "http://nomNomSept19.rqffqrgnmy.eu-west-2.elasticbeanstalk.com/restaurant",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...this.props.history,
          ...winner
        })
      }
    ) //this.state.filters
      .then(response => this.get_response(response)); // verify response success
  }

  render() {
    const restaurant = this.props.restaurant;
    return (
      <Flex width="100%" align="left">
        <Box p={[1]} width={[1 / 4]}>
          <Entry
            title={restaurant.name}
            cuisine={restaurant.cuisine}
            price={restaurant.price_min}
            image={restaurant.z_image}
            specific={[
              restaurant.vegan,
              restaurant.vegetarisch,
              restaurant.alcohol,
              restaurant.outside
            ]}
            type={[
              restaurant.Type_Ontbijt,
              restaurant.Type_Brunch,
              restaurant.Type_Lunch,
              restaurant.Type_Diner
            ]}
            reservation={true}
          />
        </Box>
        <Box p={[10]} m={[5]} width={[3 / 4]}>
          <Title>You've chosen {restaurant.name}!</Title>
          <Text style={{ marginLeft: "20%", marginRight: "20%" }}>
            In beta stage we'll not be able to redirect you yet, but please go
            ahead and enjoy your food there:)
            <br />
            <br />
            As we're still testing the concept and user experience, please fill
            out this form:
          </Text>
        </Box>
      </Flex>
    );
  }
}

export default Reservation;
