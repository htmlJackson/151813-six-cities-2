import React from "react";
import PropTypes from "prop-types";


const Locations = (props) => {
  const {citiesList, activeItem, onCityClick, onActivateItem} = props;
  const MAX_CITIES_TO_SHOW = 6;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesList.slice(0, MAX_CITIES_TO_SHOW).map((it, i) => {
          return (
            <li className="locations__item" key={`locations__item-${i}`}>
              <a className={`locations__item-link tabs__item ${it === activeItem ? ` tabs__item--active` : ``}`} href="#" onClick={(evt) => {
                evt.preventDefault();
                onCityClick(it);
                onActivateItem(it);
              }}>
                <span>{it}</span>
              </a>
            </li>
          );
        }
        )}
      </ul>
    </section>
  );
};

Locations.propTypes = {
  offers: PropTypes.array.isRequired,
  citiesList: PropTypes.array.isRequired,
  activeItem: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onActivateItem: PropTypes.func.isRequired,
};


export default Locations;
