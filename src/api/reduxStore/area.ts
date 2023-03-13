/* eslint-disable no-shadow */
enum Actions {
  LOAD = 'area/LOAD',
  CLEAR = 'area/CLEAR',
}

type AreaAction = {
  type: Actions,
  payLoad: string,
};

const load = (area: string): AreaAction => (
  { type: Actions.LOAD, payLoad: area }
);

const clear = (): AreaAction => (
  { type: Actions.CLEAR, payLoad: '' }
);

export const areaActions = { load, clear };

const areaReducer = (area = '', action: AreaAction): string => {
  switch (action.type) {
    case Actions.LOAD:
      return action.payLoad;

    case Actions.CLEAR:
      return '';

    default:
      return area;
  }
};

export default areaReducer;
