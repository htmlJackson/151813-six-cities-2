import React from "react";
import renderer from "react-test-renderer";

import Map from "./map.jsx";


const mockCoordsArray = [
  [52.3909553943508, 4.85309666406198],
  [52.3909553943508, 4.85309666406198],
  [52.3909553943508, 4.85309666406198],
  [52.3909553943508, 4.85309666406198]
];

it(`Map correctly renders after relaunch`, () => {
  const tree = renderer.create(<Map coords={mockCoordsArray} />).toJSON();

  expect(tree).toMatchSnapshot();
});
