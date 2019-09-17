import React from "react";
import ReactDOM from "react-dom";
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

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      preference: 1,
      didMount: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ didMount: true });
    }, 0);
  }

  handleActive() {
    this.setState({ active: true });
  }

  makeResevation() {
    console.log("hi");
    debugger;
    this.props.reservation();
    // write code to unrender all other restaurants
    // callback to discovery
    // give other elements a state

    //
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
          borderRadius={8}
          src={this.props.image}
          alt="logo"
        />
        <Title>{this.props.title}</Title>
        <Text>
          {this.props.cuisine.toString().replace(/,/g, " + ")}

          {this.props.specific[0] == 1 || this.props.specific[1] == 1
            ? " + "
            : ""}

          <green>{this.props.specific[0] ? "Vegan🌱 " : "\n"} </green>
          {this.props.specific[0] == 1 && this.props.specific[1] == 1
            ? " + "
            : ""}
          <green>{this.props.specific[1] ? " Vegetarian🌱 " : "\n"} </green>
          {this.props.specific[2] == 1 || this.props.specific[3] == 1
            ? " + "
            : ""}
          {this.props.specific[2] ? " 🍷🍺 " : "\n"}
          {this.props.specific[2] == 1 && this.props.specific[3] == 1
            ? " + "
            : ""}
          {this.props.specific[3] ? " Outdoor-seating☀️⛱️ " : "\n"}
        </Text>
        <TextPrice>
          {this.props.price == 0 ? "💲 " : ""}
          {this.props.price == 1 ? "💲💲 " : ""}
          {this.props.price == 2 ? "💲💲💲 " : ""}
        </TextPrice>
        <Flex
          justifyContent={["center", "left"]}
          flexDirection="row"
          flexWrap="wrap"
        />
        <EmojiWrap
          id="emo0"
          onClick={() => this.setState({ preference: 0 })}
          style={{
            transform: this.state.preference === 0 ? "scale(1.5)" : "scale(1)"
          }}
        >
          🙁
        </EmojiWrap>
        <EmojiWrap
          id="emo1"
          onClick={() => this.setState({ preference: 1 })}
          style={{
            transform: this.state.preference === 1 ? "scale(1.5)" : "scale(1)"
          }}
        >
          🤔
        </EmojiWrap>
        <EmojiWrap
          id="emo2"
          onClick={() => this.setState({ preference: 2 })}
          style={{
            transform: this.state.preference === 2 ? "scale(1.5)" : "scale(1)"
          }}
        >
          😍
        </EmojiWrap>
        {this.props.reservation != true && (
          <Button onClick={this.makeResevation.bind(this)}>
            Make reservation
          </Button>
        )}
      </Wrapper>
    );
  }
}

export default Entry;
