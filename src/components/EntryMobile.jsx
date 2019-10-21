import React from "react";
import "../App.css";
import styled from "styled-components";
import { Flex, Box, Image } from "rebass";
import { isMobile } from "react-device-detect";
import {
  SwipeableList,
  SwipeableListItem
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-style: slim;
  font-weight: 500;
  font-size: 0.8em;
  text-align: center;
  color: black;
  margin-top: 0px;
  width: 100%;
`;

const IntroBox = styled.div`
  justify-content: center;
  alignitems: "center";
  background: white;
  min-width: 100%;
`;

const Button = styled.button`
  outline: none;
  background: snow;
  color: "palevioletred";
  font-size: 0.7em;
  font-weight: 300;
  color: DarkSlateGrey
  margin: 1em;
  padding: 0.25em;
  border-radius: 10px;
  :hover {
    background: MistyRose;
  }
  box-shadow: 2px 2px 2px Gainsboro;
  shadowopacity: 0.1;
`;

const Text = styled.h6`
  font-family: "Raleway", sans-serif;
  text-align: center;
  font-weight: 100;
  color: black;
  font-size: 0.5em;
`;

const TextPrice = styled.h6`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 0.6em;
  color: black;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 100;
`;

const flexStyle = {
  paddingLeft: "0em",
  paddingRight: "0em",
  paddingBottom: "0em",
  paddingTop: "0em",
  marginTop: "0em",
  background: "white",
  borderRadius: "10px"
};

const imageStyle = {
  objectFit: "cover",
  resizeMode: "contain"
};
const spanStyle = {
  color: "black",
  fontSize: "0.6em",
  fontWeight: "100"
};

const EmojiWrap = styled.span`
  font-size: 1.5em;
`;

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      preference: 1,
      didMount: false // for fade-in animation
    };
    this.restName = props.title;
    if (this.restName.length > 25) {
      this.restName = this.restName.substring(0, 20) + "...";
    }
  }

  changeZero() {
    if (this.state.preference === 0) {
      this.setState({ preference: 1 });
    } else {
      this.setState({ preference: 0 });
    }
  }
  changeTwo() {
    if (this.state.preference === 2) {
      this.setState({ preference: 1 });
    } else {
      this.setState({ preference: 2 });
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ didMount: true });
    }, 0);
    setTimeout(() => {
      this.setState({ preference: 1 });
    }, 0);

    this._isMounted = true;
  }

  componentWillUnmount() {
    this.setState({ preference: 1 });
    this._isMounted = false;
  }

  componentWillUpdate(nextProps, nextState) {
    // check if preference changed
    if (nextState.preference !== this.state.preference) {
      this.props.prefChange(nextState.preference);
    }
  }

  handleActive() {
    this.setState({ active: true });
  }

  makeResevation() {
    // this.setState({ preference: 3 });
    this.props.reservation(); // callback to parent
  }

  render() {
    const { didMount } = this.state;

    return (
      <SwipeableListItem
        threshold={0.2}
        style={{ marginTop: "0px" }}
        swipeLeft={{
          content: <span style={{ fontSize: "3em" }}>😍</span>,
          action: () => this.changeTwo()
        }}
        swipeRight={{
          content: <span style={{ fontSize: "3em" }}>😒</span>,
          action: () => this.changeZero()
        }}
      >
        <Flex
          justifyContent={["center", "left"]}
          flexDirection="row"
          flexWrap="wrap"
          width="100%"
          style={flexStyle}
        >
          <Box p={[1]} width={3 / 7}>
            <Image
              overflow="hidden"
              style={imageStyle}
              height="100px"
              width="100%"
              borderRadius={10}
              margin={0}
              src={this.props.image}
              alt="restaurantImage"
            />
          </Box>
          <Box p={[1]} width={3 / 7}>
            <Title>{this.restName}</Title>

            <Text style={{ marginTop: "0px", height: "30px" }}>
              {this.props.cuisine.toString().replace(/,/g, " • ")}

              {this.props.specific[0] === 1 || this.props.specific[1] === 1
                ? " • "
                : ""}

              <green>{this.props.specific[0] ? "Vegan🌱 " : "\n"} </green>
              {this.props.specific[0] === 1 && this.props.specific[1] === 1
                ? " • "
                : ""}
              <green>{this.props.specific[1] ? " Vegetarian🌱 " : "\n"} </green>
              {this.props.specific[2] === 1 || this.props.specific[3] === 1
                ? " • "
                : ""}
              {this.props.specific[2] ? " 🍷🍺 " : "\n"}
              {this.props.specific[2] === 1 && this.props.specific[3] === 1
                ? " • "
                : ""}
              {this.props.specific[3] ? " Outdoor-seating☀️⛱️ " : "\n"}
              {this.props.specific[3] === 1 && this.props.specific[4] === 1
                ? " • "
                : ""}
              {this.props.specific[4] ? " Halal " : "\n"}
              {this.props.specific[4] === 1 && this.props.specific[5] === 1
                ? " • "
                : ""}
              {this.props.specific[5] ? " Kosher " : "\n"}
            </Text>

            {this.state.preference == 1 && (
              <div>
                <span style={spanStyle}>
                  €{this.props.price_min | 0} ~ €{this.props.price_max | 0}
                </span>
                <span style={spanStyle}> </span>
                <span style={spanStyle}> </span>
                <span style={spanStyle}>
                  ~{(this.props.distance / 0.28) | 0} minutes 🚲
                </span>
              </div>
            )}

            <EmojiWrap>{this.state.preference === 0 && "😒"}</EmojiWrap>
            <EmojiWrap>{this.state.preference === 2 && "😍"}</EmojiWrap>
          </Box>
          {this.props.reservation !== true && (
            <Box p={[1]} height={1 / 7} style={{ marginTop: "0px" }}>
              <Button
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  width: "100%",
                  height: "100%",
                  marginRight: "5%"
                }}
                onClick={this.makeResevation.bind(this)}
              >
                B<br />o<br />o<br />k
              </Button>
            </Box>
          )}
        </Flex>
      </SwipeableListItem>
    );
  }
}

export default Entry;
