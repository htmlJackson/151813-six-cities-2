import React from "react";
import PropTypes from "prop-types";
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._cardHandleHover = this._cardHandleHover.bind(this);
  }

  _cardHandleHover(activeCardData) {
    this.setState(() => ({activeCard: activeCardData}));
  }

  _cardNameClick() {
    return;
  }

  render() {
    const {places} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {places.map((it, index) => <PlaceCard offer={places[index]} onNameClick={this._cardNameClick} onCardHover={this._cardHandleHover} key={`place-${index}`} />)}
      </div>
    );
  }
}


PlacesList.propTypes = {
  places: PropTypes.array.isRequired
};

export default PlacesList;
