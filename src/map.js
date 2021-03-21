import React, { useState, Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

// restaurant types
const CAFETERIA = "Cafetería";
const STREETFOOD = "Street Food";
// prices types
const CHEAP = "$";
const MEDIUM = "$$";

const casaTono = {
  location: { lat: 19.432608, lng: -99.133209 },
  name: "Casa Toño",
  foods: ["Flautas", "Prepared Beer", "Sopes"],
  type: STREETFOOD,
  price: CHEAP,
};
const placesToEat = [];
export class MapContainer extends Component {
  render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Map
              mapTypeControl={false}
              fullscreenControl={false}
              google={this.props.google}
              zoom={14}
              initialCenter={{
                lat: 19.432608,
                lng: -99.133209,
              }}
            >
              <Marker onClick={this.onMarkerClick} name={"Current location"} />
            </Map>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBGhz8enLKNHQcecKoJssM8_QqiNtMIbic",
})(MapContainer);
