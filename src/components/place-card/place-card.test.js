import React from "react";
import PlaceCard from "../place-card/place-card.jsx";
import renderer from "react-test-renderer";
import {offers} from "../../mocks/offers.js";

it(`Place-card correctly renders after relaunch`, () => {
  const mocOffer = offers[0];
  const tree = renderer
  .create(<PlaceCard offer={mocOffer} onNameClick={jest.fn()} onCardHover={jest.fn()} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
