import React from "react";
import App from "../app/app.jsx";
import renderer from "react-test-renderer";

it(`App correctly renders after relaunch`, () => {
  const mocPlaces = [`Тестовое место 1`, `Тестовое место 2`, `Тестовое место 3`, `Тестовое место 4`];
  const tree = renderer
  .create(<App places={mocPlaces} onNameClick={jest.fn()} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
