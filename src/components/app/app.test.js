import React from "react";
import App from "../app/app.jsx";
import renderer from "react-test-renderer";
import {offers} from "../../mocks/offers.js";

it(`App correctly renders after relaunch`, () => {
  const mocPlaces = offers;
  const tree = renderer
  .create(<App places={mocPlaces} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
