import {reducer} from "./reducer.js";

describe(`Business logic is correct`, () => {
  it(`Reducer should change city correctly`, () => {
    expect(reducer({
      offers: [{id: 1}, {id: 2}],
      offersByCity: [{city: 1}, {city: 2}],
      citiesList: [`City-1`, `City-2`],
      city: `City-1`,
    }, {
      type: `CHANGE_CITY`,
      payload: `Saint-Petersburg`,
    })).toEqual({
      offers: [{id: 1}, {id: 2}],
      offersByCity: [{city: 1}, {city: 2}],
      citiesList: [`City-1`, `City-2`],
      city: `Saint-Petersburg`,
    });
  });

  it(`Reducer should get offers correctly`, () => {
    expect(reducer({
      offers: [{city: `Saint-Petersburg`}, {city: `Novosibirsk`}],
      offersByCity: [],
      citiesList: [`Saint-Petersburg`, `Novosibirsk`],
      city: `Saint-Petersburg`,
    }, {
      type: `GET_OFFERS`,
      payload: `Novosibirsk`,
    })).toEqual({
      offers: [{city: `Saint-Petersburg`}, {city: `Novosibirsk`}],
      offersByCity: [{city: `Novosibirsk`}],
      citiesList: [`Saint-Petersburg`, `Novosibirsk`],
      city: `Saint-Petersburg`,
    });
  });
});
