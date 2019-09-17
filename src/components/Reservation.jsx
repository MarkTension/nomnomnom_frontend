import React from "react";
import ReactDOM from "react-dom";
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

const Button = styled.button`
  outline: none;
  background: snow;
  color: "palevioletred";
  font-size: 0.5em;
  font-weight: 300;
  color: DarkSlateGrey
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 20px;
  :hover {
    background: MistyRose;
  }
`;

const Text = styled.h6`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  text-align: center;
  color: black;
  font-size: 0.7em;
  height: 5em;
`;

const TextPrice = styled.h5`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  text-align: center;
  color: black;
  height: 1.5em;
`;

const Wrapper = styled.section`
  padding-left: 0em;
  padding-right: 0em;
  padding-bottom: 1em;
  padding-top: 1em;
  background: snow;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border-radius: 20px;
  :hover {
    background: Seashell;
  }
`;

const EmojiWrap = styled.span`
  margin-left: 5%;
  margin-right: 5%;
  font-size: 1.5em
  display: inline-block;
  transition: transform 200ms ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;

class Reservation extends React.Component {
  constructor(props) {
    super(props);
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
