import React from "react";
import "../App.css";
import styled from "styled-components";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const Text = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-align: center;
  color: black;
  padding: 20px;
`;

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-style: slim;
  font-weight: 300;
  font-size: 1em;
  text-align: center;
  color: black;
`;

const IntroBox = styled.div`
  justify-content: center;
  alignitems: "center";
  background: white;
  width: 100%;
`;

const Button = styled.button`
  outline: none;
  background: snow;
  color: "palevioletred";
  font-size: 1em;
  font-weight: 300;
  color: DarkSlateGrey
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 20px;
  :hover {
    background: Seashell;
  }
`;

class Initialization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      breakfast: -1,
      lunch: -1,
      dinner: -1,
      drinks: -1,
      range: 1
    };
  }

  // for the range bar
  handleOnChange = value => {
    this.setState({
      range: value
    });
  };

  handleSubmit(event) {
    this.props.setFilters(this.state);
    event.preventDefault();
  }

  render() {
    let { range } = this.state;
    return (
      <IntroBox>
        <Text> Welcome to NOMNOMNOM restaurant discovery</Text>
        <Title>
          <em>What do you feel like?</em>
        </Title>
        <Button
          onClick={() =>
            this.setState({
              breakfast: this.state.breakfast * -1,
              lunch: -1,
              dinner: -1,
              drinks: -1
            })
          }
          style={{
            transform: this.state.breakfast === 1 ? "scale(1.3)" : "scale(1)",
            background: this.state.breakfast === 1 ? "DarkOrange" : "snow"
          }}
        >
          breakfast
        </Button>
        <Button
          onClick={() =>
            this.setState({
              lunch: this.state.lunch * -1,
              breakfast: -1,
              dinner: -1,
              drinks: -1
            })
          }
          style={{
            transform: this.state.lunch === 1 ? "scale(1.3)" : "scale(1)",
            background: this.state.lunch === 1 ? "LightGreen" : "snow"
          }}
        >
          lunch
        </Button>
        <Button
          onClick={() =>
            this.setState({
              dinner: this.state.dinner * -1,
              lunch: -1,
              breakfast: -1,
              drinks: -1
            })
          }
          style={{
            transform: this.state.dinner === 1 ? "scale(1.3)" : "scale(1)",
            background: this.state.dinner === 1 ? "LightSkyBlue" : "snow"
          }}
        >
          dinner
        </Button>
        <Button
          onClick={() =>
            this.setState({
              drinks: this.state.drinks * -1,
              lunch: -1,
              dinner: -1,
              breakfast: -1
            })
          }
          style={{
            transform: this.state.drinks === 1 ? "scale(1.3)" : "scale(1)",
            background: this.state.drinks === 1 ? "Plum" : "snow"
          }}
        >
          drinks
        </Button>

        <div style={{ marginLeft: "35%" }}>
          <div style={{ width: "50%" }}>
            <Title>maximum range = {range} km</Title>

            <Slider
              min={0}
              max={10}
              step={0.5}
              value={range}
              orientation="horizontal"
              onChange={this.handleOnChange}
            />
          </div>
        </div>
        <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
      </IntroBox>
    );
  }
}

export default Initialization;
