import React from "react";
import "../App.css";
import styled from "styled-components";
import { Flex, Box, Image } from "rebass";
import { isMobile } from "react-device-detect";

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-style: slim;
  font-weight: 300;
  font-size: 0.8em;
  text-align: center;
  color: black;
  min-height: 2em;
  max-height: 2em;
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
  font-weight: bold;
  text-align: center;
  color: black;
  font-size: 0.5em;
  height: 5em;
`;

const TextPrice = styled.h6`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 0.6em;
  color: black;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const flexStyle = {
  paddingLeft: "0em",
  paddingRight: "0em",
  paddingBottom: "0em",
  paddingTop: "0em",
  background: "white",
  borderRadius: "10px"
};

const EmojiWrap = styled.span`
  margin-left: 5%;
  margin-right: 5%;
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
      this.restName = this.restName.substring(0, 25) + "...";
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
      <Flex style={flexStyle}>
        <Box p={[1]} width={[1 / 3]}>
          <Title>{this.restName}</Title>
          <Image
            position="relative"
            width={"100%"}
            height="50%"
            borderRadius={10}
            margin={0}
            src={this.props.image}
            alt="logo"
          />
        </Box>
        <Box p={[1]} width={[1 / 2]}>
          <Text>
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
          <TextPrice>
            €{this.props.price_min | 0} ~ €{this.props.price_max | 0}
          </TextPrice>
          <TextPrice>
            ~{(this.props.distance / 0.28) | 0} minutes 🚲 away
          </TextPrice>
        </Box>
        <Box p={[1]} width={[1 / 6]}>
          {this.props.reservation !== true && (
            <Flex flexDirection="column" id="demo" flexWrap="wrap" width="100%">
              <Box p={[1]} height={[1 / 5]}>
                <EmojiWrap
                  id="emo0"
                  onClick={() => this.changeZero()}
                  style={{
                    transform:
                      this.state.preference === 0 ? "scale(1.5)" : "scale(1)"
                  }}
                >
                  🙁
                </EmojiWrap>
              </Box>
              <Box p={[1]} height={[1 / 5]}>
                <EmojiWrap
                  id="emo2"
                  onClick={() => this.changeTwo()}
                  style={{
                    transform:
                      this.state.preference === 2 ? "scale(1.5)" : "scale(1)"
                  }}
                >
                  😍
                </EmojiWrap>
              </Box>
              <Box p={[1]} height={[1 / 2]} width={[1]}>
                <Button
                  style={{ width: "100%" }}
                  onClick={this.makeResevation.bind(this)}
                >
                  Make Reservation
                </Button>
              </Box>
            </Flex>
          )}
        </Box>
      </Flex>
    );
  }
}

export default Entry;
