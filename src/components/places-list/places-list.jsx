import React from "react";
import PropTypes from "prop-types";
import PlaceCard from '../place-card/place-card.jsx';

const PlacesList = (props) => {
  const {places, onActivateItem} = props;

  const handleCardHover = (offerId) => {
    return () => {
      onActivateItem(offerId);
    };
  };

  const handleNameClick = () => {};

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((it, index) => <PlaceCard offer={places[index]} onNameClick={handleNameClick} onCardHover={handleCardHover} key={`place-${index}`} />)}
    </div>
  );
};


PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
  onActivateItem: PropTypes.func.isRequired,
};

export default PlacesList;
