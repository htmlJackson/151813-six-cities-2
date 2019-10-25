import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "../place-card/place-card.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`E2E test on name click`, () => {
  const mocPlace = `Тестовое место`;
  const clickHandler = jest.fn();
  const placeCard = shallow(<PlaceCard place={mocPlace} onNameClick={clickHandler} />);
  const placeAnchor = placeCard.find(`.place-card__name a`);
  placeAnchor.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
