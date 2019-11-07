import React from "react";
import renderer from "react-test-renderer";

import Map from "./map.jsx";


it(`Map correctly renders after relaunch`, () => {

  const mocCoordsArray = [
    [52.3909553943508, 4.85309666406198],
    [52.3909553943508, 4.85309666406198],
    [52.3909553943508, 4.85309666406198],
    [52.3909553943508, 4.85309666406198]
  ];

  const tree = renderer
  .create(<Map coords={mocCoordsArray} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
