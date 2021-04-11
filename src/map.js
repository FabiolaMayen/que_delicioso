import React, { useState, Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Layout, Result } from "antd";
import { Tag } from "antd";
import tacoIcon from "../assets/tacos.png";
import cafeIcon from "../assets/cafe.png";
const { Header, Footer, Sider, Content } = Layout;

// restaurant types
const CAFETERIA = "Cafetería";
const STREETFOOD = "Street Food";
// prices types
const CHEAP = "$";
const MEDIUM = "$$";

const casaTono = {
  location: { lat: 19.42474, lng: -99.16528 },
  name: "Casa Toño",
  foods: ["Flautas", "Prepared Beer", "Sopes"],
  type: STREETFOOD,
  price: CHEAP,
  icon: {
    image: tacoIcon,
    width: 80,
    height: 60,
  },
};
const Bisquets = {
  location: { lat: 19.41852, lng: -99.157433 },
  name: "Bisquets de Obregon",
  foods: ["Cafe con leche", "Pan", "Chilaquiles"],
  type: CAFETERIA,
  price: CHEAP,
  icon: {
    image: cafeIcon,
    width: 80,
    height: 80,
  },
};
const placesToEat = [casaTono, Bisquets];
const Food = (props) => {
  return (
    <Tag className="food" color="#2e7b8c">
      {props.name}{" "}
    </Tag>
  );
};
const Restaurant = (props) => {
  return (
    <div className="restaurant">
      <div className="restaurant-name">{props.data.name}</div>
      <div>
        {props.data.type} {props.data.price}
      </div>
      <div>
        {props.data.foods.map((food) => {
          return <Food name={food} key={food} />;
        })}
      </div>
    </div>
  );
};
const FavoriteRestaurants = () => {
  return <div>Sol</div>;
};

export class MapContainer extends Component {
  render() {
    return (
      <Layout>
        <Sider className="restaurants">
          <Restaurant data={casaTono} />
          <Restaurant data={Bisquets} />
        </Sider>
        <Layout>
          <Header className="header">Que delicioso</Header>
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
              {placesToEat.map((restaurant) => {
                return (
                  <Marker
                    key={restaurant.name}
                    label={{
                      text: restaurant.name,
                      className: "marker-label",
                    }}
                    position={{
                      lat: restaurant.location.lat,
                      lng: restaurant.location.lng,
                    }}
                    icon={{
                      url: restaurant.icon.image,
                      anchor: new google.maps.Point(32, 32),
                      scaledSize: new google.maps.Size(
                        restaurant.icon.width,
                        restaurant.icon.height
                      ),
                    }}
                  />
                );
              })}
            </Map>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBGhz8enLKNHQcecKoJssM8_QqiNtMIbic",
})(MapContainer);
