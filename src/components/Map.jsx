import React from "react";
import styled from "styled-components";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { Box, Flex } from "rebass";

// import CurrentLocation from "./Map";

const mapStyles = {
  width: "50%",
  height: "400px"
};

const MapBox = styled.div`
  justify-content: center;
  alignitems: "center";
  width: 50%;
  height: "400px";
`;

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 52.3667,
      lng: 4.8945,
      latLng: [52.3667, 4.8945],
      key: false
    };
  }

  componentWillUnmount() {
    this.setState({ key: false });
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
          zoom={13}
          style={mapStyles}
          initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
          onClick={(x, y, lat, lng, event) =>
            this.changeMarker(x, y, lat, lng, event)
          }
        >
          <Marker
            position={{ lat: this.props.latLng[0], lng: this.props.latLng[1] }}
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
  apiKey: "AIzaSyBJIlVWE-dlLpokGxhwaHBQyFCOtbvVicw"
})(MapContainer);
