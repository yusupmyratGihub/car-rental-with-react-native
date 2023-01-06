import { types } from "../store/types";
export const setVehiclesInStore = (vehicles) => ({
  type: types.SET_VEHICLES,
  payload: vehicles,
});
