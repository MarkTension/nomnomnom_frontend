import React from "react";
import styled from "styled-components";
import animateScrollTo from "animated-scroll-to";
import Sticky from "react-stickynode";
import media from "../utils/media";

const Container = styled.div`
  /* width: 50vw; */
  align-items: center;
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 4%;
  margin: 0px;
  position: relative;
  .active {
    font-size: 200px;
  }
  ${media.small`
    display: none;
  `};
`;

const Content = styled.div`
  max-width: 1200px;
  padding-left: 4%;
  display: flex;
  flex-direction: row;
`;

const ButtonContainer = styled.div`
  padding: 0px 0px;
  display: flex;
  flex-direction: row;
`;

const Button = styled.div`
  font-family: "Helvetiva", sans-serif;
  font-weight: 100;
  padding: 5px
  border-radius: 3px;
  border: 1px outset black;
  margin: 10px
  background-color: white
  color: black;
  opacity: 1;
  font-size: 1.6rem;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.2);
    /* font-weight: 200; */
    /* text-decoration: underline; */
  }
`;

const handleStateChange = status => {
  const menu = document.getElementById("menu");
  if (status.status === Sticky.STATUS_FIXED) {
    menu.style.boxShadow = "0 0 30px 0 rgba(0,0,0,0.05)";
    menu.style.borderBottom = "1px solid #efefef";
    menu.style.backgroundColor = "rgba(255,255,255, 0.98)";
  } else {
    menu.style.boxShadow = "none";
    menu.style.borderBottom = "none";
    menu.style.backgroundColor = "rgba(255,255,255, 0)";
  }
};

// React
const Menu = () => (
  <Sticky enabled innerZ={100} onStateChange={handleStateChange}>
    <Container id="menu">
      <Content>
        <ButtonContainer>
          <Button
            onClick={() => {
              animateScrollTo(document.querySelector("#demo"));
            }}
          >
            demo
          </Button>

          <Button
            onClick={() => {
              animateScrollTo(document.querySelector("#team"));
            }}
          >
            team
          </Button>

          <Button
            onClick={() => animateScrollTo(document.querySelector("#footer"))}
          >
            <a id="nounderline" href="mailto:info@nomnomnom.ai">
              contact
            </a>
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  </Sticky>
);

export default Menu;
