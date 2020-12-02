import { SET_EVENT_ID, SET_COORDINATES, SET_GROUP,SET_USER } from "./types";

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

export const set_groupName = (groupsName) => {
  return {
    type: SET_GROUP,
    payload: groupsName,
  };
};
export const set_user = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
