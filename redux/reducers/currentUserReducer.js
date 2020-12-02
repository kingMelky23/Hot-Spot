import { SET_USER } from "../actions/types";

const INITAL_STATE = {}

export const currentUserReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
