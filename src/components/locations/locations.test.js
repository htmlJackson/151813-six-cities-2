import React from "react";
import renderer from "react-test-renderer";

import Locations from "./locations.jsx";

it(`Locations correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <Locations
        offers={[{}, {}, {}, {}]}
        citiesList={[`Bobruisk`, `Default city`, `Kishinev`]}
        activeItem={`Bobruisk`} onCityClick={jest.fn()}
        onActivateItem={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
