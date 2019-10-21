import React from "react";
import "../App.css";
import styled from "styled-components";
import { Flex, Box } from "rebass";
import Entry from "./Entry"; // this is the card for each restaurant
import EntryMobile from "./EntryMobile"; // this is the card for each restaurant
import ShareButton from "react-social-share-buttons";
import { isMobile } from "react-device-detect";

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-style: slim;
  font-weight: 300;
  font-size: 1em;
  text-align: center;
  color: black;
`;

const Text = styled.h6`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  text-align: center;
  color: black;
  font-size: 0.7em;
`;

class Reservation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // jsonify the response

    const restaurant = this.props.restaurant;

    var push = {};
    push["reservation"] = restaurant.name;
    push["filters"] = this.props.filters;
    push["history"] = this.props.history;

    this.get_response = function(response) {
      if (response.ok) {
        console.log(response.json());
      }
      // return response.json();
      console.log("Network response was not ok.");
    };
    fetch("http://nomOkt5.diux6a5vrk.eu-west-2.elasticbeanstalk.com/feedback", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(push)
    }) //this.state.filters
      .then(response => this.get_response(response)); // verify response success
  }

  render() {
    const restaurant = this.props.restaurant;
    return (
      <Flex flexWrap="wrap" width="100%" align="left">
        <Box width={[1]}>
          <Title>
            You've chosen <b>{restaurant.name}</b>!
          </Title>
        </Box>

        {isMobile ? (
          <EntryMobile
            title={restaurant.name}
            cuisine={restaurant.cuisine}
            price={restaurant.price_min}
            image={restaurant.z_image}
            price_min={restaurant.price_min}
            price_max={restaurant.price_max}
            distance={restaurant.distance}
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
        ) : (
          <Box p={[1]} width={[1, 1 / 4]}>
            <Entry
              title={restaurant.name}
              cuisine={restaurant.cuisine}
              price_min={restaurant.price_min}
              price_max={restaurant.price_max}
              image={restaurant.z_image}
              priceAvg={restaurant.price_avg}
              distance={restaurant.distance}
              specific={[
                restaurant.vegan,
                restaurant.vegetarisch,
                restaurant.alcohol,
                restaurant.outside,
                restaurant.halal,
                restaurant.kosher
              ]}
              specific={[
                restaurant.vegan,
                restaurant.vegetarisch,
                restaurant.alcohol,
                restaurant.outside,
                restaurant.halal,
                restaurant.kosher
              ]}
              reservation={true}
            />
          </Box>
        )}

        <Box width={[1, 3 / 4]}>
          <Title>Which is located at:</Title>
          <Text>{restaurant.adress}</Text>
          <Text>
            In beta stage we'll not be able to redirect you yet, but please go
            ahead and enjoy your food/drinks there:)
            <br />
            <br />
            As we're still testing the concept and user experience, please fill
            out this form:
          </Text>
          <iframe
            src="https://giphy.com/embed/HEkBXK8qnIRuo"
            height="null"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          />
          <center>
            <div style={{ width: "10%" }}>
              <ShareButton
                compact
                socialMedia={"facebook"}
                media={"https://imgs.xkcd.com/comics/error_code.png"}
                url={"nomnomnom.ai"}
                text={"hello"}
                sharetext={"hello"}
              />

              <ShareButton
                compact
                socialMedia={"twitter"}
                media={
                  "https://github.com/MarkTension/nomnomnom_frontend/blob/master/src/images/logo_sq.png"
                }
                url={"nomnomnom.ai"}
                media={"https://imgs.xkcd.com/comics/error_code.png"}
                text={
                  "Woah, I've discovered " +
                  restaurant.name +
                  " with nomnomnom.ai . Check it!"
                }
              />
            </div>
          </center>
        </Box>
      </Flex>
    );
  }
}

export default Reservation;
