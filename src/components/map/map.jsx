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
    this.element = null;
    this.markers = [];
  }

  createArea(elem, city = mapConfig.CITY) {
    this.element = leaflet.map(elem, {
      center: city,
      zoom: mapConfig.ZOOM,
      zoomControl: false,
      marker: true
    });
    this.element.setView(city, mapConfig.ZOOM);
  }

  renderMarker(coords) {
    const icon = leaflet.icon({
      iconUrl: mapConfig.ICON_URL,
      iconSize: mapConfig.ICON_SIZE
    });

    if (coords) {
      this.markers.push(this.layerGroup = leaflet
        .marker(coords, {icon})
        .addTo(this.element));
    }
  }

  renderPlaces(places) {
    leaflet
      .tileLayer(mapConfig.TILE_LAYER, {attribution: mapConfig.TILE_ATTRIBUTE})
      .addTo(this.element);

    places.forEach((it) => this.renderMarker(it.coords));
  }


  componentDidMount() {
    this.createArea(this.mapRef.current);
    this.renderMap();
  }

  componentDidUpdate() {
    this.markers.forEach((marker) => {
      this.element.removeLayer(marker);
    });
    this.renderMap();
  }

  renderMap() {
    const {places} = this.props;
    if (this.element) {
      this.renderPlaces(places);
    }
  }

  render() {
    return <div className="cities__map map" id="map" ref={this.mapRef} />;
  }
}

Map.propTypes = {
  places: PropTypes.array.isRequired,
};


export default Map;
