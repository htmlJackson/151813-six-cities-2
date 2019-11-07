import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

const mapConfig = {
  ZOOM: 12,
  ICON_URL: `img/pin.svg`,
  ICON_SIZE: [30, 30],
  TILE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  TILE_ATTRIBUTE: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
  CITY: [52.38333, 4.9],
};

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
  }

  componentDidMount() {
    this.initializeMap();
  }

  initializeMap() {
    let container = this.mapRef.current;

    const map = leaflet.map(container, {
      center: mapConfig.CITY,
      zoom: mapConfig.ZOOM,
      zoomControl: false,
      marker: true
    });

    map.setView(mapConfig.CITY, mapConfig.ZOOM);

    leaflet
      .tileLayer(mapConfig.TILE_LAYER, {attribution: mapConfig.TILE_ATTRIBUTE})
      .addTo(map);

    const icon = leaflet.icon({
      iconUrl: mapConfig.ICON_URL,
      iconSize: mapConfig.ICON_SIZE
    });

    const offersCoords = this.props.coords;
    offersCoords.forEach((it) => {
      leaflet
        .marker(it, {icon})
        .addTo(map);
    });

  }

  render() {
    return <div className="cities__map map" id="map" ref={this.mapRef} />;
  }
}

Map.propTypes = {
  coords: PropTypes.arrayOf(
      PropTypes.arrayOf(
          PropTypes.number.isRequired
      ).isRequired
  ).isRequired,
};


export default Map;
