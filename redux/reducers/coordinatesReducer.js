import { SET_COORDINATES } from "../actions/types";

const INITAL_STATE = {
  longitude: 0.0,
  latitude: 0.0,
};

export const coordinatesReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SET_COORDINATES:
      return action.payload;
    default:
      return state;
  }
};
