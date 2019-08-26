import React from "react";
import ReactDOM from "react-dom";
import "../App.css";
import styled from "styled-components";
import { Flex, Image } from "rebass";

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-style: slim;
  font-weight: 300;
  font-size: 1.1em;
  text-align: center;
  color: black;
`;

const Text = styled.h6`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-style: thin100;
  text-align: justify;
  color: black;
`;

const Wrapper = styled.section`
  padding: 1em;
  padding-bottom: 2em;
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
      new: this.props.new,
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

  render() {
    const { didMount } = this.state;
    // And from here
    return (
      <Wrapper
        className={`fade-in ${didMount && "visible"}`}
        onMouseEnter={() => this.handleActive()}
        onMouseLeave={() => this.setState({ active: false })}
        id="entry_wrapper"
      >
        <Image
          height={"140px"}
          max-width={"100px"}
          borderRadius={8}
          src={this.props.image}
          alt="logo"
        />
        <Title>{this.props.title}</Title>
        <Text>
          <b>Cuisine: </b>
          {this.props.cuisine.toString().replace(/,/g, " ")}
        </Text>
        <Text>
          <b>dieet-voorkeur: </b>
          {this.props.specific[0] ? "veganistisch " : " "}
          {this.props.specific[1] ? "vegetarisch " : " "}
          <Text />
          {"\n"} <b>Tijdstip: </b>
          {this.props.type[0] ? "breakfast " : " "}
          {this.props.type[1] ? "brunch " : " "}
          {this.props.type[2] ? "lunch " : " "}
          {this.props.type[3] ? "dinner " : " "}
        </Text>
        <Text />
        <Text>
          {this.props.price == 0 ? "💲 " : ""}
          {this.props.price == 1 ? "💲💲 " : ""}
          {this.props.price == 2 ? "💲💲💲 " : ""}
        </Text>
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
          🤢
        </EmojiWrap>
        <EmojiWrap
          id="emo1"
          onClick={() => this.setState({ preference: 1 })}
          style={{
            transform: this.state.preference === 1 ? "scale(1.5)" : "scale(1)"
          }}
        >
          😶
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
      </Wrapper>
    );
  }
}

export default Entry;
