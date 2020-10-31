import { SET_EVENT_ID, SET_COORDINATES } from "./types";

export const set_Event_Id = (id = "1") => {
  return {
    type: SET_EVENT_ID,
    payload: id,
  };
};

export const set_Coordinates = (coordinates = {}) => {
  return {
    type: SET_COORDINATES,
    payload: coordinates,
  };
};
