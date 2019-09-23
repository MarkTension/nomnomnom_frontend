import React from "react";
import "../App.css";
import styled from "styled-components";
import { Flex, Image } from "rebass";

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
  font-size: 0.5em;
  font-weight: 300;
  color: DarkSlateGrey
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 10px;
  :hover {
    background: MistyRose;
  }
`;

const Text = styled.h6`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  text-align: center;
  color: black;
  font-size: 0.5em;
  height: 5em;
`;

const TextPrice = styled.h6`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 0.5em;

  color: black;
  height: 1.5em;
`;

const Wrapper = styled.section`
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-bottom: 1em;
  padding-top: 0.5em;
  background: white;

  border-radius: 10px;
  border: 2px solid Seashell;
  box-shadow: 2px 2px 2px Gainsboro;
  shadowopacity: 0.1;

  /* :hover {
    background: Seashell;
  } */
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

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      preference: 1,
      didMount: false // for fade-in animation
    };
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
    this.props.reservation(); // callback to parent
  }

  render() {
    const { didMount } = this.state;

    return (
      <Wrapper
        className={`fade-in ${didMount && "visible"}`}
        onMouseEnter={() => this.handleActive()}
        onMouseLeave={() => this.setState({ active: false })}
        id="entry_wrapper"
      >
        <Image
          height={"190px"}
          max-width={"100px"}
          borderRadius={10}
          margin={0}
          src={this.props.image}
          alt="logo"
        />
        <Title>{this.props.title}</Title>
        <Text>
          {this.props.cuisine.toString().replace(/,/g, " + ")}

          {this.props.specific[0] === 1 || this.props.specific[1] === 1
            ? " + "
            : ""}

          <green>{this.props.specific[0] ? "Vegan🌱 " : "\n"} </green>
          {this.props.specific[0] === 1 && this.props.specific[1] === 1
            ? " + "
            : ""}
          <green>{this.props.specific[1] ? " Vegetarian🌱 " : "\n"} </green>
          {this.props.specific[2] === 1 || this.props.specific[3] === 1
            ? " + "
            : ""}
          {this.props.specific[2] ? " 🍷🍺 " : "\n"}
          {this.props.specific[2] === 1 && this.props.specific[3] === 1
            ? " + "
            : ""}
          {this.props.specific[3] ? " Outdoor-seating☀️⛱️ " : "\n"}
          {this.props.specific[3] === 1 && this.props.specific[4] === 1
            ? " + "
            : ""}
          {this.props.specific[4] ? " Halal " : "\n"}
          {this.props.specific[4] === 1 && this.props.specific[5] === 1
            ? " + "
            : ""}
          {this.props.specific[5] ? " Kosher " : "\n"}
        </Text>
        <TextPrice>
          €{this.props.price_min | 0} ~ €{this.props.price_max | 0}
        </TextPrice>
        <Flex
          justifyContent={["center", "left"]}
          flexDirection="row"
          flexWrap="wrap"
        />
        {this.props.reservation !== true && (
          <div>
            <EmojiWrap
              id="emo0"
              onClick={() => this.setState({ preference: 0 })}
              style={{
                transform:
                  this.state.preference === 0 ? "scale(1.5)" : "scale(1)"
              }}
            >
              🙁
            </EmojiWrap>
            <EmojiWrap
              id="emo1"
              onClick={() => this.setState({ preference: 1 })}
              style={{
                transform:
                  this.state.preference === 1 ? "scale(1.5)" : "scale(1)"
              }}
            >
              🤔
            </EmojiWrap>
            <EmojiWrap
              id="emo2"
              onClick={() => this.setState({ preference: 2 })}
              style={{
                transform:
                  this.state.preference === 2 ? "scale(1.5)" : "scale(1)"
              }}
            >
              😍
            </EmojiWrap>

            <Button onClick={this.makeResevation.bind(this)}>
              Make reservation
            </Button>
          </div>
        )}
      </Wrapper>
    );
  }
}

export default Entry;
