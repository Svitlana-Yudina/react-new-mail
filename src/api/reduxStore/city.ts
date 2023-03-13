/* eslint-disable no-shadow */
enum Actions {
  LOAD = 'city/LOAD',
  CLEAR = 'city/CLEAR',
}

type CityAction = {
  type: Actions,
  payLoad: string,
};

const load = (city: string): CityAction => (
  { type: Actions.LOAD, payLoad: city }
);

const clear = (): CityAction => (
  { type: Actions.CLEAR, payLoad: '' }
);

export const cityActions = { load, clear };

const cityReducer = (city = '', action: CityAction) => {
  switch (action.type) {
    case Actions.LOAD:
      return action.payLoad;

    case Actions.CLEAR:
      return '';

    default:
      return city;
  }
};

export default cityReducer;
