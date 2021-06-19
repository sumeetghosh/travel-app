import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

const cardsContent = [
  {
    src: "images/img-9.jpg",
    text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    label: "Adventure",
    path: "/services",
  },

  {
    src: "images/img-2.jpg",
    text: "Travel through the Islands of Bali in a Private Cruise",
    label: "Luxury",
    path: "/services",
  },

  {
    src: "images/img-3.jpg",
    text: "Set Sail in the Atlantic Ocean visiting Uncharted Waters",
    label: "Mystery",
    path: "/services",
  },
  {
    src: "images/img-4.jpg",
    text: "Experience Football on Top of the Himilayan Mountains",
    label: "Adventure",
    path: "/products",
  },
  {
    src: "images/img-8.jpg",
    text: "Ride through the Sahara Desert on a guided camel tour",
    label: "Adrenaline",
    path: "/sign-up",
  },
  {
    src: "images/img-7.jpg",
    text: "Sunset has a way of stopping everything else for one fleeting moment",
    label: "Sunset",
    path: "/sign-up",
  },
];

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cardsContent.map((content) => {
              return (
                <CardItem
                  src={content.src}
                  text={content.text}
                  label={content.label}
                  path={content.path}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
