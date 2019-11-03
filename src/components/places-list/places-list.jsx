import React from "react";
import PropTypes from "prop-types";
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this.handleCardHover = this.handleCardHover.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
  }

  handleCardHover(offerId) {
    return () => {
      this.setState({acriveCard: offerId});
    };

  }

  handleNameClick() {

  }

  render() {
    const {places} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {places.map((it, index) => <PlaceCard offer={places[index]} onNameClick={this.handleNameClick} onCardHover={this.handleCardHover} key={`place-${index}`} />)}
      </div>
    );
  }
}


PlacesList.propTypes = {
  places: PropTypes.array.isRequired
};

export default PlacesList;
