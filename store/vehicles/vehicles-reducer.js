import { vehiclesInitialState } from "./vehical-initial-state";
import { types } from "../types";
export const vehiclesReducer = (state = vehiclesInitialState, action) => {
  if (action.type === types.SET_VEHICLES) {
    return {
      ...state,
      vehicles: action.payload,
    };
  }
};
