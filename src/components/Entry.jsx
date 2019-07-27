import React from "react";
import "../App.css";
import styled from "styled-components";
import { Box, Flex, Image } from "rebass";
// import git from "../images/github_im.png";
// import link from "../images/link_icon.png";

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
  padding-bottom: 2em;
  padding-left: 0em;
  padding-right: 0em;
  border-radius: 8px;
  :hover {
    background: Seashell;
  }
`;

const EmojiWrap = styled.span`
  display: inline-block;
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: rotate(20deg) scale(2);
    cursor: pointer;
  }
`;

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  handleActive() {
    this.setState({ active: true });
  }

  render() {
    // And from here
    console.log(this.state.active);
    return (
      <Wrapper
        onMouseEnter={() => this.handleActive()}
        onMouseLeave={() => this.setState({ active: false })}
        id="entry_wrapper"
      >
        <Title>{this.props.title}</Title>
        <Text>{this.props.body}</Text>
        {this.state.active ? <center /> : null}
        <Flex
          justifyContent={["center", "left"]}
          flexDirection="row"
          flexWrap="wrap"
        />
        <EmojiWrap>👎 </EmojiWrap>
        <span style={{ color: "black" }}> / </span>
        <EmojiWrap> 👍 </EmojiWrap>
      </Wrapper>
    );
  }
}
// <Emoji symbol="👍" label="sheep" />
// <span style={{ color: "black" }}> / </span>
// <Emoji symbol="👎" label="sheep" />
export default Entry;
