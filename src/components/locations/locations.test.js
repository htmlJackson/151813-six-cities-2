import React from "react";
import renderer from "react-test-renderer";

import Locations from "./Locations.jsx";

it(`Locations correctly renders after relaunch`, () => {
  const tree = renderer.create(<Locations offers={[{}, {}, {}, {}]} citiesList={[`Bobruisk`, `Default city`, `Kishinev`]} city={`Bobruisk`} onCityClick={jest.fn()} />).toJSON();

  expect(tree).toMatchSnapshot();
});
