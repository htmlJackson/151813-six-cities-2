import {offers} from './mocks/offers.js';

const citiesList = offers.reduce((acc, offer) => {
  if (!acc.includes(offer.city)) {
    acc.push(offer.city);
    return acc;
  }
  return acc;
}, []);

const getOffersByCity = (allOffers, city) => {
  return allOffers.filter((item) => {
    return item.city === city;
  });
};

const defaultCityOffers = getOffersByCity(offers, citiesList[0]);

const initialState = {
  offers,
  offersByCity: defaultCityOffers,

  citiesList,
  city: citiesList[0],
};

const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city,
  }),
  getOffersList: (city) => ({
    type: `GET_OFFERS`,
    payload: city,
  })
};

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case `CHANGE_CITY`:
      newState.city = action.payload;
      return newState;
    case `GET_OFFERS`:
      newState.offersByCity = getOffersByCity(state.offers, action.payload);
      return newState;
  }
  return state;
};

export {
  ActionCreator,
  reducer,
  getOffersByCity
};
