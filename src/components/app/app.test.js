import React from "react";
import {App} from "../app/app.jsx";
import renderer from "react-test-renderer";
import {offers} from "../../mocks/offers.js";

it(`App correctly renders after relaunch`, () => {
  const mocPlaces = offers;
  const tree = renderer
  .create(<App offers={mocPlaces} offersByCity={mocPlaces} citiesList={[`Bobruisk`, `Default city`, `Kishinev`]} city={`Bobruisk`} onCityClick={jest.fn()} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
