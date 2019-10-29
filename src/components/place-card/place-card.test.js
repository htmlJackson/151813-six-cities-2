import React from "react";
import PlaceCard from "../place-card/place-card.jsx";
import renderer from "react-test-renderer";

it(`Place-card correctly renders after relaunch`, () => {
  const mocPlace = `Тестовое место`;

  const tree = renderer
  .create(<PlaceCard place={mocPlace} onNameClick={jest.fn()} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
