import React from "react";
import styled from "styled-components";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { Box, Flex } from "rebass";

// import CurrentLocation from "./Map";

const mapStyles = {
  width: "80%",
  height: "400px"
};

const Text = styled.h6`
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  text-align: center;
  color: black;
  font-size: 0.5em;
  height: 5em;
`;

const mapkey = "IzaSyBJIlVWE-dlLp" + "okGxhwaHBQyFCOtbvVic";

const MapBox = styled.div`
  justify-content: center;
  alignitems: "center";
  width: 80%;
  height: "400px";
`;

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 52.3667,
      lng: 4.8945,
      latLng: [this.props.latLng.lat, this.props.latLng.lng],
      key: false
    };
  }

  componentWillUnmount() {
    this.setState({ key: false });
  }

  componentDidMount() {
    console.log("map mounted with " + this.props.latLng);
  }

  changeMarker(x, y, lat, lng, event) {
    this.props.latLngChange([lat.latLng.lat(), lat.latLng.lng()]);
  }

  render() {
    return (
      <MapBox>
        <Map
          google={this.props.google}
          mapTypeControl={false}
          streetViewControl={false}
          fullscreenControl={false}
          searchBar={true}
          zoom={13.1}
          style={mapStyles}
          initialCenter={{
            lat: this.props.latLng[0],
            lng: this.props.latLng[1]
          }}
          onClick={(x, y, lat, lng, event) =>
            this.changeMarker(x, y, lat, lng, event)
          }
        >
          <Marker
            position={{
              lat: this.props.latLng[0],
              lng: this.props.latLng[1]
            }}
          >
            <InfoWindow visible={true}>
              <h4>Something is there!</h4>
            </InfoWindow>
          </Marker>
        </Map>
      </MapBox>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "A" + mapkey + "w"
})(MapContainer);
