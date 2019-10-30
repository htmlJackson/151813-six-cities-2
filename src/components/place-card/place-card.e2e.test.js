import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "../place-card/place-card.jsx";
import {offers} from "../../mocks/offers.js";

Enzyme.configure({adapter: new Adapter()});
describe(`E2E test for Card`, () => {
  it(`E2E test on name click`, () => {
    const mocOffer = offers[0];
    const onNameCLick = jest.fn();
    const placeCard = shallow(<PlaceCard offer={mocOffer} onNameClick={onNameCLick} onCardHover={() => {}} />);
    const placeAnchor = placeCard.find(`.place-card__name a`);
    placeAnchor.simulate(`click`);

    expect(onNameCLick).toHaveBeenCalledTimes(1);
  });

  it(`E2E test on card hover`, () => {
    const mocOffer = offers[0];
    const onCardHover = jest.fn();
    const placeCard = shallow(<PlaceCard offer={mocOffer} onNameClick={() => {}} onCardHover={onCardHover} />);
    const placeAnchor = placeCard.find(`.place-card`);
    placeAnchor.simulate(`mouseover`);

    expect(onCardHover).toBeCalledWith(expect.any(Object));
  });
});
