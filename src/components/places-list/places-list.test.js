import React from "react";
import PlacesList from "../places-list/places-list.jsx";
import renderer from "react-test-renderer";
import {offers} from "../../mocks/offers.js";

it(`Place-list correctly renders after relaunch`, () => {
  const mocOffers = offers;
  const tree = renderer
  .create(<PlacesList places={mocOffers} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
